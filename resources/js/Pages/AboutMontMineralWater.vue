<template>
    <AppLayout>
        <div class="page-wrapper ">
            <div class="hero-section hero-1 ">
                <div class="hero-text px-6 sm:px- top-14 space-y-4">
                    <p class=" text-xl sm:text-3xl md:text-4xl text-primary-500 font-bold w-[55%] sm:w-[33%]">From Pristine
                        Springs to Your Table</p>
                    <p class="hidden sm:flex text-primary-500 text-base w-[45%]">Our journey began when we discovered a
                        source
                        of pristine water purified by rocks. We knew from the first sip that this water was something
                        special, and we had to share it with the world.</p>
                    <p class="flex sm:hidden tracking-wider text-lg w-2/3">Our journey began when we discovered a source of
                        pristine water purified by rocks.</p>
                </div>
            </div>
            <div class="hero-section hero-2">
                <div class="hero-text px-6 sm:px-12 top-14 space-y-4">
                    <p class=" text-xl sm:text-3xl md:text-4xl text-primary-500 font-bold w-full">Pure.
                        Natural. Refreshing.</p>
                    <p class="hidden sm:flex text-primary-500 text-base w-[50%]">Our journey began when we Slowly Filtered
                        and purified by Sedimentary rocks (through a process of reverse osmosis and ozonization). Enriched
                        with natural minerals and alkaline that create Mont water’s soft smooth taste.</p>
                    <p class="hidden sm:flex text-primary-500 text-base w-[45%]">

                        Each sip is moment of pure refreshment and joy.</p>
                    <p class="flex sm:hidden tracking-wider text-lg w-2/3">Our journey began when we Slowly Filtered
                        and purified by Sedimentary rocks (through a process of reverse osmosis and ozonization).</p>
                </div>
            </div>
            <div class="hero-section hero-3 ">
                <div
                    class="hero-text hero-text flex flex-col items-center sm:items-end text-justify text-white px-6 sm:px-16 top-12 space-y-4">
                    <p class=" text-xl text-center sm:text-start sm:text-3xl md:text-4xl font-bold max-w-sm sm:max-w-[50%]">Share the Joy of
                        Pure Refreshment</p>
                    <p class="hidden sm:flex  text-base w-[50%]">Whether you're enjoying a meal with loved ones, spending a day out in the park, or simply relaxing at home, Mont Mineral Water is the perfect accompaniment. So why keep it to yourself? Share the joy of Mont Mineral Water with friends, family, and anyone who appreciates the finer things in life. It's pure, refreshing, and perfect for sharing.</p>
                 
                    <p class="flex sm:hidden text-center tracking-wider text-lg max-w-xs sm:w-2/3">Share the joy of Mont Mineral Water with friends, family, and anyone who appreciates the finer things in life.</p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
  
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollTrigger and ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const heroSections = ref(null);
const heroTexts = ref(null);

onMounted(async () => {
    await nextTick();
    heroSections.value = document.querySelectorAll('.hero-section');
    heroTexts.value = document.querySelectorAll('.hero-text');
    setupScrollTransitions();
    setupNavLinkClickHandlers();
});

const setupScrollTransitions = () => {
    heroSections.value.forEach((section, index) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 100, zIndex: 3 - index },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 100%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(
            heroTexts.value[index],
            { opacity: 0, y: 20, scale: 1.2 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: 0.2 * index,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 100%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });
};

const setupNavLinkClickHandlers = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', handleNavLinkClick);
    });
};

const handleNavLinkClick = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    gsap.to(window, { scrollTo: href, duration: 1 });
    // If you are using Inertia.js, you can navigate using the `Link` component
    // Link.visit(href);
};
</script>
  
<style scoped>
.page-wrapper {
    /* Add styles for the page wrapper */
}

.hero-section {
    /* Add styles for each hero section */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.hero-text {
    /* Add styles for the hero text */
    position: absolute;
    opacity: 0;
}

.hero-1 {
    background-image: url(/storage/frontend/aboutmont1.png);
    z-index: 3;
}

.hero-2 {
    background-image: url(/storage/frontend/refresh1.png);
    z-index: 2;
}

.hero-3 {
    background-image: url(/storage/frontend/cheers1.png);
    z-index: 1;
}

/* Media query for mobile devices */
@media (max-width: 767px) {
    .hero-1 {
        background-image: url(/storage/frontend/aboutmont2.png);
        /* Mobile image */
    }

    .hero-2 {
        background-image: url(/storage/frontend/refresh2.png);
        /* Mobile image */
    }

    .hero-3 {
        background-image: url(/storage/frontend/cheers2.png);
        /* Mobile image */
    }
}
</style>
  