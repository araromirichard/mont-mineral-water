<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link, usePage } from '@inertiajs/vue3';

defineProps({
    auth: Object,
})

const defaultShippingAddress = usePage().props.auth.defaultShippingAddress
const ShippingAddresses = usePage().props.auth.shippingAddresses

</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :hasAppPages="false">

        <div class=" h-auto min-h-[70vh] grid grid-cols-1 sm:grid-cols-4 justify-center items-center">
            <div class="bg-primary-500 col-span-1 h-auto sm:h-full block justify-center py-40 space-y-6">
                <div
                    class="space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto">
                    <p class="text-neutral-500 sm:text-white text-xs sm:text-xl font-semibold">Account Overview</p> <span
                        class="flex sm:hidden text-white">|</span>
                    <p class="text-neutral-200 hover:text-secondary-500 ">
                        <Link :href="route('profile.edit')">{{ $page.props.auth.user.first_name }} {{
                            $page.props.auth.user.last_name }}</Link>
                    </p>
                </div>
                <div
                    class="space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto">
                    <p class="text-neutral-500 sm:text-white text-xs sm:text-xl font-semibold">Address List</p> <span
                        class="flex sm:hidden text-white">|</span>
                    <p class="text-neutral-200 hover:text-secondary-500 " v-if="defaultShippingAddress">
                        {{ defaultShippingAddress.address }}, {{ defaultShippingAddress.region }} <br> <small class="text-[12px]">(default Address)</small>
                    </p>
                    <div v-if="!defaultShippingAddress">
                        <template v-if="ShippingAddresses">
                            <p class="text-neutral-200 hover:text-secondary-500 " v-for="address in ShippingAddresses"
                                :key="address.id">
                                {{ address.address }}
                            </p>
                        </template>
                        <p class="text-neutral-200 hover:text-secondary-500 " v-else>
                            No addresses currently saved
                        </p>
                    </div>
                </div>
                <div
                    class="space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto">
                    <Link :href="route('creeate-address')" class="flex text-secondary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Create Address
                    </Link>
                </div>
            </div>
            <div class=" col-span-3 h-full flex container mx-auto min-h-[70vh]">
                <slot />
            </div>
        </div>
    </AppLayout>
</template>
<style scoped></style>