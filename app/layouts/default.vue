<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main id="main-content" class="flex-grow">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>





<script setup lang="ts">
import AppHeader from '~/components/common/header.vue';
import AppFooter from '~/components/common/footer.vue';
useMeta({
  title: 'Eco-friendly disposables | Dharitrie ',
  description: "Discover Dharitrie's premium range of eco-friendly dinnerware. Our utensils are 100% biodegradable, toxin-free, and designed to return to the Earth",
  image: "https://dharitrii.com/metaImg.png",
  url: 'https://dharitrie.com'

})

</script>