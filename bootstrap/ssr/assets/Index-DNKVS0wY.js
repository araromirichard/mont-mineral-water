import { t as AdminLayout_default } from "./AdminLayout-C8vXYz0r.js";
import { t as _sfc_main$1 } from "./PaginationCom-BGiPx01J.js";
import { t as _sfc_main$2 } from "./Modal-CzOt-GTq.js";
import { n as _sfc_main$3, t as DangerButton_default } from "./DangerButton-CyYZaE2B.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, watch, withCtx, withDirectives } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Product/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		products: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters.search);
		const perPage = ref(props.filters.perPage || 5);
		const confirmingProductDeletion = ref(false);
		const productIdToDelete = ref(null);
		const fetchProducts = () => {
			router.get("/admin/products", {
				perPage: perPage.value,
				search: search.value
			}, {
				preserveState: true,
				replace: true
			});
		};
		function showProductDetails(productId) {
			router.get(route("admin.products.show", { id: productId }));
		}
		function editProductDetails(productId) {
			router.get(route("admin.products.edit", { id: productId }));
		}
		const deleteProduct = () => {
			if (!productIdToDelete.value) return;
			router.delete(route("admin.products.destroy", { id: productIdToDelete.value }), {
				onSuccess: () => closeModal(),
				onError: () => closeModal()
			});
		};
		const confirmProductDeletion = (productId) => {
			productIdToDelete.value = productId;
			confirmingProductDeletion.value = true;
		};
		const closeModal = () => {
			confirmingProductDeletion.value = false;
			productIdToDelete.value = null;
		};
		let searchTimer = null;
		watch(search, (value) => {
			clearTimeout(searchTimer);
			searchTimer = setTimeout(() => {
				router.get("/admin/products", {
					search: value,
					perPage: perPage.value
				}, {
					preserveState: true,
					replace: true
				});
			}, 350);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Products" }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-lg text-gray-800 leading-tight"${_scopeId}>Products</h2>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.products.create"),
							class: "py-2 px-4 bg-primary-500 hover:bg-primary-300 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Create`);
								else return [createTextVNode(" Create")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex justify-between items-center" }, [createVNode("h2", { class: "font-semibold text-lg text-gray-800 leading-tight" }, "Products"), createVNode(unref(Link), {
						href: _ctx.route("admin.products.create"),
						class: "py-2 px-4 bg-primary-500 hover:bg-primary-300 text-neutral-50 transition ease-in duration-150 focus:ring-0 rounded-md"
					}, {
						default: withCtx(() => [createTextVNode(" Create")]),
						_: 1
					}, 8, ["href"])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-8 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="max-w-7xl mx-auto"${_scopeId}><div class="bg-white overflow-hidden shadow-md sm:rounded-lg"${_scopeId}><div class="p-2 rounded-sm relative overflow-x-auto"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div class="pb-4 bg-white"${_scopeId}><label for="table-search" class="sr-only"${_scopeId}>Search</label><div class="relative mt-1"${_scopeId}><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"${_scopeId}><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"${_scopeId}></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", search.value)} class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-secondary-500 focus:border-blue-500" placeholder="Search for a Product"${_scopeId}></div></div><div class="flex px-2"${_scopeId}><select class="py-2 px-6 w-full rounded-md bg-gray-100 border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"${_scopeId}><option value="5"${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, "5") : ssrLooseEqual(perPage.value, "5")) ? " selected" : ""}${_scopeId}>5 Per Page</option><option value="10"${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, "10") : ssrLooseEqual(perPage.value, "10")) ? " selected" : ""}${_scopeId}>10 Per Page</option><option value="15"${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, "15") : ssrLooseEqual(perPage.value, "15")) ? " selected" : ""}${_scopeId}>15 Per Page</option></select></div></div><table class="w-full text-sm text-left text-gray-500"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}> Product name </th><th scope="col" class="px-6 py-3"${_scopeId}> Image </th><th scope="col" class="px-6 py-3"${_scopeId}> Size </th><th scope="col" class="px-6 py-3"${_scopeId}> Pack Size </th><th scope="col" class="px-6 py-3"${_scopeId}> Price (GH₵) </th><th scope="col" class="px-6 py-3 flex justify-center"${_scopeId}> Actions <span class="sr-only"${_scopeId}>Edit</span></th></tr></thead><tbody${_scopeId}>`);
						if (__props.products.data && __props.products.data.length > 0) {
							_push(`<!--[-->`);
							ssrRenderList(__props.products.data, (product) => {
								_push(`<tr class="bg-white border-t hover:bg-gray-50"${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"${_scopeId}>${ssrInterpolate(product.name)} - ${ssrInterpolate(product.size)}</th>`);
								if (product.product_images.length > 0) _push(`<td class="px-6 py-4"${_scopeId}><img${ssrRenderAttr("src", "/storage/" + product.product_images[0].image_path)} alt="Product Image" class="w-10 h-auto"${_scopeId}></td>`);
								else _push(`<td class="px-6 py-4 text-gray-400 text-xs"${_scopeId}>No image</td>`);
								_push(`<td class="px-6 py-4"${_scopeId}>${ssrInterpolate(product.size)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(product.pack_size)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(product.price)}</td><td class="px-6 py-4 flex justify-center items-center space-x-2"${_scopeId}><button class="p-1 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-secondary-300 hover:font-semibold"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg></button><button class="p-1 rounded-full bg-neutral-100 hover:bg-green-100 hover:text-green-700 hover:font-semibold"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId}></path></svg></button><button class="p-1 rounded-full bg-neutral-100 hover:bg-red-100 hover:text-red-700 hover:font-semibold"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"${_scopeId}></path></svg></button></td></tr>`);
							});
							_push(`<!--]-->`);
						} else _push(`<tr${_scopeId}><td colspan="5" class="text-center py-6 text-lg text-primary-500 font-semibold"${_scopeId}> No products available.</td></tr>`);
						_push(`</tbody></table>`);
						if (__props.products.data && __props.products.data.length > 0) {
							_push(`<div class="m-2 p-2 flex justify-end"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$1, { links: __props.products.links }, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div></div></div></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							show: confirmingProductDeletion.value,
							onClose: closeModal
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete this Product </h2><div class="mt-6 flex justify-end"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, { onClick: closeModal }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Cancel `);
											else return [createTextVNode(" Cancel ")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(DangerButton_default, {
										class: "ml-3",
										onClick: deleteProduct
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Delete Product `);
											else return [createTextVNode(" Delete Product ")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</div></div>`);
								} else return [createVNode("div", { class: "p-6" }, [createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete this Product "), createVNode("div", { class: "mt-6 flex justify-end" }, [createVNode(_sfc_main$3, { onClick: closeModal }, {
									default: withCtx(() => [createTextVNode(" Cancel ")]),
									_: 1
								}), createVNode(DangerButton_default, {
									class: "ml-3",
									onClick: deleteProduct
								}, {
									default: withCtx(() => [createTextVNode(" Delete Product ")]),
									_: 1
								})])])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode("div", { class: "py-8 px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "max-w-7xl mx-auto" }, [createVNode("div", { class: "bg-white overflow-hidden shadow-md sm:rounded-lg" }, [createVNode("div", { class: "p-2 rounded-sm relative overflow-x-auto" }, [
						createVNode("div", { class: "flex justify-between items-center" }, [createVNode("div", { class: "pb-4 bg-white" }, [createVNode("label", {
							for: "table-search",
							class: "sr-only"
						}, "Search"), createVNode("div", { class: "relative mt-1" }, [createVNode("div", { class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, [(openBlock(), createBlock("svg", {
							class: "w-5 h-5 text-gray-500 dark:text-gray-400",
							"aria-hidden": "true",
							fill: "currentColor",
							viewBox: "0 0 20 20",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createVNode("path", {
							"fill-rule": "evenodd",
							d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
							"clip-rule": "evenodd"
						})]))]), withDirectives(createVNode("input", {
							type: "text",
							id: "table-search",
							"onUpdate:modelValue": ($event) => search.value = $event,
							class: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-secondary-500 focus:border-blue-500",
							placeholder: "Search for a Product"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]])])]), createVNode("div", { class: "flex px-2" }, [withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => perPage.value = $event,
							onChange: fetchProducts,
							class: "py-2 px-6 w-full rounded-md bg-gray-100 border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
						}, [
							createVNode("option", { value: "5" }, "5 Per Page"),
							createVNode("option", { value: "10" }, "10 Per Page"),
							createVNode("option", { value: "15" }, "15 Per Page")
						], 40, ["onUpdate:modelValue"]), [[vModelSelect, perPage.value]])])]),
						createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Product name "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Image "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Size "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Pack Size "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Price (GH₵) "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3 flex justify-center"
							}, [createTextVNode(" Actions "), createVNode("span", { class: "sr-only" }, "Edit")])
						])]), createVNode("tbody", null, [__props.products.data && __props.products.data.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.products.data, (product) => {
							return openBlock(), createBlock("tr", {
								class: "bg-white border-t hover:bg-gray-50",
								key: product.id
							}, [
								createVNode("th", {
									scope: "row",
									class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
								}, toDisplayString(product.name) + " - " + toDisplayString(product.size), 1),
								product.product_images.length > 0 ? (openBlock(), createBlock("td", {
									key: 0,
									class: "px-6 py-4"
								}, [createVNode("img", {
									src: "/storage/" + product.product_images[0].image_path,
									alt: "Product Image",
									class: "w-10 h-auto"
								}, null, 8, ["src"])])) : (openBlock(), createBlock("td", {
									key: 1,
									class: "px-6 py-4 text-gray-400 text-xs"
								}, "No image")),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(product.size), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(product.pack_size), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(product.price), 1),
								createVNode("td", { class: "px-6 py-4 flex justify-center items-center space-x-2" }, [
									createVNode("button", {
										onClick: ($event) => showProductDetails(product.id),
										class: "p-1 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-secondary-300 hover:font-semibold"
									}, [(openBlock(), createBlock("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "w-6 h-6"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
									}), createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									})]))], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => editProductDetails(product.id),
										class: "p-1 rounded-full bg-neutral-100 hover:bg-green-100 hover:text-green-700 hover:font-semibold"
									}, [(openBlock(), createBlock("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "w-6 h-6"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									})]))], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => confirmProductDeletion(product.id),
										class: "p-1 rounded-full bg-neutral-100 hover:bg-red-100 hover:text-red-700 hover:font-semibold"
									}, [(openBlock(), createBlock("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "w-6 h-6"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									})]))], 8, ["onClick"])
								])
							]);
						}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
							colspan: "5",
							class: "text-center py-6 text-lg text-primary-500 font-semibold"
						}, " No products available.")]))])]),
						__props.products.data && __props.products.data.length > 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "m-2 p-2 flex justify-end"
						}, [createVNode(_sfc_main$1, { links: __props.products.links }, null, 8, ["links"])])) : createCommentVNode("", true)
					])])])]), createVNode(_sfc_main$2, {
						show: confirmingProductDeletion.value,
						onClose: closeModal
					}, {
						default: withCtx(() => [createVNode("div", { class: "p-6" }, [createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete this Product "), createVNode("div", { class: "mt-6 flex justify-end" }, [createVNode(_sfc_main$3, { onClick: closeModal }, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						}), createVNode(DangerButton_default, {
							class: "ml-3",
							onClick: deleteProduct
						}, {
							default: withCtx(() => [createTextVNode(" Delete Product ")]),
							_: 1
						})])])]),
						_: 1
					}, 8, ["show"])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
