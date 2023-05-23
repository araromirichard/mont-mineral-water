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
        ? 'block w-full pl-3 pr-4 py-2 border-l-4 border-primary-500 text-left text-base font-bold text-primary-500 bg-neutrals-50 focus:outline-none focus:text-primary-500 focus:bg-neutrals-50 transition duration-150 ease-in-out'
        : 'block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-neutrals-700 hover:text-gray-800 hover:bg-neutral-100 hover:border-neutrals-300 focus:outline-none focus:text-neutrals-700 focus:bg-neutrals-100 focus:border-neutrals-300 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
    <slot />
    </Link>
</template>
