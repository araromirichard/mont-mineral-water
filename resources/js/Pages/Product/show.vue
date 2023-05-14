<!-- <template>
    <Head :title="pagename" />

    <AdminLayout>
        <template #header>
            <Link :href="route('admin.users.index')"
                class="bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md">Back
            </Link>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight py-4">'s Details Page</h2>
        </template>
        <div class="px-8 py-4">
            <div class="bg-neutrals-50 rounded-lg shadow-md p-4 max-w-md">
                <h2 class="text-xl font-bold mb-4"></h2>
                <div class="flex flex-row space-x-4">
                    <div class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                        <p class="text-gray-700 text-2xl"></p>
                    </div>
                    <div>
                        <p class="text-gray-500 mb-2"></p>
                        <p class="text-gray-500"></p>
                        <p class="text-gray-500"></p>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template> -->

<template>
    <Head :title="pagename" />

    <AdminLayout>
        <template #header>
            <Link :href="route('admin.products.index')"
                class="bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md">
            Back
            </Link>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight py-4">{{ product.name }}'s Details Page</h2>
        </template>
        <div class="container mx-auto px-6 md:px-8 py-8">
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
                <div class="p-4">
                    <h1 class="text-2xl font-bold">{{ product.name }}</h1>
                    <p class="text-gray-600 mt-2">
                        <span class=" font-semibold text-primary-500">Price</span>
                        : GH₵ {{ product.price }}
                    </p>
                    <p class="text-gray-600">
                        <span class=" font-semibold text-primary-500">Size</span>
                        : {{ product.size }}
                    </p>
                    <p class="text-gray-600">
                        <span class=" font-semibold text-primary-500">Description</span>
                        : <span v-html="product.description"></span>
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-4 p-4">
                    <div v-for="image in product.product_images" :key="image.id">
                        <img :src="getImageUrl(image)" :alt="image" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
  
<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed, onMounted } from 'vue';
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

// Get the public URL for an image
const getImageUrl = (path) => {
    return `/storage/${path}`;
};

const pagename = computed(() => {
    return 'Product Details';
})

</script>

<style>
.container {
    min-height: 100vh;
}

.grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
  