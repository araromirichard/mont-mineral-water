<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-error-400">
            {{ message }}
        </p>
    </div>
</template>
