<template>
    <div>
        <div class="container mx-auto block sm:flex justify-evenly items-center">
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/waterwave.png" alt="waterdrop and wave" class=" w-20 h-auto"/>
                </template>
                <span>Natural Minerals</span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/waterwave.png" alt="waterdrop and wave" class=" w-20 h-auto"/>
                </template>
                <span>Natural Minerals</span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/waterwave.png" alt="waterdrop and wave" class=" w-20 h-auto"/>
                </template>
                <span>Natural Minerals</span>
            </OurValuesIcons>
        </div>
    </div>
</template>

<script setup>
import OurValuesIcons from '@/Components/OurValuesIcons.vue';


</script>

<style  scoped></style>