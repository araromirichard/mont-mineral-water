<template>
    <Head :title="pagename" />

    <AdminLayout>
        <template #header>
            <Link :href="route('admin.users.index')"
                class="bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md">Back
            </Link>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight py-4">{{ fullname }}'s Details Page</h2>
        </template>
        <div class="px-8 py-4">
            <div class="bg-neutrals-50 rounded-lg shadow-md p-4 max-w-md">
                <h2 class="text-xl font-bold mb-4">{{ fullname }}</h2>
                <div class="flex flex-row space-x-4">
                    <div class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                        <p class="text-gray-700 text-2xl">{{ initials }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500 mb-2">{{ user.email }}</p>
                        <p class="text-gray-500">{{ user.phone }}</p>
                        <p class="text-gray-500">{{ user.address }}</p>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
  
<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const initials = computed(() => {
    const firstInitial = props.user.first_name.charAt(0).toUpperCase();
    const lastInitial = props.user.last_name.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
});

const pagename = computed(() => {
    return props.user.first_name + ' ' + 'Details';
})
const fullname = computed(() => {
    return props.user.first_name + ' ' + props.user.last_name;
})
</script>
  