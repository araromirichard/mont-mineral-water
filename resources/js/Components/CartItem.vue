<template>
    <div class="grid grid-cols-4 mt-6 space-x-2 border-b border-neutral-400 border-opacity-30 py-3 sm:py-6">
        <div class="">
            <img src="/storage/product_images/SHOP-NOW-DROP-DOWN-330.png" alt="Product Image">
        </div>
        <div class=" row-span-2 col-span-2 space-y-2 pb-2">
            <p class=" font-bold text-lg">Family size | 1 Litre | Pack of 12</p>
            <p class=" font-bold tracking-wider text-primary-400 text-xs">Quantity</p>
            <div>
                <QuantitySelectorCart :quantity="quantity" @minus="decreaseqty" @add="increaseqty" />
            </div>
        </div>
        <div class=" row-span-2 flex flex-col justify-between items-end">
            <div class="text-secondary-400 tracking-wide text-sm font-bold">GHS 550</div>
            <div class="flex items-center">
                <button class="deleteBtn">delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import QuantitySelectorCart from '@/Components/QuantitySelectorCart.vue'
import { ref } from 'vue'

const quantity = ref(10);

function increaseqty() {
    quantity.value++;
}
function decreaseqty() {
    if (quantity.value > 10) {
        quantity.value--;
    }
}

</script>

<style scoped>
.deleteBtn {
    @apply border-none ring-0 hover:border-none focus:border-none text-neutral-400 text-sm font-semibold uppercase;
}
</style>