<template>
  <Link :href="route('show-product', { product: product.id })"
    class="product-card border border-neutral-100 text-center space-y-2">

  <div class="product-card border border-neutral-100 text-center space-y-2">
    <img :src="'/storage/' + product.image" alt="Dummy Product" class="product-image">
    <p class="product-name text-lg font-bold">{{ product.name }} - {{ product.size }}</p>
    <p class="pack-size">{{ packSize }}</p>
    <p class="product-price ">GHS {{ product.price }}</p>
    <hr class="mx-6 text-neutral-200">
    <div class="product-actions pt-2 pb-3 space-x-2">
      <QuantitySelector :quantity="quantity" @minus.stop.prevent="decreaseqty" @add.stop.prevent="increaseqty" />
      <button @click.prevent="handleAddToCart"
        class="inline-flex items-center px-4 py-2 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-normal hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-2">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.66668 7.99992V4.66658C4.66668 2.82492 6.16251 1.33325 8.00001 1.33325C9.84168 1.33325 11.3333 2.82909 11.3333 4.66658V7.99992M1.33334 6.33325H14.6667V19.6666H1.33334V6.33325Z"
            stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" class="w-4 h-3" />
        </svg>
        <span>
          Add to Cart
        </span>
      </button>
    </div>
  </div>
  </Link>
</template>

<script setup>
import { addToCart } from '@/Stores/cart'
import { Link } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import QuantitySelector from './QuantitySelector.vue';

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


// add product to cart...
const handleAddToCart = () => {
  let productId = props.product.id;
  addToCart(productId, quantity.value);
  disableBtn.value = true;
};

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
