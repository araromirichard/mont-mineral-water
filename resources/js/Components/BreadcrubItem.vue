<template>
    <Link :href="href" :class="customClass">
    <slot name="icon"/>
    <slot />
    
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
    customClass: {
        type: String,
    },
});
</script>

<style lang="scss" scoped></style>