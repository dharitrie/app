<template>
    <section class="relative bg-tael min-h-[80vh] flex items-center px-6 md:px-20 py-20 overflow-hidden">
        <div class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            <div class="text-white space-y-2">
                <h1 class="font-light leading-[0.85] tracking-tighter">
                    <span class="block text-5xl md:text-7xl uppercase">Born from the earth, </span>
                    <span class="block text-5xl md:text-7xl uppercase">crafted for your table.</span>
                </h1>
                <h2 class="text-3xl md:text-3xl font-bold py-4">The soul of good food </h2>
                <h1 class="font-light leading-[0.85] tracking-tighter">
                    <span class="block text-5xl md:text-7xl uppercase text-[#fdf5e6]">starts </span>
                    <span class="block text-5xl md:text-7xl uppercase text-[#fdf5e6]">here</span>
                </h1>

                <div class="pt-10">
                    <NuxtLink to="/order-sample"
                        class="inline-block bg-[#fdf5e6] text-tael px-8 py-3 rounded-full font-bold text-sm uppercase transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                        Order a Sample Kit
                    </NuxtLink>
                </div>
            </div>

            <div class="relative flex justify-center group">
                <div
                    class="absolute inset-0 bg-[#e88d67] rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-pulse opacity-80 blur-2xl">
                </div>

                <NuxtLink to="/products/plates" class="relative z-10 block">
                    <div class="overflow-hidden border-4 border-white/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_40%]">


                        <NuxtImg src="/heroSection/hero.png" alt="Dharitrii Premium Plates" preload width="720"
                            height="520" sizes="xs:100vw sm:100vw md:50vw lg:720px" quality="80"
                            class="transition-all duration-500 hover:scale-106" />
                    </div>

                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>