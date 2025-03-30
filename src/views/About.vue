<script setup>
import { useMainStore } from "../store";

const store = useMainStore();
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-900">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="About Our Team"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <div class="max-w-xl">
          <h2
            class="text-4xl font-dm-serif text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            About Us
          </h2>
          <p class="mt-5 text-xl text-gray-400">
            Learn more about our agency and our team of experts committed to
            helping your business grow.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center">
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
        <div class="mt-12">
          <p class="text-base text-gray-500 mb-6">
            {{ store.agency.name }} was founded with a simple mission: to
            provide high-quality web development and digital marketing services
            to businesses of all sizes. Over the years, we've grown from a small
            team to a robust agency with a track record of success.
          </p>
          <p class="text-base text-gray-500 mb-6">
            Our approach combines technical expertise with creative thinking to
            deliver websites and digital marketing campaigns that not only look
            great but also perform exceptionally well.
          </p>
          <p class="text-base text-gray-500">
            We pride ourselves on building long-term relationships with our
            clients, many of whom have been with us since our early days.
          </p>
        </div>
      </div>
    </div>

    <!-- Our Values -->
    <div class="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center">
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
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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

            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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

            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
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
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
