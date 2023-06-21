<template>
    <div class="hero-section">
        <div class="background-image-desktop hidden sm:flex"></div>
        <div class="background-image-mobile sm:hidden"></div>
        <div class="clouds">
            <div class="cloud cloud-1">
            </div>
            <div class="cloud cloud-2"></div>
            <div class="cloud cloud-3"></div>
        </div>
        <div class="content container mx-auto flex flex-col items-center sm:items-start justify-center sm:justify-normal sm:max-w-xl sm:px-12 space-y-4">
            <!-- Your content goes here -->
            <p class="font-sans font-bold text-2xl w-[200px] sm:w-full sm:text-[42px] sm:leading-[51px] text-white">Enjoy
                the refreshing taste
                of togetherness</p>
            <p
                class="font-sans text-lg sm:text-[32px] sm:leading-[29px] font-normal tracking-wider text-white pt-2 sm:pt-5 sm:mb-[40px]">
                Don’t Drink Alone</p>
            <div class="sm:py-5">
                <IconButton :href="route('shop')" btn-inner-text="Shop Now" class=" w-fit">
                    Shop Now
                    <svg class="hidden sm:block animate-bounce ml-2" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.08337 9.39584C7.91671 9.22917 7.83671 9.02778 7.84337 8.79167C7.8506 8.55556 7.93754 8.35417 8.10421 8.1875L10.4584 5.83334H1.16671C0.930596 5.83334 0.732541 5.75334 0.572541 5.59334C0.413096 5.43389 0.333374 5.23612 0.333374 5C0.333374 4.76389 0.413096 4.56584 0.572541 4.40584C0.732541 4.24639 0.930596 4.16667 1.16671 4.16667H10.4584L8.08337 1.79167C7.91671 1.625 7.83337 1.42695 7.83337 1.1975C7.83337 0.968616 7.91671 0.770838 8.08337 0.604172C8.25004 0.437505 8.4481 0.354172 8.67754 0.354172C8.90643 0.354172 9.10421 0.437505 9.27087 0.604172L13.0834 4.41667C13.1667 4.5 13.2259 4.59028 13.2609 4.6875C13.2953 4.78473 13.3125 4.88889 13.3125 5C13.3125 5.11112 13.2953 5.21528 13.2609 5.3125C13.2259 5.40973 13.1667 5.5 13.0834 5.58334L9.25004 9.41667C9.09726 9.56945 8.90643 9.64584 8.67754 9.64584C8.4481 9.64584 8.25004 9.5625 8.08337 9.39584Z"
                            fill="#F0F0F0" />
                    </svg>
                </IconButton>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { onMounted, nextTick } from 'vue';
import IconButton from '@/Components/IconButton.vue';
import { gsap } from 'gsap';
import { Link } from '@inertiajs/vue3';

onMounted(() => {
    nextTick(() => {
        gsap.to('.cloud-1', {
            x: '100vw',
            repeat: -1,
            ease: 'linear',
            duration: 60,
            stagger: {
                each: 5,
                from: 'random'
            }
        });

        gsap.to('.cloud-2', {
            x: '100vw',
            repeat: -1,
            ease: 'linear',
            duration: 45,
            stagger: {
                each: 6,
                from: 'random'
            }
        });
        gsap.to('.cloud-2', {
            x: '80vw',
            repeat: 2,
            ease: 'linear',
            duration: 35,
            stagger: {
                each: 6,
                from: 'random'
            }
        });
    });
});
</script>
  
<style>
.hero-section {
    position: relative;
    height: 100vh;
}

.background-image-desktop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/storage/frontend/newHero.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
}

.background-image-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/storage/frontend/Hero-Page-mobile.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
}

.clouds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.cloud {
    position: absolute;
    width: 300px;
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.cloud-1 {
    background-image: url(/storage/frontend/cloud-1.png);
    z-index: 1;
}

.cloud-2 {
    background-image: url(/storage/frontend/cloud-2.png);
}

.cloud-3 {
    background-image: url(/storage/frontend/cloud-2.png);
    top: 10%;
}

.content {
    position: absolute;
    left: 0;
    z-index: 5;
}

@media (min-width: 768px) {

    /* Styles for medium screens and up */
    .content {
        top: 35%;
        /* transform: translate(-50%, -50%); */
        /* text-align: center; */
    }
}

@media (max-width: 767px) {

    /* Styles for mobile screens */
    .content {
        top: 48px;
        text-align: center;
        /* padding-top: 20px; */
        /* Adjust the padding as per your needs */
    }
}
</style>
