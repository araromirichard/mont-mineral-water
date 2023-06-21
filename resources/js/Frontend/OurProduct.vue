<template>
  <div class="flex sm:hidden justify-center items-center text-primary-500 font-semibold text-lg mt-8">
    SHOP MONT
  </div>
  <div class="flex sm:hidden">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      
      <!-- Carousel wrapper -->
      <div class="relative h-[100vh] overflow-hidden ">
        <!-- Item 1 -->
        <div v-show="activeSlideIndex === 0" class="duration-700 ease-in-out " data-carousel-item>
          <img src="/storage/frontend/mobileSlide1.png"
            class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="...">
          <div class="absolute inset-0 flex pt-24 justify-center backdrop-brightness-50">
            <div class="text-white text-center space-y-8">
              <h2 class="text-xl font-bold">The Pocket Size - 330 ML</h2>
              <p class="text-[16px] leading-5 px-14">Perfect for the go! Can be tossed
                in your work bag or kids lunch bag.
                Can be best enjoyed by both kids
                and adults. Suitable for offices,
                schools and special occasions.</p>
              <MontButtonOutline :href="route('shop')" :has-icon="true">
                <template #icon>
                  <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </template>
                Shop Now
              </MontButtonOutline>
            </div>
          </div>
        </div>
        <!-- Item 2 -->
        <div v-show="activeSlideIndex === 1" class="duration-700 ease-in-out" data-carousel-item>
          <img src="/storage/frontend/FamilySlide.png"
            class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="...">
          <div class="absolute inset-0 flex pt-24 justify-center backdrop-brightness-50">
            <div class="text-white text-center space-y-8">
              <h2 class="text-xl font-bold">The Fun Size - 500 ML</h2>
              <p class="text-[16px] leading-5 px-14">Perfect for everyday hydration!
                Our best-selling pack can change the mood of an impromptu meal at home, or a work out, keeping you
                refreshed and revitalised.</p>
              <MontButtonOutline :href="route('shop')" :has-icon="true">
                <template #icon>
                  <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </template>
                Shop Now
              </MontButtonOutline>
            </div>
          </div>
        </div>
        <!-- Item 3 -->
        <div v-show="activeSlideIndex === 2" class="duration-700 ease-in-out" data-carousel-item>
          <img src="/storage/frontend/FamilySlide.png"
            class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="...">
          <div class="absolute inset-0 flex pt-24 justify-center backdrop-brightness-50">
            <div class="text-white text-center space-y-8">
              <h2 class="text-xl font-bold">The Family Size - 1L</h2>
              <p class="text-[16px] leading-5 px-14">Where there is great company, there
                is
                refreshing water! The ideal size for sharing with friends, family and loved ones at home or in a
                restaurant.
              </p>
              <MontButtonOutline :href="route('shop')" :has-icon="true">
                <template #icon>
                  <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </template>
                Shop Now
              </MontButtonOutline>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-navigation absolute flex items-center justify-between bottom-[30%] w-full px-8">
        <!-- Slider controls -->
        <button type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          @click="prevSlide">
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent/10 group-hover:bg-white/50 group-focus:ring-4 group-focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          @click="nextSlide">
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent/10 group-hover:bg-white/50 group-focus:ring-4 group-focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 text-neutral-100">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="wrapper-container" ref="wrapper">



    <div class="scroll-container hidden sm:flex" ref="scrollContainer">

      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div
          class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12 w ">
          <p class=" hidden sm:flex text-white text-base font-semibold">SHOP MONT</p>
          <p class=" text-center sm:text-left sm:w-[70%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold ">
            The Pocket Size - 330 ML</p>
          <p class=" text-neutral-100 font-normal text-lg text-center sm:text-left">Perfect for the go! Can be tossed
            in your work bag or kids lunch bag.
            Can be best enjoyed by both kids
            and adults. Suitable for offices,
            schools and special occasions.
          </p>
          <MontButtonOutline :href="route('shop')" :has-icon="true">
            <template #icon>
              <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </template>
            Shop Now
          </MontButtonOutline>
        </div>
        <div class="box w-full sm:w-7/12">
          <img src="/storage/frontend/pocketslide.png" alt="pocket size bottle" class="w-full h-full object-cover">
        </div>
      </section>
      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div
          class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12 w ">
          <p class=" hidden sm:flex text-white text-base font-semibold">SHOP MONT</p>
          <p class=" text-center sm:text-left sm:w-[55%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold ">
            The Fun Size - 500 ml</p>
          <p class=" text-neutral-100 font-normal text-lg text-center sm:text-left">Perfect for everyday hydration! Our
            best-selling pack can change the mood of an impromptu meal at home, or a work out, keeping you refreshed and
            revitalised.
          </p>
          <MontButtonOutline :href="route('shop')" :has-icon="true">
            <template #icon>
              <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </template>
            Shop Now
          </MontButtonOutline>
        </div>
        <div class="box w-full sm:w-7/12">
          <img src="/storage/frontend/funslide.png" alt="fun size bottle" class="w-full h-full object-cover">
        </div>
      </section>
      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div
          class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12">
          <p class=" hidden sm:flex text-white text-base font-semibold">SHOP MONT</p>
          <p class=" text-center sm:text-left sm:w-[70%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold ">
            The Family Size - 1L</p>
          <p class=" text-neutral-100 font-normal text-lg text-center sm:text-left">Where there is great company, there
            is
            refreshing water! The ideal size for sharing with friends, family and loved ones at home or in a restaurant.
          </p>
          <MontButtonOutline :href="route('shop')" :has-icon="true">
            <template #icon>
              <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </template>
            Shop Now
          </MontButtonOutline>
        </div>
        <div class="box w-full sm:w-7/12">
          <img src="/storage/frontend/FamilySlide.png" alt="family size bottle" class="w-full h-full object-cover ">
        </div>
      </section>

    </div>


  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MontButtonOutline from '@/Components/MontButtonOutline.vue';

const props = defineProps({
  products: Array
})

gsap.registerPlugin(ScrollTrigger);

const wrapper = ref(null);
const scrollContainer = ref(null);
const pages = ref([]);

// Create a reactive reference for the active slide index
const activeSlideIndex = ref(0);

// Function to handle previous slide navigation
const prevSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value - 1 + 3) % 3; // Wrap around to the last slide if on the first slide
};

// Function to handle next slide navigation
const nextSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % 3; // Wrap around to the first slide if on the last slide
};

onMounted(() => {
  nextTick(() => {
    pages.value = gsap.utils.toArray(scrollContainer.value.getElementsByClassName("page"));
    gsap.to(scrollContainer.value, {
      xPercent: -33.3 * (pages.value.length - 1),
      ease: "power2.out",
      scrollTrigger: {
        trigger: scrollContainer.value,
        pin: true,
        scrub: 1,
        start: "top+=20px 13%",
        end: "+=3000",
        // snap: 1 / (pages.value.length - 1),
        // markers: true,
      },
    });

  });
});
</script>



<style scoped>
.wrapper-container {
  overflow-x: hidden;
}

.scroll-container {
  /* display: flex; */
  width: 300vw;
}

.page {
  width: 100vw;
  height: 90vh;
}

.box {
  /* flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white; */
}

.slider {
  position: relative;
}

.slider-item {
  position: relative;
}

.slider-image {
  width: 100%;
  height: auto;
}

.slider-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 20px;
}

.slider-overlay h3 {
  margin: 0;
  font-size: 24px;
}

.slider-overlay p {
  margin: 10px 0 0;
  font-size: 16px;
}
</style>
