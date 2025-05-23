<script setup>
import { ref } from "vue";
import { useMainStore } from "../store";

const store = useMainStore();
const email = ref("");
const isSubscribed = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSubscribe = async (e) => {
  e.preventDefault();
  errorMessage.value = "";

  if (!email.value) {
    errorMessage.value = "Please enter your email address";
    return;
  }

  if (!validateEmail(email.value)) {
    errorMessage.value = "Please enter a valid email address";
    return;
  }

  isLoading.value = true;

  try {
    // Here you would typically make an API call to your backend
    // For now, we'll simulate an API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    isSubscribed.value = true;
    email.value = "";
  } catch (error) {
    errorMessage.value = "Something went wrong. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand info -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center">
            <span class="text-xl font-dm-serif">{{ store.agency.name }}</span>
          </div>
          <p class="mt-2 text-sm text-gray-300">
            {{ store.agency.address }}
          </p>
          <p class="mt-1 text-sm text-gray-300">
            {{ store.agency.email }}
          </p>
        </div>

        <!-- Site Map -->
        <div class="col-span-1">
          <h3 class="text-sm font-dm-serif text-white tracking-wider uppercase">
            Site Map
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <RouterLink
                to="/"
                class="text-base text-gray-300 hover:text-white"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/services"
                class="text-base text-gray-300 hover:text-white"
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="text-base text-gray-300 hover:text-white"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="text-base text-gray-300 hover:text-white"
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="col-span-1">
          <h3 class="text-sm font-dm-serif text-white tracking-wider uppercase">
            Legal
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a href="#" class="text-base text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-base text-gray-300 hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-span-1">
          <h3 class="text-sm font-dm-serif text-white tracking-wider uppercase">
            Subscribe
          </h3>
          <p class="mt-4 text-base text-gray-300">
            Sign up for our newsletter to stay updated.
          </p>

          <!-- Success Message -->
          <div v-if="isSubscribed" class="mt-4 p-4 bg-green-100 rounded-md">
            <p class="text-green-700">
              Thank you for subscribing! You'll receive our updates soon.
            </p>
          </div>

          <!-- Newsletter Form -->
          <form v-else @submit="handleSubscribe" class="mt-4 space-y-4">
            <div>
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                :class="[
                  'bg-gray-500 focus:ring-orange-500 focus:border-orange-500 block w-full rounded-md px-5 py-3 text-base text-gray-900',
                  errorMessage ? 'border-red-500' : 'border-gray-300',
                ]"
              />
              <p v-if="errorMessage" class="mt-2 text-sm text-red-400">
                {{ errorMessage }}
              </p>
            </div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed border border-transparent rounded-md px-5 py-3 text-base font-medium text-white transition duration-150 ease-in-out"
            >
              <svg
                v-if="isLoading"
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
              {{ isLoading ? "Subscribing..." : "Subscribe" }}
            </button>
          </form>
        </div>
      </div>

      <div
        class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <!-- Social Media Links -->
          <a
            :href="store.agency.facebook"
            class="text-gray-400 hover:text-gray-300"
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
            :href="store.agency.twitter"
            class="text-gray-400 hover:text-gray-300"
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
            :href="store.agency.instagram"
            class="text-gray-400 hover:text-gray-300"
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
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; {{ new Date().getFullYear() }} {{ store.agency.name }}. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
