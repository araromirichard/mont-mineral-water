import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as ApplicationLogo_default } from "./ApplicationLogo-De7nLcr7.js";
import { t as _sfc_main$3 } from "./ToastMessageList-BoY0bwIF.js";
import { n as _sfc_main$4, t as _sfc_main$5 } from "./InputError-BUHLoSfJ.js";
import { t as _sfc_main$6 } from "./Modal-CzOt-GTq.js";
import { createBlock, createTextVNode, createVNode, mergeProps, openBlock, ref, renderSlot, toDisplayString, unref, useSSRContext, watchEffect, withCtx } from "vue";
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import "axios";
import "lodash";
//#region resources/js/Components/BreadcrubItem.vue
var _sfc_main$2 = {
	__name: "BreadcrubItem",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		customClass: { type: String }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: __props.customClass
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent, _scopeId);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [renderSlot(_ctx.$slots, "icon"), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BreadcrubItem.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/OrderItem.vue
var _sfc_main$1 = {
	__name: "OrderItem",
	__ssrInlineRender: true,
	props: { item: Object },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-4 mt-6 space-x-4 py-3" }, _attrs))} data-v-6fd9a9e5><div class="relative" data-v-6fd9a9e5><img${ssrRenderAttr("src", "/storage/" + __props.item.imagePath)}${ssrRenderAttr("alt", __props.item.name)} data-v-6fd9a9e5><span class="badge bg-secondary-400 w-5 h-5 flex justify-center items-center" data-v-6fd9a9e5>${ssrInterpolate(__props.item.quantity)}</span></div><div class="row-span-2 col-span-2 space-y-2 pb-2" data-v-6fd9a9e5><p class="font-bold text-xs sm:text-base" data-v-6fd9a9e5>${ssrInterpolate(__props.item.name)} | ${ssrInterpolate(__props.item.size)} | ${ssrInterpolate(__props.item.pack_size)}</p></div><div class="row-span-2 flex flex-col justify-between items-end" data-v-6fd9a9e5><div class="text-secondary-400 tracking-normal text-xs sm:text-sm font-bold" data-v-6fd9a9e5>GSH ${ssrInterpolate(__props.item.price)}</div></div></div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OrderItem.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var OrderItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-6fd9a9e5"]]);
