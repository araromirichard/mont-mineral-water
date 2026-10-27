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
        ? 'flex items-center w-full px-3 py-2.5 rounded-lg text-white bg-white/10 border-l-4 border-secondary-300 font-semibold text-sm transition duration-150 ease-in-out'
        : 'flex items-center w-full px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent font-medium text-sm transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
