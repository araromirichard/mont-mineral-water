<template>
    <div class="p-6 block justify-center">
        <div class="flex items-center justify-end w-full">
            <button @click="closeModal"
                class="p-2 hover:bg-white text-neutral-400 rounded-full transition duration-75 ease-in">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </div>
        <div class="flex justify-center items-center text-primary-500 font-bold text-2xl">
            Your cart
        </div>
        <div v-if="aaa > 0">
            <CartItem />
            <!-- <CartItem />
            <CartItem /> -->
            <div class="cartActions grid grid-cols-4 border-y border-spacing-1 border-gray-300 py-4">
                <p class=" col-span-3 text-secondary-400 font-bold tracking-wide text-base">Subtotal (20 items):</p>
                <p class="flex m-0 space-x-2 items-center justify-end">
                    <span class="uppercase font-semibold text-primary-500 tracking-wide text-xs">ghs</span>
                    <span class=" text-lg font-bold tracking-wide text-secondary-400">550</span>
                </p>

            </div>
            <div class="flex justify-end items-center py-4">
                <IconButton href="#" btn-inner-text="Proceed to Checkout">
                    Proceed to Checkout
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </IconButton>
            </div>
        </div>
        <div v-else>
            <div class="flex items-center justify-center py-4">
                <img class=" w-68 h-64" src="/empty_cart.png
                   " alt="An Empty cart" />
            </div>
            <div class="block items-center justify-center">
                <p class="text-center text-primary-500 text-base font-bold">Your Cart is Empty</p>
            </div>
            <div class="flex items-center justify-center mx-auto py-2" style="max-width: 250px;">
                <p class="text-center">Looks like you haven’t added
                    anything to your cart yet.</p>
            </div>
            <div class="flex justify-center items-center mx-auto pb-4">
                <IconButton href="#" btn-inner-text="Start Shopping">
                    Start Shopping
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </IconButton>
            </div>
        </div>

    </div>
</template>

<script setup>
import CartItem from '@/Components/CartItem.vue';
import IconButton from '@/Components/IconButton.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const cartItems = ref([]);
const subtotal = ref(0);

const emit = defineEmits(['close-modal']);

const closeModal = () => {
    emit('close-modal');
};
const aaa = computed(() => {
  // Retrieve item from local storage
  const item = localStorage.getItem('cartCount');
  
  // Return the item if it exists, or a default value if it doesn't
  return item ? JSON.parse(item) : null;
});

onMounted(async () => {
    try {
        const response = await axios.get('/api/cart');
        const { cartItems: items, subtotal: subTotal } = response.data;
        cartItems.value = items;
        subtotal.value = subTotal;
        console.log(cartItems.value)
    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
});
</script>

<style lang="scss" scoped></style>