<script setup>
import BaseCardComponent from '@/Components/BaseCardComponent.vue';
import BaseTabWrapper from '@/Components/BaseTabWrapper.vue';
import BaseTab from '@/Components/BaseTab.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { computed, onMounted, ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import axios from 'axios';

const props = defineProps({
    monthlySalesChart: Object,
    percentageSoldChart: Object,
})

const dashboardMetrics = ref(null);
const last5Orders = ref(null);
const last5Users = ref(null);
const orderMetrics = ref(null);
const userMetrics = ref(null);
const salesMetrics = ref(null);

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

const fetchDashboardMetrics = () => {
    axios.get(`/api/admin-dashboard-metrics`)
        .then(response => {
            console.log(response.data);
            dashboardMetrics.value = response.data.data;
            last5Orders.value = response.data.data.last5Orders;
            last5Users.value = response.data.data.last5Users;
            orderMetrics.value = response.data.data.orderMetrics;
            userMetrics.value = response.data.data.userMetrics;
            salesMetrics.value = response.data.data.salesMetrics;
        })
        .catch(error => {
            // Handle error
            console.log(error);

        });
};
onMounted(() => {
    fetchDashboardMetrics();
});
</script>

<template>
    <Head title="Dashboard" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div class="grid gap-4 grid-auto-fit py-4" v-if="dashboardMetrics">
                    <BaseCardComponent>
                        <div>
                            <div class="super__text flex items-center justify-between">
                                <p class="text-primary-500 font-medium">{{ userMetrics.unverifiedUsersCount || '--' }} <span
                                        class="suffix__text">unverified</span></p>

                                <div class=" rounded-full p-2 bg-white shadow-md border border-teal-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-teal-200">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="main__text flex items-center justify-between">
                                <p>USERS</p>
                                <p class="text-4xl">

                                    {{ userMetrics.totalUsersCount }}
                                </p>
                            </div>
                            <div class="sub__text flex items-center justify-end">
                                <p class="text-primary-500 font-medium">{{ userMetrics.verifiedUsersCount }}<span
                                        class="suffix__text px-1 tracking-wider">verified</span></p>
                            </div>
                        </div>
                    </BaseCardComponent>
                    <BaseCardComponent>
                        <div>
                            <div class="super__text flex items-center justify-between">
                                <p class="text-primary-500 font-medium">{{ orderMetrics.pendingOrdersCount }} <span
                                        class="suffix__text">pending</span></p>

                                <div class=" rounded-full p-2 bg-white shadow-md border border-indigo-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-indigo-200">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>

                                </div>
                            </div>
                            <div class="main__text flex items-center justify-between  font-sans">
                                <p class=" font-sans">ORDERS</p>
                                <p class="text-4xl font-sans">

                                    {{ orderMetrics.totalOrdersCount }}
                                </p>
                            </div>
                            <div class="sub__text flex items-center justify-end">
                                <p class="text-primary-500 font-medium">{{ orderMetrics.fulfilledOrdersCount }}<span
                                        class="suffix__text px-1 tracking-wider">completed</span></p>
                            </div>
                        </div>
                    </BaseCardComponent>
                    <BaseCardComponent>
                        <div>
                            <div class="super__text flex items-center justify-between">
                                <p class="suffix__text">Total</p>

                                <div class=" rounded-full p-2 bg-white shadow-md border border-rose-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-rose-200">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>

                                </div>
                            </div>
                            <div class="main__text flex items-center justify-between">
                                <p>SALES</p>
                                <p class="text-4xl">

                                    {{ salesMetrics.totalFulfilledQuantity }}
                                </p>
                            </div>
                            <div class="sub__text flex items-center justify-end">
                                <p> <span class="suffix__text px-1">GH₵</span>{{ salesMetrics.totalFulfilledAmount }}</p>
                            </div>
                        </div>
                    </BaseCardComponent>

                </div>
                <div class="grid gap-4 grid-auto-fit bg-neutral-50 overflow-hidden shadow-sm sm:rounded-lg">

                    <div class="p-3 bg-white">
                        <apexchart :width="monthlySalesChart.width" :height="monthlySalesChart.height"
                            :type="monthlySalesChart.type" :options="monthlySalesChart.options"
                            :series="monthlySalesChart.series"></apexchart>
                    </div>
                    <div class="p-3 bg-white">
                        <apexchart :width="percentageSoldChart.width" :height="percentageSoldChart.height"
                            :type="percentageSoldChart.type" :options="percentageSoldChart.options"
                            :series="percentageSoldChart.series"></apexchart>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg pt-6">

                    <BaseTabWrapper>
                        <BaseTab title="USERS">
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

                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="last5Users && last5Users.length > 0">
                                        <tr class="bg-white border-t hover:bg-gray-50 " v-for="user in last5Users"
                                            :key="user.id">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2">
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

                                        </tr>
                                    </template>
                                    <tr v-else>
                                        <td colspan="5" class=" text-center py-6 text-lg text-primary-500 font-semibold">
                                            No Users available.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </BaseTab>
                        <BaseTab title="ORDERS">
                            <table class="w-full text-sm text-left text-gray-500">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Customer
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Order Number
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Total(incl. Delv.)
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-4 py-3">
                                            Created At
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="last5Orders && last5Orders.length > 0">
                                        <tr class="bg-white border-t hover:bg-gray-50" v-for="order in last5Orders"
                                            :key="order.id">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2">
                                                {{ order.user.email }}
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ order.order_number }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ order.total }}
                                            </td>
                                            <td class="px-6 py-4">
                                                <span :class="statusChipClass(order.status)">
                                                    {{ order.status }}
                                                </span>
                                            </td>
                                            <td class="px-4 py-4">
                                                {{ order.created_at }}
                                            </td>

                                        </tr>
                                    </template>
                                    <tr v-else>
                                        <td colspan="5" class=" text-center py-6 text-lg text-primary-500 font-semibold">
                                            No Orders available.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </BaseTab>

                    </BaseTabWrapper>


                </div>

            </div>
        </div>
    </AdminLayout>
</template>


<style scoped>
.main__text {
    color: #051C2C;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 16px;
}

.suffix__text {
    color: rgb(133, 132, 141);
    font-family: 'roboto';
    font-size: 12px;
}

.chart-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}
</style>