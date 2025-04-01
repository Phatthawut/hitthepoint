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
    <section class="relative bg-gray-900">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="About Our Team"
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
            About Us
          </h2>
          <p
            class="mt-5 text-xl text-gray-400 transform transition-all duration-1000 delay-200 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            Learn more about our agency and our team of experts committed to
            helping your business grow.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center reveal-element">
          <h2
            class="text-3xl font-dm-serif tracking-tight text-gray-900 sm:text-4xl lg:text-6xl"
          >
            Our Story
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            Founded in 2010, we've helped hundreds of businesses establish their
            online presence and achieve their digital marketing goals.
          </p>
        </div>
        <div class="mt-12 space-y-6">
          <p class="text-base text-gray-500 mb-6 reveal-element delay-100">
            {{ store.agency.name }} was founded with a simple mission: to
            provide high-quality web development and digital marketing services
            to businesses of all sizes. Over the years, we've grown from a small
            team to a robust agency with a track record of success.
          </p>
          <p class="text-base text-gray-500 mb-6 reveal-element delay-200">
            Our approach combines technical expertise with creative thinking to
            deliver websites and digital marketing campaigns that not only look
            great but also perform exceptionally well.
          </p>
          <p class="text-base text-gray-500 reveal-element delay-300">
            We pride ourselves on building long-term relationships with our
            clients, many of whom have been with us since our early days.
          </p>
        </div>
      </div>
    </div>

    <!-- Our Values -->
    <div class="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center reveal-element">
          <h2
            class="text-3xl font-dm-serif tracking-tight text-gray-900 sm:text-4xl lg:text-6xl"
          >
            Our Values
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            These core principles guide everything we do.
          </p>
        </div>
        <div class="mt-12">
          <div class="space-y-10">
            <div
              class="flex reveal-element delay-100 hover:shadow-lg transition-all duration-300 p-3 rounded-lg hover:-translate-y-1"
            >
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white transform transition-transform hover:scale-110 duration-300"
                >
                  <!-- Icon -->
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3
                  class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                >
                  Excellence
                </h3>
                <p class="mt-2 text-base text-gray-500">
                  We're committed to delivering the highest quality work in
                  everything we do.
                </p>
              </div>
            </div>

            <div
              class="flex reveal-element delay-200 hover:shadow-lg transition-all duration-300 p-3 rounded-lg hover:-translate-y-1"
            >
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white transform transition-transform hover:scale-110 duration-300"
                >
                  <!-- Icon -->
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3
                  class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                >
                  Innovation
                </h3>
                <p class="mt-2 text-base text-gray-500">
                  We stay at the forefront of industry trends and technologies
                  to provide innovative solutions.
                </p>
              </div>
            </div>

            <div
              class="flex reveal-element delay-300 hover:shadow-lg transition-all duration-300 p-3 rounded-lg hover:-translate-y-1"
            >
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white transform transition-transform hover:scale-110 duration-300"
                >
                  <!-- Icon -->
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3
                  class="font-dm-serif text-lg leading-6 font-medium text-gray-900"
                >
                  Partnership
                </h3>
                <p class="mt-2 text-base text-gray-500">
                  We view ourselves as an extension of your team, working
                  together towards shared goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-orange-500">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between reveal-element"
      >
        <h2
          class="text-3xl font-dm-serif tracking-tight text-white sm:text-4xl"
        >
          <span class="block">Ready to get started?</span>
          <span class="block text-white">Get in touch with us today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
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
