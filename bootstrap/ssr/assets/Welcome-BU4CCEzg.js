import { r as _sfc_main$8, t as _sfc_main$9 } from "./AppLayout-BlnyL3wK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, nextTick, onMounted, openBlock, ref, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { gsap as gsap$1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/Frontend/HeroSection.vue
var _sfc_main$7 = {
	__name: "HeroSection",
	__ssrInlineRender: true,
	setup(__props) {
		onMounted(() => {
			nextTick(() => {
				gsap$1.to(".cloud-1", {
					x: "100vw",
					repeat: -1,
					ease: "linear",
					duration: 60,
					stagger: {
						each: 5,
						from: "random"
					}
				});
				gsap$1.to(".cloud-2", {
					x: "100vw",
					repeat: -1,
					ease: "linear",
					duration: 45,
					stagger: {
						each: 6,
						from: "random"
					}
				});
				gsap$1.to(".cloud-2", {
					x: "80vw",
					repeat: 2,
					ease: "linear",
					duration: 35,
					stagger: {
						each: 6,
						from: "random"
					}
				});
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}><div class="background-image-desktop hidden sm:flex"></div><div class="background-image-mobile sm:hidden"></div><div class="clouds"><div class="cloud cloud-1"></div><div class="cloud cloud-2"></div><div class="cloud cloud-3"></div></div><div class="content container mx-auto flex flex-col items-center sm:items-start justify-center sm:justify-normal sm:max-w-xl sm:px-12 space-y-4"><p class="font-sans font-bold text-2xl w-[200px] sm:w-full sm:text-[42px] sm:leading-[51px] text-white">Enjoy the refreshing taste of togetherness</p><p class="font-sans text-lg sm:text-[32px] sm:leading-[29px] font-normal tracking-wider text-white pt-2 sm:pt-5 sm:mb-[40px]"> Don’t Drink Alone</p><div class="sm:py-5">`);
			_push(ssrRenderComponent(_sfc_main$8, {
				href: _ctx.route("shop"),
				"btn-inner-text": "Shop Now",
				class: "w-fit"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now <svg class="hidden sm:block animate-bounce ml-2" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M8.08337 9.39584C7.91671 9.22917 7.83671 9.02778 7.84337 8.79167C7.8506 8.55556 7.93754 8.35417 8.10421 8.1875L10.4584 5.83334H1.16671C0.930596 5.83334 0.732541 5.75334 0.572541 5.59334C0.413096 5.43389 0.333374 5.23612 0.333374 5C0.333374 4.76389 0.413096 4.56584 0.572541 4.40584C0.732541 4.24639 0.930596 4.16667 1.16671 4.16667H10.4584L8.08337 1.79167C7.91671 1.625 7.83337 1.42695 7.83337 1.1975C7.83337 0.968616 7.91671 0.770838 8.08337 0.604172C8.25004 0.437505 8.4481 0.354172 8.67754 0.354172C8.90643 0.354172 9.10421 0.437505 9.27087 0.604172L13.0834 4.41667C13.1667 4.5 13.2259 4.59028 13.2609 4.6875C13.2953 4.78473 13.3125 4.88889 13.3125 5C13.3125 5.11112 13.2953 5.21528 13.2609 5.3125C13.2259 5.40973 13.1667 5.5 13.0834 5.58334L9.25004 9.41667C9.09726 9.56945 8.90643 9.64584 8.67754 9.64584C8.4481 9.64584 8.25004 9.5625 8.08337 9.39584Z" fill="#F0F0F0"${_scopeId}></path></svg>`);
					else return [createTextVNode(" Shop Now "), (openBlock(), createBlock("svg", {
						class: "hidden sm:block animate-bounce ml-2",
						width: "14",
						height: "10",
						viewBox: "0 0 14 10",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M8.08337 9.39584C7.91671 9.22917 7.83671 9.02778 7.84337 8.79167C7.8506 8.55556 7.93754 8.35417 8.10421 8.1875L10.4584 5.83334H1.16671C0.930596 5.83334 0.732541 5.75334 0.572541 5.59334C0.413096 5.43389 0.333374 5.23612 0.333374 5C0.333374 4.76389 0.413096 4.56584 0.572541 4.40584C0.732541 4.24639 0.930596 4.16667 1.16671 4.16667H10.4584L8.08337 1.79167C7.91671 1.625 7.83337 1.42695 7.83337 1.1975C7.83337 0.968616 7.91671 0.770838 8.08337 0.604172C8.25004 0.437505 8.4481 0.354172 8.67754 0.354172C8.90643 0.354172 9.10421 0.437505 9.27087 0.604172L13.0834 4.41667C13.1667 4.5 13.2259 4.59028 13.2609 4.6875C13.2953 4.78473 13.3125 4.88889 13.3125 5C13.3125 5.11112 13.2953 5.21528 13.2609 5.3125C13.2259 5.40973 13.1667 5.5 13.0834 5.58334L9.25004 9.41667C9.09726 9.56945 8.90643 9.64584 8.67754 9.64584C8.4481 9.64584 8.25004 9.5625 8.08337 9.39584Z",
						fill: "#F0F0F0"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/HeroSection.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/OurValuesIcons.vue
var _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-6 flex flex-col items-center justify-center text-center" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
}
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OurValuesIcons.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var OurValuesIcons_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/Components/MontButton.vue
var _sfc_main$5 = {
	__name: "MontButton",
	__ssrInlineRender: true,
	props: { hasIcon: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-5 py-3 bg-primary-500 border border-transparent rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 space-x-2" }, _attrs))}><span>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
			if (__props.hasIcon) ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
			else _push(`<!---->`);
			_push(`</button>`);
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MontButton.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Frontend/OurValues.vue
var _sfc_main$4 = {
	__name: "OurValues",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center" }, _attrs))}><div class="container mx-auto block sm:flex justify-evenly items-center">`);
			_push(ssrRenderComponent(OurValuesIcons_default, null, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/waterwave.png" alt="waterdrop and wave" class="w-20 h-auto sm:w-auto sm:h-[90px]"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/waterwave.png",
						alt: "waterdrop and wave",
						class: "w-20 h-auto sm:w-auto sm:h-[90px]"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5"${_scopeId}>Natural Minerals</span>`);
					else return [createVNode("span", { class: "text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5" }, "Natural Minerals")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(OurValuesIcons_default, null, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/responsiblysourced.png" alt="responsiblysourced icon" class="w-20 h-auto"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/responsiblysourced.png",
						alt: "responsiblysourced icon",
						class: "w-20 h-auto"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5"${_scopeId}>Responsibly Sourced </span>`);
					else return [createVNode("span", { class: "text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5" }, "Responsibly Sourced ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(OurValuesIcons_default, null, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/recycled.png" alt="recycled icon" class="w-20 h-auto"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/recycled.png",
						alt: "recycled icon",
						class: "w-20 h-auto"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5"${_scopeId}>100% Recyclable</span>`);
					else return [createVNode("span", { class: "text-primary-500 text-base sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5" }, "100% Recyclable")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex justify-center items-center pt-4 pb-6">`);
			_push(ssrRenderComponent(_sfc_main$5, { class: "" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Learn More `);
					else return [createTextVNode(" Learn More ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/OurValues.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/MontButtonOutline.vue
var _sfc_main$3 = {
	__name: "MontButtonOutline",
	__ssrInlineRender: true,
	props: {
		hasIcon: {
			type: Boolean,
			default: false
		},
		href: String
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "inline-flex items-center px-5 py-3 bg-transparent border border-white rounded-full font-semibold text-sm text-white capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 space-x-2"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.hasIcon) ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent, _scopeId);
						else _push(`<!---->`);
						_push(`<span${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</span>`);
					} else return [__props.hasIcon ? renderSlot(_ctx.$slots, "icon", {}, void 0, void 0, 0) : createCommentVNode("", true), createVNode("span", null, [renderSlot(_ctx.$slots, "default")])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MontButtonOutline.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Frontend/OurProduct.vue
var _sfc_main$2 = {
	__name: "OurProduct",
	__ssrInlineRender: true,
	props: { products: Array },
	setup(__props) {
		gsap$1.registerPlugin(ScrollTrigger);
		ref(null);
		const scrollContainer = ref(null);
		const pages = ref([]);
		const activeSlideIndex = ref(0);
		onMounted(() => {
			nextTick(() => {
				pages.value = gsap$1.utils.toArray(scrollContainer.value.getElementsByClassName("page"));
				gsap$1.to(scrollContainer.value, {
					xPercent: -33.3 * (pages.value.length - 1),
					ease: "power2.out",
					scrollTrigger: {
						trigger: scrollContainer.value,
						pin: true,
						scrub: 1,
						start: "top+=20px 13%",
						end: "+=3000"
					}
				});
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><div class="flex sm:hidden justify-center items-center text-primary-500 font-semibold text-lg mt-8" data-v-6e1ecb21> SHOP MONT </div><div class="flex sm:hidden" data-v-6e1ecb21><div id="default-carousel" class="relative w-full" data-carousel="slide" data-v-6e1ecb21><div class="relative h-[100vh] overflow-hidden" data-v-6e1ecb21><div class="flex h-full transition-transform duration-700 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${activeSlideIndex.value * 100}%)` })}" data-v-6e1ecb21><div class="relative min-w-full h-full" data-v-6e1ecb21><img src="/storage/frontend/mobileSlide1.png" class="absolute block w-full h-full object-cover" alt="The Pocket Size" data-v-6e1ecb21><div class="absolute inset-0 flex pt-24 justify-center backdrop-brightness-50" data-v-6e1ecb21><div class="text-white text-center space-y-8" data-v-6e1ecb21><h2 class="text-xl font-bold" data-v-6e1ecb21>The Pocket Size - 330 ML</h2><p class="text-[16px] leading-5 px-14" data-v-6e1ecb21>Perfect for the go! Can be tossed in your work bag or kids lunch bag. Can be best enjoyed by both kids and adults. Suitable for offices, schools and special occasions.</p>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: _ctx.route("shop"),
				"has-icon": true
			}, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6e1ecb21${_scopeId}><path d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z" stroke="white" stroke-width="2" stroke-linecap="round" data-v-6e1ecb21${_scopeId}></path></svg>`);
					else return [(openBlock(), createBlock("svg", {
						width: "17",
						height: "22",
						viewBox: "0 0 17 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z",
						stroke: "white",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})]))];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now `);
					else return [createTextVNode(" Shop Now ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="relative min-w-full h-full" data-v-6e1ecb21><img src="/storage/frontend/funslide.png" class="absolute block w-full h-full object-cover" alt="The Fun Size" data-v-6e1ecb21><div class="absolute inset-0 flex pt-24 justify-center backdrop-brightness-50" data-v-6e1ecb21><div class="text-white text-center space-y-8" data-v-6e1ecb21><h2 class="text-xl font-bold" data-v-6e1ecb21>The Fun Size - 500 ML</h2><p class="text-[16px] leading-5 px-14" data-v-6e1ecb21>Perfect for everyday hydration! Our best-selling pack can change the mood of an impromptu meal at home, or a work out, keeping you refreshed and revitalised.</p>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: _ctx.route("shop"),
				"has-icon": true
			}, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6e1ecb21${_scopeId}><path d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z" stroke="white" stroke-width="2" stroke-linecap="round" data-v-6e1ecb21${_scopeId}></path></svg>`);
					else return [(openBlock(), createBlock("svg", {
						width: "17",
						height: "22",
						viewBox: "0 0 17 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z",
						stroke: "white",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})]))];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now `);
					else return [createTextVNode(" Shop Now ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="relative min-w-full h-full" data-v-6e1ecb21><img src="/storage/frontend/FamilySlide.png" class="absolute block w-full h-full object-cover" alt="The Family Size" data-v-6e1ecb21><div class="absolute inset-0 flex pt-24 justify-center backdrop-brightness-50" data-v-6e1ecb21><div class="text-white text-center space-y-8" data-v-6e1ecb21><h2 class="text-xl font-bold" data-v-6e1ecb21>The Family Size - 1L</h2><p class="text-[16px] leading-5 px-14" data-v-6e1ecb21>Where there is great company, there is refreshing water! The ideal size for sharing with friends, family and loved ones at home or in a restaurant. </p>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: _ctx.route("shop"),
				"has-icon": true
			}, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6e1ecb21${_scopeId}><path d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z" stroke="white" stroke-width="2" stroke-linecap="round" data-v-6e1ecb21${_scopeId}></path></svg>`);
					else return [(openBlock(), createBlock("svg", {
						width: "17",
						height: "22",
						viewBox: "0 0 17 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z",
						stroke: "white",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})]))];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now `);
					else return [createTextVNode(" Shop Now ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div></div><div class="slider-navigation absolute flex items-center justify-between bottom-[30%] w-full px-8" data-v-6e1ecb21><button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-v-6e1ecb21><span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent/10 group-hover:bg-white/50 group-focus:ring-4 group-focus:outline-none" data-v-6e1ecb21><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white" data-v-6e1ecb21><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-6e1ecb21></path></svg><span class="sr-only" data-v-6e1ecb21>Previous</span></span></button><button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-v-6e1ecb21><span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent/10 group-hover:bg-white/50 group-focus:ring-4 group-focus:outline-none" data-v-6e1ecb21><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-neutral-100" data-v-6e1ecb21><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-6e1ecb21></path></svg><span class="sr-only" data-v-6e1ecb21>Next</span></span></button></div></div></div><div class="wrapper-container" data-v-6e1ecb21><div class="scroll-container hidden sm:flex" data-v-6e1ecb21><section class="page flex flex-col-reverse sm:flex-row w-[100vw]" data-v-6e1ecb21><div class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12 w" data-v-6e1ecb21><p class="hidden sm:flex text-white text-base font-semibold" data-v-6e1ecb21>SHOP MONT</p><p class="text-center sm:text-left sm:w-[70%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold" data-v-6e1ecb21> The Pocket Size - 330 ML</p><p class="text-neutral-100 font-normal text-lg text-center sm:text-left" data-v-6e1ecb21>Perfect for the go! Can be tossed in your work bag or kids lunch bag. Can be best enjoyed by both kids and adults. Suitable for offices, schools and special occasions. </p>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: _ctx.route("shop"),
				"has-icon": true
			}, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6e1ecb21${_scopeId}><path d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z" stroke="white" stroke-width="2" stroke-linecap="round" data-v-6e1ecb21${_scopeId}></path></svg>`);
					else return [(openBlock(), createBlock("svg", {
						width: "17",
						height: "22",
						viewBox: "0 0 17 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z",
						stroke: "white",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})]))];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now `);
					else return [createTextVNode(" Shop Now ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="box w-full sm:w-7/12" data-v-6e1ecb21><img src="/storage/frontend/pocketslide.png" alt="pocket size bottle" class="w-full h-full object-cover" data-v-6e1ecb21></div></section><section class="page flex flex-col-reverse sm:flex-row w-[100vw]" data-v-6e1ecb21><div class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12 w" data-v-6e1ecb21><p class="hidden sm:flex text-white text-base font-semibold" data-v-6e1ecb21>SHOP MONT</p><p class="text-center sm:text-left sm:w-[55%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold" data-v-6e1ecb21> The Fun Size - 500 ml</p><p class="text-neutral-100 font-normal text-lg text-center sm:text-left" data-v-6e1ecb21>Perfect for everyday hydration! Our best-selling pack can change the mood of an impromptu meal at home, or a work out, keeping you refreshed and revitalised. </p>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: _ctx.route("shop"),
				"has-icon": true
			}, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6e1ecb21${_scopeId}><path d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z" stroke="white" stroke-width="2" stroke-linecap="round" data-v-6e1ecb21${_scopeId}></path></svg>`);
					else return [(openBlock(), createBlock("svg", {
						width: "17",
						height: "22",
						viewBox: "0 0 17 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z",
						stroke: "white",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})]))];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now `);
					else return [createTextVNode(" Shop Now ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="box w-full sm:w-7/12" data-v-6e1ecb21><img src="/storage/frontend/funslide.png" alt="fun size bottle" class="w-full h-full object-cover" data-v-6e1ecb21></div></section><section class="page flex flex-col-reverse sm:flex-row w-[100vw]" data-v-6e1ecb21><div class="box flex flex-col justify-center items-center sm:items-start py-6 px-16 bg-primary-500 space-y-4 w-full sm:w-5/12" data-v-6e1ecb21><p class="hidden sm:flex text-white text-base font-semibold" data-v-6e1ecb21>SHOP MONT</p><p class="text-center sm:text-left sm:w-[70%] text-xl sm:text-2xl md:text-4xl text-secondary-400 font-bold" data-v-6e1ecb21> The Family Size - 1L</p><p class="text-neutral-100 font-normal text-lg text-center sm:text-left" data-v-6e1ecb21>Where there is great company, there is refreshing water! The ideal size for sharing with friends, family and loved ones at home or in a restaurant. </p>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				href: _ctx.route("shop"),
				"has-icon": true
			}, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6e1ecb21${_scopeId}><path d="M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z" stroke="white" stroke-width="2" stroke-linecap="round" data-v-6e1ecb21${_scopeId}></path></svg>`);
					else return [(openBlock(), createBlock("svg", {
						width: "17",
						height: "22",
						viewBox: "0 0 17 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createVNode("path", {
						d: "M5.16671 8.49992V5.16658C5.16671 3.32492 6.66254 1.83325 8.50004 1.83325C10.3417 1.83325 11.8334 3.32909 11.8334 5.16658V8.49992M1.83337 6.83325H15.1667V20.1666H1.83337V6.83325Z",
						stroke: "white",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})]))];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Now `);
					else return [createTextVNode(" Shop Now ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="box w-full sm:w-7/12" data-v-6e1ecb21><img src="/storage/frontend/FamilySlide.png" alt="family size bottle" class="w-full h-full object-cover" data-v-6e1ecb21></div></section></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/OurProduct.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var OurProduct_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["__scopeId", "data-v-6e1ecb21"]]);
//#endregion
//#region resources/js/Frontend/OurContacts.vue
var _sfc_main$1 = {
	__name: "OurContacts",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center py-0 sm:py-4" }, _attrs))}><p class="text-primary-500 text-lg sm:text-xl font-semibold text-center py-10 sm:py-8">Contact Us</p><div class="container mx-auto block sm:flex items-center justify-evenly sm:space-x-6 py-0 sm:py-6">`);
			_push(ssrRenderComponent(OurValuesIcons_default, { class: "" }, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/pin.png" alt="pin icon" class="w-10 sm:w-12 h-auto"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/pin.png",
						alt: "pin icon",
						class: "w-10 sm:w-12 h-auto"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5 w-[68%]"${_scopeId}> No 18, Swaniker street, Abelemkpe, Accra </span>`);
					else return [createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5 w-[68%]" }, " No 18, Swaniker street, Abelemkpe, Accra ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(OurValuesIcons_default, null, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/envelop.png" alt="envelop icon" class="w-10 sm:w-[67px] h-auto"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/envelop.png",
						alt: "envelop icon",
						class: "w-10 sm:w-[67px] h-auto"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5 sm:mt-4"${_scopeId}> Info@Montwater.com </span>`);
					else return [createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5 sm:mt-4" }, " Info@Montwater.com ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(OurValuesIcons_default, null, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/phone.png" alt="phone icon" class="w-10 sm:w-12 h-auto"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/phone.png",
						alt: "phone icon",
						class: "w-10 sm:w-12 h-auto"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5"${_scopeId}> +233 059 990 4409 </span>`);
					else return [createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5" }, " +233 059 990 4409 ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(OurValuesIcons_default, null, {
				icon: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/storage/frontend/whatsapp.png" alt="whatsapp icon" class="w-10 sm:w-[66px] h-auto"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/storage/frontend/whatsapp.png",
						alt: "whatsapp icon",
						class: "w-10 sm:w-[66px] h-auto"
					})];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5"${_scopeId}> +233 059 990 4409 </span>`);
					else return [createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-sans font-normal leading-5 py-4 sm:py-5" }, " +233 059 990 4409 ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Frontend/OurContacts.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Welcome.vue
var _sfc_main = {
	__name: "Welcome",
	__ssrInlineRender: true,
	setup(__props) {
		const Products = ref(null);
		const fetchProducts = () => {
			axios.get(`/api/shop`).then((response) => {
				console.log(response.data);
				Products.value = response.data;
			}).catch((error) => {
				console.log(error);
			});
		};
		onMounted(() => {
			fetchProducts();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Home" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$9, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div${_scopeId}><section id="hero"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$7, null, null, _parent, _scopeId));
						_push(`</section><section id="montValues"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, null, null, _parent, _scopeId));
						_push(`</section><section id="montProducts"${_scopeId}>`);
						_push(ssrRenderComponent(OurProduct_default, { products: Products.value }, null, _parent, _scopeId));
						_push(`</section><section id="montContact"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, null, null, _parent, _scopeId));
						_push(`</section></div>`);
					} else return [createVNode("div", null, [
						createVNode("section", {
							id: "hero",
							ref: "heroSection"
						}, [createVNode(_sfc_main$7)], 512),
						createVNode("section", {
							id: "montValues",
							ref: "montValuesSection"
						}, [createVNode(_sfc_main$4)], 512),
						createVNode("section", {
							id: "montProducts",
							ref: "montProductsSection"
						}, [createVNode(OurProduct_default, { products: Products.value }, null, 8, ["products"])], 512),
						createVNode("section", {
							id: "montContact",
							ref: "montContactSection"
						}, [createVNode(_sfc_main$1)], 512)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
