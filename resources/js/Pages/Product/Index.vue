<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import PaginationCom from '@/Components/PaginationCom.vue'
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, computed, watch} from 'vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';


const props = defineProps({
    products: Object,
    filters: Object,
});

// const pageTitle = ref('Users');
const search = ref(props.filters.search);
const perPage = ref(5);
const confirmingProductDeletion = ref(false);
const productIdToDelete = ref(null);


const fetchProducts = () => {
    router.get('/admin/products', { perPage: perPage.value, search: search.value }, {
        preserveState: true,
        replace: true,
    })
};

function showProductDetails(productId) {
    router.get(route('admin.products.show', { id: productId }));
};
function editProductDetails(productId) {
    router.get(route('admin.products.edit', { id: productId }));
}
const deleteProduct = () => {
    if (!productIdToDelete.value) return;
    router.delete(route('admin.products.destroy', { id: productIdToDelete.value }));

    closeModal();

}

const confirmProductDeletion = (productId) => {
    productIdToDelete.value = productId;
    confirmingProductDeletion.value = true;
};

const deleteUser = () => {
    route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
    };
};

const closeModal = () => {
    confirmingProductDeletion.value = false;
    productIdToDelete.value = null;
};

watch(search, (value) => {
    router.get('/admin/products', { search: value, perPage: perPage.value }, {
        preserveState: true,
        replace: true,
    })
});

</script>

<template>
    <Head title="Products" />

    <AdminLayout>
        <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Products</h2>
                <Link :href="route('admin.products.create')"
                    class="py-2 px-4 bg-primary-500 hover:bg-primary-300 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md">
                Create</Link>
            </div>
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
                                        placeholder="Search for a Product">
                                </div>
                            </div>
                            <div class="flex px-2">
                                <select v-model="perPage" @change="fetchProducts"
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
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Size
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Pack Size
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price (GH₵)
                                    </th>
                                    <th scope="col" class="px-6 py-3 flex justify-center">
                                        Actions
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="products.data && products.data.length > 0">
                                    <tr class="bg-white border-t hover:bg-gray-50 " v-for="product in products.data"
                                        :key="product.id">
                                        <!-- <pre>{{ product.product_images }}</pre> -->
                                        <th scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2">
                                            {{ product.name }} - {{ product.size }}
                                        </th>
                                        <td class="px-6 py-4" v-if="product.product_images.length > 0">
                                            <img :src="'/storage/' + product.product_images[0].image_path"
                                                alt="Product Image" class=" w-10 h-auto">
                                        </td>
                                        <!-- <pre>{{ product.product_images[0].image_path }}</pre> -->
                                        <td class="px-6 py-4" v-html="product.size">

                                        </td>
                                        <td class="px-6 py-4" v-html="product.pack_size">

                                        </td>
                                        <td class="px-6 py-4">
                                            {{ product.price }}
                                        </td>
                                        <td class="px-6 py-4 flex justify-center items-center space-x-2">
                                            <button @click="showProductDetails(product.id)"
                                                class="p-1 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-secondary-300 hover:font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </button>
                                            <button @click="editProductDetails(product.id)"
                                                class="p-1 rounded-full bg-neutral-100 hover:bg-green-100 hover:text-green-700 hover:font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button @click="confirmProductDeletion(product.id)"
                                                class="p-1 rounded-full bg-neutral-100 hover:bg-red-100 hover:text-red-700 hover:font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </template>

                                <tr v-else>
                                    <td colspan="5" class=" text-center py-6 text-lg text-primary-500 font-semibold">
                                        No products available.</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="m-2 p-2 flex justify-end" v-if="products.data && products.data.length > 0">
                            <PaginationCom :links="products.links" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :show="confirmingProductDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this Product
                </h2>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                    <DangerButton class="ml-3" @click="deleteProduct">
                        Delete Product
                    </DangerButton>
                </div>
            </div>
        </Modal>
    </AdminLayout>
</template>