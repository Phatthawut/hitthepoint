<script setup>
import { ref } from "vue";
import { useMainStore } from "../store";

const store = useMainStore();
const isMenuOpen = ref(false);
const showLogoText = ref(false);

const handleLogoError = () => {
  showLogoText.value = true;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/" class="flex items-center">
              <template v-if="store.agency.logo && !showLogoText">
                <img
                  :src="store.agency.logo"
                  :alt="store.agency.name"
                  class="h-32 w-auto"
                  @error="handleLogoError"
                />
              </template>
              <span
                v-else
                class="text-xl font-semibold font-dm-serif text-gray-900"
              >
                {{ store.agency.name }}
              </span>
            </RouterLink>
          </div>
        </div>

        <!-- Desktop menu - centered -->
        <div class="hidden md:flex md:items-center md:justify-center flex-1">
          <nav class="flex space-x-8">
            <RouterLink
              to="/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2"
              :class="[
                $route.path === '/'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent hover:border-orange-300 hover:text-orange-700',
              ]"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/services"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2"
              :class="[
                $route.path === '/services'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent hover:border-orange-300 hover:text-orange-700',
              ]"
            >
              Services
            </RouterLink>
            <RouterLink
              to="/about"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2"
              :class="[
                $route.path === '/about'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent hover:border-orange-300 hover:text-orange-700',
              ]"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2"
              :class="[
                $route.path === '/contact'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent hover:border-orange-300 hover:text-orange-700',
              ]"
            >
              Contact
            </RouterLink>
          </nav>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center">
          <RouterLink
            to="/contact"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
          >
            Get a Quote
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" v-if="isMenuOpen">
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink
          to="/"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[
            $route.path === '/'
              ? 'border-orange-500 text-orange-500 bg-orange-50'
              : 'border-transparent text-gray-100 hover:bg-gray-700 hover:border-orange-300 hover:text-orange-700',
          ]"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/services"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[
            $route.path === '/services'
              ? 'border-orange-500 text-orange-500 bg-orange-50'
              : 'border-transparent text-gray-100 hover:bg-gray-700 hover:border-orange-300 hover:text-orange-700',
          ]"
        >
          Services
        </RouterLink>
        <RouterLink
          to="/about"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[
            $route.path === '/about'
              ? 'border-orange-500 text-orange-500 bg-orange-50'
              : 'border-transparent text-gray-100 hover:bg-gray-700 hover:border-orange-300 hover:text-orange-700',
          ]"
        >
          About
        </RouterLink>
        <RouterLink
          to="/contact"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[
            $route.path === '/contact'
              ? 'border-orange-500 text-orange-500 bg-orange-50'
              : 'border-transparent text-gray-100 hover:bg-gray-700 hover:border-orange-300 hover:text-orange-700',
          ]"
        >
          Contact
        </RouterLink>

        <div class="mt-4 pl-3 pr-4">
          <RouterLink
            to="/contact"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
          >
            Get a Quote
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
