<script setup>
import InputError from '@/Components/InputError.vue';
import FormButton from '@/Components/FormButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';

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
                            <div class="flex justify-center items-center space-x-3 py-2">
                                <span>OR Sign In With </span>
                                <a :href="route('google-redirect')"
                                    class="flex justify-center items-center text-red-500 border-2 border-primary-500 rounded-3xl cursor-pointer hover:bg-primary-500 hover:text-white px-4 py-2 transition ease-in-out duration-300">

                                    <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab"
                                        data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 488 512">
                                        <path fill="currentColor"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                        </path>
                                    </svg>

                                </a>

                            </div>

                            <div>

                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex justify-end items-center sm:items-start w-full min-h-[50vh]">
                    <div class="w-full h-fit  block justify-center items-center bg-neutral-100 p-8 rounded-sm space-y-3">
                        <p class="text-primary-500 font-bold text-base pt-2">New Customer?</p>
                        <p class="text-sm">By creating an account with our store, you will be able to move through the
                            checkout process
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
