<template>
  <Link :href="route('show-product', { product: product.id })"
    class="product-card border border-neutral-100 text-center space-y-2">

  <div class="product-card border border-neutral-100 text-center space-y-2">
    <img :src="'/storage/' + product.image" alt="Dummy Product" class="product-image">
    <p class="product-name text-lg font-bold">{{ product.name }} - {{ product.size }}</p>
    <p class="pack-size">{{ packSize }}</p>
    <p class="product-price ">GHS {{ product.price }}</p>
    <hr class="mx-6 text-neutral-200">
    <div class="product-actions pt-2 pb-3 space-x-3">
      <Link :href="route('show-product', { product: product.id })"
        class="inline-flex items-center px-5 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 space-x-2">
      See Details
      </Link>
    </div>
  </div>
  </Link>
</template>

<script setup>
import QuantitySelector from '@/Components/QuantitySelector.vue';
import AddToCartButton from '@/Components/AddToCartButton.vue';
import { addToCart } from '@/Stores/cart'
import { Link } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const props = defineProps({
  product: Object
});
const quantity = ref(10);

function increaseqty() {
  quantity.value++;
}
function decreaseqty() {
  if (quantity.value > 10) {
    quantity.value--;
  }
}

function handleAddToCart() {
  let productId = props.product.id;
  addToCart(productId, quantity.value);
}

const packSize = computed(() => {
  switch (props.product.size) {
    case '330 ML':
      return 'Pack of 24 bottles';
    case '500 ML':
      return 'Pack of 15 bottles';
    case '1 Litre':
      return 'Pack of 12 bottles';
    default:
      return '';
  }
});

</script>

<style scoped>
.product-card {
  @apply inline-block w-full sm:w-[350px] shadow-sm;
}

.product-image {
  @apply w-full h-auto object-cover;
}

.product-actions {
  @apply flex justify-center items-center;
}

.product-price {
  @apply text-base font-semibold text-secondary-400;
}

.product-name {
  @apply text-lg text-primary-500 font-bold;
}
</style>
