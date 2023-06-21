<template>
    <Head title="About" />
    <AppLayout>
        <div class="page-wrapper ">
            <div class="hero-section hero-1 flex justify-center">
                <div class="hero-text text-center sm:text-left px-6 sm:px-8 top-14 space-y-4">
                    <p class=" text-xl sm:text-[40px] sm:leading-[49px] text-primary-500 font-bold max-w-sm sm:w-[37%]">
                        Nature’s Gift,
                        bottled
                        for your pleasure</p>
                    <p class="hidden sm:flex text-primary-500 text-lg leading-6 w-[45%]">Our journey started when we
                        unearthed a hidden gem—a source of untouched water, naturally purified by the very essence of rocks.
                        From the moment we savored the first sip, we knew we had stumbled upon something extraordinary. It
                        became our mission to bring this exquisite water from beneath the surface and share its pure essence
                        with the world.</p>
                    <p class="flex sm:hidden text-center text-lg max-w-xs sm:w-2/3">Our journey started when we unearthed a
                        hidden
                        gem—a source of untouched water, naturally purified by the very essence of rocks. It became our
                        mission to bring this exquisite water from beneath the surface and share its pure essence with the
                        world.</p>
                </div>
            </div>
            <div class="hero-section hero-2">
                <div class="hero-text flex justify-center text-center sm:text-left sm:justify-end px-6 sm:px-8 top-14 ">
                    <div class=" sm:w-[45%] space-y-4">
                        <p class=" text-xl sm:text-[40px] text-primary-500 font-bold w-full">Pure.
                            Natural. Refreshing.</p>
                        <p class="hidden sm:flex text-primary-500 text-lg sm:w-[90%]">Mont Mineral Water flows through
                            layers of
                            ancient sedimentary rocks, delicately and naturally purified. Our meticulous process of reverse
                            osmosis and ozonization ensures the utmost purity while retaining the essence of minerals and
                            alkaline that grant Mont Mineral Water its signature velvety smoothness.</p>
                        <p class="hidden sm:flex text-primary-500 text-lg sm:w-[90%]">With each sip, immerse yourself in a
                            world
                            of pure refreshment and unbridled joy. Discover the taste
                            that transcends ordinary water.</p>
                        <p class="flex sm:hidden text-center text-lg max-w-xs sm:w-2/3">Mont Mineral Water flows through
                            layers of
                            ancient sedimentary rocks, delicately and naturally purified. Our meticulous process of reverse
                            osmosis and ozonization ensures the utmost purity while retaining the essence of minerals and
                            alkaline that grant Mont Mineral Water its signature velvety smoothness.
                        </p>
                        <p class="flex sm:hidden text-center text-lg max-w-xs sm:w-2/3">
                            Discover the taste that transcends ordinary water.</p>
                    </div>
                </div>
            </div>
            <div class="hero-section hero-3 ">
                <div
                    class="hero-text flex flex-col items-center sm:items-start text-white px-6 sm:px-16 top-12 sm:top-24 space-y-4">
                    <p
                        class=" text-xl text-center sm:text-start sm:text-[40px] sm:leading-[49px] font-bold max-w-sm sm:w-[]">
                        Share the Joy of
                        Pure Refreshment</p>
                    <p class="hidden sm:flex  text-lg w-[45%]">Indulge in the moments that matter most – whether it's a
                        delightful meal with loved ones, an invigorating day at the park, or a serene evening at home.
                        Elevate every experience with Mont Mineral Water, the ultimate companion.</p>
                    <p class="hidden sm:flex  text-lg w-[42%]">Immerse yourself in its pure, invigorating essence – a
                        treasure meant to be shared.</p>
                    <p class="hidden sm:flex text-secondary-500 text-lg w-[45%]">
                        Don't Drink Alone</p>

                    <p class="flex sm:hidden text-center text-lg max-w-xs sm:w-2/3">Indulge in the moments that matter most
                        – whether it's a delightful meal with loved ones, an invigorating day at the park, or a serene
                        evening at home. Elevate every experience with Mont Mineral Water, the ultimate companion.
                    </p>
                    <p class="flex sm:hidden text-center text-lg max-w-xs sm:w-2/3">
                        Don't Drink Alone</p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
  
<script setup>
import { Head } from "@inertiajs/vue3";
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
    background-image: url(/storage/frontend/aboutmont2.png);
    /* height: 100%; */
    z-index: 3;
}

.hero-2 {
    background-image: url(/storage/frontend/refresh2.png);
    z-index: 2;
}

.hero-3 {
    background-image: url(/storage/frontend/cheers2.png);
    z-index: 1;
}


@media (min-width: 768px) {
    .hero-1 {
        background-image: url(/storage/frontend/aboutmont1.png);
        /* Tablet/Desktop image */
    }

    .hero-2 {
        background-image: url(/storage/frontend/refresh1.png);
        /* Tablet/Desktop image */
    }

    .hero-3 {
        background-image: url(/storage/frontend/cheers1.png);
        /* Tablet/Desktop image */
    }
}
</style>
  