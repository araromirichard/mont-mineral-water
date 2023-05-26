<template>
    <div class="hidden sm:block">
        <div class="wrapper h-[63vh] grid grid-cols-12">
            <div class="flex flex-col justify-center sm:col-span-7 md:col-span-6 h-full bg-primary-500 border-none md:px-10 xl:px-16 py-6">
                <p class=" font-extrabold sm:text-xl tracking-wider md:text-5xl text-secondary-400 sm:max-w-xl md:max-w-xl">Best enjoyed with
                    great company </p>
                <p class=" text-2xl tracking-wider text-neutral-100 py-4">Don’t Drink Alone</p>
            </div>
            <div class="flex-1 h-full bg-cover bg-no-repeat sm:col-span-5 md:col-span-6"
                style="background-image: url('/storage/frontend/shopHero.png');"></div>
        </div>
    </div>
    <div class="block sm:hidden">
        <div class="relative h-[90vh]">
            <div class="absolute inset-0 flex flex-col items-center ">
                <div class="text-white text-center flex flex-col items-center z-10 w-full h-[50%] py-10"
                    style="background: linear-gradient(180deg, #051C2C 0%, rgba(5, 28, 44, 0) 96.59%);">
                    <p class="text-secondary-400 font-bold text-2xl w-60">Best enjoyed with
                        great company</p>
                    <p class="captionTxt">Don’t Drink Alone</p>
                </div>
                <div class="absolute inset-0">
                    <img src="/storage/frontend/shoppageM.png" alt="Mobile Hero Image" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

</script>
  
<style scoped>
.captionTxt {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 137.4%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05em;
    color: #FAF9F6;
}
</style>
  