//#endregion
//#region resources/js/Pages/Shop/CheckOut.vue
var _sfc_main = {
	__name: "CheckOut",
	__ssrInlineRender: true,
	props: { orderItems: Object },
	setup(__props) {
		const useDefaultAddress = usePage().props.auth.defaultShippingAddress;
		const showOrderSuccessModal = ref(false);
		const defaultAddress = ref(false);
		ref(null);
		const form = useForm({
			shipping: {
				address: "",
				apartment: "",
				contact: "",
				region: "",
				district: ""
			},
			saveAddress: false
		});
		function closeModal() {
			showOrderSuccessModal.value = false;
		}
		watchEffect(() => {
			if (form.saveUser) checkUserExists();
		});
		watchEffect(() => {
			if (defaultAddress.value) {
				console.log(JSON.stringify(useDefaultAddress, null, 2));
				form.shipping = useDefaultAddress;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Checkout" }, null, _parent));
			_push(`<div class="container mx-auto w-full min-h-screen bg-white p-10">`);
			_push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
			_push(`<div class="flex justify-center items-center">`);
			_push(ssrRenderComponent(ApplicationLogo_default, { class: "w-16 h-auto" }, null, _parent));
			_push(`</div><div class="flex justify-center items-center space-x-3 pt-4 sm:pt-6 md:pt-7">`);
			_push(ssrRenderComponent(_sfc_main$2, {
				href: _ctx.route("shop"),
				customClass: "flex justify-center items-center space-x-2 text-secondary-400"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="w-4 h-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><span class="uppercase font-semibold text-xs"${_scopeId}>chart</span>`);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.0",
						stroke: "currentColor",
						class: "w-4 h-4"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					})])), createVNode("span", { class: "uppercase font-semibold text-xs" }, "chart")];
				}),
				_: 1
			}, _parent));
			_push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-6 text-secondary-400"><path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>`);
			_push(ssrRenderComponent(_sfc_main$2, {
				href: "#",
				customClass: "flex justify-center items-center space-x-2 text-secondary-400"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="rounded-full bg-secondary-400 border-none text-white p-1 text-xs font-semibold h-4 w-4 flex items-center justify-center"${_scopeId}> 2 </div><span class="uppercase font-medium text-sm"${_scopeId}>checkout</span>`);
					else return [createVNode("div", { class: "rounded-full bg-secondary-400 border-none text-white p-1 text-xs font-semibold h-4 w-4 flex items-center justify-center" }, " 2 "), createVNode("span", { class: "uppercase font-medium text-sm" }, "checkout")];
				}),
				_: 1
			}, _parent));
			_push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-6 text-secondary-400"><path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>`);
			_push(ssrRenderComponent(_sfc_main$2, {
				href: "#",
				customClass: "flex justify-center items-center space-x-2 text-neutral-400"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="rounded-full bg-white border border-neutral-300 text-neutral-300 p-1.5 font-medium h-3 w-3 flex items-center justify-center" style="${ssrRenderStyle({
						"font-size": "10px",
						"line-height": "0.7rem"
					})}"${_scopeId}> 3 </div><span class="uppercase font-normal text-xs"${_scopeId}>Place order</span>`);
					else return [createVNode("div", {
						class: "rounded-full bg-white border border-neutral-300 text-neutral-300 p-1.5 font-medium h-3 w-3 flex items-center justify-center",
						style: {
							"font-size": "10px",
							"line-height": "0.7rem"
						}
					}, " 3 "), createVNode("span", { class: "uppercase font-normal text-xs" }, "Place order")];
				}),
				_: 1
			}, _parent));
			_push(`</div><form class="space-y-3"><div class="grid grid-cols-11 gap-x-7 gap-y-3 mt-6 sm:mt-10"><div class="col-span-12 sm:col-span-6 bg-neutral-100 rounded-sm p-7"><p class="text-md sm:text-xl font-bold tracking-wide text-primary-500"> Contact information </p><div><div class="space-y-2 py-3"><p class="text-secondary-400 font-semibold text-base">Hi, ${ssrInterpolate(_ctx.$page.props.auth.user.first_name)} ${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}</p><p class="font-normal text-xs text-primary-500 tracking-wider">${ssrInterpolate(_ctx.$page.props.auth.user.email)}; ${ssrInterpolate(_ctx.$page.props.auth.user.phone)}</p>`);
			if (unref(useDefaultAddress)) _push(`<div class="flex items-center"><input type="checkbox" id="useDefaultAddress" class="border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest h-4 w-4 text-primary-500"${ssrIncludeBooleanAttr(Array.isArray(defaultAddress.value) ? ssrLooseContain(defaultAddress.value, null) : defaultAddress.value) ? " checked" : ""}><label for="useDefaultAddress" class="ml-2 text-xs text-primary-500">Use default shipping address</label></div>`);
			else _push(`<!---->`);
			_push(`</div></div>`);
			if (!defaultAddress.value) {
				_push(`<div><div class="flex justify-between items-start mt-[30px]"><p class="text-primary-500 font-semibold text-md sm:text-lg">Shipping Address</p></div><div class="mt-4">`);
				_push(ssrRenderComponent(_sfc_main$4, {
					id: "address",
					type: "text",
					class: "mt-1 block w-full",
					modelValue: unref(form).shipping.address,
					"onUpdate:modelValue": ($event) => unref(form).shipping.address = $event,
					required: "",
					autocomplete: "address",
					placeholder: "address"
				}, null, _parent));
				_push(ssrRenderComponent(_sfc_main$5, {
					class: "mt-2",
					message: unref(form).errors.address
				}, null, _parent));
				_push(`</div><div class="mt-4">`);
				_push(ssrRenderComponent(_sfc_main$4, {
					id: "appartment",
					type: "text",
					class: "mt-1 block w-full",
					modelValue: unref(form).shipping.apartment,
					"onUpdate:modelValue": ($event) => unref(form).shipping.apartment = $event,
					required: "",
					autocomplete: "appartment",
					placeholder: "Apartment, suite, etc. (optional)"
				}, null, _parent));
				_push(ssrRenderComponent(_sfc_main$5, {
					class: "mt-2",
					message: unref(form).errors.appartment
				}, null, _parent));
				_push(`</div><div class="mt-4">`);
				_push(ssrRenderComponent(_sfc_main$4, {
					id: "contact_phone",
					type: "tel",
					class: "mt-1 block w-full",
					modelValue: unref(form).shipping.contact,
					"onUpdate:modelValue": ($event) => unref(form).shipping.contact = $event,
					required: "",
					autocomplete: "tel",
					placeholder: "Contact phone number"
				}, null, _parent));
				_push(ssrRenderComponent(_sfc_main$5, {
					class: "mt-2",
					message: unref(form).errors.contact_phone
				}, null, _parent));
				_push(`</div><div class="flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0"><div class="w-full md:w-1/2 px-2"><div>`);
				_push(ssrRenderComponent(_sfc_main$4, {
					id: "region",
					type: "text",
					class: "mt-1 block w-full",
					modelValue: unref(form).shipping.region,
					"onUpdate:modelValue": ($event) => unref(form).shipping.region = $event,
					required: "",
					autocomplete: "region",
					placeholder: "region address"
				}, null, _parent));
				_push(ssrRenderComponent(_sfc_main$5, {
					class: "mt-2",
					message: unref(form).errors.region
				}, null, _parent));
				_push(`</div></div><div class="w-full md:w-1/2 px-2"><div>`);
				_push(ssrRenderComponent(_sfc_main$4, {
					id: "district",
					type: "text",
					class: "mt-1 block w-full",
					modelValue: unref(form).shipping.district,
					"onUpdate:modelValue": ($event) => unref(form).shipping.district = $event,
					required: "",
					autocomplete: "district",
					placeholder: "district"
				}, null, _parent));
				_push(ssrRenderComponent(_sfc_main$5, {
					class: "mt-2",
					message: unref(form).errors.district
				}, null, _parent));
				_push(`</div></div></div><div class="flex items-center justify-start mt-2 py-1"><label class="flex items-center"><input type="checkbox" class="border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"${ssrIncludeBooleanAttr(Array.isArray(unref(form).saveAddress) ? ssrLooseContain(unref(form).saveAddress, null) : unref(form).saveAddress) ? " checked" : ""}><span class="ml-2 text-secondary-400 font-normal text-xs">Save Address</span></label></div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="py-3">`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("shop"),
				class: "text-secondary-400 font-medium capitalize text-sm flex items-center space-x-2"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><span${_scopeId}>Back to Cart</span>`);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-4 h-4"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					})])), createVNode("span", null, "Back to Cart")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="col-span-12 sm:col-span-5"><div class="border border-neutral-400 p-8 w-full h-auto"><p class="text-md sm:text-xl font-bold tracking-wide text-primary-500"> Your Order </p><div><!--[-->`);
			ssrRenderList(__props.orderItems.cartItems, (item) => {
				_push(ssrRenderComponent(OrderItem_default, {
					key: item.productId,
					item
				}, null, _parent));
			});
			_push(`<!--]--></div><div class="cartActions border-y border-spacing-1 border-gray-300 py-4"><div class="grid grid-cols-4"><p class="col-span-2 col-start-2 text-primary-500 font-bold tracking-wide text-sm px-4"> Subtotal: </p><p class="flex m-0 space-x-2 items-center justify-end"><span class="uppercase font-bold text-primary-500 tracking-wide text-xs">ghs</span><span class="text-sm font-bold text-right tracking-wide text-primary-500">${ssrInterpolate(__props.orderItems.subTotal.toLocaleString("en-GH", { useGrouping: true }))}</span></p></div><div class="grid grid-cols-4"><p class="col-span-2 col-start-2 text-primary-500 font-normal tracking-wide text-sm px-4"> Delivery: </p><p class="flex m-0 space-x-5 items-center justify-end text-start"><span class="uppercase font-normal text-primary-500 text-left tracking-wide text-sm">ghs</span><span class="text-sm font-normal tracking-wide text-primary-500">${ssrInterpolate(__props.orderItems.delivery.toLocaleString("en-GH", { useGrouping: true }))}</span></p></div></div><div class="grid grid-cols-4 py-4"><p class="col-span-2 col-start-2 text-secondary-400 font-bold tracking-wide text-base px-4"> Total: </p><p class="flex m-0 space-x-2 items-center justify-end text-start"><span class="uppercase font-bold text-secondary-400 text-left tracking-wide text-base">ghs</span><span class="text-base font-bold tracking-wide text-secondary-400">${ssrInterpolate(__props.orderItems.total.toLocaleString("en-GH", { useGrouping: true }))}</span></p></div><div class="flex justify-end items-center py-3"><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out border-2 bg-primary-500 rounded-full shadow-md group"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Place Order <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></button></div></div></div></div></form></div>`);
			_push(ssrRenderComponent(_sfc_main$6, {
				show: showOrderSuccessModal.value,
				onClose: closeModal
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex flex-col justify-center items-center pt-16 pb-10 px-8 sm:px-10 md:px-12 space-y-4"${_scopeId}><div class="py-4"${_scopeId}><img src="/storage/frontend/checkout.png" alt="checkout-icon" class="w-14 h-14"${_scopeId}></div><p class="text-primary-500 text-xl sm:text-3xl tracking-wider text-center"${_scopeId}>Thank you</p><p class="text-primary-500 font-bold text-sm sm:text-lg md:text-md text-center"${_scopeId}>ORDER ID ${ssrInterpolate(_ctx.$page.props.orderNumber)}</p><p class="text-center text-base sm:text-[1.12rem] max-w-md"${_scopeId}> You order has been placed. A Mont representative will reach out to this number <strong${_scopeId}>0864 36763 2633</strong> within 30 minutes. </p><p class="text-center text-base sm:text-[1.12rem] max-w-md"${_scopeId}>If you don’t receive a call from us, Please call us on <strong${_scopeId}>+233 488947 89849</strong></p><div class="pb-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("dashboard"),
							class: "relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out border-2 bg-primary-500 rounded-full shadow-md group"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Okay`);
								else return [createTextVNode("Okay")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "flex flex-col justify-center items-center pt-16 pb-10 px-8 sm:px-10 md:px-12 space-y-4" }, [
						createVNode("div", { class: "py-4" }, [createVNode("img", {
							src: "/storage/frontend/checkout.png",
							alt: "checkout-icon",
							class: "w-14 h-14"
						})]),
						createVNode("p", { class: "text-primary-500 text-xl sm:text-3xl tracking-wider text-center" }, "Thank you"),
						createVNode("p", { class: "text-primary-500 font-bold text-sm sm:text-lg md:text-md text-center" }, "ORDER ID " + toDisplayString(_ctx.$page.props.orderNumber), 1),
						createVNode("p", { class: "text-center text-base sm:text-[1.12rem] max-w-md" }, [
							createTextVNode(" You order has been placed. A Mont representative will reach out to this number "),
							createVNode("strong", null, "0864 36763 2633"),
							createTextVNode(" within 30 minutes. ")
						]),
						createVNode("p", { class: "text-center text-base sm:text-[1.12rem] max-w-md" }, [createTextVNode("If you don’t receive a call from us, Please call us on "), createVNode("strong", null, "+233 488947 89849")]),
						createVNode("div", { class: "pb-4" }, [createVNode(unref(Link), {
							href: _ctx.route("dashboard"),
							class: "relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out border-2 bg-primary-500 rounded-full shadow-md group"
						}, {
							default: withCtx(() => [createTextVNode("Okay")]),
							_: 1
						}, 8, ["href"])])
					])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shop/CheckOut.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
