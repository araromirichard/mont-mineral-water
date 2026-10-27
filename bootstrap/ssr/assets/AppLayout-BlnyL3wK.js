import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as ApplicationLogo_default } from "./ApplicationLogo-De7nLcr7.js";
import { n as ToastStore_default, t as _sfc_main$9 } from "./ToastMessageList-BoY0bwIF.js";
import { t as _sfc_main$10 } from "./NavLink-Bz8QwDgc.js";
import { t as _sfc_main$11 } from "./DropdownLink-i2Q5OIsF.js";
import { t as _sfc_main$12 } from "./InputLabel-CznyKaCe.js";
import { n as _sfc_main$13, t as _sfc_main$14 } from "./InputError-BUHLoSfJ.js";
import { computed, createBlock, createTextVNode, createVNode, mergeProps, onMounted, onUnmounted, openBlock, reactive, ref, renderSlot, toDisplayString, unref, useSSRContext, watch, withCtx, withModifiers } from "vue";
import { Link, useForm, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport } from "vue/server-renderer";
import "gsap";
import axios$1 from "axios";
import { onClickOutside } from "@vueuse/core";
//#region resources/js/Components/CartModal.vue
var _sfc_main$8 = {
	__name: "CartModal",
	__ssrInlineRender: true,
	props: {
		show: {
			type: Boolean,
			default: false
		},
		maxWidth: {
			type: String,
			default: "lg"
		},
		closeable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		watch(() => props.show, () => {
			if (props.show) document.body.style.overflow = "hidden";
			else document.body.style.overflow = null;
		});
		const close = () => {
			if (props.closeable) emit("close");
		};
		const closeOnEscape = (e) => {
			if (e.key === "Escape" && props.show) close();
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => {
			document.removeEventListener("keydown", closeOnEscape);
			document.body.style.overflow = null;
		});
		const maxWidthClass = computed(() => {
			return {
				mobile: "w-full",
				sm: "sm:max-w-sm",
				md: "sm:max-w-md",
				lg: "sm:max-w-lg",
				xl: "sm:max-w-xl",
				"2xl": "sm:max-w-2xl"
			}[props.maxWidth];
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderTeleport(_push, (_push) => {
				_push(`<div class="fixed inset-0 overflow-y-auto px-4 sm:px-0 z-40" scroll-region style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="fixed inset-0 transform transition-all" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="absolute inset-0 bg-neutrals-700 opacity-75"></div></div><div class="${ssrRenderClass([maxWidthClass.value, "mt-0 bg-neutrals-50 h-screen sm:h-auto overflow-hidden shadow-xl transform transition-all sm:w-full absolute top-0 right-0"])}" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}">`);
				if (__props.show) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				else _push(`<!---->`);
				_push(`</div></div>`);
			}, "body", false, _parent);
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CartModal.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Stores/simpleStore.js
var store = reactive({
	state: {
		cartCount: 0,
		cart: null
	},
	getters: {
		getCartCount() {
			return store.state.cartCount;
		},
		getCartItems() {
			return store.state.cart ? store.state.cart.cartItems : [];
		},
		getSubtotal() {
			return store.getters.getCartItems().reduce((total, item) => {
				return total + item.price * item.quantity;
			}, 0);
		}
	},
	mutations: {
		setCartCount(count) {
			store.state.cartCount = count;
		},
		setCart(data) {
			store.state.cart = data;
		}
	},
	actions: {
		async getTotalItems() {
			try {
				const { data } = await axios$1.get("api/cart/total");
				store.mutations.setCartCount(data.totalItems);
			} catch (error) {
				console.error("Error fetching total items:", error);
			}
		},
		async addItemToCart(productId, quantity) {
			try {
				const { data } = await axios$1.post("/api/cart/add", {
					product_id: productId,
					quantity
				});
				store.mutations.setCartCount(data.cartItemCount);
				ToastStore_default.add({ message: data.message });
			} catch (error) {
				console.error("Error adding item to cart:", error);
			}
		},
		async fetchCartItems() {
			try {
				const { data } = await axios$1.get("/api/cart");
				store.mutations.setCart(data);
			} catch (error) {
				console.error("Error fetching cart data:", error);
			}
		},
		async deleteCartItem(productId) {
			try {
				await axios$1.delete(`/api/cart/${productId}`);
				store.actions.fetchCartItems();
				store.actions.getTotalItems();
				ToastStore_default.add({ message: "Item deleted successfully" });
			} catch (error) {
				console.error("Error deleting item from cart:", error);
			}
		},
		async updateCartItem(productId, quantity) {
			try {
				await axios$1.patch("/api/cart/update", {
					product_id: productId,
					quantity
				});
				store.actions.fetchCartItems();
			} catch (error) {
				console.error("Error updating cart:", error);
			}
		}
	}
});
//#endregion
//#region resources/js/Components/QuantitySelectorCart.vue
var _sfc_main$7 = {
	__name: "QuantitySelectorCart",
	__ssrInlineRender: true,
	props: { quantity: Number },
	emits: ["add", "minus"],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "quantity-selector" }, _attrs))} data-v-4e98b509><button class="quantity-btn" data-v-4e98b509><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" data-v-4e98b509><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" data-v-4e98b509></path></svg></button><div class="quantity-value flex-grow flex items-center justify-center font-bold text-lg" data-v-4e98b509>${ssrInterpolate(__props.quantity)}</div><button class="quantity-btn" data-v-4e98b509><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" data-v-4e98b509><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" data-v-4e98b509></path></svg></button></div>`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/QuantitySelectorCart.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var QuantitySelectorCart_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$7, [["__scopeId", "data-v-4e98b509"]]);
//#endregion
//#region resources/js/Components/CartItem.vue
var _sfc_main$6 = {
	__name: "CartItem",
	__ssrInlineRender: true,
	props: { item: Object },
	emits: [
		"cart-updated",
		"qty-increased",
		"qty-decreased",
		"item-deleted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		function increaseQty() {
			props.item.quantity++;
			emit("qty-increased");
		}
		function decreaseQty() {
			if (props.item.quantity > 1) {
				props.item.quantity--;
				emit("qty-decreased");
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-4 mt-6 space-x-1 border-b border-neutral-400 border-opacity-30 py-3 sm:py-6" }, _attrs))} data-v-7e6ec26c><div class="" data-v-7e6ec26c><img${ssrRenderAttr("src", "/storage/" + __props.item.imagePath)}${ssrRenderAttr("alt", __props.item.name)} data-v-7e6ec26c></div><div class="row-span-2 col-span-2 space-y-2 pb-2" data-v-7e6ec26c><p class="font-bold text-lg" data-v-7e6ec26c>${ssrInterpolate(__props.item.name)} | ${ssrInterpolate(__props.item.size)} | Pack of 12</p><p class="font-bold tracking-wider text-primary-400 text-xs" data-v-7e6ec26c>Quantity</p><div data-v-7e6ec26c>`);
			_push(ssrRenderComponent(QuantitySelectorCart_default, {
				quantity: __props.item.quantity,
				onAdd: increaseQty,
				onMinus: decreaseQty
			}, null, _parent));
			_push(`</div></div><div class="row-span-2 flex flex-col justify-between items-end" data-v-7e6ec26c><div class="text-secondary-400 tracking-wide text-sm font-bold" data-v-7e6ec26c>GSH ${ssrInterpolate(__props.item.price)}</div><div class="flex items-center" data-v-7e6ec26c><button class="deleteBtn" data-v-7e6ec26c>delete</button></div></div></div>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CartItem.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var CartItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["__scopeId", "data-v-7e6ec26c"]]);
//#endregion
//#region resources/js/Components/IconButton.vue
var _sfc_main$5 = {
	__name: "IconButton",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		btnInnerText: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out bg-primary-500 rounded-full shadow-md group"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="absolute inset-0 flex items-center justify-center w-full h-full text-neutral-200 duration-300 -translate-x-full bg-secondary-400 group-hover:translate-x-0 ease"${_scopeId}>${ssrInterpolate(__props.btnInnerText)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"${_scopeId}></path></svg></span>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [createVNode("span", { class: "absolute inset-0 flex items-center justify-center w-full h-full text-neutral-200 duration-300 -translate-x-full bg-secondary-400 group-hover:translate-x-0 ease" }, [createTextVNode(toDisplayString(__props.btnInnerText) + " ", 1), (openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-6 h-6 pl-2 animate-pulse font-semibold"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
					})]))]), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/IconButton.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/ShopCart.vue
var _sfc_main$4 = {
	__name: "ShopCart",
	__ssrInlineRender: true,
	emits: ["close-modal"],
	setup(__props, { emit: __emit }) {
		const cartItems = computed(() => {
			return store.getters.getCartItems();
		});
		const subtotal = computed(() => {
			return store.getters.getSubtotal();
		});
		const totalQuantity = computed(() => {
			return cartItems.value.reduce((total, item) => total + item.quantity, 0);
		});
		const updateCart = (productId, quantity) => {
			store.actions.updateCartItem(productId, quantity);
			store.actions.fetchCartItems();
		};
		const deleteCartItem = (productId) => {
			store.actions.deleteCartItem(productId);
		};
		onMounted(() => {
			store.actions.fetchCartItems();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 block justify-center" }, _attrs))}><div class="flex items-center justify-end w-full"><button class="p-2 hover:bg-white text-neutral-400 rounded-full transition duration-75 ease-in"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex justify-center items-center text-primary-500 font-bold text-2xl"> Your cart </div>`);
			if (cartItems.value.length > 0) {
				_push(`<div><!--[-->`);
				ssrRenderList(cartItems.value, (item) => {
					_push(ssrRenderComponent(CartItem_default, {
						key: item.productId,
						item,
						onCartUpdated: ($event) => updateCart(item.productId, item.quantity),
						onItemDeleted: ($event) => deleteCartItem(item.productId),
						onQtyIncreased: ($event) => updateCart(item.productId, item.quantity),
						onQtyDecreased: ($event) => updateCart(item.productId, item.quantity)
					}, null, _parent));
				});
				_push(`<!--]--><div class="cartActions grid grid-cols-4 border-y border-spacing-1 border-gray-300 py-4"><p class="col-span-2 col-start-2 text-secondary-400 font-bold tracking-wide text-base"> Subtotal (${ssrInterpolate(totalQuantity.value)} items): </p><p class="flex m-0 space-x-2 items-center justify-end"><span class="uppercase font-semibold text-primary-500 tracking-wide text-xs">ghs</span><span class="text-lg font-bold tracking-wide text-secondary-400">${ssrInterpolate(subtotal.value.toLocaleString("en-GH", { useGrouping: true }))}</span></p></div><div class="flex justify-end items-center py-4">`);
				_push(ssrRenderComponent(_sfc_main$5, {
					href: _ctx.route("show-checkout"),
					"btn-inner-text": "Proceed to Checkout"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Proceed to Checkout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"${_scopeId}></path></svg>`);
						else return [createTextVNode(" Proceed to Checkout "), (openBlock(), createBlock("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							"stroke-width": "1.5",
							stroke: "currentColor",
							class: "w-6 h-6 pl-2 animate-pulse font-semibold"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
						})]))];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			} else {
				_push(`<div><div class="flex items-center justify-center py-4"><img class="w-68 h-64" src="/empty_cart.png" alt="An Empty cart"></div><div class="block items-center justify-center"><p class="text-center text-primary-500 text-base font-bold">Your Cart is Empty</p></div><div class="flex items-center justify-center mx-auto py-2" style="${ssrRenderStyle({ "max-width": "250px" })}"><p class="text-center">Looks like you haven&#39;t added anything to your cart yet.</p></div><div class="flex justify-center items-center mx-auto pb-4">`);
				_push(ssrRenderComponent(_sfc_main$5, {
					href: _ctx.route("shop"),
					"btn-inner-text": "Start Shopping"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Start Shopping <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"${_scopeId}></path></svg>`);
						else return [createTextVNode(" Start Shopping "), (openBlock(), createBlock("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							"stroke-width": "1.5",
							stroke: "currentColor",
							class: "w-6 h-6 pl-2 animate-pulse font-semibold"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
						})]))];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			}
			_push(`</div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShopCart.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/MontMobileNavLink.vue
var _sfc_main$3 = {
	__name: "MontMobileNavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "block w-full pl-6 text-left font-semibold text-gray-700 bg-secondary-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 focus:border-gray-700 transition duration-150 ease-in-out" : "block w-full pl-5 text-left font-semibold text-gray-600 hover:text-gray-800 hover:bg-secondary-100 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MontMobileNavLink.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/MontMobileSublink.vue
var _sfc_main$2 = {
	__name: "MontMobileSublink",
	__ssrInlineRender: true,
	props: { href: {
		type: String,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "block w-full text-center leading-5 font-normal text-neutral-700 hover:bg-secondary-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MontMobileSublink.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/FormButton.vue
var _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<button${ssrRenderAttrs(mergeProps({ class: "block items-center w-full px-4 py-3 bg-gray-800 border border-transparent rounded-2xl font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FormButton.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var FormButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/Layouts/AppLayout.vue
var _sfc_main = {
	__name: "AppLayout",
	__ssrInlineRender: true,
	props: {
		canResetPassword: { type: Boolean },
		status: { type: String },
		hasAppPages: {
			type: Boolean,
			default: true
		}
	},
	emits: ["scrollToContact"],
	setup(__props, { emit: __emit }) {
		const user = reactive({ auth: { user: usePage().props.auth.user } });
		const dropdownRef = ref(null);
		const Products = ref(null);
		const showingNavigationDropdown = ref(false);
		const showDropdown = ref(false);
		const showSublinks = ref(false);
		const showShopDropdown = ref(false);
		const cartCount = computed(() => {
			return store.getters.getCartCount();
		});
		computed(() => {
			return Products.value?.length ?? 0;
		});
		onClickOutside(dropdownRef, () => {
			showDropdown.value = false;
		});
		const openCart = ref(false);
		const shopDropdown = ref(null);
		const closeModal = () => {
			openCart.value = false;
		};
		onClickOutside(shopDropdown, () => {
			showShopDropdown.value = false;
		});
		const modalWidth = computed(() => {
			return window.innerWidth <= 768 ? "mobile" : "lg";
		});
		function toggleSublinks() {
			showSublinks.value = !showSublinks.value;
		}
		const form = useForm({
			email: "",
			password: "",
			remember: false
		});
		const fetchProducts = () => {
			axios.get(`/api/shop`).then((response) => {
				Products.value = response.data;
			}).catch(() => {
				Products.value = [];
			});
		};
		onMounted(() => {
			fetchProducts();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
			_push(`<nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-neutral-100"><div class="max-w-screen-2xl flex flex-wrap items-center justify-between container mx-auto py-4"><button class="inline-flex items-center sm:hidden justify-center p-2 rounded-md text-neutral-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
				hidden: showingNavigationDropdown.value,
				"inline-flex": !showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
				hidden: !showingNavigationDropdown.value,
				"inline-flex": showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="shrink-0 flex items-center">`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("homepage") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-14 w-auto fill-current text-gray-800" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "block h-14 w-auto fill-current text-gray-800" })];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex sm:order-2 md:space-x-2"><button class="relative p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.28052 17.5L3.80251 9.5H21.1975L19.7195 17.5H5.28052Z" stroke="#051C2C" stroke-width="3" stroke-linejoin="round"></path><circle cx="6.94937" cy="21.8798" r="1.94937" fill="#051C2C"></circle><circle cx="17.9874" cy="21.8798" r="1.94937" fill="#051C2C"></circle><path d="M3.46535 1.67945C3.28832 0.870164 2.48875 0.357618 1.67945 0.53465C0.870164 0.711682 0.357618 1.51125 0.53465 2.32055L3.46535 1.67945ZM6.96535 17.6795L3.46535 1.67945L0.53465 2.32055L4.03465 18.3205L6.96535 17.6795Z" fill="#051C2C"></path></svg>`);
			if (cartCount.value > 0) _push(`<span class="absolute top-2 right-1 -mt-1 -mr-1 px-[6px] text-xs font-normal text-white bg-secondary-400 rounded-full">${ssrInterpolate(cartCount.value)}</span>`);
			else _push(`<!---->`);
			_push(`</button><button class="p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4006 6.47619C17.4006 9.16494 15.1074 11.4524 12.1428 11.4524C9.17825 11.4524 6.88507 9.16494 6.88507 6.47619C6.88507 3.78744 9.17825 1.5 12.1428 1.5C15.1074 1.5 17.4006 3.78744 17.4006 6.47619Z" stroke="#051C2C" stroke-width="3"></path><path d="M21.2857 24C21.2857 19.1609 17.1923 15.2381 12.1429 15.2381C7.0934 15.2381 3 19.1609 3 24" stroke="#051C2C" stroke-width="3"></path></svg></button>`);
			if (showDropdown.value) {
				_push(`<div class="absolute right-0 sm:right-12 mt-1 w-full sm:w-4/12 bg-[#f2f2f2] rounded shadow-md z-20"><div class="py-1 dropdown-content text-primary-500"><div class="flex items-center justify-between px-3 w-full">`);
				if (user.auth.user) _push(`<p class="font-bold text-xl text-primary-500">${ssrInterpolate(user.auth.user.first_name)} ${ssrInterpolate(user.auth.user.last_name)}</p>`);
				else _push(`<p class="font-bold text-xl text-primary-500">Account Details</p>`);
				_push(`<button class="p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4006 6.47619C17.4006 9.16494 15.1074 11.4524 12.1428 11.4524C9.17825 11.4524 6.88507 9.16494 6.88507 6.47619C6.88507 3.78744 9.17825 1.5 12.1428 1.5C15.1074 1.5 17.4006 3.78744 17.4006 6.47619Z" stroke="#051C2C" stroke-width="3"></path><path d="M21.2857 24C21.2857 19.1609 17.1923 15.2381 12.1429 15.2381C7.0934 15.2381 3 19.1609 3 24" stroke="#051C2C" stroke-width="3"></path></svg></button></div>`);
				if (user.auth.user) {
					_push(`<div><div class="space-y-2">`);
					_push(ssrRenderComponent(_sfc_main$11, { href: _ctx.route("dashboard") }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Profile `);
							else return [createTextVNode(" Profile ")];
						}),
						_: 1
					}, _parent));
					if (_ctx.$page.props.is_admin) _push(ssrRenderComponent(_sfc_main$11, { href: _ctx.route("admin.index") }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Admin Dashboard `);
							else return [createTextVNode(" Admin Dashboard ")];
						}),
						_: 1
					}, _parent));
					else _push(ssrRenderComponent(_sfc_main$11, null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Purchase History `);
							else return [createTextVNode(" Purchase History ")];
						}),
						_: 1
					}, _parent));
					_push(`</div><div class="border-t border-neutrals-200">`);
					_push(ssrRenderComponent(_sfc_main$11, {
						href: _ctx.route("logout"),
						method: "post",
						as: "button"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Sign Out `);
							else return [createTextVNode(" Sign Out ")];
						}),
						_: 1
					}, _parent));
					_push(`</div></div>`);
				} else {
					_push(`<div class="px-4 py-4"><form class="w-full"><div>`);
					_push(ssrRenderComponent(_sfc_main$12, {
						for: "email",
						value: "Email",
						class: "font-bold"
					}, null, _parent));
					_push(ssrRenderComponent(_sfc_main$13, {
						id: "email",
						type: "email",
						class: "mt-1 rounded-xs bg-neutral-300 w-full border-none",
						modelValue: unref(form).email,
						"onUpdate:modelValue": ($event) => unref(form).email = $event
					}, null, _parent));
					_push(ssrRenderComponent(_sfc_main$14, {
						class: "mt-2",
						message: unref(form).errors.email
					}, null, _parent));
					_push(`</div><div class="mt-4">`);
					_push(ssrRenderComponent(_sfc_main$12, {
						for: "password",
						value: "Password",
						class: "font-bold"
					}, null, _parent));
					_push(ssrRenderComponent(_sfc_main$13, {
						id: "password",
						type: "password",
						class: "mt-1 rounded-xs bg-neutral-300 w-full border-none",
						modelValue: unref(form).password,
						"onUpdate:modelValue": ($event) => unref(form).password = $event
					}, null, _parent));
					_push(ssrRenderComponent(_sfc_main$14, {
						class: "mt-2",
						message: unref(form).errors.password
					}, null, _parent));
					_push(`</div><div class="flex flex-col items-center mt-8 space-y-2 pb-3 border-b-2">`);
					_push(ssrRenderComponent(FormButton_default, {
						class: ["", { "opacity-25": unref(form).processing }],
						disabled: unref(form).processing
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Sign in `);
							else return [createTextVNode(" Sign in ")];
						}),
						_: 1
					}, _parent));
					_push(ssrRenderComponent(unref(Link), {
						href: _ctx.route("password.request"),
						class: "text-sm flext w-full text-start text-[#555F66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Forgot your password? `);
							else return [createTextVNode(" Forgot your password? ")];
						}),
						_: 1
					}, _parent));
					_push(`</div><div class="text-center text-neutral-700 text-base py-2"> Don’t have an account? `);
					_push(ssrRenderComponent(unref(Link), {
						href: _ctx.route("register"),
						class: "text-secondary-400"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Sign up here `);
							else return [createTextVNode("Sign up here ")];
						}),
						_: 1
					}, _parent));
					_push(`<br><span class="pt-2">OR</span></div></form><div class="text-center text-neutral-700 text-base"><a${ssrRenderAttr("href", _ctx.route("google-redirect"))} class="text-secondary-400">Sign in using Your Google Account </a></div></div>`);
				}
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`</div><div class="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1"><div class="hidden space-x-8 sm:flex"><div class="flex items-center">`);
			_push(ssrRenderComponent(_sfc_main$10, {
				href: _ctx.route("shop"),
				active: _ctx.route().current("shop")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop `);
					else return [createTextVNode(" Shop ")];
				}),
				_: 1
			}, _parent));
			if (showShopDropdown.value) {
				_push(`<div class="flex justify-evenly items-center absolute left-0 right-0 top-20 w-full h-80 bg-white rounded shadow-md z-10"><!--[-->`);
				ssrRenderList(Products.value, (product) => {
					_push(ssrRenderComponent(unref(Link), { href: _ctx.route("show-product", { product: product.slug }) }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<div class="flex flex-col justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", "/storage/" + product.image)}${ssrRenderAttr("alt", product.name)} class="w-56 h-auto" loading="lazy" width="224" height="224"${_scopeId}><p class="shopdropdown__txt pt-2"${_scopeId}>${ssrInterpolate(product.name)} | ${ssrInterpolate(product.size)}</p></div>`);
							else return [createVNode("div", { class: "flex flex-col justify-center items-center" }, [createVNode("img", {
								src: "/storage/" + product.image,
								alt: product.name,
								class: "w-56 h-auto",
								loading: "lazy",
								width: "224",
								height: "224"
							}, null, 8, ["src", "alt"]), createVNode("p", { class: "shopdropdown__txt pt-2" }, toDisplayString(product.name) + " | " + toDisplayString(product.size), 1)])];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
			_push(ssrRenderComponent(_sfc_main$10, {
				href: _ctx.route("contact.mont"),
				active: _ctx.route().current("contact.mont")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Contact Us `);
					else return [createTextVNode(" Contact Us ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$10, {
				href: _ctx.route("about.mont"),
				active: _ctx.route().current("about.mont")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` About Mont `);
					else return [createTextVNode(" About Mont ")];
				}),
				_: 1
			}, _parent));
			_push(`<a href="http://69.28.70.242:9090/ords/r/neo/erp/login_desktop?session=4961669600359" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-opacity-80 rounded-md transition duration-150 ease-in-out"> Staff Login </a></div></div></div><div class="${ssrRenderClass([{
				block: showingNavigationDropdown.value,
				hidden: !showingNavigationDropdown.value
			}, "sm:hidden w-full h-screen"])}"><div class="pt-2 pb-3 space-y-1 h-full">`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: "#",
				as: "button"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-full h-[10vh] flex items-center text-xl"${_scopeId}>Shop <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-4 mt-1"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"${_scopeId}></path></svg></div>`);
					else return [createVNode("div", {
						class: "w-full h-[10vh] flex items-center text-xl",
						onClick: withModifiers(toggleSublinks, ["stop", "prevent"])
					}, [createTextVNode("Shop "), (openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-5 h-5 ml-4 mt-1"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
					})]))])];
				}),
				_: 1
			}, _parent));
			if (showSublinks.value) {
				_push(`<div class=""><!--[-->`);
				ssrRenderList(Products.value, (product) => {
					_push(ssrRenderComponent(_sfc_main$2, { href: _ctx.route("show-product", { product: product.slug }) }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<div class="w-full h-[10vh] text-xl flex items-center px-16"${_scopeId}>${ssrInterpolate(product.name)} | ${ssrInterpolate(product.size)}</div>`);
							else return [createVNode("div", { class: "w-full h-[10vh] text-xl flex items-center px-16" }, toDisplayString(product.name) + " | " + toDisplayString(product.size), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(_sfc_main$3, { href: _ctx.route("contact.mont") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-full h-[10vh] flex items-center text-xl"${_scopeId}>Contact Us</div>`);
					else return [createVNode("div", { class: "w-full h-[10vh] flex items-center text-xl" }, "Contact Us")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$3, { href: _ctx.route("about.mont") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-full h-[10vh] flex items-center text-xl"${_scopeId}>About Mont</div>`);
					else return [createVNode("div", { class: "w-full h-[10vh] flex items-center text-xl" }, "About Mont")];
				}),
				_: 1
			}, _parent));
			_push(`<a href="http://69.28.70.242:9090/ords/r/neo/erp/login_desktop?session=4961669600359" target="_blank" rel="noopener noreferrer" class="flex items-center w-full px-4 h-[10vh] text-xl font-semibold text-white bg-primary-500"> Staff Login </a></div></div></nav>`);
			_push(ssrRenderComponent(_sfc_main$8, {
				show: openCart.value,
				"max-width": modalWidth.value
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_sfc_main$4, { onCloseModal: closeModal }, null, _parent, _scopeId));
					else return [createVNode(_sfc_main$4, { onCloseModal: closeModal })];
				}),
				_: 1
			}, _parent));
			if (_ctx.$slots.header) {
				_push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
				ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
				_push(`</div></header>`);
			} else _push(`<!---->`);
			_push(`<main class="${ssrRenderClass({ "mt-[88px]": __props.hasAppPages })}">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main><footer class="bg-primary-500 w-full h-[200px] flex justify-center items-center"><div class="w-full flex flex-col justify-center items-center">`);
			_push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-12 sm:h-16 w-auto fill-current text-gray-800" }, null, _parent));
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("shop") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p class="footer__txt1 py-2 text-secondary-400 sm:text-neutral-100"${_scopeId}>Shop Mont</p>`);
					else return [createVNode("p", { class: "footer__txt1 py-2 text-secondary-400 sm:text-neutral-100" }, "Shop Mont")];
				}),
				_: 1
			}, _parent));
			_push(`<p class="footer__txt2">See what we are up to:</p><div class="space-x-3 py-2"><button><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1407 7.30921V8.74359H8.0907V10.4967H9.1407V15.7082H11.299V10.4967H12.7469C12.7469 10.4967 12.8834 9.65609 12.949 8.7363H11.3074V7.53838C11.3074 7.35817 11.5428 7.11755 11.7761 7.11755H12.9511V5.2915H11.3522C9.08757 5.2915 9.1407 7.04671 9.1407 7.30921Z" fill="#F2F2F2"></path><path d="M10.5 18.8333C12.7102 18.8333 14.8298 17.9553 16.3926 16.3925C17.9554 14.8297 18.8334 12.7101 18.8334 10.4999C18.8334 8.28978 17.9554 6.17017 16.3926 4.60736C14.8298 3.04456 12.7102 2.16659 10.5 2.16659C8.2899 2.16659 6.17029 3.04456 4.60748 4.60736C3.04468 6.17017 2.16671 8.28978 2.16671 10.4999C2.16671 12.7101 3.04468 14.8297 4.60748 16.3925C6.17029 17.9553 8.2899 18.8333 10.5 18.8333ZM10.5 20.9166C4.74692 20.9166 0.083374 16.253 0.083374 10.4999C0.083374 4.74679 4.74692 0.083252 10.5 0.083252C16.2532 0.083252 20.9167 4.74679 20.9167 10.4999C20.9167 16.253 16.2532 20.9166 10.5 20.9166Z" fill="#F2F2F2"></path></svg></button><button><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.12504 0.083252H14.875C18.2084 0.083252 20.9167 2.79159 20.9167 6.12492V14.8749C20.9167 16.4773 20.2802 18.014 19.1471 19.147C18.0141 20.2801 16.4774 20.9166 14.875 20.9166H6.12504C2.79171 20.9166 0.083374 18.2083 0.083374 14.8749V6.12492C0.083374 4.52257 0.719905 2.98585 1.85294 1.85282C2.98597 0.719783 4.52269 0.083252 6.12504 0.083252ZM5.91671 2.16659C4.92215 2.16659 3.96832 2.56167 3.26506 3.26493C2.5618 3.9682 2.16671 4.92202 2.16671 5.91658V15.0833C2.16671 17.1562 3.84379 18.8333 5.91671 18.8333H15.0834C16.0779 18.8333 17.0318 18.4382 17.735 17.7349C18.4383 17.0316 18.8334 16.0778 18.8334 15.0833V5.91658C18.8334 3.84367 17.1563 2.16659 15.0834 2.16659H5.91671ZM15.9688 3.72909C16.3141 3.72909 16.6453 3.86627 16.8895 4.11046C17.1337 4.35464 17.2709 4.68583 17.2709 5.03117C17.2709 5.3765 17.1337 5.70769 16.8895 5.95188C16.6453 6.19607 16.3141 6.33325 15.9688 6.33325C15.6235 6.33325 15.2923 6.19607 15.0481 5.95188C14.8039 5.70769 14.6667 5.3765 14.6667 5.03117C14.6667 4.68583 14.8039 4.35464 15.0481 4.11046C15.2923 3.86627 15.6235 3.72909 15.9688 3.72909ZM10.5 5.29158C11.8814 5.29158 13.2061 5.84032 14.1829 6.81707C15.1596 7.79382 15.7084 9.11858 15.7084 10.4999C15.7084 11.8813 15.1596 13.206 14.1829 14.1828C13.2061 15.1595 11.8814 15.7083 10.5 15.7083C9.1187 15.7083 7.79394 15.1595 6.81719 14.1828C5.84044 13.206 5.29171 11.8813 5.29171 10.4999C5.29171 9.11858 5.84044 7.79382 6.81719 6.81707C7.79394 5.84032 9.1187 5.29158 10.5 5.29158ZM10.5 7.37492C9.67124 7.37492 8.87638 7.70416 8.29033 8.29021C7.70428 8.87626 7.37504 9.67112 7.37504 10.4999C7.37504 11.3287 7.70428 12.1236 8.29033 12.7096C8.87638 13.2957 9.67124 13.6249 10.5 13.6249C11.3288 13.6249 12.1237 13.2957 12.7097 12.7096C13.2958 12.1236 13.625 11.3287 13.625 10.4999C13.625 9.67112 13.2958 8.87626 12.7097 8.29021C12.1237 7.70416 11.3288 7.37492 10.5 7.37492Z" fill="#F2F2F2"></path></svg></button></div></div></footer><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { store as i, FormButton_default as n, _sfc_main$5 as r, _sfc_main as t };
