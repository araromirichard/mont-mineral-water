<template>
    <div 
        class="fixed top-0 left-0 w-full bg-green-500 text-white flex items-center justify-center py-4">
        {{ message }}
    </div>
</template>
  
<script setup>

const props = defineProps({
    message: String
})


</script>
  
<style scoped>
.flash-message {
    display: none;
}
</style>
  