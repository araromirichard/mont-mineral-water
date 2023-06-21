<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
    btnInnerText: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Link :href="href"
        class="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out bg-primary-500 rounded-full shadow-md group">
    <span
        class="absolute inset-0 flex items-center justify-center w-full h-full text-neutral-200 duration-300 -translate-x-full bg-secondary-400 group-hover:translate-x-0 ease">
        {{ btnInnerText }}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 pl-2 animate-pulse font-semibold">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
    </span>
    <slot />
    </Link>
</template>
