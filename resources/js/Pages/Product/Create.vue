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
    import { ref, computed } from 'vue';

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
    });

    // Separate reactive array for image previews with metadata
    const imagePreviewData = ref([]);
    const loadingProgress = ref(0);

    const editor = ref(ClassicEditor);
    const editorConfig = ref({
        toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList',
            'indent', 'outdent', '|', 'undo', 'redo',
        ],
        language: 'en',
        list: { indentOffset: 40, types: ['bulleted', 'numbered'] },
        fontSize: { options: [9, 11, 13, 15, 'default', 17, 19, 21] },
        alignment: { options: ['left', 'center', 'right', 'justify'] },
        image: {
            toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight'],
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
        },
        mediaEmbed: { previewsInData: true },
    });

    const submitForm = () => {
        // Update form.images with actual files before submission
        form.images = imagePreviewData.value.map(item => item.file);

        form.post(route('admin.products.store'), {
            onSuccess: () => {
                console.log('Form submission succeeded');
                // Reset the image preview data after successful submission
                imagePreviewData.value = [];
            },
            onError: (errors) => {
                console.log(JSON.stringify(errors, null, 2));
            },
        });
    };

    // Improved image preview handling
    const updatePreviewImages = (files) => {
        if (!files || files.length === 0) return;

        Array.from(files).forEach(file => {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert(`${file.name} is not a valid image file.`);
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert(`${file.name} is too large. Maximum file size is 5MB.`);
                return;
            }

            // Check if file is already added
            const existingFile = imagePreviewData.value.find(item =>
                item.file.name === file.name &&
                item.file.size === file.size &&
                item.file.lastModified === file.lastModified
            );

            if (existingFile) {
                alert(`${file.name} is already selected.`);
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreviewData.value.push({
                    id: Date.now() + Math.random(), // Unique ID for tracking
                    file: file,
                    preview: e.target.result,
                    name: file.name,
                    size: file.size
                });
            };
            reader.readAsDataURL(file);
        });
    };

    // Remove specific image
    const removeImage = (imageId) => {
        imagePreviewData.value = imagePreviewData.value.filter(item => item.id !== imageId);
    };

    // Replace specific image
    const replaceImage = (imageId) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // Validate file type
                if (!file.type.startsWith('image/')) {
                    alert(`${file.name} is not a valid image file.`);
                    return;
                }

                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert(`${file.name} is too large. Maximum file size is 5MB.`);
                    return;
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const index = imagePreviewData.value.findIndex(item => item.id === imageId);
                    if (index !== -1) {
                        imagePreviewData.value[index] = {
                            id: imageId, // Keep same ID
                            file: file,
                            preview: event.target.result,
                            name: file.name,
                            size: file.size
                        };
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    // Clear all images
    const clearAllImages = () => {
        if (confirm('Are you sure you want to remove all images?')) {
            imagePreviewData.value = [];
            form.images = [];
        }
    };

    // Add more images
    const addMoreImages = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = (e) => {
            updatePreviewImages(e.target.files);
        };
        input.click();
    };

    // Format file size for display
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getErrorMessage = (field) => {
        const errorKey = Object.keys(form.errors).find(key => key === field || key.startsWith(`${field}.`));
        return errorKey ? form.errors[errorKey] : null;
    };

    const imageErrorMessage = computed(() => getErrorMessage('images'));
    const hasImageError = computed(() => !!imageErrorMessage.value);
    const hasGeneralError = computed(() => !!form.errors.images);
    const pageTitle = computed(() => "Create New Product");
</script>

