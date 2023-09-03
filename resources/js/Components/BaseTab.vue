<template>
    <div v-show="title === selectedTitle">
        <slot />
    </div>
</template>
  
<script setup>
import { inject } from "vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});

const selectedTitle = inject("selectedTitle");
</script>
  
<style lang="scss" scoped></style>