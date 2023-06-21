<template>
    <div class="flex flex-col justify-center">
        <div class="container mx-auto block sm:flex justify-evenly items-center">
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/waterwave.png" alt="waterdrop and wave" class=" w-20 h-auto sm:w-auto sm:h-[90px]" />
                </template>
                <span class="text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5">Natural
                    Minerals</span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/responsiblysourced.png" alt="responsiblysourced icon"
                        class=" w-20 h-auto" />
                </template>
                <span class="text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5">Responsibly
                    Sourced
                </span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/recycled.png" alt="recycled icon" class=" w-20 h-auto" />
                </template>
                <span class="text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5">100%
                    Recyclable</span>
            </OurValuesIcons>
        </div>
        <div class="flex justify-center items-center pt-4 pb-6">
            <MontButton class="">
                Learn More
            </MontButton>
        </div>
    </div>
</template>

<script setup>
import OurValuesIcons from '@/Components/OurValuesIcons.vue';
import MontButton from '@/Components/MontButton.vue'


</script>

<style  scoped></style>