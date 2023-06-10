<template>
    <DashboardWrapper>
        <div class="container mx-auto flex items-center justify-center sm:pt-32 sm:pb-8">
            <div class="bg-neutral-100 max-w-xl p-8 rounded-sm">
                <p class="text-primary-500 font-bold text-base py-2">New Shipping Address</p>
                <form @submit.prevent="submit" class="space-y-3 ">
                    <div class="mt-4">
                        <TextInput id="address" type="text" class="mt-1 block w-full" v-model="form.address" required
                            autocomplete="address" placeholder="address" />
                        <InputError class="mt-2" :message="form.errors.address" />
                    </div>
                    <div class="mt-4">
                        <TextInput id="appartment" type="text" class="mt-1 block w-full" v-model="form.apartment" required
                            autocomplete="appartment" placeholder="Apartment, suite, etc. (optional)" />
                        <InputError class="mt-2" :message="form.errors.appartment" />
                    </div>
                    <div class="mt-4">
                        <TextInput id="contact_phone" type="tel" class="mt-1 block w-full" v-model="form.contact" required
                            autocomplete="tel" placeholder="Contact phone number" />
                        <InputError class="mt-2" :message="form.errors.contact_phone" />
                    </div>
                    <div class="flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0">
                        <div class="w-full md:w-1/2 px-2">
                            <div>
                                <TextInput id="region" type="text" class="mt-1 block w-full" v-model="form.region" required
                                    autocomplete="region" placeholder="region address" />
                                <InputError class="mt-2" :message="form.errors.region" />
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-2">
                            <div>
                                <TextInput id="district" type="text" class="mt-1 block w-full" v-model="form.district"
                                    required autocomplete="district" placeholder="district" />
                                <InputError class="mt-2" :message="form.errors.district" />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-end mt-6 py-4">
                        <FormButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Register
                        </FormButton>
                    </div>
                </form>
            </div>
        </div>
    </DashboardWrapper>
</template>

<script setup>
import DashboardWrapper from "@/Pages/DashboardWrapper.vue";
import InputError from '@/Components/InputError.vue';
import FormButton from '@/Components/FormButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import IconButton from '@/Components/IconButton.vue';

defineProps({
    orders: Object,
    filters: Object,
})

const form = useForm({

    address: '',
    apartment: '',
    contact: '',
    region: '',
    district: '',

});


const submit = () => {
    form.post(route('save-address'), {
        onSuccess: () => {
            form.reset()
        }
    });
}
</script>

<style lang="scss" scoped></style>