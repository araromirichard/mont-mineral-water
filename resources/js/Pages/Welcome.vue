<template>
    <Head title="Home" />

    <AppLayout>
        <div>
            <section id="hero" ref="heroSection">
                <HeroSection />
            </section>
            <section id="montValues" ref="montValuesSection">
                <OurValues />
            </section>
            <section id="montProducts" ref="montProductsSection">
                <OurProduct :products="Products" />
            </section>
            <section id="montContact" ref="montContactSection">
                <OurContacts />
            </section>
        </div>
    </AppLayout>
</template>
  
<script setup>
import HeroSection from "@/Frontend/HeroSection.vue";
import OurValues from "@/Frontend/OurValues.vue";
import OurProduct from "@/Frontend/OurProduct.vue";
import OurContacts from "@/Frontend/OurContacts.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";


const Products = ref(null);


const fetchProducts = () => {
    axios
        .get(`/api/shop`)
        .then(response => {
            console.log(response.data);
            Products.value = response.data;

        })
        .catch(error => {
            // Handle error
            console.log(error);

        });
};

onMounted(() => {
    fetchProducts();
});
</script>
  
<style scoped></style>
  