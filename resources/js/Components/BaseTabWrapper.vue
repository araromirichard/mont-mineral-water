<template>
    <div>
        <p class="text-base font-semibold text-primary-500">Last 5 {{ selectedTitle }}</p>
        <div class="flex w-full bg-white outline-none mt-4 text-gray-500 border-b border-gray-200 space-x-1">
            <button v-for="(title, index) in tabTitle" :key="index" @click="selectedTitle = title"
                class="bg-gray-100 text-neutral-500 focus:text-primary-500 focus:border-b-4 focus:bg-gray-200 focus:border-primary-500 focus:font-semibold px-6 py-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-center ">
                {{ title }}
            </button>
        </div>
        <slot />
    </div>
</template>
  
<script setup>
import { ref, useSlots, provide, onMounted } from "vue";
const slots = useSlots();

const tabTitle = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref("USERS");

provide("selectedTitle", selectedTitle);

onMounted(() => {
    selectedTitle.value = "USERS"; // Set the default selectedTitle to "USERS"
});
</script>
  
<style lang="scss" scoped></style>
