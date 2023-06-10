<template>
    <div class="hero-section">
        <div class="background-image"></div>
        <div class="clouds">
            <div class="cloud"></div>
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
        <div class="content w-full flex flex-col justify-center items-center top-6 sm:top-10">
            <!-- Your content goes here -->
            <p class="font-sans font-bold text-2xl w-[270px] sm:w-full sm:text-5xl text-white">Enjoy the refreshing taste
                of togetherness</p>
            <p class="font-sans text-lg sm:text-xl font-normal tracking-wider text-white pt-2 sm:pt-5">Don’t Drink Alone</p>

            <Link :href="route('shop')"  class="inline-flex items-center mt-2 sm:mt-4 px-5 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 space-x-2" :has-icon="true">
                Shop Now
                <template v-slot:icon>
                    <svg class="hidden sm:block animate-bounce" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.08337 9.39584C7.91671 9.22917 7.83671 9.02778 7.84337 8.79167C7.8506 8.55556 7.93754 8.35417 8.10421 8.1875L10.4584 5.83334H1.16671C0.930596 5.83334 0.732541 5.75334 0.572541 5.59334C0.413096 5.43389 0.333374 5.23612 0.333374 5C0.333374 4.76389 0.413096 4.56584 0.572541 4.40584C0.732541 4.24639 0.930596 4.16667 1.16671 4.16667H10.4584L8.08337 1.79167C7.91671 1.625 7.83337 1.42695 7.83337 1.1975C7.83337 0.968616 7.91671 0.770838 8.08337 0.604172C8.25004 0.437505 8.4481 0.354172 8.67754 0.354172C8.90643 0.354172 9.10421 0.437505 9.27087 0.604172L13.0834 4.41667C13.1667 4.5 13.2259 4.59028 13.2609 4.6875C13.2953 4.78473 13.3125 4.88889 13.3125 5C13.3125 5.11112 13.2953 5.21528 13.2609 5.3125C13.2259 5.40973 13.1667 5.5 13.0834 5.58334L9.25004 9.41667C9.09726 9.56945 8.90643 9.64584 8.67754 9.64584C8.4481 9.64584 8.25004 9.5625 8.08337 9.39584Z"
                            fill="#F0F0F0" />
                    </svg>

                </template>
            </Link>

        </div>
    </div>
</template>
  
<script setup>
import { onMounted, inject, nextTick } from 'vue';
 import { gsap } from 'gsap';
import MontButton from '@/Components/MontButton.vue';
import { Link } from '@inertiajs/vue3';


onMounted(() => {
    nextTick(() => {
        gsap.to('.cloud', {
            x: '-100%',
            repeat: -1,
            ease: 'linear',
            duration: 20,
            stagger: {
                each: 5,
                from: 'random'
            }
        });
    })
});
</script>
  
<style>
.hero-section {
    position: relative;
    height: 130vh;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/storage/frontend/heroImage.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
    width: 100px;
    height: 50px;
    background-image: url();
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.content {
    position: absolute;
    text-align: center;
    z-index: 1;
}
</style>
  