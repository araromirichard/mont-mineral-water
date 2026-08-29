<script setup>
    import InputError from '@/Components/InputError.vue';
    import FileInput from '@/Components/FileInput.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';
    import AdminLayout from '@/Layouts/AdminLayout.vue';
    import { Head, Link, useForm } from '@inertiajs/vue3';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import { ref, onMounted, onUnmounted, computed } from 'vue';

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
        new_images: [],
        removed_images: [],
    });

    // Separate reactive arrays for managing images
    const existingImages = ref([...props.product.product_images]);
    // Each entry: { id, file, preview (data URL), name, size }
    const newImagePreviews = ref([]);
    const uploadErrors = ref([]);

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

    const allImages = computed(() => {
        const existing = existingImages.value.map(img => ({
            type: 'existing',
            id: img.id,
            src: `/storage/${img.image_path}`,
            name: img.image_path.split('/').pop(),
            data: img,
        }));

        const newImages = newImagePreviews.value.map(item => ({
            type: 'new',
            id: item.id,
            src: item.preview,
            name: item.name,
            size: item.size,
            data: item,
        }));

        return [...existing, ...newImages];
    });

    const updatePreviewImages = (files) => {
        if (!files || files.length === 0) return;
        uploadErrors.value = [];

        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) {
                uploadErrors.value.push(`"${file.name}" is not a valid image file.`);
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                uploadErrors.value.push(`"${file.name}" exceeds the 5MB limit.`);
                return;
            }
            const duplicate = newImagePreviews.value.find(item =>
                item.file.name === file.name &&
                item.file.size === file.size &&
                item.file.lastModified === file.lastModified
            );
            if (duplicate) {
                uploadErrors.value.push(`"${file.name}" is already selected.`);
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                newImagePreviews.value.push({
                    id: `new_${Date.now()}_${Math.random()}`,
                    file,
                    preview: e.target.result,
                    name: file.name,
                    size: file.size,
                });
                form.new_images = newImagePreviews.value.map(i => i.file);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (imageId, imageType) => {
        if (imageType === 'existing') {
            const index = existingImages.value.findIndex(img => img.id === imageId);
            if (index !== -1) {
                const removed = existingImages.value[index];
                if (!form.removed_images.includes(removed.id)) {
                    form.removed_images.push(removed.id);
                }
                existingImages.value.splice(index, 1);
            }
        } else {
            const index = newImagePreviews.value.findIndex(item => item.id === imageId);
            if (index !== -1) {
                newImagePreviews.value.splice(index, 1);
                form.new_images = newImagePreviews.value.map(i => i.file);
            }
        }
    };

    const replaceImage = (imageId, imageType) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        document.body.appendChild(input);
        input.onchange = (e) => {
            document.body.removeChild(input);
            const file = e.target.files[0];
            if (!file) return;
            uploadErrors.value = [];
            if (!file.type.startsWith('image/')) {
                uploadErrors.value.push(`"${file.name}" is not a valid image file.`);
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                uploadErrors.value.push(`"${file.name}" exceeds the 5MB limit.`);
                return;
            }

            const reader = new FileReader();
            reader.onload = (ev) => {
                if (imageType === 'existing') {
                    removeImage(imageId, 'existing');
                    newImagePreviews.value.push({
                        id: `new_${Date.now()}_${Math.random()}`,
                        file,
                        preview: ev.target.result,
                        name: file.name,
                        size: file.size,
                    });
                } else {
                    const index = newImagePreviews.value.findIndex(item => item.id === imageId);
                    if (index !== -1) {
                        newImagePreviews.value[index] = {
                            id: imageId,
                            file,
                            preview: ev.target.result,
                            name: file.name,
                            size: file.size,
                        };
                    }
                }
                form.new_images = newImagePreviews.value.map(i => i.file);
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };

    const addMoreImages = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.style.display = 'none';
        document.body.appendChild(input);
        input.onchange = (e) => {
            document.body.removeChild(input);
            updatePreviewImages(e.target.files);
        };
        input.click();
    };

    const clearAllNewImages = () => {
        newImagePreviews.value = [];
        form.new_images = [];
        uploadErrors.value = [];
    };

    // Format file size
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const updateForm = () => {
        form.new_images = newImagePreviews.value.map(i => i.file);
        form.transform(data => ({
            ...data,
            _method: 'PUT',
        })).post(route('admin.products.update', props.product.id), {
            forceFormData: true,
            onSuccess: () => {
                newImagePreviews.value = [];
                form.new_images = [];
                form.removed_images = [];
            },
        });
    };

    const getErrorMessage = (field) => {
        const errorKey = Object.keys(form.errors).find((key) => key === field || key.startsWith(`${field}.`));
        return errorKey ? form.errors[errorKey] : null;
    };

    const imageErrorMessage = computed(() => getErrorMessage('new_images'));
    const hasImageError = computed(() => !!imageErrorMessage.value);
    const hasGeneralError = computed(() => !!form.errors.new_images);
    const pageTitle = computed(() => 'Edit Product');

    onUnmounted(() => {
        newImagePreviews.value = [];
    });
</script>

<template>

    <Head title="Edit Product" />

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
                    <form @submit.prevent="updateForm">
                        <div class="space-y-6">
                            <!-- Basic Product Info -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel for="name" value="Name" />
                                    <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name"
                                        autofocus autocomplete="Product name" placeholder="Product Name" />
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
                                    <h3 class="text-lg font-semibold text-gray-900">Product Images</h3>
                                    <div class="flex space-x-3">
                                        <button @click.prevent="addMoreImages" type="button"
                                            class="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors">
                                            Add Images
                                        </button>
                                        <button v-if="newImagePreviews.length > 0" @click.prevent="clearAllNewImages"
                                            type="button"
                                            class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors">
                                            Clear New
                                        </button>
                                    </div>
                                </div>

                                <!-- File Input (hidden, triggered by Add Images button) -->
                                <FileInput class="hidden" id="images" accept="image/*" multiple
                                    @update:modelValue="updatePreviewImages" />

                                <InputError class="mt-2" :message="form.errors.new_images" v-if="hasGeneralError" />
                                <InputError class="mt-2" :message="imageErrorMessage" v-if="hasImageError" />
                                <ul v-if="uploadErrors.length" class="mt-2 space-y-1">
                                    <li v-for="err in uploadErrors" :key="err" class="text-sm text-red-600">{{ err }}</li>
                                </ul>
                            </div>

                            <!-- Image Preview Section -->
                            <div v-if="allImages.length > 0" class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <h4 class="text-md font-medium text-gray-700">
                                        All Images ({{ allImages.length }})
                                    </h4>
                                    <div class="text-sm text-gray-500">
                                        <span class="text-green-600">{{ existingImages.length }} existing</span>
                                        <span v-if="newImagePreviews.length > 0" class="ml-2 text-blue-600">
                                            {{ newImagePreviews.length }} new
                                        </span>
                                        <span v-if="form.removed_images.length > 0" class="ml-2 text-red-600">
                                            {{ form.removed_images.length }} to remove
                                        </span>
                                    </div>
                                </div>

                                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    <div v-for="(image, index) in allImages" :key="image.id"
                                        class="relative group border-2 rounded-lg overflow-hidden bg-gray-50 hover:border-gray-300 transition-all duration-200"
                                        :class="{
                                            'border-green-200': image.type === 'existing',
                                            'border-blue-200': image.type === 'new'
                                        }">

                                        <!-- Image Status Badge -->
                                        <div class="absolute top-2 left-2 z-10 flex space-x-1">
                                            <span class="text-xs px-2 py-1 rounded text-white font-medium" :class="{
                                                'bg-green-500': image.type === 'existing',
                                                'bg-blue-500': image.type === 'new'
                                            }">
                                                {{ image.type === 'existing' ? 'Current' : 'New' }}
                                            </span>
                                            <span v-if="index === 0"
                                                class="bg-yellow-500 text-white text-xs px-2 py-1 rounded font-medium">
                                                Main
                                            </span>
                                        </div>

                                        <!-- Image -->
                                        <img :src="image.src" :alt="image.name" class="w-full h-48 object-cover" />

                                        <!-- Hover Overlay with Controls -->
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-200 flex items-center justify-center">
                                            <div
                                                class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                                                <button @click.prevent="replaceImage(image.id, image.type)"
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
                                                <button @click.prevent="removeImage(image.id, image.type)"
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

                                        <!-- Image Info -->
                                        <div class="p-3 bg-white border-t">
                                            <p class="text-sm font-medium text-gray-900 truncate mb-1"
                                                :title="image.name">
                                                {{ image.name }}
                                            </p>
                                            <div class="flex justify-between items-center text-xs text-gray-500">
                                                <span v-if="image.size">{{ formatFileSize(image.size) }}</span>
                                                <span v-else class="text-gray-400">Existing file</span>
                                                <span class="bg-gray-100 px-2 py-1 rounded">
                                                    {{ image.name.split('.').pop()?.toUpperCase() || 'IMG' }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Tips -->
                                <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                                    <h4 class="text-sm font-medium text-blue-800 mb-1">Image Management Tips:</h4>
                                    <ul class="text-xs text-blue-700 space-y-1">
                                        <li>• <strong>Green badges:</strong> Current images in your product</li>
                                        <li>• <strong>Blue badges:</strong> New images to be added</li>
                                        <li>• <strong>Main badge:</strong> First image will be the main product image
                                        </li>
                                        <li>• Click <strong>Replace</strong> to change an image, <strong>Remove</strong>
                                            to
                                            delete it</li>
                                        <li>• Changes will be saved when you click "Update Product"</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex items-center justify-between pt-6 border-t">
                                <div class="text-sm text-gray-600">
                                    <span v-if="form.removed_images.length > 0" class="text-red-600">
                                        {{ form.removed_images.length }} image(s) will be removed
                                    </span>
                                    <span v-if="newImagePreviews.length > 0" class="text-blue-600 ml-4">
                                        {{ newImagePreviews.length }} new image(s) will be added
                                    </span>
                                </div>

                                <div class="flex space-x-3">
                                    <Link :href="route('admin.products.index')"
                                        class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md transition-colors">
                                    Cancel
                                    </Link>
                                    <PrimaryButton class="px-6 py-2" :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing">
                                        <span v-if="form.processing">Updating...</span>
                                        <span v-else>Update Product</span>
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

    .group:hover .bg-opacity-60 {
        background-color: rgba(0, 0, 0, 0.6);
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

    /* Custom border colors for different image types */
    .border-green-200 {
        border-color: #bbf7d0;
    }

    .border-blue-200 {
        border-color: #bfdbfe;
    }

    /* Status badge styles */
    .bg-green-500 {
        background-color: #10b981;
    }

    .bg-blue-500 {
        background-color: #3b82f6;
    }

    .bg-yellow-500 {
        background-color: #f59e0b;
    }

    /* Hover effects for buttons */
    button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Loading animation */
    .h-2 {
        height: 0.5rem;
    }

    /* Image container hover effects */
    .group:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
