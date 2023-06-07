<template>
    <Head title="Product Details" />
    <AppLayout>
        <div>
            <section id="SingleProduct" ref="SingleProduct" class="grid grid-cols-1 sm:grid-cols-2 py-8">
                <div class="product-images container mx-auto px-0">
                    <div class="image-slider ">
                        <div class="swiper-container flex sm:hidden">
                            <div class="swiper-wrapper  flex flex-1">
                                <div class="swiper-slide flex flex-1" v-for="image in product.images" :key="image">
                                    <img :src="'/storage/' + image"
                                        :alt="'Product Image ' + (product.images.indexOf(image) + 1)" class="" />
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 gap-3 hidden rounded-md px-8">
                        <div class="w-auto h-36 row-span-1 col-span-1 space-y-1">
                            <div class="sm:grid sm:grid-rows-2" style="gap: 8px;">
                                <img v-for="image in product.images.slice(1)" :key="image" :src="'/storage/' + image"
                                    :alt="'Product Image ' + (product.images.indexOf(image) + 2)"
                                    class="h-auto overflow-hidden" />
                            </div>
                        </div>
                        <div class="w-full h-full row-span-2 col-span-2">
                            <img :src="'/storage/' + product.images[0]" :alt="'Product Image 1'" />
                        </div>
                    </div>
                </div>
                <div class="product-details px-8 pt-4 sm:pt-0 pb-6">
                    <p class="font-bold text-xl text-primary-500">{{ product.name }} | {{ product.size }}</p>
                    <p class="text-secondary-400 font-semibold text-base">GHS {{ product.price }}</p>
                    <p v-html="product.description" class="pt-2 w-full sm:max-w-sm"></p>
                    <div class="flex space-x-2 py-4" v-if="!disableBtn">
                        <QuantitySelector :quantity="quantity" @minus="decreaseqty" @add="increaseqty" />
                        <button @click.stop="handleAddToCart"
                            class="inline-flex items-center px-6 sm:px-20 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-2">
                            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.66668 7.99992V4.66658C4.66668 2.82492 6.16251 1.33325 8.00001 1.33325C9.84168 1.33325 11.3333 2.82909 11.3333 4.66658V7.99992M1.33334 6.33325H14.6667V19.6666H1.33334V6.33325Z"
                                    stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <span>
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section id="RelatedProduct" class="py-12" ref="RelatedProduct">
                <div>
                    <div class="text-center text-primary-500 font-semibold text-2xl py-8">
                        Also Shop
                    </div>
                    <div
                        class=" inline-block sm:flex flex-shrink-0 container mx-auto space-y-3 sm:space-y-0 space-x-0 sm:space-x-6">
                        <ProductCardSmall v-for="(product, index) in otherProducts" :key="index" :product="product" />
                    </div>
                </div>
            </section>
        </div>
    </AppLayout>
</template>
  
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import QuantitySelector from '@/Components/QuantitySelector.vue';
import Swiper from 'swiper';
import { onMounted, ref } from 'vue';
import ProductCardSmall from '@/Components/ProductCardSmall.vue';
import { addToCart } from '@/Stores/cart';

import { Head } from '@inertiajs/vue3';

const props = defineProps({
    product: Object,
    otherProducts: Array,
})


const isMobile = window.innerWidth <= 768;

const quantity = ref(10);
const disableBtn = ref(false);

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

// Initialize Swiper when the component is mounted
onMounted(() => {
    if (isMobile) {
        new Swiper('.swiper-container', {
            slidesPerView: 1, // Show only one slide per view
            spaceBetween: 0, // Remove any spacing between slides
            pagination: {
                el: '.swiper-pagination',
            },
        });

    }
});
</script>
  
<style scoped>
.swiper-container {
    width: 100%;
    overflow: hidden;
}

.swiper-slide img {
    width: 100%;
    height: auto;
}

</style>