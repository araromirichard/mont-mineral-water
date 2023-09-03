<template>
    <div>
        <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
    </div>
</template>
    
<script setup>
import { defineProps } from "vue";

const props = defineProps({
    options: Object,
    series: Array,
});


</script>
    
<style lang="scss" scoped></style>
  