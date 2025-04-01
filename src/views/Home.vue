<script setup>
import { useMainStore } from "../store";
import { onMounted, ref } from "vue";

const store = useMainStore();
const isLoaded = ref(false);

onMounted(() => {
  // Trigger animations after component is mounted
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-800 overflow-hidden h-screen">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt="Team working together"
          class="w-full h-full object-cover object-center transition-opacity duration-1000"
          :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
        />
        <div class="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div class="relative h-full flex items-center justify-center">
        <div class="text-left max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            class="text-4xl font-dm-serif tracking-tight text-white sm:text-5xl lg:text-7xl transform transition-all duration-1000 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            {{ store.agency.tagline }}
          </h1>
          <p
            class="mt-6 text-xl text-gray-300 mx-auto transform transition-all duration-1000 delay-300 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            {{ store.agency.description }}
          </p>
          <div
            class="mt-10 transform transition-all duration-1000 delay-500 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            <a
              href="#find-out-more"
              class="text-base font-medium text-white hover:text-gray-300 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <span>Find out more</span>
              <svg
                class="ml-2 w-5 h-5 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="find-out-more" class="py-32 bg-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-left">
          <h2
            class="text-4xl md:text-5xl font-dm-serif text-gray-900 sm:text-4xl px-5 reveal-element"
          >
            Hire Us For
          </h2>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Design -->
            <div class="overflow-hidden reveal-element delay-100">
              <div
                class="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg"
              >
                <h3 class="text-2xl font-dm-serif text-gray-900">Design</h3>
                <p class="mt-4 text-base text-gray-500">
                  Our web design team has many years of experience in the
                  industry. We can create a design to suit your business needs.
                </p>
              </div>
            </div>

            <!-- Development -->
            <div class="overflow-hidden reveal-element delay-200">
              <div
                class="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg"
              >
                <h3 class="text-2xl font-dm-serif text-gray-900">
                  Development
                </h3>
                <p class="mt-4 text-base text-gray-500">
                  Looking for for e-commerce solutions for your website? Our
                  team will develop and make your website fast and responsive.
                </p>
              </div>
            </div>

            <!-- Marketing -->
            <div class="overflow-hidden reveal-element delay-300">
              <div
                class="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg"
              >
                <h3 class="text-2xl font-dm-serif text-gray-900">Marketing</h3>
                <p class="mt-4 text-base text-gray-500">
                  With modern day digital marketing, we will ensure that your
                  business attracts more clients and stands out more online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="relative">
      <div class="bg-orange-500 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="ml-5 reveal-element">
              <h2 class="text-3xl font-dm-serif sm:text-4xl">About Us</h2>
              <p class="mt-4 text-lg">
                We are a team of 10 staff experts with over 12 years of
                experience helping businesses grow online.
              </p>

              <div class="mt-10 space-y-10">
                <div class="reveal-element delay-100">
                  <h3 class="text-xl font-dm-serif">Mission</h3>
                  <p class="mt-4 text-base">
                    Our mission is to deliver our clients the best website
                    possible. Our priority is to present our customers with a
                    compelling marketing solution.
                  </p>
                </div>

                <div class="reveal-element delay-200">
                  <h3 class="text-xl font-dm-serif">Vision</h3>
                  <p class="mt-4 text-base">
                    Our aim is to become global leaders in web development and
                    marketing services. Our goal is to help our clients grow
                    with transformative services.
                  </p>
                </div>
              </div>
            </div>

            <div class="relative reveal-from-right">
              <div class="lg:absolute w-full h-[600px] top-0 pt-24">
                <img
                  class="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Customer support team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="bg-orange-50 lg:py-48 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-start">
          <h2
            class="text-3xl font-dm-serif text-gray-900 sm:text-4xl md:text-7xl reveal-element"
          >
            Why Choose Us?
          </h2>
        </div>
        <div class="mt-10">
          <p
            class="text-lg text-gray-500 text-left max-w-4xl reveal-element delay-100"
          >
            We are the right team for your business. We have the expertise and
            knowledge to offer insightful advice and services on all our market
            areas.
          </p>
          <p
            class="mt-4 text-lg text-gray-500 text-left max-w-4xl reveal-element delay-200"
          >
            With us, you'll always have the best interests in our client
            relationships and your websites. We take for your business as our
            own, and genuinely want to help your company rise to its potential.
          </p>
        </div>
      </div>
    </section>

    <!-- Project CTA Section -->
    <section class="bg-stone-950 py-12">
      <div class="max-w-7xl mx-auto px-6 sm:px-12">
        <div
          class="bg-orange-500 overflow-hidden -mt-30 lg:grid lg:grid-cols-2 lg:gap-4 reveal-element"
        >
          <div
            class="px-6 py-12 max-w-md mx-auto sm:max-w-lg lg:py-16 lg:max-w-none lg:mx-0"
          >
            <h2
              class="text-3xl md:text-5xl font-dm-serif text-black sm:text-4xl"
            >
              Have a Project in mind?
            </h2>
            <p class="mt-4 text-lg text-black">
              We can help you bring your ideas to life and create a website
              solution that meets your business needs.
            </p>
            <div class="mt-32">
              <RouterLink
                to="/contact"
                class="inline-flex items-center justify-center px-5 py-3 border border-black text-base font-semibold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
              >
                Connect with Us →
              </RouterLink>
            </div>
          </div>
          <div class="hidden lg:block">
            <img
              class="h-full w-full reveal-from-right"
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
              alt="People working on laptops"
            />
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          class="flex flex-col gap-18 lg:flex-row justify-center items-center text-left mx-auto py-12 px-8"
        >
          <h2
            class="text-4xl font-dm-serif text-white sm:text-5xl w-full lg:w-1/2 reveal-element"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p
            class="mt-4 text-lg text-white w-full lg:w-1/2 reveal-element delay-200"
          >
            Nam efficitur ante ac leo bibendum, vitae tincidunt dui cursus.
            Praesent suscipit consequat est non gravida. Pellentesque commodo
            sodales felis, at congue purus ultricies id. Pellentesque eget
            venenatis orci. Duis sed massa vel lacus dapibus bibendum nec id
            metus. Proin faucibus et felis nec sagittis. Mauris sapien neque,
            feugiat a libero nec, interdum porta libero. Morbi sem purus,
            euismod nec gravida quis, egestas in odio. Etiam vitae neque
            tincidunt, iaculis eros posuere, tincidunt dolor. Donec tempus erat
            arcu, in tempor elit auctor ut.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-orange-50 py-12 pt-36 sm:pt-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <div
            class="flex flex-col md:flex-row items-center justify-center gap-12 h-[350px]"
          >
            <h2
              class="text-4xl md:text-5xl font-dm-serif tracking-tight sm:text-4xl w-1/2 reveal-element"
            >
              Highly Motivated Team with Innovative Ideas
            </h2>
            <p class="text-xl text-gray-500 w-1/2 reveal-element delay-100">
              We know what we do and therefore come up with the best possible
              solutions to help you set and grow your business online. Our team
              of expert partners is ready to work with you.
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pt-24 sm:pt-0"
          >
            <!-- Team member images would go here -->
            <div class="group reveal-element delay-100">
              <div
                class="h-80 w-full overflow-hidden rounded-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt=""
                  class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div class="group reveal-element delay-200">
              <div
                class="h-80 w-full overflow-hidden rounded-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt=""
                  class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div class="group reveal-element delay-300">
              <div
                class="h-80 w-full overflow-hidden rounded-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
                  alt=""
                  class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
