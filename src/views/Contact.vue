<script setup>
import { useMainStore } from "../store";
import { ref, onMounted, computed } from "vue";
import emailjs from "@emailjs/browser";
import { useReCaptcha } from "vue-recaptcha-v3";

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const store = useMainStore();
const isLoaded = ref(false);
const isSubmitting = ref(false);
const submitStatus = ref({ show: false, isError: false, message: "" });

// Access environment variables using import.meta.env instead of process.env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Rate limiting: Track submissions
const lastSubmission = ref(
  localStorage.getItem("lastSubmission")
    ? parseInt(localStorage.getItem("lastSubmission"))
    : 0
);
const submissionCount = ref(
  localStorage.getItem("submissionCount")
    ? parseInt(localStorage.getItem("submissionCount"))
    : 0
);

// Computed property to check if submission is allowed (rate limiting)
const canSubmit = computed(() => {
  const now = Date.now();
  const hourInMs = 60 * 60 * 1000;

  // Reset counter if more than an hour has passed since last submission
  if (now - lastSubmission.value > hourInMs) {
    submissionCount.value = 0;
    return true;
  }

  // Limit to 5 submissions per hour
  return submissionCount.value < 5;
});

// Time until next submission allowed (in minutes)
const timeUntilNextSubmission = computed(() => {
  if (canSubmit.value) return 0;

  const now = Date.now();
  const hourInMs = 60 * 60 * 1000;
  const remainingMs = hourInMs - (now - lastSubmission.value);

  return Math.ceil(remainingMs / (60 * 1000));
});

// Form state with validation
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
});

// Form validation
const errors = ref({});

// Enhanced validation with more specific checks and stronger security measures
const validateForm = () => {
  errors.value = {};

  // Name validation (required, min 2 chars, no numbers or special chars)
  if (!form.value.name.trim()) {
    errors.value.name = "Name is required";
  } else if (form.value.name.trim().length < 2) {
    errors.value.name = "Name must be at least 2 characters";
  } else if (!/^[A-Za-z\s\-']+$/.test(form.value.name.trim())) {
    errors.value.name =
      "Name should only contain letters, spaces, hyphens, and apostrophes";
  }

  // Email validation (required, valid format) - using a more comprehensive regex
  if (!form.value.email.trim()) {
    errors.value.email = "Email is required";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      form.value.email.trim()
    )
  ) {
    errors.value.email = "Please enter a valid email address";
  }

  // Phone validation (optional, but if provided must be valid)
  if (
    form.value.phone &&
    !/^[\d\+\-\s\(\)]{6,20}$/.test(form.value.phone.trim())
  ) {
    errors.value.phone = "Please enter a valid phone number";
  }

  // Message validation (required, min length, max length to prevent abuse)
  if (!form.value.message.trim()) {
    errors.value.message = "Message is required";
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = "Message must be at least 10 characters";
  } else if (form.value.message.trim().length > 1000) {
    errors.value.message = "Message must be less than 1000 characters";
  }

  // Check for rate limiting
  if (!canSubmit.value) {
    errors.value.rateLimit = `Too many submissions. Please try again in ${timeUntilNextSubmission.value} minutes.`;
  }

  return Object.keys(errors.value).length === 0;
};

