<template>
    <Head :title="pagename" />

    <AdminLayout>
        <template #header>
            <Link :href="route('admin.orders.index')"
                class="bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md">
            Back
            </Link>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight py-4">{{ order.order_number }}'s Details Page</h2>
        </template>
        <div class="container mx-auto px-6 md:px-8 py-8">
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
                <div class="p-4">
                    <h1 class="text-2xl font-bold">Order Information</h1>
                    <p class="text-gray-600 mt-2">
                        <span class="font-semibold text-primary-500">Order Number</span>: {{ order.order_number }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold text-primary-500">Status</span>: {{ order.status }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold text-primary-500">Subtotal</span>: GH₵ {{ order.subtotal }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold text-primary-500">Delivery</span>: GH₵ {{ order.delivery }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold text-primary-500">Total</span>: GH₵ {{ order.total }}
                    </p>
                </div>

                <div class="p-4">
                    <h2 class="text-xl font-bold">Order Items</h2>
                    <table class="mt-4 w-full">
                        <!-- Table headers -->
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b-2 border-gray-300 font-semibold">Product Name</th>
                                <th class="py-2 px-4 border-b-2 border-gray-300 font-semibold">Price</th>
                                <th class="py-2 px-4 border-b-2 border-gray-300 font-semibold">Quantity</th>
                            </tr>
                        </thead>
                        <!-- Table body -->
                        <!-- <tbody>
                            <tr v-for="item in order.order_items" :key="item.id">
                                <td class="py-2 px-4 border-b border-gray-300">{{ item.product_name }}</td>
                                <td class="py-2 px-4 border-b border-gray-300">{{ item.price }}</td>
                                <td class="py-2 px-4 border-b border-gray-300">{{ item.quantity }}</td>
                            </tr>
                        </tbody> -->
                    </table>
                </div>

                <!-- Change order status button -->
                <div class="p-4">
                    <button class="bg-primary-500 text-white py-2 px-4 rounded-md" @click="handleChangeStatusClick">Change
                        Order Status</button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { defineProps, computed } from 'vue';

const props = defineProps({
    order: Object,
    orderItems: Array
});


const pagename = computed(() => {
    return 'Product Details';
})

// Handle change order status button click
const handleChangeStatusClick = () => {
    // Add your logic here to handle changing the order status
};
</script>

<style>
.container {
    min-height: 100vh;
}

.table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 0.75rem;
    text-align: left;
}

th {
    background-color: #edf2f7;
    border-bottom-width: 2px;
    border-bottom-color: #cbd5e0;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f7fafc;
}

tr:last-child {
    border-bottom-width: 2px;
    border-bottom-color: #cbd5e0;
}

.border-b {
    border-bottom-width: 1px;
    border-bottom-color: #cbd5e0;
}
</style>
