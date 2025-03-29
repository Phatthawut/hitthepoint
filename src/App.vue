<script setup>
import { useMainStore } from "./store";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<style>
/* Any global styles can go here */
</style>
