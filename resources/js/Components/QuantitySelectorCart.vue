<template>
    <div class="quantity-selector ">
        <button @click.stop="decrement" class="quantity-btn">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
            </svg>

        </button>
        <div class="quantity-value flex-grow flex items-center justify-center font-bold text-lg">{{ quantity }}</div>
        <button @click.stop="increment" class="quantity-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>

        </button>
    </div>
</template>
  
<script setup>
const props = defineProps({
    quantity: Number
})

const emit = defineEmits(['add', 'minus'])
const increment = () => {
    emit('add');
};

const decrement = () => {
    emit('minus');
}; 
</script>
  
<style scoped>
.quantity-selector {
    @apply inline-flex items-center border border-primary-100 rounded space-x-4 px-2 py-1;
}

.quantity-btn {
    @apply flex items-center justify-center rounded-full bg-neutral-50 text-gray-600 focus:text-secondary-400;
    cursor: pointer;
}

.quantity-value {
    @apply flex-grow flex items-center justify-center text-primary-500 font-bold text-base;
}
</style>
  