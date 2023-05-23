<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PaginationCom from '@/Components/PaginationCom.vue'
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, computed, watch, defineProps } from 'vue';


const props = defineProps({
    users: Object,
    filters: Object,
    user: Object,
});

const pageTitle = ref('Users');
const search = ref(props.filters.search);
const perPage = ref(5);

const filteredUsers = computed(() => {
    return props.users.data;
});

const fetchUsers = () => {
    router.get('/admin/users', { perPage: perPage.value, search: search.value }, {
        preserveState: true,
        replace: true,
    })
};


function showUserDetails(userId) {
    router.get(route('admin.users.show', { id: userId }));
};

watch(search, (value) => {
    router.get('/admin/users', { search: value, perPage: perPage.value }, {
        preserveState: true,
        replace: true,
    })
});

</script>

<template>
    <Head title="Users" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
        </template>
        <!-- <pre>{{ filteredUsers }}</pre> -->
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-md sm:rounded-lg">

                    <div class="p-2 rounded-sm relative overflow-x-auto">
                        <div class="flex justify-between items-center">
                            <div class="pb-4 bg-white dark:bg-gray-900">
                                <label for="table-search" class="sr-only">Search</label>
                                <div class="relative mt-1">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="table-search"
                                        class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-secondary-500 focus:border-blue-500"
                                        placeholder="Search for users" v-model="search">
                                </div>
                            </div>
                            <div class="flex px-2">
                                <select v-model="perPage" @change="fetchUsers"
                                    class="py-2 px-6 w-full rounded-md bg-gray-100 border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                    <option value="5">5 Per Page</option>
                                    <option value="10">10 Per Page</option>
                                    <option value="15">15 Per Page</option>
                                </select>
                            </div>
                        </div>
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        User name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" class="px-6 py-3 flex justify-center">
                                        Actions
                                        <span class="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="filteredUsers && filteredUsers.length > 0">
                                    <tr class="bg-white border-t hover:bg-gray-50 " v-for="user in filteredUsers"
                                        :key="user.id">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2">
                                            {{ user.first_name }} {{ user.last_name }}
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ user.email }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ user.phone }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ user.address }}
                                        </td>
                                        <td class="px-6 py-4 flex justify-center items-center space-x-2">
                                            <button @click="showUserDetails(user.id)"
                                                class="p-1 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-secondary-300 hover:font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else>
                                    <td colspan="5"
                                        class=" text-center py-6 text-lg text-primary-500 font-semibold">
                                        No Users available.</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="m-2 p-2 flex justify-end">

                            <PaginationCom :links="users.links" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>