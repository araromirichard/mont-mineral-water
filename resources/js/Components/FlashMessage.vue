<template>
    <div 
        class="fixed top-0 left-0 w-full bg-green-500 text-white flex items-center justify-center py-4">
        {{ message }}
    </div>
</template>
  
<script setup>
// import { watchEffect } from 'vue';
// import { gsap } from 'gsap';

const props = defineProps({
    message: String
})

// const flashMessage = ref('');

// watchEffect(() => {
   

//     if (props.flash?.message) {
       

//         // Animation using GSAP
//         gsap.from('.flash-message', {
//             y: -20,
//             opacity: 0,
//             duration: 0.5,
//             ease: 'power2.out',
//             onComplete: () => {
//                 gsap.to('.flash-message', {
//                     y: 0,
//                     duration: 0.2,
//                     ease: 'back.out(0.5)',
//                     delay: 1.5,
//                 });
//             },
//         });
//     }
// });
</script>
  
<style scoped>
.flash-message {
    display: none;
}
</style>
  