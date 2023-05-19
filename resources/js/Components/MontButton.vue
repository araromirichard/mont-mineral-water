<script setup>

defineProps({
    hasIcon: {
        type: Boolean,
        default: false,
    }
})

</script>

<template>
    <button
        class="inline-flex items-center px-5 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 space-x-2">
        <span>
            <slot></slot>
        </span>
        <slot name="icon" v-if="hasIcon"></slot>
    </button>
</template>


  