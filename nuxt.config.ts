// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    // Cache all assets in the _nuxt folder for 1 year
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    // Cache other static assets (images/fonts) in the public folder
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, must-revalidate' } }
  },
  features: {
    inlineStyles: true
  },

  // Custom CSS (Tailwind v4 usually just needs a single entry point)
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/icon",
    "@nuxt/ui",      // This module handles Tailwind and Pinia automatically
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
  ],

  // If you have custom Pinia settings, use the pinia object here

})