<template>

    <Head title="Create Product" />

    <AdminLayout>
        <template #header>
            <div class="">
                <Link :href="route('admin.products.index')"
                    class="py-2 px-4 bg-primary-300 hover:bg-primary-500 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md">
                Back
                </Link>
                <h2 class="py-4 font-semibold text-xl text-gray-800 leading-tight">{{ pageTitle }}</h2>
            </div>
        </template>

        <div class="py-6">
            <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <form @submit.prevent="submitForm">
                        <div class="space-y-6">
                            <!-- Basic Product Info -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel for="name" value="Name" />
                                    <TextInput id="name" type="text"
                                        class="mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm"
                                        v-model="form.name" autofocus autocomplete="Product name"
                                        placeholder="Product Name" />
                                    <InputError class="mt-2" :message="form.errors.name" />
                                </div>

                                <div>
                                    <InputLabel for="price" value="Price" />
                                    <TextInput id="price" type="number" step="0.01" class="mt-1 block w-full"
                                        v-model="form.price" autocomplete="Product price" placeholder="Product Price" />
                                    <InputError class="mt-2" :message="form.errors.price" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel for="size" value="Size" />
                                    <select id="size" v-model="form.size"
                                        class="mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm">
                                        <option value="">Select Size</option>
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
                                        class="mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm">
                                        <option value="">Select Pack Size</option>
                                        <option v-for="packSizeOption in packSizeOptions" :key="packSizeOption.value"
                                            :value="packSizeOption.value">
                                            {{ packSizeOption.label }}
                                        </option>
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.pack_size" />
                                </div>
                            </div>

                            <div>
                                <InputLabel for="description" value="Description" />
                                <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                                <InputError class="mt-2" :message="form.errors.description" />
                            </div>

                            <!-- Images Section -->
                            <div class="border-t pt-6">
                                <div class="flex items-center justify-between mb-4">
                                    <InputLabel for="image" value="Images" />
                                    <div class="flex space-x-2">
                                        <button v-if="imagePreviewData.length > 0" @click.prevent="addMoreImages"
                                            type="button"
                                            class="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors">
                                            Add More
                                        </button>
                                        <button v-if="imagePreviewData.length > 0" @click.prevent="clearAllImages"
                                            type="button"
                                            class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors">
                                            Clear All
                                        </button>
                                    </div>
                                </div>

                                <FileInput class="mt-1 focus:border-0 focus:ring-0" id="image"
                                    @update:modelValue="updatePreviewImages($event)" accept="image/*" multiple
                                    placeholder="Select Product Images (Max 5MB each)" />

                                <p class="text-xs text-gray-500 mt-1">
                                    Supported formats: JPG, PNG, GIF, WebP. Maximum file size: 5MB per image.
                                </p>

                                <InputError class="mt-2" :message="imageErrorMessage" v-if="hasImageError" />
                                <InputError class="mt-2" :message="form.errors.images" v-else-if="hasGeneralError" />
                            </div>

                            <!-- Enhanced Image Preview section -->
                            <div v-if="imagePreviewData.length > 0" class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-lg font-semibold">
                                        Selected Images ({{ imagePreviewData.length }})
                                    </h3>
                                    <span class="text-sm text-gray-500">
                                        Total size: {{formatFileSize(imagePreviewData.reduce((total, item) => total +
                                        item.size, 0)) }}
                                    </span>
                                </div>

                                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    <div v-for="(imageData, index) in imagePreviewData" :key="imageData.id"
                                        class="relative group border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:border-gray-300 transition-colors">

                                        <!-- Image number badge -->
                                        <div class="absolute top-2 left-2 z-10 flex space-x-1">
                                            <span class="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                                                {{ index + 1 }}
                                            </span>
                                            <span v-if="index === 0"
                                                class="bg-yellow-500 text-white text-xs px-2 py-1 rounded font-medium">
                                                Main
                                            </span>
                                        </div>

                                        <img :src="imageData.preview" :alt="imageData.name"
                                            class="w-full h-48 object-cover" />

                                        <!-- Image overlay with controls -->
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                                            <div
                                                class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                                                <button @click.prevent="replaceImage(imageData.id)"
                                                    class="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shadow-lg"
                                                    title="Replace image">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12">
                                                        </path>
                                                    </svg>
                                                </button>
                                                <button @click.prevent="removeImage(imageData.id)"
                                                    class="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors shadow-lg"
                                                    title="Remove image">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Image info -->
                                        <div class="p-3 bg-white border-t">
                                            <p class="text-sm font-medium text-gray-900 truncate mb-1"
                                                :title="imageData.name">
                                                {{ imageData.name }}
                                            </p>
                                            <div class="flex justify-between items-center text-xs text-gray-500">
                                                <span>{{ formatFileSize(imageData.size) }}</span>
                                                <span class="bg-gray-100 px-2 py-1 rounded">
                                                    {{ imageData.file.type.split('/')[1].toUpperCase() }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Loading Progress -->
                                <div v-if="loadingProgress > 0" class="mt-6">
                                    <div class="flex items-center justify-between mb-2">
                                        <h3 class="text-sm font-medium text-gray-700">Uploading...</h3>
                                        <span class="text-sm text-gray-500">{{ loadingProgress }}%</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div :style="{ width: loadingProgress + '%' }"
                                            class="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out">
                                        </div>
                                    </div>
                                </div>

                                <!-- Image upload tips -->
                                <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                                    <h4 class="text-sm font-medium text-blue-800 mb-1">Tips for better images:</h4>
                                    <ul class="text-xs text-blue-700 space-y-1">
                                        <li>• Use high-quality images (at least 800x600 pixels)</li>
                                        <li>• The first image will be used as the main product image</li>
                                        <li>• You can replace or remove images before saving</li>
                                        <li>• Recommended formats: JPG for photos, PNG for graphics</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex items-center justify-end mt-6 pt-4 border-t">
                                <div class="flex space-x-3">
                                    <Link :href="route('admin.products.index')"
                                        class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md transition-colors">
                                    Cancel
                                    </Link>
                                    <PrimaryButton class="px-6 py-2" :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing">
                                        <span v-if="form.processing">Saving...</span>
                                        <span v-else>Save Product</span>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
    select {
        background-color: #fff;
    }

    select option:hover {
        background-color: #e2e8f0;
    }

    /* Enhanced hover effects for image preview */
    .group:hover .opacity-0 {
        opacity: 1;
    }

    .group .bg-opacity-0 {
        background-color: rgba(0, 0, 0, 0);
    }

    .group:hover .bg-opacity-50 {
        background-color: rgba(0, 0, 0, 0.5);
    }

    /* Smooth transitions for all interactive elements */
    .transition-colors {
        transition-property: color, background-color, border-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }

    /* Animation for image loading */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .group {
        animation: fadeIn 0.3s ease-out;
    }

    /* Hover effects for buttons */
    button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Image container hover effects */
    .group:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    /* Loading animation */
    .h-2 {
        height: 0.5rem;
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

    @media (min-width: 640px) {
        .sm\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (min-width: 1024px) {
        .lg\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (min-width: 1280px) {
        .xl\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
</style>
