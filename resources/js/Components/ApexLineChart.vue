<template>
    <div>
        <apexchart type="line" :options="options" :series="series" />
    </div>
</template>
  
<script setup>
const props = defineProps({
    options: Object,
    series: Array,
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
  