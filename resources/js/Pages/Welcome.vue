<template>
    <AppLayout>
        <div>
            <section id="hero" ref="heroSection">
                <HeroSection />
            </section>
            <section id="montValues" ref="montValuesSection">
                <OurValues />
            </section>
            <section id="montProducts" ref="montProductsSection">
                <OurProduct />
            </section>
        </div>
    </AppLayout>
</template>
  
<script setup>
import HeroSection from '@/Frontend/HeroSection.vue';
import OurValues from '@/Frontend/OurValues.vue'; 
import OurProduct from '@/Frontend/OurProduct.vue'; 
import AppLayout from '@/Layouts/AppLayout.vue';

</script>
  
<style scoped></style>
  