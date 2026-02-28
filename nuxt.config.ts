// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },


  // Custom CSS (Tailwind v4 usually just needs a single entry point)
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/ui",      // This module handles Tailwind and Pinia automatically
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
  ],

  // If you have custom Pinia settings, use the pinia object here

})