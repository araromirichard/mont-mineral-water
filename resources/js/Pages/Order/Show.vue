<template>
    <Head :title="pagename" />

    <AdminLayout>
        <template #header>
            <div class="flex items-center gap-3">
                <Link
                    :href="route('admin.orders.index')"
                    class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Orders
                </Link>
                <span class="text-gray-300">/</span>
                <h2 class="font-semibold text-lg text-gray-800">{{ order.order_number }}</h2>
            </div>
        </template>

        <div class="py-8 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto space-y-6">

                <!-- Status banner -->
                <div class="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4">
                    <div class="flex items-center gap-4">
                        <span :class="statusChipClass(order.status)">{{ order.status }}</span>
                        <span class="text-sm text-gray-500">Placed {{ new Date(order.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <Transition name="fade-slide">
                            <div v-if="showStatusForm" class="flex items-center gap-2">
                                <label for="status" class="text-sm font-medium text-gray-700">New status:</label>
                                <select id="status" v-model="form.selectedStatus" class="rounded-md border-gray-300 text-sm py-1.5 focus:ring-secondary-500 focus:border-secondary-500">
                                    <option v-for="optionStatus in statusOptions" :key="optionStatus.value" :value="optionStatus.value">
                                        {{ optionStatus.label }}
                                    </option>
                                </select>
                            </div>
                        </Transition>
                        <button
                            class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary-500 hover:bg-primary-300 transition duration-150 disabled:opacity-50"
                            :disabled="form.processing"
                            @click="handleChangeStatusClick"
                        >
                            <svg v-if="!showStatusForm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {{ showStatusForm ? 'Confirm Update' : 'Change Status' }}
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Left: Order items (2/3 width) -->
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Order items -->
                        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <div class="px-6 py-4 border-b border-gray-100">
                                <h3 class="font-semibold text-gray-800">Order Items</h3>
                            </div>
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="text-xs uppercase tracking-wider text-gray-400 bg-gray-50">
                                        <th class="px-6 py-3 text-left font-semibold">Product</th>
                                        <th class="px-6 py-3 text-right font-semibold">Price</th>
                                        <th class="px-6 py-3 text-right font-semibold">Qty</th>
                                        <th class="px-6 py-3 text-right font-semibold">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-50">
                                    <tr v-for="item in order.order_items" :key="item.id" class="hover:bg-gray-50">
                                        <td class="px-6 py-4 font-medium text-gray-800">{{ item.product_name }}</td>
                                        <td class="px-6 py-4 text-right text-gray-600">GH₵ {{ item.price }}</td>
                                        <td class="px-6 py-4 text-right text-gray-600">{{ item.quantity }}</td>
                                        <td class="px-6 py-4 text-right font-semibold text-gray-800">GH₵ {{ (item.price * item.quantity).toFixed(2) }}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Totals -->
                            <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 space-y-1.5">
                                <div class="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>GH₵ {{ order.subtotal }}</span>
                                </div>
                                <div class="flex justify-between text-sm text-gray-600">
                                    <span>Delivery</span>
                                    <span>GH₵ {{ order.delivery }}</span>
                                </div>
                                <div class="flex justify-between text-base font-bold text-primary-500 pt-2 border-t border-gray-200">
                                    <span>Total</span>
                                    <span>GH₵ {{ order.total }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Shipping address -->
                        <div v-if="order.shipping_address" class="bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div class="px-6 py-4 border-b border-gray-100">
                                <h3 class="font-semibold text-gray-800">Shipping Address</h3>
                            </div>
                            <div class="px-6 py-4 text-sm text-gray-600">
                                {{ order.shipping_address }}
                            </div>
                        </div>
                    </div>

                    <!-- Right: Customer info (1/3 width) -->
                    <div class="space-y-6">
                        <div class="bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div class="px-6 py-4 border-b border-gray-100">
                                <h3 class="font-semibold text-gray-800">Customer</h3>
                            </div>
                            <div class="px-6 py-4 space-y-3">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {{ order.user.first_name.charAt(0).toUpperCase() }}
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-gray-800">{{ order.user.first_name }} {{ order.user.last_name }}</p>
                                        <p class="text-xs text-gray-500">Customer</p>
                                    </div>
                                </div>
                                <div class="space-y-2 pt-2 border-t border-gray-100">
                                    <div class="flex items-start gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <span class="text-gray-600 break-all">{{ order.user.email }}</span>
                                    </div>
                                    <div v-if="order.user.phone" class="flex items-start gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <span class="text-gray-600">{{ order.user.phone }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Order meta -->
                        <div class="bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div class="px-6 py-4 border-b border-gray-100">
                                <h3 class="font-semibold text-gray-800">Order Info</h3>
                            </div>
                            <div class="px-6 py-4 space-y-3 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-gray-500">Order #</span>
                                    <span class="font-medium text-gray-800 text-xs">{{ order.order_number }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-500">Status</span>
                                    <span :class="statusChipClass(order.status)">{{ order.status }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-500">Date</span>
                                    <span class="text-gray-700">{{ new Date(order.created_at).toLocaleDateString('en-GB') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const props = defineProps({
    order: Object,
});

const showStatusForm = ref(false);
const form = useForm({
    selectedStatus: props.order.status,
});

const statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Cancelled', value: 'cancelled' },
    { label: 'Approved', value: 'approved' },
    { label: 'Fulfilled', value: 'fulfilled' }
];

const pagename = computed(() => 'Order Details');

const handleChangeStatusClick = () => {
    if (!showStatusForm.value) {
        showStatusForm.value = true;
        return;
    }
    showStatusForm.value = false;
    form.put(route('admin.orders.update', { order: props.order.id }), {
        selectedStatus: form.selectedStatus,
    });
};

const statusChipClass = computed(() => (status) => {
    const base = 'px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full';
    switch (status) {
        case 'pending':   return `${base} bg-amber-100 text-amber-800`;
        case 'cancelled': return `${base} bg-red-100 text-red-800`;
        case 'approved':  return `${base} bg-green-100 text-green-800`;
        case 'fulfilled': return `${base} bg-blue-100 text-blue-800`;
        default:          return `${base} bg-gray-100 text-gray-800`;
    }
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(8px);
}
</style>
