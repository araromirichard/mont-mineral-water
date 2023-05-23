<script setup>

import InputError from '@/Components/InputError.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

import FormButton from '@/Components/FormButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <AppLayout>
        <div class="container mx-auto my-10 flex justify-center items-center  min-h-[70vh] ">
            <div class="bg-neutral-100 max-w-xl p-8 rounded-sm">
                <p class="text-primary-500 font-bold text-base py-2">Forgot Password?</p>

                <div class="mb-4 text-sm text-gray-600">
                    No problem. Just let us know your email address and we will email you a password
                    reset
                    link that will allow you to choose a new one.
                </div>


                <form @submit.prevent="submit">
                    <div>

                        <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus
                            autocomplete="username" />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <FormButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Register
                        </FormButton>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
