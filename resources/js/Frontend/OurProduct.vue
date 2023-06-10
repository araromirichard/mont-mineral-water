<template>
  <div class="wrapper-container" ref="wrapper">
    <div class="flex sm:hidden justify-center items-center w-full text-primary-500 font-semibold text-lg mt-8">SHOP MONT
    </div>
    <div class="scroll-container" ref="scrollContainer">
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

          <MontButtonOutline :has-icon="true">
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

          <MontButtonOutline :has-icon="true">
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
          <img src="/storage/frontend/funslide.png" alt="pocket size bottle" class="w-full h-full object-cover">
        </div>
      </section>
      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div
          class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12 w ">
          <p class=" hidden sm:flex text-white text-base font-semibold">SHOP MONT</p>
          <p class=" text-center sm:text-left sm:w-[70%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold ">
            The Family Size - 1L</p>
          <p class=" text-neutral-100 font-normal text-lg text-center sm:text-left">Perfect for the go! Can be tossed
            in your work bag or kids lunch bag.
            Can be best enjoyed by both kids
            and adults. Suitable for offices,
            schools and special occasions.
          </p>

          <MontButtonOutline :has-icon="true">
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
          <img src="/storage/frontend/familyslide.png" alt="pocket size bottle" class="w-full h-full object-cover">
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

gsap.registerPlugin(ScrollTrigger);

const wrapper = ref(null);
const scrollContainer = ref(null);
const pages = ref([]);

onMounted(() => {
  nextTick(() => {
    pages.value = gsap.utils.toArray(scrollContainer.value.getElementsByClassName("page"));
    gsap.to(scrollContainer.value, {
      xPercent: -33.3 * (pages.value.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer.value,
        pin: true,
        scrub: 1,
        start: "1rem top",
        end: "+=3000",
        snap: 1 / (pages.value.length - 1),
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
  display: flex;
  width: 300vw;
}

.page {
  width: 100vw;
  height: 100vh;
}

.box {
  /* flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white; */
}
</style>