// Enhanced input sanitization function
const sanitizeInput = (input) => {
  if (!input) return "";

  // First pass: Create a temporary DOM element to escape HTML
  const tempElement = document.createElement("div");
  tempElement.textContent = input;
  let sanitized = tempElement.innerHTML;

  // Second pass: Remove any potentially dangerous patterns
  sanitized = sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove script tags
    .replace(/javascript:/gi, "blocked:") // Block javascript: protocol
    .replace(/on\w+=/gi, "blocked="); // Block onload=, onclick=, etc.

  return sanitized;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    submitStatus.value = {
      show: true,
      isError: true,
      message: "Please fill in all required fields correctly.",
    };
    return;
  }

  isSubmitting.value = true;
  submitStatus.value.show = false;

  try {
    // Execute reCAPTCHA and get token
    await recaptchaLoaded();
    const token = await executeRecaptcha("contact_form");

    // If token validation fails
    if (!token) {
      throw new Error("reCAPTCHA validation failed. Please try again.");
    }

    // Sanitize all inputs before sending
    const templateParams = {
      from_name: sanitizeInput(form.value.name),
      from_email: sanitizeInput(form.value.email),
      phone: sanitizeInput(form.value.phone) || "Not provided",
      company: sanitizeInput(form.value.company) || "Not provided",
      message: sanitizeInput(form.value.message),
      to_name: sanitizeInput(store.agency.name) || "Hit The Point Team",
      reply_to: sanitizeInput(form.value.email),
      "g-recaptcha-response": token,
    };

    // Using environment variables instead of hardcoded values
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    // Update rate limiting counters
    lastSubmission.value = Date.now();
    submissionCount.value += 1;
    localStorage.setItem("lastSubmission", lastSubmission.value.toString());
    localStorage.setItem("submissionCount", submissionCount.value.toString());

    submitStatus.value = {
      show: true,
      isError: false,
      message:
        "Thank you! Your message has been sent successfully. We will get back to you soon.",
    };

    // Reset form
    form.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
      company: "",
    };

    // Reset errors
    errors.value = {};
  } catch (error) {
    console.error("Error sending email:", error);

    // Generic error message for users
    submitStatus.value = {
      show: true,
      isError: true,
      message:
        "Sorry, there was an error processing your request. Please try again later or contact us directly.",
    };
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  // Initialize EmailJS with your public key from env variable
  emailjs.init(EMAILJS_PUBLIC_KEY);

  // Trigger animations after component is mounted
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-900">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="Contact Us"
          class="w-full h-full object-cover object-center transition-opacity duration-1000"
          :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
        />
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <div class="max-w-xl">
          <h2
            class="text-4xl font-dm-serif text-white sm:text-5xl sm:tracking-tight lg:text-6xl transform transition-all duration-1000 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            Contact Us
          </h2>
          <p
            class="mt-5 text-xl text-gray-400 transform transition-all duration-1000 delay-200 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            Get in touch with our team for any inquiries or to discuss your
            project.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div class="reveal-element">
            <h2 class="text-3xl lg:text-4xl font-dm-serif text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Have a project in mind or want to learn more about our services?
              We'd love to hear from you. Fill out the form or use our contact
              information below.
            </p>

            <div class="mt-8 space-y-6">
              <div
                class="flex hover:shadow-lg transition-all duration-300 p-3 rounded-lg hover:-translate-y-1 reveal-element delay-100"
              >
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white transform transition-transform hover:scale-110 duration-300"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3
                    class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                  >
                    Phone
                  </h3>
                  <p class="mt-2 text-base text-gray-500">
                    {{ store.agency.phone }}
                  </p>
                </div>
              </div>

              <div
                class="flex hover:shadow-lg transition-all duration-300 p-3 rounded-lg hover:-translate-y-1 reveal-element delay-200"
              >
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white transform transition-transform hover:scale-110 duration-300"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3
                    class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                  >
                    Email
                  </h3>
                  <p class="mt-2 text-base text-gray-500">
                    {{ store.agency.email }}
                  </p>
                </div>
              </div>

              <div
                class="flex hover:shadow-lg transition-all duration-300 p-3 rounded-lg hover:-translate-y-1 reveal-element delay-300"
              >
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white transform transition-transform hover:scale-110 duration-300"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3
                    class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                  >
                    Address
                  </h3>
                  <p class="mt-2 text-base text-gray-500">
                    {{ store.agency.address }}
                  </p>
                </div>
              </div>

              <div class="mt-10 reveal-element delay-400">
                <h3
                  class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                >
                  Follow Us
                </h3>
                <div class="mt-4 flex space-x-6">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 transition-all duration-300 hover:scale-125"
                  >
                    <span class="sr-only">Facebook</span>
                    <svg
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 transition-all duration-300 hover:scale-125"
                  >
                    <span class="sr-only">Twitter</span>
                    <svg
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 transition-all duration-300 hover:scale-125"
                  >
                    <span class="sr-only">Instagram</span>
                    <svg
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-lg shadow-lg reveal-from-right">
            <h3
              class="text-2xl lg:text-3xl font-dm-serif font-bold text-gray-900 mb-6"
            >
              Send Us a Message
            </h3>
            <form @submit="handleSubmit" class="space-y-6">
              <div class="transition-all duration-300 hover:translate-x-1">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  :class="[
                    'mt-1 block w-full h-10 px-2 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-300',
                    errors.name ? 'border-red-500' : 'border-gray-300',
                  ]"
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-500">
                  {{ errors.name }}
                </p>
              </div>

              <div class="transition-all duration-300 hover:translate-x-1">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  :class="[
                    'mt-1 block w-full h-10 px-2 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-300',
                    errors.email ? 'border-red-500' : 'border-gray-300',
                  ]"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                  {{ errors.email }}
                </p>
              </div>

              <div class="transition-all duration-300 hover:translate-x-1">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="mt-1 block w-full h-10 px-2 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-300"
                />
              </div>

              <div class="transition-all duration-300 hover:translate-x-1">
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700"
                >
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  class="mt-1 block w-full h-10 px-2 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-300"
                />
              </div>

              <div class="transition-all duration-300 hover:translate-x-1">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                >
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  :class="[
                    'mt-1 block w-full h-24 p-2 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-300',
                    errors.message ? 'border-red-500' : 'border-gray-300',
                  ]"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-500">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Status Message -->
              <div
                v-if="submitStatus.show"
                :class="[
                  'p-4 rounded-md mb-4 transition-all duration-300',
                  submitStatus.isError
                    ? 'bg-red-50 text-red-700'
                    : 'bg-green-50 text-green-700',
                ]"
              >
                {{ submitStatus.message }}
              </div>

              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    v-if="isSubmitting"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {{ isSubmitting ? "Sending..." : "Send Message" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl lg:text-4xl font-dm-serif text-gray-900">
            Our Location
          </h2>
          <p class="mt-4 text-lg text-gray-500">Visit us at our office</p>
        </div>
        <div class="mt-12 bg-gray-300 rounded-lg overflow-hidden h-96">
          <!-- In a real app, you would embed a Google Maps iframe or other map service here -->
          <div class="flex items-center justify-center h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.5016913013299!2d100.56705183431438!3d13.754286603244037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ef33442611f%3A0x9d1ddb4e4964bfcb!2z4LmB4Lit4Liq4Lib4Liy4LiiIOC4nuC4o-C4sOC4o-C4suC4oSA5!5e1!3m2!1sth!2sth!4v1743516692901!5m2!1sth!2sth"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Add this below your form to explain data usage -->
    <div class="mt-4 text-xs text-gray-500">
      <p>
        Your information is securely processed and will never be shared with
        third parties. This form is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          class="text-orange-600 hover:underline"
          >Privacy Policy</a
        >
        and
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          class="text-orange-600 hover:underline"
          >Terms of Service</a
        >
        apply.
      </p>

      <!-- Rate limiting message -->
      <p v-if="errors.rateLimit" class="mt-2 text-sm text-red-500">
        {{ errors.rateLimit }}
      </p>
    </div>
  </div>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hide reCAPTCHA badge */
.grecaptcha-badge {
  visibility: hidden !important;
  display: none !important;
}

.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
  animation-play-state: paused;
}

.reveal-from-right {
  opacity: 0;
  transform: translateX(30px);
  animation: fadeInRight 0.8s ease forwards;
  animation-play-state: paused;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

/* Trigger animations when scrolled into view */
.reveal-element.is-visible,
.reveal-from-right.is-visible {
  animation-play-state: running;
}
</style>

<script>
// This script section adds scroll-triggered animations
export default {
  mounted() {
    this.observeElements();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    observeElements() {
      const elementsToAnimate = document.querySelectorAll(
        ".reveal-element, .reveal-from-right"
      );

      // Set up Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      // Apply observer to all elements
      elementsToAnimate.forEach((element) => {
        observer.observe(element);
      });
    },
    handleScroll() {
      // Trigger observer check on scroll
      this.observeElements();
    },
  },
};
</script>
