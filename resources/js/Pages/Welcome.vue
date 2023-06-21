<template>
    <Head title="Home" />

    <AppLayout @scrollToContact="scrollToContact">
        <div>
            <section id="hero" ref="heroSection">
                <HeroSection />
            </section>
            <section id="montValues" ref="montValuesSection">
                <OurValues />
            </section>
            <section id="montProducts" ref="montProductsSection">
                <OurProduct :disableScrollEffect="isScrollingToContact" />
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
import { onMounted, ref } from "vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
    contact: Boolean,
});

const montContactSection = ref(null);
const isScrollingToContact = ref(false);

function scrollToContact() {
    const contactSection = document.getElementById("montContact");
    if (contactSection) {
        isScrollingToContact.value = true; // Disable scroll effect temporarily
        const scrollTop = contactSection.offsetTop;
        const scrollOptions = {
            top: scrollTop,
            behavior: "smooth",
        };
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollOptions);
        } else {
            window.scrollTo(scrollOptions.top, 0);
        }
        setTimeout(() => {
            isScrollingToContact.value = false; // Enable scroll effect after scroll animation is complete
        }, 1000); // Adjust the timeout duration as needed
    }
}


onMounted(() => {
    if (props.contact) {
        scrollToContact();
    }
});
</script>
  
<style scoped></style>
  