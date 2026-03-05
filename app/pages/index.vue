<template>
    <div class="font-bold text-3xl text-center mt-10">
        <HeroSection />
        <Silder class="relative w-full overflow-hidden bg-[#3D2B1F] px-8 md:px-10 py-2 " :slides="slides" />
    </div>
</template>

<script setup>
import HeroSection from "@/components/main/HeroSection.vue";
import Silder from "@/components/common/Silder.vue";



const slides = [
    {
        brand: 'Dharitrii',
        title: 'Authentic Clay Cookware',
        loadingType: 'lazy',
        description: 'Retain 100% of nutrients with our flame-resistant, handcrafted terracotta.',
        image: "https://res.cloudinary.com/dub8zwfnw/image/upload/v1772717414/slide3_ywgu4g.png"
    },
    {
        brand: 'Dharitrii',
        title: 'Naturally Alkaline',
        loadingType: 'lazy',
        description: 'Balance the pH of your food for a healthier, traditional dining experience.',
        image: "https://res.cloudinary.com/dub8zwfnw/image/upload/v1772717413/slide4_f1y0ce.png"
    },
    {
        brand: 'Dharitrii',
        title: 'Earth-To-Table',
        loadingType: 'lazy',
        description: 'Sustainable, plastic-free utensils that breathe life into every meal.',
        image: "https://res.cloudinary.com/dub8zwfnw/image/upload/v1772717413/slide1_frcmyi.png"
    },
    {
        brand: 'Dharitrii',
        title: 'The Artisanal Touch',
        loadingType: 'lazy',
        description: 'Hand-molded by local masters to bring rustic elegance to your kitchen.',
        image: "https://res.cloudinary.com/dub8zwfnw/image/upload/v1772717413/slide2_aegbot.png"
    }
];







</script>