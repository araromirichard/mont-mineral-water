<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1 text-lg font-semibold leading-6 text-secondary-500 focus:outline-none transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 text-lg font-medium leading-5 text-primary-500 hover:text-neutrals-700 hover:border-b-2 hover:border-secondary-500 focus:outline-none focus:text-neutrals-700 transition duration-150 ease-in-out'
);

</script>

<template>
    <Link :href="href" :class="classes">
    <slot />
    </Link>
</template>
