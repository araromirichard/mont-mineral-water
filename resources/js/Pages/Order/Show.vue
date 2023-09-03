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
            <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
                <div class="p-4 space-y-2">
                    <h1 class="text-2xl font-bold">Order Information</h1>
                    <p class="text-gray-600 mt-2">
                        <span class="font-semibold text-primary-500">Order Number</span>: {{ order.order_number }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold text-primary-500">Status</span>: <span
                            :class="statusChipClass(order.status)">
                            {{ order.status }}
                        </span>
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
                        <tbody>
                            <tr v-for="item in order.order_items" :key="item.id">
                                <td class="py-2 px-4 border-b border-gray-300">{{ item.product_name }}</td>
                                <td class="py-2 px-4 border-b border-gray-300">{{ item.price }}</td>
                                <td class="py-2 px-4 border-b border-gray-300">{{ item.quantity }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <transition name="fade-slide">
                    <div v-if="showStatusForm" class="max-w-xs p-4">
                        <form @submit.prevent="submit">
                            <label for="status" class="text-primary-500 font-bold">Select Status:</label>
                            <select id="status" v-model="form.selectedStatus"
                                class="block mt-1 w-full rounded-md border-gray-300">
                                <option v-for="optionStatus in statusOptions" :key="optionStatus.value"
                                    :value="optionStatus.value">
                                    {{ optionStatus.label }}
                                </option>
                            </select>

                        </form>
                    </div>
                </transition>


                <!-- Change order status button -->
                <div class="p-4">
                    <button class="bg-primary-500 text-white py-2 px-4 rounded-md"
                        :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                        @click="handleChangeStatusClick">
                        <span v-if="!showStatusForm">Change Order Status</span>
                        <span v-if="showStatusForm">Update Order Status</span>
                    </button>
                </div>
                <div class="px-4">
                    <hr class="text-gray-200">
                </div>
                <!-- Customer Information -->
                <div class="p-4">
                    <h1 class="text-2xl font-bold">Customer Information</h1>
                    <p class="text-gray-600 mt-2">
                        <span class="font-semibold">Name</span>: {{ order.user.first_name }} {{ order.user.last_name }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold">Email</span>: {{ order.user.email }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold">Phone</span>: {{ order.user.phone }}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold">Shipping Address</span>: {{ order.shipping_address }}
                    </p>
                    <!-- Add more customer information fields as needed -->
                </div>

            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
    order: Object,
    // orderItems: Array
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

const pagename = computed(() => {
    return 'Product Details';
});

const handleChangeStatusClick = () => {
    if (!showStatusForm.value) {
        showStatusForm.value = true;
        return
    } else {
        showStatusForm.value = !showStatusForm.value;

        // Handle form submission here


        // Make an Inertia PUT request to update the order status
        const requestData = {
            selectedStatus: form.selectedStatus,
        };
        form.put(route('admin.orders.update', { order: props.order.id }), requestData);

    };
}


const statusChipClass = computed(() => (status) => {
    let baseClass = 'px-4 inline-flex text-xs leading-5 font-semibold rounded-full shadow-sm';

    switch (status) {
        case 'pending':
            return `${baseClass} bg-amber-100 text-amber-800`;
        case 'cancelled':
            return `${baseClass} bg-red-100 text-red-800`;
        case 'approved':
            return `${baseClass} bg-green-100 text-green-800`;
        case 'fulfilled':
            return `${baseClass} bg-blue-100 text-blue-800`;
        default:
            return `${baseClass} bg-gray-100 text-gray-800`;
    }
});
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


/* transition  */

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
