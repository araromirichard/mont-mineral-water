import { t as _sfc_main$2 } from "./AppLayout-BlnyL3wK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { n as ToastStore_default } from "./ToastMessageList-BoY0bwIF.js";
import { t as QuantitySelector_default } from "./QuantitySelector-DJZmOQYC.js";
import { Fragment, computed, createBlock, createCommentVNode, createVNode, mergeProps, onMounted, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
//#region resources/js/Components/ProductCardSmall.vue
var _sfc_main$1 = {
	__name: "ProductCardSmall",
	__ssrInlineRender: true,
	props: { product: Object },
	setup(__props) {
		const props = __props;
		const quantity = ref(10);
		function increaseqty() {
			quantity.value++;
		}
		function decreaseqty() {
			if (quantity.value > 10) quantity.value--;
		}
		const packSize = computed(() => {
			switch (props.product.size) {
				case "330 ML": return "Pack of 24 bottles";
				case "500 ML": return "Pack of 15 bottles";
				case "1 Litre": return "Pack of 12 bottles";
				default: return "";
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card border border-neutral-100 text-center space-y-2" }, _attrs))} data-v-35c1f111><img${ssrRenderAttr("src", "/storage/" + __props.product.image)}${ssrRenderAttr("alt", __props.product.name)} class="product-image" loading="lazy" width="300" height="300" data-v-35c1f111><p class="product-name text-lg font-bold" data-v-35c1f111>${ssrInterpolate(__props.product.name)} - ${ssrInterpolate(__props.product.size)}</p><p class="pack-size" data-v-35c1f111>${ssrInterpolate(packSize.value)}</p><p class="product-price" data-v-35c1f111>${ssrInterpolate(__props.product.price)}</p><hr class="mx-6 text-neutral-200" data-v-35c1f111><div class="product-actions pt-2 pb-3 space-x-2" data-v-35c1f111>`);
			_push(ssrRenderComponent(QuantitySelector_default, {
				quantity: quantity.value,
				onMinus: decreaseqty,
				onAdd: increaseqty
			}, null, _parent));
			_push(`<button class="inline-flex items-center px-6 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-normal hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-1" data-v-35c1f111><svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-35c1f111><path d="M4.66668 7.99992V4.66658C4.66668 2.82492 6.16251 1.33325 8.00001 1.33325C9.84168 1.33325 11.3333 2.82909 11.3333 4.66658V7.99992M1.33334 6.33325H14.6667V19.6666H1.33334V6.33325Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" class="w-4 h-3" data-v-35c1f111></path></svg><span data-v-35c1f111> Add to Cart </span></button></div></div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCardSmall.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ProductCardSmall_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-35c1f111"]]);
//#endregion
//#region resources/js/Stores/cart.js
var cartCount = ref(parseInt(localStorage.getItem("cartCount")) || 0);
var updateCartCount = (count) => {
	cartCount.value = count;
	localStorage.setItem("cartCount", count.toString());
};
var addToCart = async (productId, quantity) => {
	try {
		const response = await axios.post("/api/cart/add", {
			product_id: productId,
			quantity
		});
		if (response.status === 200) {
			updateCartCount(response.data.cartItemCount);
			ToastStore_default.add({ message: response.data.message });
		}
	} catch (error) {
		console.error(error);
		ToastStore_default.add({ message: "an Error Occurred while adding product, try again" });
	}
};
//#endregion
//#region resources/js/Pages/Shop/ProductDetails.vue
var _sfc_main = {
	__name: "ProductDetails",
	__ssrInlineRender: true,
	props: {
		product: Object,
		otherProducts: Array
	},
	setup(__props) {
		const props = __props;
		const isMobile = window.innerWidth <= 768;
		const quantity = ref(10);
		const disableBtn = ref(false);
		function increaseqty() {
			quantity.value++;
		}
		function decreaseqty() {
			if (quantity.value > 10) quantity.value--;
		}
		const handleAddToCart = () => {
			let productId = props.product.id;
			addToCart(productId, quantity.value);
			disableBtn.value = true;
		};
		onMounted(() => {
			if (isMobile) new Swiper(".swiper", {
				modules: [Pagination],
				slidesPerView: 1,
				spaceBetween: 0,
				pagination: { el: ".swiper-pagination" }
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Product Details" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-v-c44fa615${_scopeId}><section id="SingleProduct" class="grid grid-cols-1 sm:grid-cols-2 py-8" data-v-c44fa615${_scopeId}><div class="product-images container mx-auto px-0" data-v-c44fa615${_scopeId}><div class="image-slider sm:hidden" data-v-c44fa615${_scopeId}><div class="swiper" data-v-c44fa615${_scopeId}><div class="swiper-wrapper" data-v-c44fa615${_scopeId}><!--[-->`);
						ssrRenderList(__props.product.images, (image) => {
							_push(`<div class="swiper-slide" data-v-c44fa615${_scopeId}><img${ssrRenderAttr("src", "/storage/" + image)}${ssrRenderAttr("alt", "Product Image " + (__props.product.images.indexOf(image) + 1))} data-v-c44fa615${_scopeId}></div>`);
						});
						_push(`<!--]--></div><div class="swiper-pagination" data-v-c44fa615${_scopeId}></div></div></div><div class="sm:grid sm:grid-cols-3 gap-3 hidden rounded-md px-8" data-v-c44fa615${_scopeId}><div class="w-auto h-36 row-span-1 col-span-1 space-y-1" data-v-c44fa615${_scopeId}><div class="sm:grid sm:grid-rows-2" style="${ssrRenderStyle({ "gap": "6px" })}" data-v-c44fa615${_scopeId}><!--[-->`);
						ssrRenderList(__props.product.images.slice(1), (image) => {
							_push(`<img${ssrRenderAttr("src", "/storage/" + image)}${ssrRenderAttr("alt", "Product Image " + (__props.product.images.indexOf(image) + 2))} class="h-auto overflow-hidden" data-v-c44fa615${_scopeId}>`);
						});
						_push(`<!--]--></div></div><div class="w-full h-full row-span-2 col-span-2" data-v-c44fa615${_scopeId}><img${ssrRenderAttr("src", "/storage/" + __props.product.images[0])}${ssrRenderAttr("alt", "Product Image 1")} data-v-c44fa615${_scopeId}></div></div></div><div class="product-details px-8 pt-4 sm:pt-0 pb-6" data-v-c44fa615${_scopeId}><p class="font-bold text-xl text-primary-500" data-v-c44fa615${_scopeId}>${ssrInterpolate(__props.product.name)} | ${ssrInterpolate(__props.product.size)}</p><p class="text-secondary-400 font-semibold text-base" data-v-c44fa615${_scopeId}>GHS ${ssrInterpolate(__props.product.price)}</p><p class="pt-2 w-full sm:max-w-sm" data-v-c44fa615${_scopeId}>${__props.product.description ?? ""}</p>`);
						if (!disableBtn.value) {
							_push(`<div class="flex space-x-2 py-4" data-v-c44fa615${_scopeId}>`);
							_push(ssrRenderComponent(QuantitySelector_default, {
								quantity: quantity.value,
								onMinus: decreaseqty,
								onAdd: increaseqty
							}, null, _parent, _scopeId));
							_push(`<button class="inline-flex items-center px-6 sm:px-20 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-2" data-v-c44fa615${_scopeId}><svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c44fa615${_scopeId}><path d="M4.66668 7.99992V4.66658C4.66668 2.82492 6.16251 1.33325 8.00001 1.33325C9.84168 1.33325 11.3333 2.82909 11.3333 4.66658V7.99992M1.33334 6.33325H14.6667V19.6666H1.33334V6.33325Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" data-v-c44fa615${_scopeId}></path></svg><span data-v-c44fa615${_scopeId}> Add to Cart </span></button></div>`);
						} else _push(`<!---->`);
						_push(`</div></section><section id="RelatedProduct" class="py-12" data-v-c44fa615${_scopeId}><div data-v-c44fa615${_scopeId}><div class="text-center text-primary-500 font-semibold text-2xl py-8" data-v-c44fa615${_scopeId}> Also Shop </div><div class="inline-block sm:flex flex-shrink-0 container mx-auto space-y-3 sm:space-y-0 space-x-0 sm:space-x-6" data-v-c44fa615${_scopeId}><!--[-->`);
						ssrRenderList(__props.otherProducts, (product, index) => {
							_push(ssrRenderComponent(ProductCardSmall_default, {
								key: index,
								product
							}, null, _parent, _scopeId));
						});
						_push(`<!--]--></div></div></section></div>`);
					} else return [createVNode("div", null, [createVNode("section", {
						id: "SingleProduct",
						ref: "SingleProduct",
						class: "grid grid-cols-1 sm:grid-cols-2 py-8"
					}, [createVNode("div", { class: "product-images container mx-auto px-0" }, [createVNode("div", { class: "image-slider sm:hidden" }, [createVNode("div", { class: "swiper" }, [createVNode("div", { class: "swiper-wrapper" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.product.images, (image) => {
						return openBlock(), createBlock("div", {
							class: "swiper-slide",
							key: image
						}, [createVNode("img", {
							src: "/storage/" + image,
							alt: "Product Image " + (__props.product.images.indexOf(image) + 1)
						}, null, 8, ["src", "alt"])]);
					}), 128))]), createVNode("div", { class: "swiper-pagination" })])]), createVNode("div", { class: "sm:grid sm:grid-cols-3 gap-3 hidden rounded-md px-8" }, [createVNode("div", { class: "w-auto h-36 row-span-1 col-span-1 space-y-1" }, [createVNode("div", {
						class: "sm:grid sm:grid-rows-2",
						style: { "gap": "6px" }
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.product.images.slice(1), (image) => {
						return openBlock(), createBlock("img", {
							key: image,
							src: "/storage/" + image,
							alt: "Product Image " + (__props.product.images.indexOf(image) + 2),
							class: "h-auto overflow-hidden"
						}, null, 8, ["src", "alt"]);
					}), 128))])]), createVNode("div", { class: "w-full h-full row-span-2 col-span-2" }, [createVNode("img", {
						src: "/storage/" + __props.product.images[0],
						alt: "Product Image 1"
					}, null, 8, ["src"])])])]), createVNode("div", { class: "product-details px-8 pt-4 sm:pt-0 pb-6" }, [
						createVNode("p", { class: "font-bold text-xl text-primary-500" }, toDisplayString(__props.product.name) + " | " + toDisplayString(__props.product.size), 1),
						createVNode("p", { class: "text-secondary-400 font-semibold text-base" }, "GHS " + toDisplayString(__props.product.price), 1),
						createVNode("p", {
							innerHTML: __props.product.description,
							class: "pt-2 w-full sm:max-w-sm"
						}, null, 8, ["innerHTML"]),
						!disableBtn.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "flex space-x-2 py-4"
						}, [createVNode(QuantitySelector_default, {
							quantity: quantity.value,
							onMinus: decreaseqty,
							onAdd: increaseqty
						}, null, 8, ["quantity"]), createVNode("button", {
							onClick: withModifiers(handleAddToCart, ["stop"]),
							class: "inline-flex items-center px-6 sm:px-20 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-2"
						}, [(openBlock(), createBlock("svg", {
							width: "16",
							height: "21",
							viewBox: "0 0 16 21",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createVNode("path", {
							d: "M4.66668 7.99992V4.66658C4.66668 2.82492 6.16251 1.33325 8.00001 1.33325C9.84168 1.33325 11.3333 2.82909 11.3333 4.66658V7.99992M1.33334 6.33325H14.6667V19.6666H1.33334V6.33325Z",
							stroke: "#F0F0F0",
							"stroke-width": "2",
							"stroke-linecap": "round"
						})])), createVNode("span", null, " Add to Cart ")])])) : createCommentVNode("", true)
					])], 512), createVNode("section", {
						id: "RelatedProduct",
						class: "py-12",
						ref: "RelatedProduct"
					}, [createVNode("div", null, [createVNode("div", { class: "text-center text-primary-500 font-semibold text-2xl py-8" }, " Also Shop "), createVNode("div", { class: "inline-block sm:flex flex-shrink-0 container mx-auto space-y-3 sm:space-y-0 space-x-0 sm:space-x-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.otherProducts, (product, index) => {
						return openBlock(), createBlock(ProductCardSmall_default, {
							key: index,
							product
						}, null, 8, ["product"]);
					}), 128))])])], 512)])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shop/ProductDetails.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProductDetails_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-c44fa615"]]);
//#endregion
export { ProductDetails_default as default };
