<template>
    <AppLayout>
        <div>
            <section id="hero">
                <HeroSection />
            </section>
            <section id="montValues">
                <OurValues />
            </section>
            <!-- <section id="montProducts">
                <OurValues />
            </section> -->
        </div>
    </AppLayout>
</template>

<script setup>
import HeroSection from '@/Frontend/HeroSection.vue';
import OurValues from '@/Frontend/OurValues.vue';
import AppLayout from '@/Layouts/AppLayout.vue';


</script>

<style scoped></style>