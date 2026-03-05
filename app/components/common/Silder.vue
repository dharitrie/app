<template>
    <div class="relative w-full overflow-hidden" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, index) in props.slides" :key="index" class="w-full flex-shrink-0 px-7 md:px-12">
                <div class="max-w-12xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12">

                    <div class="text-white space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
                        <h3 class="text-sm md:text-xl font-bold tracking-tight uppercase opacity-90">
                            {{ slide.brand }}
                        </h3>
                        <h2
                            class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1] md:leading-[0.9]">
                            {{ slide.title }}
                        </h2>
                        <p class="text-base md:text-lg opacity-90 max-w-sm mx-auto md:mx-0 leading-relaxed">
                            {{ slide.description }}
                        </p>
                    </div>

                    <div
                        class="relative flex justify-center items-center order-1 md:order-2 h-[200px] sm:h-[300px] md:h-auto">
                        <div
                            class="relative flex justify-center items-center order-1 md:order-2 h-[300px] sm:h-[400px] md:h-[500px]">
                            <div :style="{ borderRadius: generateRandomBlob().replace('rounded-[', '').replace(']', '').replace(/_/g, ' ') }"
                                class="relative h-58 md:h-96 lg:h-[58vh] w-[80%] md:w-[85%] aspect-square bg-[#fff8e7] 
                overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105">

                                <img fetchpriority="low" loading="eager" :src="slide.image" :alt="slide.title"
                                    alt="sliderImg" width="100%" height="100%" class="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <button @click="prev"
            class="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-[#fff8e7] rounded-full text-[#ff6b58] shadow-lg hover:scale-110 transition-transform active:scale-95">
            <span class="text-2xl">←</span>
        </button>
        <button @click="next"
            class="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-[#fff8e7] rounded-full text-[#ff6b58] shadow-lg hover:scale-110 transition-transform active:scale-95">
            <span class="text-2xl">→</span>
        </button>

        <div class="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            <button v-for="(_, i) in props.slides" :key="i" @click="currentSlide = i"
                class="h-2 md:h-3 rounded-full transition-all duration-300"
                :class="currentSlide === i ? 'bg-white w-6 md:w-8' : 'bg-white/40 w-2 md:w-3'"></button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    slides: {
        type: Array,
        required: true
    }
});

const generateRandomBlob = () => {
    const r = () => Math.floor(Math.random() * (75 - 30 + 1) + 30);
    return `rounded-[${r()}%_${r()}%_${r()}%_${r()}%_/_${r()}%_${r()}%_${r()}%_${r()}%]`;
};

const blobStyles = props.slides.map(() => generateRandomBlob());
const currentSlide = ref(0);

// Logic
const next = () => {
    currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const prev = () => {
    currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};

// Swipe Logic
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50;

const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX;
    touchEndX.value = 0; // Reset end point
};

const handleTouchMove = (e) => {
    touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
    if (!touchEndX.value) return;
    const distance = touchStartX.value - touchEndX.value;

    if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) next();
        else prev();
    }
};


let timer;
onMounted(() => {
    if (props.slides.length > 0) {
        timer = setInterval(next, 5000);
    }
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>