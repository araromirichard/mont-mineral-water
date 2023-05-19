<template>
  <div class="wrapper-container" ref="wrapper">
    <div class="scroll-container" ref="scrollContainer">
      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div class="box bg-blue-800">A</div>
        <div class="box bg-red-800">B</div>
      </section>
      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div class="box bg-green-800">C</div>
        <div class="box bg-purple-800">D</div>
      </section>
      <section class="page flex flex-col-reverse sm:flex-row w-[100vw] ">
        <div class="box bg-cyan-800">E</div>
        <div class="box bg-red-800">F</div>
      </section>


    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white;
}

.bg-blue-800 {
  background-color: blue;
}

.bg-red-800 {
  background-color: red;
}

.bg-green-800 {
  background-color: green;
}

.bg-purple-800 {
  background-color: purple;
}

.bg-cyan-800 {
  background-color: cyan;
}
</style>
