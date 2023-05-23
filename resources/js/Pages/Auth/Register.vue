<script setup>

import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import FormButton from '@/Components/FormButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AppLayout>
        <div class="container mx-auto my-10 flex justify-center items-center  min-h-[70vh] ">
            <div class="bg-neutral-100 max-w-xl p-8 rounded-sm">
                <p class="text-primary-500 font-bold text-base py-2">Registered Customers</p>
                <form @submit.prevent="submit" class="space-y-3 ">
                    <div class="flex flex-wrap -mx-2 space-y-2 sm:space-y-0">
                        <div class="w-full md:w-1/2 px-2">
                            <div>

                                <TextInput id="first_name" type="text" class="mt-1 block w-full" v-model="form.first_name"
                                    required autofocus autocomplete="first_name" placeholder="first name" />
                                <InputError class="mt-2" :message="form.errors.first_name" />
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-2">
                            <div>
                                <TextInput id="last_name" type="text" class="mt-1 block w-full" v-model="form.last_name"
                                    required autofocus autocomplete="last_name" placeholder="last name" />
                                <InputError class="mt-2" :message="form.errors.last_name" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0">
                        <div class="w-full md:w-1/2 px-2">
                            <div>
                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                                    autocomplete="username" placeholder="email address" />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-2">
                            <div>
                                <TextInput id="phone" type="tel" class="mt-1 block w-full" v-model="form.phone" required
                                    autocomplete="tel" placeholder="phone number" />
                                <InputError class="mt-2" :message="form.errors.phone" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                            autocomplete="new-password" placeholder="password" />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>
                    <div class="mt-4">
                        <TextInput id="password_confirmation" type="password" class="mt-1 block w-full"
                            v-model="form.password_confirmation" required autocomplete="new-password"
                            placeholder="Re-type password" />
                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                    </div>
                    <div class="flex items-center justify-end mt-6 py-4">
                        <FormButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Register
                        </FormButton>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
