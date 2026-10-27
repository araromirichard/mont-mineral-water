import { i as store, t as _sfc_main$3 } from "./AppLayout-BlnyL3wK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as QuantitySelector_default } from "./QuantitySelector-DJZmOQYC.js";
import { Fragment, computed, createBlock, createCommentVNode, createVNode, mergeProps, onMounted, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import gsap from "gsap";
import ScrollTrigger$1 from "gsap/ScrollTrigger";
//#region resources/js/Components/ShopHero.vue
var _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<!--[--><div class="hidden sm:block" data-v-f6342926><div class="wrapper h-[63vh] grid grid-cols-12" data-v-f6342926><div class="flex flex-col justify-center sm:col-span-7 md:col-span-6 h-full bg-primary-500 border-none container mx-auto py-6" data-v-f6342926><p class="font-extrabold sm:text-xl tracking-wider md:text-5xl text-secondary-400 sm:max-w-xl md:max-w-xl" data-v-f6342926>Best enjoyed with great company </p><p class="text-2xl tracking-wider text-neutral-100 py-4" data-v-f6342926>Don’t Drink Alone</p></div><div class="flex-1 h-full bg-cover bg-no-repeat sm:col-span-5 md:col-span-6" style="${ssrRenderStyle({ "background-image": "url('/storage/frontend/shopHero.png')" })}" data-v-f6342926></div></div></div><div class="block sm:hidden" data-v-f6342926><div class="relative h-[90vh]" data-v-f6342926><div class="absolute inset-0 flex flex-col items-center" data-v-f6342926><div class="text-white text-center flex flex-col items-center z-10 w-full h-[50%] py-10" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, #051C2C 0%, rgba(5, 28, 44, 0) 96.59%)" })}" data-v-f6342926><p class="text-secondary-400 font-bold text-2xl w-60" data-v-f6342926>Best enjoyed with great company</p><p class="captionTxt" data-v-f6342926>Don’t Drink Alone</p></div><div class="absolute inset-0" data-v-f6342926><img src="/storage/frontend/shoppageM.png" alt="Mobile Hero Image" class="w-full h-full object-cover" data-v-f6342926></div></div></div></div><!--]-->`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShopHero.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ShopHero_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f6342926"]]);
//#endregion
//#region resources/js/Components/ProductCard.vue
var _sfc_main$1 = {
	__name: "ProductCard",
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
		const handleAddToCart = () => {
			const productId = props.product.id;
			store.actions.addItemToCart(productId, quantity.value);
			store.actions.getTotalItems();
		};
		const packSize = computed(() => {
			switch (props.product.size) {
				case "330 ML": return "Pack of 24 bottles";
				case "500 ML": return "Pack of 15 bottles";
				case "1 Litre": return "Pack of 12 bottles";
				default: return "";
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: _ctx.route("show-product", { product: __props.product.slug }),
				class: "product-card border border-neutral-100 text-center space-y-2"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="product-card border border-neutral-100 text-center space-y-2" data-v-4e8b0ba5${_scopeId}><img${ssrRenderAttr("src", "/storage/" + __props.product.image)}${ssrRenderAttr("alt", __props.product.name)} class="product-image" loading="lazy" width="350" height="350" data-v-4e8b0ba5${_scopeId}><p class="product-name text-lg font-bold" data-v-4e8b0ba5${_scopeId}>${ssrInterpolate(__props.product.name)} - ${ssrInterpolate(__props.product.size)}</p><p class="pack-size" data-v-4e8b0ba5${_scopeId}>${ssrInterpolate(packSize.value)}</p><p class="product-price" data-v-4e8b0ba5${_scopeId}>GHS ${ssrInterpolate(__props.product.price)}</p><hr class="mx-6 text-neutral-200" data-v-4e8b0ba5${_scopeId}><div class="product-actions pt-2 pb-3 space-x-2" data-v-4e8b0ba5${_scopeId}>`);
						_push(ssrRenderComponent(QuantitySelector_default, {
							quantity: quantity.value,
							onMinus: decreaseqty,
							onAdd: increaseqty
						}, null, _parent, _scopeId));
						_push(`<button class="inline-flex items-center px-6 py-2 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-normal hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-2" data-v-4e8b0ba5${_scopeId}><svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4e8b0ba5${_scopeId}><path d="M4.66668 7.99992V4.66658C4.66668 2.82492 6.16251 1.33325 8.00001 1.33325C9.84168 1.33325 11.3333 2.82909 11.3333 4.66658V7.99992M1.33334 6.33325H14.6667V19.6666H1.33334V6.33325Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" class="w-4 h-3" data-v-4e8b0ba5${_scopeId}></path></svg><span data-v-4e8b0ba5${_scopeId}> Add to Cart </span></button></div></div>`);
					} else return [createVNode("div", { class: "product-card border border-neutral-100 text-center space-y-2" }, [
						createVNode("img", {
							src: "/storage/" + __props.product.image,
							alt: __props.product.name,
							class: "product-image",
							loading: "lazy",
							width: "350",
							height: "350"
						}, null, 8, ["src", "alt"]),
						createVNode("p", { class: "product-name text-lg font-bold" }, toDisplayString(__props.product.name) + " - " + toDisplayString(__props.product.size), 1),
						createVNode("p", { class: "pack-size" }, toDisplayString(packSize.value), 1),
						createVNode("p", { class: "product-price" }, "GHS " + toDisplayString(__props.product.price), 1),
						createVNode("hr", { class: "mx-6 text-neutral-200" }),
						createVNode("div", { class: "product-actions pt-2 pb-3 space-x-2" }, [createVNode(QuantitySelector_default, {
							quantity: quantity.value,
							onMinus: withModifiers(decreaseqty, ["stop", "prevent"]),
							onAdd: withModifiers(increaseqty, ["stop", "prevent"])
						}, null, 8, ["quantity"]), createVNode("button", {
							onClick: withModifiers(handleAddToCart, ["prevent"]),
							class: "inline-flex items-center px-6 py-2 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-normal hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 space-x-2"
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
							"stroke-linecap": "round",
							class: "w-4 h-3"
						})])), createVNode("span", null, " Add to Cart ")])])
					])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCard.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ProductCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-4e8b0ba5"]]);
//#endregion
//#region resources/js/Pages/Shop/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { products: Array },
	setup(__props) {
		gsap.registerPlugin(ScrollTrigger$1);
		const shopheroRef = ref(null);
		const productsRef = ref(null);
		const productCardRefs = ref([]);
		onMounted(() => {
			gsap.fromTo(shopheroRef.value, {
				opacity: 0,
				y: 100
			}, {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out"
			});
			gsap.from(productCardRefs.value, {
				opacity: 0,
				y: 100,
				stagger: .2,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: productsRef.value,
					start: "top bottom-=100",
					end: "bottom bottom-=100",
					scrub: true
				}
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Shop" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class=""${_scopeId}><section id="shophero"${_scopeId}>`);
						_push(ssrRenderComponent(ShopHero_default, null, null, _parent, _scopeId));
						_push(`</section><section id="products"${_scopeId}>`);
						if (__props.products && __props.products.length > 0) {
							_push(`<div class="p-10 sm:px-0 block sm:flex justify-around items-center space-y-8 sm:space-y-0 space-x-0"${_scopeId}><!--[-->`);
							ssrRenderList(__props.products, (product, index) => {
								_push(ssrRenderComponent(ProductCard_default, {
									key: index,
									ref_for: true,
									ref: "productCardRef" + index,
									product
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else {
							_push(`<div class="p-10 sm:py-40 sm:px-0 block sm:flex justify-around items-center space-y-8 sm:space-y-0 space-x-0"${_scopeId}>`);
							if (__props.products && __props.products.length === 0) _push(`<div class="text-center text-gray-700 text-lg"${_scopeId}> No products available at the moment. </div>`);
							else _push(`<!---->`);
							_push(`</div>`);
						}
						_push(`</section></div>`);
					} else return [createVNode("div", { class: "" }, [createVNode("section", {
						id: "shophero",
						ref_key: "shopheroRef",
						ref: shopheroRef
					}, [createVNode(ShopHero_default)], 512), createVNode("section", {
						id: "products",
						ref_key: "productsRef",
						ref: productsRef
					}, [__props.products && __props.products.length > 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "p-10 sm:px-0 block sm:flex justify-around items-center space-y-8 sm:space-y-0 space-x-0"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product, index) => {
						return openBlock(), createBlock(ProductCard_default, {
							key: index,
							ref_for: true,
							ref: "productCardRef" + index,
							product
						}, null, 8, ["product"]);
					}), 128))])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "p-10 sm:py-40 sm:px-0 block sm:flex justify-around items-center space-y-8 sm:space-y-0 space-x-0"
					}, [__props.products && __props.products.length === 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "text-center text-gray-700 text-lg"
					}, " No products available at the moment. ")) : createCommentVNode("", true)]))], 512)])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shop/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
