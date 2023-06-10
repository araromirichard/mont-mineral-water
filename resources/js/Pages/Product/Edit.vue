<script setup>
import InputError from '@/Components/InputError.vue';
import FileInput from '@/Components/FileInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    product: Object
});


// Define the options for size and pack size
const sizeOptions = ref([
    { label: '330 ML', value: '330 ML' },
    { label: '500 ML', value: '500 ML' },
    { label: '1 Litre', value: '1 Litre' },
]);

const packSizeOptions = ref([
    { label: 'Pack of 24 bottles', value: 'Pack of 24 bottles' },
    { label: 'Pack of 15 bottles', value: 'Pack of 15 bottles' },
    { label: 'Pack of 12 bottles', value: 'Pack of 12 bottles' },
]);

const form = useForm({
    name: props.product.name,
    description: props.product.description,
    size: props.product.size,
    pack_size: props.product.pack_size,
    price: props.product.price,
    images: props.product.product_images,
});

const loadingProgress = ref(0);

const editor = ref(ClassicEditor);
const editorConfig = ref({
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'indent',
        'outdent',
        '|',
        'undo',
        'redo',
    ],
    language: 'en',
    list: {
        indentOffset: 40,
        types: ['bulleted', 'numbered'],
    },
    fontSize: {
        options: [9, 11, 13, 15, 'default', 17, 19, 21],
    },
    alignment: {
        options: ['left', 'center', 'right', 'justify'],
    },
    image: {
        toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight'],
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
    },
    mediaEmbed: {
        previewsInData: true,
    },
});

// Computed property to track and update the preview images array
const previewImages = computed(() => {
    return form.images
});

const updatePreviewImages = (files) => {
    // Create a new array for merged images
    const mergedImages = [...form.images];

    // Iterate over the newly selected files and add them to the mergedImages array
    for (const file of files) {
        mergedImages.push('product_images/' + file.name);
    }

    // Update the form.images array with the mergedImages
    form.images = mergedImages;

    // Perform any additional logic required for preview images
    // ...
};






const removeImage = (index) => {
    form.images.splice(index, 1);
};

const updateForm = () => {
    form.put(route('admin.products.update', props.product.id), {
        onSuccess: () => {
            // console.log('Form submission succeeded');
            // do something when the form submission succeeds
        },
        onError: (errors) => {
            console.log(JSON.stringify(errors, null, 2));
            // do something when the form submission fails
        },
    });
};


const getErrorMessage = (field) => {
    const errorKey = Object.keys(form.errors).find((key) => key === field || key.startsWith(`${field}.`));
    return errorKey ? form.errors[errorKey] : null;
};

const imageErrorMessage = computed(() => getErrorMessage('image'));
const hasImageError = computed(() => !!imageErrorMessage.value);
const hasGeneralError = computed(() => !!form.errors.image);
const pageTitle = computed(() => {
    return 'Edit Product';
});

onMounted(() => {
    // Set the form values to the existing product data
    form.name = props.product.name;
    form.description = props.product.description;
    form.size = props.product.size;
    form.pack_size = props.product.pack_size;
    form.price = props.product.price;
    form.images = props.product.product_images;
});

</script>


<template>
    <Head title="Edit Product" />

    <AdminLayout>
        <template #header>
            <div class=" ">
                <Link :href="route('admin.products.index')"
                    class="py-2 px-4 bg-primary-300 hover:bg-primary-500 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md">
                Back
                </Link>
                <h2 class="py-4 font-semibold text-xl text-gray-800 leading-tight">{{ pageTitle }}</h2>
            </div>
        </template>
        <!-- <pre>{{ form.images }}</pre> -->
        <div class="py-6">
            <div class="max-w-2xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <form @submit.prevent="updateForm">
                        <div class="space-y-4">
                            <div>
                                <InputLabel for="name" value="Name" />
                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autofocus
                                    autocomplete="Product name" placeholder="Product Name" />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>
                            <div>
                                <InputLabel for="size" value="Size" />
                                <select id="size" v-model="form.size"
                                    class="mt-1 block w-full border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest">
                                    <option
                                        class="placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"
                                        value="">Select Size</option>
                                    <option v-for="sizeOption in sizeOptions" :key="sizeOption.value"
                                        :value="sizeOption.value">
                                        {{ sizeOption.label }}
                                    </option>
                                </select>
                                <InputError class="mt-2" :message="form.errors.size" />
                            </div>
                            <div>
                                <InputLabel for="pack_size" value="Pack Size" />
                                <select id="pack_size" v-model="form.pack_size"
                                    class="mt-1 block w-full border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest">
                                    <option
                                        class="placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"
                                        value="">Select Pack Size</option>
                                    <option class="space-y-2" v-for="packSizeOption in packSizeOptions"
                                        :key="packSizeOption.value" :value="packSizeOption.value">
                                        {{ packSizeOption.label }}
                                    </option>
                                </select>
                                <InputError class="mt-2" :message="form.errors.pack_size" />
                            </div>
                            <div>
                                <InputLabel for="price" value="Price" />
                                <TextInput id="price" type="number" class="mt-1 block w-full" v-model="form.price" autofocus
                                    autocomplete="Product price" placeholder="Product Price" />
                                <InputError class="mt-2" :message="form.errors.price" />
                            </div>

                            <div>
                                <InputLabel for="description" value="Description" />
                                <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

                                <InputError class="mt-2" :message="form.errors.description" />
                            </div>
                            <div>
                                <InputLabel for="images" value="Images" />
                                <FileInput class="mt-1 focus:border-0 focus:ring-0" id="images" accept="image/*" multiple
                                    autofocus autocomplete="Product image" placeholder="Product Image"
                                    @update:modelValue="updatePreviewImages" />

                                <InputError class="mt-2" :message="form.errors.images" v-if="hasGeneralError" />
                            </div>
                            <!-- <pre>{{ form.images }} hehe</pre> -->
                            <!-- Image Preview section -->
                            <div v-if="previewImages.length > 0" class="mt-4">
                                <h3 class="text-lg font-semibold">Preview:</h3>
                                <div class="mt-2 grid gap-4 grid-cols-2 sm:grid-cols-3">
                                    <template v-for="(image, index) in previewImages" :key="index">
                                        <div class="relative">
                                            <img :src="'/storage/' + image" alt="Preview" class=" w-64 h-32 rounded-md" />
                                            <button @click.stop.prevent="removeImage(index)"
                                                class="absolute top-1 right-1 bg-secondary-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>

                                            </button>
                                        </div>
                                    </template>
                                </div>
                                <div v-if="loadingProgress > 0" class="mt-4">
                                    <h3 class="text-lg font-semibold">Loading Progress: {{ loadingProgress }}%</h3>
                                    <div class="w-full h-4 bg-gray-200 rounded">
                                        <div :style="{ width: loadingProgress + '%' }" class="h-full bg-blue-500 rounded">
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="flex items-center justify-end mt-4">
                                <PrimaryButton class="ml-4 py-4" :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing">
                                    Update Product
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
