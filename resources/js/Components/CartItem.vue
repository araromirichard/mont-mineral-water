<template>
    <div class="grid grid-cols-4 mt-6 space-x-1 border-b border-neutral-400 border-opacity-30 py-3 sm:py-6">
        <div class="">
            <img :src="'/storage/' + item.imagePath" :alt="item.name">
        </div>
        <div class="row-span-2 col-span-2 space-y-2 pb-2">
            <!-- TODO : MAKE PACKS DYNAMIC -->
            <p class="font-bold text-lg">{{ item.name }} | {{ item.size }} | Pack of 12</p>
            <p class="font-bold tracking-wider text-primary-400 text-xs">Quantity</p>
            <div>
                <QuantitySelectorCart :quantity="item.quantity" @add="increaseQty" @minus="decreaseQty" />
            </div>
        </div>
        <div class="row-span-2 flex flex-col justify-between items-end">
            <div class="text-secondary-400 tracking-wide text-sm font-bold">GSH {{ item.price }}</div>
            <div class="flex items-center">
                <button class="deleteBtn" @click="deleteItem">delete</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import QuantitySelectorCart from '@/Components/QuantitySelectorCart.vue';

const props = defineProps({
    item: Object,
});

// Define the emit function and events
const emit = defineEmits(['cart-updated', 'qty-increased', 'qty-decreased', 'item-deleted']);

function increaseQty() {
    props.item.quantity++;
    // updateCart(props.item.productId, props.item.quantity);
    emit('qty-increased');
}

function decreaseQty() {
    if (props.item.quantity > 1) {
        props.item.quantity--;
        // updateCart(props.item.productId, props.item.quantity);
        emit('qty-decreased');
    }
}
function deleteItem() {
    emit('item-deleted');
}

function updateCart() {
    emit('cart-updated');
}


</script>
  
<style scoped>
.deleteBtn {
    @apply border-none ring-0 hover:border-none focus:border-none text-neutral-400 text-sm font-semibold uppercase;
}
</style>