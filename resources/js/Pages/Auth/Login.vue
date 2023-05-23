<script setup>
import InputError from '@/Components/InputError.vue';
import FormButton from '@/Components/FormButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AppLayout>
        <div class="container mx-auto min-h-screen flex justify-center items-center">
            <div class="flex flex-col-reverse sm:flex-row py-6 sm:py-0 sm:space-x-16">
                <div class="w-full flex justify-center items-center min-h-[50vh] bg-neutral-100">
                    <div class="w-full block justify-center items-center bg-neutral-100 p-8 rounded-sm">
                        <p class="text-primary-500 font-bold text-base py-2">Registered Customers</p>
                        <form @submit.prevent="submit" class="w-full">
                            <div>
                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                                    autofocus autocomplete="username" placeholder="Email address" />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>
                            <div class="mt-4">
                                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password"
                                    required autocomplete="current-password" placeholder="password" />
                                <InputError class="mt-2" :message="form.errors.password" />
                            </div>
                            <div class="flex flex-col items-center mt-8 space-y-2">
                                <FormButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Log in
                                </FormButton>
                                <Link v-if="canResetPassword" :href="route('password.request')"
                                    class="text-sm flext w-full text-right sm:text-center text-secondary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Forgot your password?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex justify-end items-center sm:items-start w-full min-h-[50vh]">
                    <div class="w-full h-fit  block justify-center items-center bg-neutral-100 p-8 rounded-sm space-y-3">
                        <p class="text-primary-500 font-bold text-base pt-2">New Customer?</p>
                        <p class="text-sm">By creating an account with our store, you will be able to move through the checkout process
                            faster. </p>
                        <Link :href="route('register')"
                            class="block items-center text-center w-full px-4 py-3 bg-gray-800 border border-transparent rounded-2xl font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">

                        Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
