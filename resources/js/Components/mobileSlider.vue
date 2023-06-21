<template>
    <div class="hero-slider w-full h-96" >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'hidden': index !== currentSlide }"
        class="hero-slide"
      >
        <img :src="slide.image" :alt="slide.caption" class=" bg-contain w-full h-auto" />
        <div class="slide-caption">
          <h2 class="text-4xl font-bold mb-4">{{ slide.caption }}</h2>
          <p class="text-lg">{{ slide.description }}</p>
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide" class="slider-control-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button @click="nextSlide" class="slider-control-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentSlide = ref(0);
  
  const slides = [
    {
      image: '/storage/frontend/mobileSlide1.png',
      caption: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: '',
      caption: 'Slide 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/storage/frontend/FamilySlide.png',
      caption: 'Slide 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  };
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  };
  </script>
  
  <style scoped>
  .hero-slider {
    position: relative;
  }
  
  .hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .slide-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
  </style>
  