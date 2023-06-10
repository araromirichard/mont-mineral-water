<template>
    <div class="grid grid-cols-4 mt-6 space-x-4 py-3">
        <div class="relative">
            <img :src="'/storage/' + item.imagePath" :alt="item.name">
            <span class="badge bg-secondary-400 w-5 h-5 flex justify-center items-center">{{ item.quantity }}</span>
        </div>

        <div class="row-span-2 col-span-2 space-y-2 pb-2">
            <!-- TODO : MAKE PACKS DYNAMIC -->
            <p class="font-bold text-xs sm:text-base">{{ item.name }} | {{ item.size }} | {{ item.pack_size }}</p>

        </div>
        <div class="row-span-2 flex flex-col justify-between items-end">
            <div class="text-secondary-400 tracking-normal text-xs sm:text-sm font-bold">GSH {{ item.price }}</div>

        </div>
    </div>
</template>
  
<script setup>

const props = defineProps({
    item: Object,
});




</script>
  
<style scoped>
.deleteBtn {
    @apply border-none ring-0 hover:border-none focus:border-none text-neutral-400 text-sm font-semibold uppercase;
}

.badge {
    position: absolute;
    top: -4px;
    right: -2px;
    padding: 2px;
    font-size: 10px;
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    background-color: #25ACF8;
    border-radius: 50%;
}
</style>