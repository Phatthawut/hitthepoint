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
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
          alt="Digital Services"
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
            Our Services
          </h2>
          <p class="mt-5 text-xl text-gray-400">
            Comprehensive solutions to help your business grow online.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="mt-2 text-3xl leading-8 font-dm-serif tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Everything You Need to Succeed Online
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            From website design to digital marketing, we offer complete
            solutions to help your business stand out in the digital landscape.
          </p>
        </div>

        <div class="mt-16">
          <div class="space-y-12">
            <!-- Web Design Service -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="mt-10 -mx-4 lg:mt-0">
                <div
                  class="relative lg:mx-0 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    class="relative mx-auto"
                    width="490"
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Web design illustration"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl mt-12 lg:mt-0 font-dm-serif text-gray-900 tracking-tight sm:text-3xl lg:text-4xl"
                >
                  Web Design
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Our designers create stunning, user-friendly websites that
                  reflect your brand and engage your audience. We focus on
                  creating intuitive navigation, compelling visuals, and
                  responsive layouts.
                </p>
                <div class="mt-10 space-y-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Responsive Design
                      </h4>
                      <p class="mt-2 text-base text-gray-500">
                        Websites that look great on all devices, from desktops
                        to smartphones.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        User Experience Design
                      </h4>
                      <p class="mt-2 text-base text-gray-500">
                        Intuitive interfaces that guide users to take action and
                        achieve their goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Web Development Service -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:order-last mt-10 -mx-4 lg:mt-0">
                <div
                  class="relative lg:mx-0 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    class="relative mx-auto"
                    width="490"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80"
                    alt="Web development illustration"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
                >
                  Web Development
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Our developers build robust, scalable websites and web
                  applications that deliver exceptional performance. We use
                  modern technologies and best practices to ensure your website
                  is fast, secure, and reliable.
                </p>
                <div class="mt-10 space-y-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Custom Development
                      </h4>
                      <p class="mt-2 text-base text-gray-500">
                        Tailored solutions that meet your specific business
                        requirements.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Security & Performance
                      </h4>
                      <p class="mt-2 text-base text-gray-500">
                        Secure, high-performance websites that load quickly and
                        protect your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Digital Marketing -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="mt-10 -mx-4 lg:mt-0">
                <div
                  class="relative lg:mx-0 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    class="relative mx-auto"
                    width="490"
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="Digital marketing illustration"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
                >
                  Digital Marketing
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Our marketing experts help you reach and engage your target
                  audience, driving traffic and conversions. We develop
                  comprehensive strategies that combine multiple digital
                  channels to maximize your online presence.
                </p>
                <div class="mt-10 space-y-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        SEO & Content Marketing
                      </h4>
                      <p class="mt-2 text-base text-gray-500">
                        Boost your search rankings and attract qualified traffic
                        with compelling content.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
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
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg leading-6 font-medium text-gray-900">
                        Social Media Management
                      </h4>
                      <p class="mt-2 text-base text-gray-500">
                        Engage with your audience and build brand awareness
                        through strategic social media presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-orange-500">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl font-extrabold tracking-tight text-white md:text-4xl"
        >
          <span class="block">Ready to transform your online presence?</span>
          <span class="block text-white">Get in touch with us today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
