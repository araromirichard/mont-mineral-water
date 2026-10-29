import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./InputLabel-CznyKaCe.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./InputError-BUHLoSfJ.js";
import { t as AdminLayout_default } from "./AdminLayout-C8vXYz0r.js";
import { t as PrimaryButton_default } from "./PrimaryButton-BJ03_ftZ.js";
import { t as _sfc_main$4 } from "./FileInput-Buv3iyFk.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, resolveComponent, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives, withModifiers } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-vue";
//#region resources/js/Pages/Product/Create.vue
var _sfc_main = {
	__name: "Create",
	__ssrInlineRender: true,
	props: { product: Object },
	setup(__props) {
		const sizeOptions = ref([
			{
				label: "330 ML",
				value: "330 ML"
			},
			{
				label: "500 ML",
				value: "500 ML"
			},
			{
				label: "1 Litre",
				value: "1 Litre"
			}
		]);
		const packSizeOptions = ref([
			{
				label: "Pack of 24 bottles",
				value: "Pack of 24 bottles"
			},
			{
				label: "Pack of 15 bottles",
				value: "Pack of 15 bottles"
			},
			{
				label: "Pack of 12 bottles",
				value: "Pack of 12 bottles"
			}
		]);
		const form = useForm({
			name: "",
			description: "",
			size: "",
			pack_size: "",
			price: "",
			images: []
		});
		const imagePreviewData = ref([]);
		const uploadErrors = ref([]);
		const editor = ref(ClassicEditor);
		const editorConfig = ref({
			toolbar: [
				"heading",
				"|",
				"bold",
				"italic",
				"link",
				"bulletedList",
				"numberedList",
				"indent",
				"outdent",
				"|",
				"undo",
				"redo"
			],
			language: "en",
			list: {
				indentOffset: 40,
				types: ["bulleted", "numbered"]
			},
			fontSize: { options: [
				9,
				11,
				13,
				15,
				"default",
				17,
				19,
				21
			] },
			alignment: { options: [
				"left",
				"center",
				"right",
				"justify"
			] },
			image: { toolbar: [
				"imageTextAlternative",
				"|",
				"imageStyle:alignLeft",
				"imageStyle:alignCenter",
				"imageStyle:alignRight"
			] },
			table: { contentToolbar: [
				"tableColumn",
				"tableRow",
				"mergeTableCells",
				"tableProperties",
				"tableCellProperties"
			] },
			mediaEmbed: { previewsInData: true }
		});
		const submitForm = () => {
			form.images = imagePreviewData.value.map((item) => item.file);
			form.post(route("admin.products.store"), {
				onSuccess: () => {
					console.log("Form submission succeeded");
					imagePreviewData.value = [];
				},
				onError: (errors) => {
					console.log(JSON.stringify(errors, null, 2));
				}
			});
		};
		const updatePreviewImages = (files) => {
			if (!files || files.length === 0) return;
			uploadErrors.value = [];
			Array.from(files).forEach((file) => {
				if (!file.type.startsWith("image/")) {
					uploadErrors.value.push(`"${file.name}" is not a valid image file.`);
					return;
				}
				if (file.size > 5242880) {
					uploadErrors.value.push(`"${file.name}" exceeds the 5MB limit.`);
					return;
				}
				if (imagePreviewData.value.find((item) => item.file.name === file.name && item.file.size === file.size && item.file.lastModified === file.lastModified)) {
					uploadErrors.value.push(`"${file.name}" is already selected.`);
					return;
				}
				const reader = new FileReader();
				reader.onload = (e) => {
					imagePreviewData.value.push({
						id: Date.now() + Math.random(),
						file,
						preview: e.target.result,
						name: file.name,
						size: file.size
					});
				};
				reader.readAsDataURL(file);
			});
		};
		const removeImage = (imageId) => {
			imagePreviewData.value = imagePreviewData.value.filter((item) => item.id !== imageId);
		};
		const replaceImage = (imageId) => {
			const input = document.createElement("input");
			input.type = "file";
			input.accept = "image/*";
			input.onchange = (e) => {
				const file = e.target.files[0];
				if (!file) return;
				uploadErrors.value = [];
				if (!file.type.startsWith("image/")) {
					uploadErrors.value.push(`"${file.name}" is not a valid image file.`);
					return;
				}
				if (file.size > 5242880) {
					uploadErrors.value.push(`"${file.name}" exceeds the 5MB limit.`);
					return;
				}
				const reader = new FileReader();
				reader.onload = (event) => {
					const index = imagePreviewData.value.findIndex((item) => item.id === imageId);
					if (index !== -1) imagePreviewData.value[index] = {
						id: imageId,
						file,
						preview: event.target.result,
						name: file.name,
						size: file.size
					};
				};
				reader.readAsDataURL(file);
			};
			input.click();
		};
		const clearAllImages = () => {
			imagePreviewData.value = [];
			form.images = [];
			uploadErrors.value = [];
		};
		const addMoreImages = () => {
			const input = document.createElement("input");
			input.type = "file";
			input.accept = "image/*";
			input.multiple = true;
			input.onchange = (e) => {
				updatePreviewImages(e.target.files);
			};
			input.click();
		};
		const formatFileSize = (bytes) => {
			if (bytes === 0) return "0 Bytes";
			const k = 1024;
			const sizes = [
				"Bytes",
				"KB",
				"MB",
				"GB"
			];
			const i = Math.floor(Math.log(bytes) / Math.log(k));
			return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
		};
		const getErrorMessage = (field) => {
			const errorKey = Object.keys(form.errors).find((key) => key === field || key.startsWith(`${field}.`));
			return errorKey ? form.errors[errorKey] : null;
		};
		const imageErrorMessage = computed(() => getErrorMessage("images"));
		const hasImageError = computed(() => !!imageErrorMessage.value);
		const hasGeneralError = computed(() => !!form.errors.images);
		const pageTitle = computed(() => "Create New Product");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ckeditor = resolveComponent("ckeditor");
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Create Product" }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="" data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.products.index"),
							class: "py-2 px-4 bg-primary-300 hover:bg-primary-500 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Back `);
								else return [createTextVNode(" Back ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<h2 class="py-4 font-semibold text-xl text-gray-800 leading-tight" data-v-7b6b5d38${_scopeId}>${ssrInterpolate(pageTitle.value)}</h2></div>`);
					} else return [createVNode("div", { class: "" }, [createVNode(unref(Link), {
						href: _ctx.route("admin.products.index"),
						class: "py-2 px-4 bg-primary-300 hover:bg-primary-500 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md"
					}, {
						default: withCtx(() => [createTextVNode(" Back ")]),
						_: 1
					}, 8, ["href"]), createVNode("h2", { class: "py-4 font-semibold text-xl text-gray-800 leading-tight" }, toDisplayString(pageTitle.value), 1)])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-6" data-v-7b6b5d38${_scopeId}><div class="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6" data-v-7b6b5d38${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-v-7b6b5d38${_scopeId}><form data-v-7b6b5d38${_scopeId}><div class="space-y-6" data-v-7b6b5d38${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b6b5d38${_scopeId}><div data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							for: "name",
							value: "Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "name",
							type: "text",
							class: "mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm",
							modelValue: unref(form).name,
							"onUpdate:modelValue": ($event) => unref(form).name = $event,
							autofocus: "",
							autocomplete: "Product name",
							placeholder: "Product Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.name
						}, null, _parent, _scopeId));
						_push(`</div><div data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							for: "price",
							value: "Price"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "price",
							type: "number",
							step: "0.01",
							class: "mt-1 block w-full",
							modelValue: unref(form).price,
							"onUpdate:modelValue": ($event) => unref(form).price = $event,
							autocomplete: "Product price",
							placeholder: "Product Price"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.price
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7b6b5d38${_scopeId}><div data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							for: "size",
							value: "Size"
						}, null, _parent, _scopeId));
						_push(`<select id="size" class="mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm" data-v-7b6b5d38${_scopeId}><option value="" data-v-7b6b5d38${ssrIncludeBooleanAttr(Array.isArray(unref(form).size) ? ssrLooseContain(unref(form).size, "") : ssrLooseEqual(unref(form).size, "")) ? " selected" : ""}${_scopeId}>Select Size</option><!--[-->`);
						ssrRenderList(sizeOptions.value, (sizeOption) => {
							_push(`<option${ssrRenderAttr("value", sizeOption.value)} data-v-7b6b5d38${ssrIncludeBooleanAttr(Array.isArray(unref(form).size) ? ssrLooseContain(unref(form).size, sizeOption.value) : ssrLooseEqual(unref(form).size, sizeOption.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(sizeOption.label)}</option>`);
						});
						_push(`<!--]--></select>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.size
						}, null, _parent, _scopeId));
						_push(`</div><div data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							for: "pack_size",
							value: "Pack Size"
						}, null, _parent, _scopeId));
						_push(`<select id="pack_size" class="mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm" data-v-7b6b5d38${_scopeId}><option value="" data-v-7b6b5d38${ssrIncludeBooleanAttr(Array.isArray(unref(form).pack_size) ? ssrLooseContain(unref(form).pack_size, "") : ssrLooseEqual(unref(form).pack_size, "")) ? " selected" : ""}${_scopeId}>Select Pack Size</option><!--[-->`);
						ssrRenderList(packSizeOptions.value, (packSizeOption) => {
							_push(`<option${ssrRenderAttr("value", packSizeOption.value)} data-v-7b6b5d38${ssrIncludeBooleanAttr(Array.isArray(unref(form).pack_size) ? ssrLooseContain(unref(form).pack_size, packSizeOption.value) : ssrLooseEqual(unref(form).pack_size, packSizeOption.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(packSizeOption.label)}</option>`);
						});
						_push(`<!--]--></select>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.pack_size
						}, null, _parent, _scopeId));
						_push(`</div></div><div data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							for: "description",
							value: "Description"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_ckeditor, {
							editor: editor.value,
							modelValue: unref(form).description,
							"onUpdate:modelValue": ($event) => unref(form).description = $event,
							config: editorConfig.value
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.description
						}, null, _parent, _scopeId));
						_push(`</div><div class="border-t pt-6" data-v-7b6b5d38${_scopeId}><div class="flex items-center justify-between mb-4" data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							for: "image",
							value: "Images"
						}, null, _parent, _scopeId));
						_push(`<div class="flex space-x-2" data-v-7b6b5d38${_scopeId}>`);
						if (imagePreviewData.value.length > 0) _push(`<button type="button" class="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors" data-v-7b6b5d38${_scopeId}> Add More </button>`);
						else _push(`<!---->`);
						if (imagePreviewData.value.length > 0) _push(`<button type="button" class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors" data-v-7b6b5d38${_scopeId}> Clear All </button>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							class: "mt-1 focus:border-0 focus:ring-0",
							id: "image",
							"onUpdate:modelValue": ($event) => updatePreviewImages($event),
							accept: "image/*",
							multiple: "",
							placeholder: "Select Product Images (Max 5MB each)"
						}, null, _parent, _scopeId));
						_push(`<p class="text-xs text-gray-500 mt-1" data-v-7b6b5d38${_scopeId}> Supported formats: JPG, PNG, GIF, WebP. Maximum file size: 5MB per image. </p>`);
						if (hasImageError.value) _push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: imageErrorMessage.value
						}, null, _parent, _scopeId));
						else if (hasGeneralError.value) _push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.images
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						if (uploadErrors.value.length) {
							_push(`<ul class="mt-2 space-y-1" data-v-7b6b5d38${_scopeId}><!--[-->`);
							ssrRenderList(uploadErrors.value, (err) => {
								_push(`<li class="text-sm text-red-600" data-v-7b6b5d38${_scopeId}>${ssrInterpolate(err)}</li>`);
							});
							_push(`<!--]--></ul>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (imagePreviewData.value.length > 0) {
							_push(`<div class="space-y-4" data-v-7b6b5d38${_scopeId}><div class="flex items-center justify-between" data-v-7b6b5d38${_scopeId}><h3 class="text-lg font-semibold" data-v-7b6b5d38${_scopeId}> Selected Images (${ssrInterpolate(imagePreviewData.value.length)}) </h3><span class="text-sm text-gray-500" data-v-7b6b5d38${_scopeId}> Total size: ${ssrInterpolate(formatFileSize(imagePreviewData.value.reduce((total, item) => total + item.size, 0)))}</span></div><div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-v-7b6b5d38${_scopeId}><!--[-->`);
							ssrRenderList(imagePreviewData.value, (imageData, index) => {
								_push(`<div class="relative group border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:border-gray-300 transition-colors" data-v-7b6b5d38${_scopeId}><div class="absolute top-2 left-2 z-10 flex space-x-1" data-v-7b6b5d38${_scopeId}><span class="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded" data-v-7b6b5d38${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
								if (index === 0) _push(`<span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded font-medium" data-v-7b6b5d38${_scopeId}> Main </span>`);
								else _push(`<!---->`);
								_push(`</div><img${ssrRenderAttr("src", imageData.preview)}${ssrRenderAttr("alt", imageData.name)} class="w-full h-48 object-cover" data-v-7b6b5d38${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center" data-v-7b6b5d38${_scopeId}><div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2" data-v-7b6b5d38${_scopeId}><button class="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shadow-lg" title="Replace image" data-v-7b6b5d38${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7b6b5d38${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" data-v-7b6b5d38${_scopeId}></path></svg></button><button class="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors shadow-lg" title="Remove image" data-v-7b6b5d38${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7b6b5d38${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-7b6b5d38${_scopeId}></path></svg></button></div></div><div class="p-3 bg-white border-t" data-v-7b6b5d38${_scopeId}><p class="text-sm font-medium text-gray-900 truncate mb-1"${ssrRenderAttr("title", imageData.name)} data-v-7b6b5d38${_scopeId}>${ssrInterpolate(imageData.name)}</p><div class="flex justify-between items-center text-xs text-gray-500" data-v-7b6b5d38${_scopeId}><span data-v-7b6b5d38${_scopeId}>${ssrInterpolate(formatFileSize(imageData.size))}</span><span class="bg-gray-100 px-2 py-1 rounded" data-v-7b6b5d38${_scopeId}>${ssrInterpolate(imageData.file.type.split("/")[1].toUpperCase())}</span></div></div></div>`);
							});
							_push(`<!--]--></div><div class="mt-4 p-3 bg-blue-50 rounded-lg" data-v-7b6b5d38${_scopeId}><h4 class="text-sm font-medium text-blue-800 mb-1" data-v-7b6b5d38${_scopeId}>Tips for better images:</h4><ul class="text-xs text-blue-700 space-y-1" data-v-7b6b5d38${_scopeId}><li data-v-7b6b5d38${_scopeId}>• Use high-quality images (at least 800x600 pixels)</li><li data-v-7b6b5d38${_scopeId}>• The first image will be used as the main product image</li><li data-v-7b6b5d38${_scopeId}>• You can replace or remove images before saving</li><li data-v-7b6b5d38${_scopeId}>• Recommended formats: JPG for photos, PNG for graphics</li></ul></div></div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex items-center justify-end mt-6 pt-4 border-t" data-v-7b6b5d38${_scopeId}><div class="flex space-x-3" data-v-7b6b5d38${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.products.index"),
							class: "px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: ["px-6 py-2", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (unref(form).processing) _push(`<span data-v-7b6b5d38${_scopeId}>Saving...</span>`);
									else _push(`<span data-v-7b6b5d38${_scopeId}>Save Product</span>`);
								} else return [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Saving...")) : (openBlock(), createBlock("span", { key: 1 }, "Save Product"))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div></div></form></div></div></div>`);
					} else return [createVNode("div", { class: "py-6" }, [createVNode("div", { class: "max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [createVNode("form", { onSubmit: withModifiers(submitForm, ["prevent"]) }, [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [
							createVNode(_sfc_main$1, {
								for: "name",
								value: "Name"
							}),
							createVNode(_sfc_main$2, {
								id: "name",
								type: "text",
								class: "mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm",
								modelValue: unref(form).name,
								"onUpdate:modelValue": ($event) => unref(form).name = $event,
								autofocus: "",
								autocomplete: "Product name",
								placeholder: "Product Name"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$3, {
								class: "mt-2",
								message: unref(form).errors.name
							}, null, 8, ["message"])
						]), createVNode("div", null, [
							createVNode(_sfc_main$1, {
								for: "price",
								value: "Price"
							}),
							createVNode(_sfc_main$2, {
								id: "price",
								type: "number",
								step: "0.01",
								class: "mt-1 block w-full",
								modelValue: unref(form).price,
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								autocomplete: "Product price",
								placeholder: "Product Price"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$3, {
								class: "mt-2",
								message: unref(form).errors.price
							}, null, 8, ["message"])
						])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [
							createVNode(_sfc_main$1, {
								for: "size",
								value: "Size"
							}),
							withDirectives(createVNode("select", {
								id: "size",
								"onUpdate:modelValue": ($event) => unref(form).size = $event,
								class: "mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm"
							}, [createVNode("option", { value: "" }, "Select Size"), (openBlock(true), createBlock(Fragment, null, renderList(sizeOptions.value, (sizeOption) => {
								return openBlock(), createBlock("option", {
									key: sizeOption.value,
									value: sizeOption.value
								}, toDisplayString(sizeOption.label), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).size]]),
							createVNode(_sfc_main$3, {
								class: "mt-2",
								message: unref(form).errors.size
							}, null, 8, ["message"])
						]), createVNode("div", null, [
							createVNode(_sfc_main$1, {
								for: "pack_size",
								value: "Pack Size"
							}),
							withDirectives(createVNode("select", {
								id: "pack_size",
								"onUpdate:modelValue": ($event) => unref(form).pack_size = $event,
								class: "mt-1 block w-full border-gray-300 focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm"
							}, [createVNode("option", { value: "" }, "Select Pack Size"), (openBlock(true), createBlock(Fragment, null, renderList(packSizeOptions.value, (packSizeOption) => {
								return openBlock(), createBlock("option", {
									key: packSizeOption.value,
									value: packSizeOption.value
								}, toDisplayString(packSizeOption.label), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).pack_size]]),
							createVNode(_sfc_main$3, {
								class: "mt-2",
								message: unref(form).errors.pack_size
							}, null, 8, ["message"])
						])]),
						createVNode("div", null, [
							createVNode(_sfc_main$1, {
								for: "description",
								value: "Description"
							}),
							createVNode(_component_ckeditor, {
								editor: editor.value,
								modelValue: unref(form).description,
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								config: editorConfig.value
							}, null, 8, [
								"editor",
								"modelValue",
								"onUpdate:modelValue",
								"config"
							]),
							createVNode(_sfc_main$3, {
								class: "mt-2",
								message: unref(form).errors.description
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "border-t pt-6" }, [
							createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode(_sfc_main$1, {
								for: "image",
								value: "Images"
							}), createVNode("div", { class: "flex space-x-2" }, [imagePreviewData.value.length > 0 ? (openBlock(), createBlock("button", {
								key: 0,
								onClick: withModifiers(addMoreImages, ["prevent"]),
								type: "button",
								class: "text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors"
							}, " Add More ")) : createCommentVNode("", true), imagePreviewData.value.length > 0 ? (openBlock(), createBlock("button", {
								key: 1,
								onClick: withModifiers(clearAllImages, ["prevent"]),
								type: "button",
								class: "text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors"
							}, " Clear All ")) : createCommentVNode("", true)])]),
							createVNode(_sfc_main$4, {
								class: "mt-1 focus:border-0 focus:ring-0",
								id: "image",
								"onUpdate:modelValue": ($event) => updatePreviewImages($event),
								accept: "image/*",
								multiple: "",
								placeholder: "Select Product Images (Max 5MB each)"
							}, null, 8, ["onUpdate:modelValue"]),
							createVNode("p", { class: "text-xs text-gray-500 mt-1" }, " Supported formats: JPG, PNG, GIF, WebP. Maximum file size: 5MB per image. "),
							hasImageError.value ? (openBlock(), createBlock(_sfc_main$3, {
								key: 0,
								class: "mt-2",
								message: imageErrorMessage.value
							}, null, 8, ["message"])) : hasGeneralError.value ? (openBlock(), createBlock(_sfc_main$3, {
								key: 1,
								class: "mt-2",
								message: unref(form).errors.images
							}, null, 8, ["message"])) : createCommentVNode("", true),
							uploadErrors.value.length ? (openBlock(), createBlock("ul", {
								key: 2,
								class: "mt-2 space-y-1"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(uploadErrors.value, (err) => {
								return openBlock(), createBlock("li", {
									key: err,
									class: "text-sm text-red-600"
								}, toDisplayString(err), 1);
							}), 128))])) : createCommentVNode("", true)
						]),
						imagePreviewData.value.length > 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "space-y-4"
						}, [
							createVNode("div", { class: "flex items-center justify-between" }, [createVNode("h3", { class: "text-lg font-semibold" }, " Selected Images (" + toDisplayString(imagePreviewData.value.length) + ") ", 1), createVNode("span", { class: "text-sm text-gray-500" }, " Total size: " + toDisplayString(formatFileSize(imagePreviewData.value.reduce((total, item) => total + item.size, 0))), 1)]),
							createVNode("div", { class: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(imagePreviewData.value, (imageData, index) => {
								return openBlock(), createBlock("div", {
									key: imageData.id,
									class: "relative group border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:border-gray-300 transition-colors"
								}, [
									createVNode("div", { class: "absolute top-2 left-2 z-10 flex space-x-1" }, [createVNode("span", { class: "bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded" }, toDisplayString(index + 1), 1), index === 0 ? (openBlock(), createBlock("span", {
										key: 0,
										class: "bg-yellow-500 text-white text-xs px-2 py-1 rounded font-medium"
									}, " Main ")) : createCommentVNode("", true)]),
									createVNode("img", {
										src: imageData.preview,
										alt: imageData.name,
										class: "w-full h-48 object-cover"
									}, null, 8, ["src", "alt"]),
									createVNode("div", { class: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center" }, [createVNode("div", { class: "opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2" }, [createVNode("button", {
										onClick: withModifiers(($event) => replaceImage(imageData.id), ["prevent"]),
										class: "bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shadow-lg",
										title: "Replace image"
									}, [(openBlock(), createBlock("svg", {
										class: "w-4 h-4",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										"stroke-width": "2",
										d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
									})]))], 8, ["onClick"]), createVNode("button", {
										onClick: withModifiers(($event) => removeImage(imageData.id), ["prevent"]),
										class: "bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors shadow-lg",
										title: "Remove image"
									}, [(openBlock(), createBlock("svg", {
										class: "w-4 h-4",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										"stroke-width": "2",
										d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
									})]))], 8, ["onClick"])])]),
									createVNode("div", { class: "p-3 bg-white border-t" }, [createVNode("p", {
										class: "text-sm font-medium text-gray-900 truncate mb-1",
										title: imageData.name
									}, toDisplayString(imageData.name), 9, ["title"]), createVNode("div", { class: "flex justify-between items-center text-xs text-gray-500" }, [createVNode("span", null, toDisplayString(formatFileSize(imageData.size)), 1), createVNode("span", { class: "bg-gray-100 px-2 py-1 rounded" }, toDisplayString(imageData.file.type.split("/")[1].toUpperCase()), 1)])])
								]);
							}), 128))]),
							createVNode("div", { class: "mt-4 p-3 bg-blue-50 rounded-lg" }, [createVNode("h4", { class: "text-sm font-medium text-blue-800 mb-1" }, "Tips for better images:"), createVNode("ul", { class: "text-xs text-blue-700 space-y-1" }, [
								createVNode("li", null, "• Use high-quality images (at least 800x600 pixels)"),
								createVNode("li", null, "• The first image will be used as the main product image"),
								createVNode("li", null, "• You can replace or remove images before saving"),
								createVNode("li", null, "• Recommended formats: JPG for photos, PNG for graphics")
							])])
						])) : createCommentVNode("", true),
						createVNode("div", { class: "flex items-center justify-end mt-6 pt-4 border-t" }, [createVNode("div", { class: "flex space-x-3" }, [createVNode(unref(Link), {
							href: _ctx.route("admin.products.index"),
							class: "px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						}, 8, ["href"]), createVNode(PrimaryButton_default, {
							class: ["px-6 py-2", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "Saving...")) : (openBlock(), createBlock("span", { key: 1 }, "Save Product"))]),
							_: 1
						}, 8, ["class", "disabled"])])])
					])], 32)])])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Create.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Create_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-7b6b5d38"]]);
//#endregion
export { Create_default as default };
