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
            <section id="contact-mont" ref="montContactSection">
                <OurContacts />
            </section>
        </div>
    </AppLayout>
</template>
  
<script setup>
import HeroSection from '@/Frontend/HeroSection.vue';
import OurValues from '@/Frontend/OurValues.vue';
import OurProduct from '@/Frontend/OurProduct.vue';
import OurContacts from '@/Frontend/OurContacts.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { onBeforeUnmount, onMounted, nextTick, ref } from 'vue';


const props = defineProps({
    contact: Boolean,
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const contactRef = ref(null);

onMounted(async () => {
    await nextTick();
    if (props.contact) {
        const element = contactRef.value;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            element.classList.add('scroll-into-view');
            scrollToTop();
        }
    }
});

onBeforeUnmount(() => {
    const element = contactRef.value;
    if (element) {
        element.classList.remove('scroll-into-view');
        window.scrollTo(0, 0);
    }
});
</script>
  
<style scoped>
.scroll-into-view {
    scroll-margin-top: 100vh;
}
</style>
  