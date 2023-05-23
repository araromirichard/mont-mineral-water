<template>
    <AppLayout>
        <div>
            <section id="shophero" ref="shopheroRef">
                <ShopHero />
            </section>

            <section id="products" ref="productsRef">
                <div class="p-10 block sm:flex justify-around items-center space-y-8 sm:space-y-0 space-x-0 sm:space-x-8">
                    <ProductCard v-for="(product, index) in products" :key="index" :ref="'productCardRef' + index"
                        :product="product" />
                </div>
            </section>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AppLayout from '@/Layouts/AppLayout.vue';
import ShopHero from '@/Components/ShopHero.vue';
import ProductCard from '@/Components/ProductCard.vue';

gsap.registerPlugin(ScrollTrigger);

const shopheroRef = ref(null);
const productsRef = ref(null);
const productCardRefs = ref([]);

defineProps({
    products: Array
})

onMounted(() => {
    gsap.fromTo(
        shopheroRef.value,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.from(productCardRefs.value, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: productsRef.value,
            start: 'top bottom-=100',
            end: 'bottom bottom-=100',
            scrub: true,
        },
    });
});

</script>

<style scoped></style>
