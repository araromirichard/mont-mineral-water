<template>
  <div class="p-6 block justify-center">
    <div class="flex items-center justify-end w-full">
      <button @click="closeModal" class="p-2 hover:bg-white text-neutral-400 rounded-full transition duration-75 ease-in">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex justify-center items-center text-primary-500 font-bold text-2xl">
      Your cart
    </div>
    <div v-if="cartItems.length > 0">
      <CartItem v-for="item in cartItems" :key="item.productId" :item="item" @cart-updated="updateCart(item.productId, item.quantity)" @item-deleted="deleteCartItem(item.productId)" @qty-increased="updateCart(item.productId, item.quantity)" @qty-decreased="updateCart(item.productId, item.quantity)"/>
      <div class="cartActions grid grid-cols-4 border-y border-spacing-1 border-gray-300 py-4">
        <p class="col-span-3 text-secondary-400 font-bold tracking-wide text-base">
          Subtotal ({{ totalQuantity }} items):
        </p>
        <p class="flex m-0 space-x-2 items-center justify-end">
          <span class="uppercase font-semibold text-primary-500 tracking-wide text-xs">ghs</span>
          <span class="text-lg font-bold tracking-wide text-secondary-400">{{ subtotal }}</span>
        </p>
      </div>
      <div class="flex justify-end items-center py-4">
        <IconButton href="#" btn-inner-text="Proceed to Checkout">
          Proceed to Checkout
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 pl-2 animate-pulse font-semibold">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </IconButton>
      </div>
    </div>
    <div v-else>
      <div class="flex items-center justify-center py-4">
        <img class="w-68 h-64" src="/empty_cart.png" alt="An Empty cart" />
      </div>
      <div class="block items-center justify-center">
        <p class="text-center text-primary-500 text-base font-bold">Your Cart is Empty</p>
      </div>
      <div class="flex items-center justify-center mx-auto py-2" style="max-width: 250px;">
        <p class="text-center">Looks like you haven't added anything to your cart yet.</p>
      </div>
      <div class="flex justify-center items-center mx-auto pb-4">
        <IconButton href="#" btn-inner-text="Start Shopping">
          Start Shopping
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 pl-2 animate-pulse font-semibold">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
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
import ToastStore from '@/Stores/ToastStore';

const cartItems = ref([]);
const subtotal = ref(0);

const emit = defineEmits(['close-modal']);

const closeModal = () => {
  emit('close-modal');
};

const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const fetchCartItems = async () => {
  try {
    const response = await axios.get('/api/cart');
    const { cartItems: items, subtotal: subTotal } = response.data;
    cartItems.value = items;
    subtotal.value = subTotal;
    console.log(cartItems.value);
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
};

const updateCart = async (productId, quantity) => {
  try {
   const {data} = await axios.patch('/api/cart/update', { product_id: productId, quantity });
  //  console.log(JSON.stringify(data.message, null, 2));
   ToastStore.add({message: data.message});
    fetchCartItems();
  } catch (error) {
    console.error('Error updating cart:', error);
  }
};

const deleteCartItem = async (productId) => {
  try {
   const {data} = await axios.delete(`/api/cart/${productId}`);
    ToastStore.add({message: data.message});
    fetchCartItems();
  } catch (error) {
    console.error('Error deleting item from cart:', error);
  }
};

onMounted(fetchCartItems);
</script>

<style lang="scss" scoped></style>
