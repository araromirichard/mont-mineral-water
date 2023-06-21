<template>
    <Head title="Contact Us" />
    <AppLayout>
        <div class="container mx-auto sm:px-40 py-20 sm:py-24 text-center sm:text-left">
            <div class="grid grid-cols-12 space-y-4">
                <div class="col-span-12 sm:col-span-6">
                    <p class=" text-xl sm:text-[32px] font-bold py-6">Get in Touch with us</p>
                    <p class="flex text-lg sm:text-[20px] w-full sm:w-4/5 px-14 sm:px-0">Have questions about our products
                        or interested
                        in
                        having Mont Mineral Water at your events? Reach out to
                        us for more information. We're here to help!</p>
                    <div class="space-y-8 py-10">
                        <div class="flex flex-col sm:flex-row items-center space-x-4">
                            <img src="/storage/frontend/pin.png" alt="pin icon" class=" w-10 h-auto" />
                            <span
                                class="text-primary-500 text-sm sm:text-lg font-normal leading-5 py-2 sm:py-0 px-8 sm:px-0 w-[60%]">
                                No 18, Swaniker street, Abelemkpe, Accra
                            </span>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center space-x-4">
                            <img src="/storage/frontend/envelop.png" alt="envelop icon" class="w-10 sm:w-[45px] h-auto" />
                            <span
                                class="text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0">
                                Info@Montwater.com
                            </span>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center space-x-4">
                            <img src="/storage/frontend/phone.png" alt="phone icon" class="w-10 h-auto" />
                            <span
                                class="text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0">
                                +233 059 990 4409
                            </span>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center space-x-4">
                            <img src="/storage/frontend/whatsapp.png" alt="whatsapp icon" class="w-10 sm:w-[45px] h-auto" />
                            <span
                                class="text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0">
                                +233 059 990 4409
                            </span>
                        </div>
                    </div>
                </div>
                <div id="map" class="col-span-12 sm:col-span-6 sm:pt-8">
                    <iframe width="100%" height="100%" frameborder="0" style="border:0"
                        src="https://www.google.com/maps?q=No+19%2C+Swaniker+street%2C+Abelemkpe%2C+Accra&output=embed"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <div>
                    <p class=" text-xl sm:text-2xl font-extrabold py-6">Send a Message</p>
                    <div class="w-full flex justify-center items-center">

                        <div class="w-full block justify-center items-center bg-neutral-200 py-8 px-6 sm:px-14 rounded-sm">

                            <form @submit.prevent="submit" class="w-full">
                                <div class="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <div>
                                            <InputLabel for="name" value="Name" class="font-bold mb-2 text-left" />
                                            <TextInputContact id="name" type="text" class="mt-1 block w-full"
                                                v-model="form.name" required autocomplete="name" placeholder="Your Name" />
                                            <InputError class="mt-2" :message="form.errors.name" />
                                        </div>
                                        <div class="mt-4">
                                            <InputLabel for="email" value="Email" class="font-bold mb-2 text-left" />
                                            <TextInputContact id="email" type="email" class="mt-1 block w-full"
                                                v-model="form.email" required autocomplete="email"
                                                placeholder="Email address" />
                                            <InputError class="mt-2" :message="form.errors.email" />
                                        </div>
                                    </div>
                                    <div>
                                        <InputLabel for="message" value="Your Message" class="font-bold mb-2 text-left" />
                                        <TextArea v-model="form.message" placeholder="Write your message" rows="6" />
                                        <InputError class="mt-2" :message="form.errors.message" />
                                    </div>
                                </div>
                                <div class="w-full flex justify-center items-center">
                                    <button
                                        class="block items-center px-10 py-3 mt-8 bg-gray-800 border border-transparent rounded-full font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none  transition ease-in-out duration-150"
                                        :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        Send Message
                                    </button>
                                </div>
                                <div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import InputError from '@/Components/InputError.vue';
import TextInputContact from '@/Components/TextInputContact.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextArea from '@/Components/TextArea.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

import ToastStore from '@/Stores/ToastStore';



const form = useForm({
    email: '',
    name: '',
    message: '',
});

const submit = () => {
    form.post(route('contact.store'), {
        onSuccess: () => {
            form.reset(),
                ToastStore.add({ message: 'message sent successfully!' })
        },
        onError: () => {
            ToastStore.add({ message: 'Failed to send Message, Try again' })
        }
    });
};

</script>

<style lang="scss" scoped></style>