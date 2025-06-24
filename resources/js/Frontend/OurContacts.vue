<template>
    <div class="flex flex-col justify-center py-0 sm:py-4">
        <p class=" text-primary-500 text-lg sm:text-xl font-semibold text-center py-10 sm:py-8">Contact Us</p>
        <div class="container mx-auto block sm:flex items-center justify-evenly sm:space-x-6 py-0 sm:py-6">
            <OurValuesIcons class="">
                <template #icon>
                    <img src="/storage/frontend/pin.png" alt="pin icon" class=" w-10 sm:w-12 h-auto" />
                </template>
                <span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5 w-[68%]">
                    No 18, Swaniker street, Abelemkpe, Accra
                </span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/envelop.png" alt="envelop icon" class="w-10 sm:w-[67px] h-auto" />
                </template>
                <span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5 sm:mt-4">
                    Info@Montwater.com
                </span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/phone.png" alt="phone icon" class="w-10 sm:w-12 h-auto" />
                </template>
                <span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5">
                    +233 059 990 4409
                </span>
            </OurValuesIcons>
            <OurValuesIcons>
                <template #icon>
                    <img src="/storage/frontend/whatsapp.png" alt="whatsapp icon" class="w-10 sm:w-[66px] h-auto" />
                </template>
                <span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5">
                    +233 059 990 4409
                </span>
            </OurValuesIcons>
        </div>

    </div>
</template>

<script setup>
import OurValuesIcons from '@/Components/OurValuesIcons.vue';


</script>

<style  scoped></style>