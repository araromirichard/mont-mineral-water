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
import { ref } from 'vue';
import { computed } from 'vue';


const props = defineProps({
    product: Object
})

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
    name: '',
    description: '',
    size: '',
    pack_size: '',
    price: '',
    images: [],
    previewImages: [], // New property to store preview image URLs
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
const submitForm = () => {
    form.post(route('admin.products.store'), {

        // onFinish: () => form.reset('password'),

        onSuccess: () => {
            console.log('Form submission succeeded');
            // do something when the form submission succeeds
        },
        onError: (errors) => {
            console.log(JSON.stringify(errors, null, 2));
            // do something when the form submission fails
        },
    });
};
// update the image preview array
const updatePreviewImages = (files) => {
    const selectedImages = [];

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageSrc = e.target.result;
            form.previewImages.push(imageSrc);
            selectedImages.push(files[i]);
            form.images = [...selectedImages]; // Update form.images array
        };
        reader.readAsDataURL(files[i]);
    }
};


// delete images from the preview array
const removeImage = (index) => {
    form.previewImages.splice(index, 1);
    form.images.splice(index, 1);
};



const getErrorMessage = (field) => {
    const errorKey = Object.keys(form.errors).find(key => key === field || key.startsWith(`${field}.`));
    return errorKey ? form.errors[errorKey] : null;
};


const imageErrorMessage = computed(() => getErrorMessage('image'));
const hasImageError = computed(() => !!imageErrorMessage.value);
const hasGeneralError = computed(() => !!form.errors.image);
const pageTitle = computed(() => {
    return "Create New Product";
})


</script>

<template>
    <Head title="Create Product" />

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

        <div class="py-6">
            <div class="max-w-2xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <form @submit.prevent="submitForm">
                        <div class="space-y-4">
                            <div>
                                <InputLabel for="name" value="Name" />
                                <TextInput id="name" type="text"
                                    class="mt-1 block w-full border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"
                                    v-model="form.name" autofocus autocomplete="Product name" placeholder="Product Name" />
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
                                    <!-- <option
                                        class="placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"
                                        value="">Select Pack Size</option> -->
                                    <option
                                        class="space-y-2"
                                        v-for="packSizeOption in packSizeOptions" :key="packSizeOption.value"
                                        :value="packSizeOption.value">
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
                                <InputLabel for="image" value="Images" />
                                <FileInput class="mt-1 focus:border-0 focus:ring-0" id="image"
                                    @update:modelValue="updatePreviewImages($event)" accept="image/*" multiple autofocus
                                    autocomplete="Product image" placeholder="Product Image" />

                                <InputError class="mt-2" :message="imageErrorMessage" v-if="hasImageError" />
                                <InputError class="mt-2" :message="form.errors.image" v-else-if="hasGeneralError" />
                            </div>

                            <!-- Image Preview section -->
                            <div v-if="form.previewImages.length > 0" class="mt-4">
                                <h3 class="text-lg font-semibold">Preview:</h3>
                                <div class="mt-2 grid gap-4 grid-cols-2 sm:grid-cols-4">
                                    <template v-for="(preview, index) in form.previewImages" :key="index">
                                        <div class="relative">
                                            <img :src="preview" alt="Preview" class=" w-52 h-32 rounded-md" />
                                            <button @click.stop.prevent="removeImage(index)"
                                                class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M3 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7H2a1 1 0 0 1-1-1V3zm5 2H5v11h10V5h-2a1 1 0 1 0 0 2h2v4H5V7h3a1 1 0 0 1 0 2H7v2h6V9h2a1 1 0 1 0 0-2h-2V5z"
                                                        clip-rule="evenodd"></path>
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

                            <!-- Imae Preview section ends -->


                            <div class="flex items-center justify-end mt-4">
                                <PrimaryButton class="ml-4 py-4" :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing">
                                    Save Product
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
<style>
select {
    /* Set the background color for the select input */
    background-color: #fff;
}

select option:hover {
    background-color: #e2e8f0;
}</style>