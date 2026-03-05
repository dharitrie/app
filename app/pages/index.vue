<template>
    <div class="font-bold text-3xl text-center mt-10">
        <HeroSection />
        <Silder class="relative w-full overflow-hidden bg-[#3D2B1F] px-8 md:px-10 py-2 " :slides="slides" />
    </div>
</template>

<script setup>
import HeroSection from "@/components/main/HeroSection.vue";
import Silder from "@/components/common/Silder.vue";
import slide1 from "@/assets/img/sliderImg/slide1.png"
import slide2 from "@/assets/img/sliderImg/slide2.png"
import slide3 from "@/assets/img/sliderImg/slide3.png"
import slide4 from "@/assets/img/sliderImg/slide4.png"


const slides = [
    {
        brand: 'Dharitrii',
        title: 'Authentic Clay Cookware',
        description: 'Retain 100% of nutrients with our flame-resistant, handcrafted terracotta.',
        image: slide1
    },
    {
        brand: 'Dharitrii',
        title: 'Naturally Alkaline',
        description: 'Balance the pH of your food for a healthier, traditional dining experience.',
        image: slide2
    },
    {
        brand: 'Dharitrii',
        title: 'Earth-To-Table',
        description: 'Sustainable, plastic-free utensils that breathe life into every meal.',
        image: slide3
    },
    {
        brand: 'Dharitrii',
        title: 'The Artisanal Touch',
        description: 'Hand-molded by local masters to bring rustic elegance to your kitchen.',
        image: slide4
    }
];







</script>