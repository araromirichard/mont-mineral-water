<script setup>
import InputError from '@/Components/InputError.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

import FormButton from '@/Components/FormButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AppLayout>
        <div class="container mx-auto my-10 flex justify-center items-center  min-h-[70vh] ">
            <div class="bg-neutral-100 max-w-xl p-8 rounded-sm">
                <p class="text-primary-500 font-bold text-base py-2">Reset Password?</p>
                <form @submit.prevent="submit">
                    <div>
                        <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus
                            autocomplete="username" placeholder="email address" />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="mt-4">

                        <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                            autocomplete="new-password" placeholder="password" />

                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <div class="mt-4">
                        <TextInput id="password_confirmation" type="password" class="mt-1 block w-full"
                            v-model="form.password_confirmation" required autocomplete="new-password"
                            placeholder="re-type password" />

                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <FormButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Reset Password
                        </FormButton>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
