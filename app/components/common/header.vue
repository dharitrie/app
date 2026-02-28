<template>
  <header :class="[
    'fixed top-0 w-full z-50 transition-all duration-500 px-8 py-3 flex items-center justify-between',
    isScrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-md border-b border-gold/10' : 'bg-[#1B2623]'
  ]">
    <div class="flex items-center group cursor-pointer">
      <div class="relative">
        <div class="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>



        <NuxtImg src="/logo.webp" alt="Dharitrie Logo" format="webp" width="56" height="56" fetchpriority="high"
          decoding="async" class="h-14 w-auto relative z-10 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]" />

      </div>
    </div>

    <div class="flex items-center space-x-8">


      <div class="flex items-center space-x-5 text-[#D4AF37]">
        <!-- <NuxtLink to="https://wa.me/..." class="hover:scale-110 transition-transform">
     <Icon name="ph:whatsapp-logo-thin" class="w-7 h-7" />
    </NuxtLink>
    <button class="hover:scale-110 transition-transform">
     <Icon name="ph:phone-thin" class="w-6 h-6" />
    </button> -->
        <button @click="isOpen = !isOpen" class="flex flex-col space-y-1.5 p-2" aria-label="Open Menu">
          <span
            :class="['h-[1px] bg-[#D4AF37] transition-all duration-300', isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8']"></span>
          <span :class="['h-[1px] bg-[#D4AF37] transition-all duration-300', isOpen ? 'opacity-0' : 'w-5']"></span>
          <span
            :class="['h-[1px] bg-[#D4AF37] transition-all duration-300', isOpen ? 'w-8 -rotate-45 -translate-y-1' : 'w-8']"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from '~/assets/img/logo/logo.webp'
const isScrolled = ref(false)
const isOpen = ref(false)

if (process.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}
</script>

<style scoped>
/* Custom gold color if not in tailwind config bg-slate-900 bg-[#F5F2ED] bg-[#1B2623]*/
.text-gold {
  color: #D4AF37;
}
</style>