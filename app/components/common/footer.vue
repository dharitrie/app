<template>
    <footer class="bg-tael text-white py-16 px-8 md:px-20 font-sans">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

            <div class="space-y-8">
                <h2 class="text-6xl text-white tracking-tighter">DHARITRII</h2>
                <p class="text-gray-300 leading-loose text-sm max-w-sm tracking-wide">
                    Stop serving toxins at the dinner table. Switch to
                    <span class="font-bold text-white">Dharitrii :</span> — where safety meets tradition.
                </p>

                <div class="flex flex-wrap gap-6">
                    <NuxtLink to="/know-more"
                        class="bg-white text-black border-2 border-white rounded-full px-8 py-3 font-bold text-sm uppercase transition hover:bg-gold hover:border-gold hover:text-white">
                        Know More
                    </NuxtLink>
                    <NuxtLink to="/brochure"
                        class="border-2 border-gold text-white rounded-full px-8 py-3 font-bold text-sm uppercase transition hover:bg-gold hover:text-white">
                        Download Brochure
                    </NuxtLink>
                </div>
            </div>

            <div class="md:pl-12">
                <h3 class="font-bold uppercase tracking-[0.2em] mb-10 text-gray-400 text-xs">Menu</h3>
                <ul class="grid grid-cols-1 gap-y-4 uppercase text-xs font-bold tracking-[0.15em]">
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Disposables</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Certificates</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Buyers</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">About Us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Latest News</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Distributors</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Contact Us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition">Privacy Policy</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="space-y-8">
                <h3 class="font-bold uppercase tracking-[0.2em] text-gray-400 text-xs">Contact</h3>
                <div class="text-xs space-y-6 uppercase font-bold tracking-[0.15em] leading-[2]">
                    <p class="text-gray-300">
                        Some where <br>
                        In India
                    </p>
                    <p>Contact No: +91 XXXXXXX</p>
                    <p>9:30 AM — 6:30 PM (MON — SAT)</p>
                    <p>Email: <a href="mailto:hello@dharitrii.in"
                            class="text-white hover:text-white transition">hello@dharitrii.in</a></p>
                </div>

                <div class="flex gap-4 pt-4">
                    <a href="#"
                        class="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition">
                        <Icon name="uil:facebook-f" size="18" />
                    </a>
                    <a href="#"
                        class="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition">
                        <Icon name="uil:linkedin" size="18" />
                    </a>
                    <a href="#"
                        class="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition">
                        <Icon name="uil:instagram" size="18" />
                    </a>
                </div>
            </div>
        </div>

        <div
            class="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 text-[10px] text-gray-400 uppercase font-bold tracking-[0.25em]">
            © 2026 Dharitrii
        </div>
    </footer>
</template>