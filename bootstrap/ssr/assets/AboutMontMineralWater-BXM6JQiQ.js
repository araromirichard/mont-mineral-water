import { t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { createVNode, nextTick, onMounted, ref, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
import { gsap as gsap$1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//#region resources/js/Pages/AboutMontMineralWater.vue
var _sfc_main = {
	__name: "AboutMontMineralWater",
	__ssrInlineRender: true,
	setup(__props) {
		gsap$1.registerPlugin(ScrollTrigger, ScrollToPlugin);
		const heroSections = ref(null);
		const heroTexts = ref(null);
		onMounted(async () => {
			await nextTick();
			heroSections.value = document.querySelectorAll(".hero-section");
			heroTexts.value = document.querySelectorAll(".hero-text");
			setupScrollTransitions();
			setupNavLinkClickHandlers();
		});
		const setupScrollTransitions = () => {
			heroSections.value.forEach((section, index) => {
				gsap$1.fromTo(section, {
					opacity: 0,
					y: 100,
					zIndex: 3 - index
				}, {
					opacity: 1,
					y: 0,
					duration: .8,
					scrollTrigger: {
						trigger: section,
						start: "top 100%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				});
				gsap$1.fromTo(heroTexts.value[index], {
					opacity: 0,
					y: 20,
					scale: 1.2
				}, {
					opacity: 1,
					y: 0,
					scale: 1,
					duration: .8,
					delay: .2 * index,
					scrollTrigger: {
						trigger: section,
						start: "top 100%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				});
			});
		};
		const setupNavLinkClickHandlers = () => {
			document.querySelectorAll(".nav-link").forEach((link) => {
				link.addEventListener("click", handleNavLinkClick);
			});
		};
		const handleNavLinkClick = (event) => {
			event.preventDefault();
			const href = event.target.getAttribute("href");
			gsap$1.to(window, {
				scrollTo: href,
				duration: 1
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "About" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="page-wrapper" data-v-a5bf6e30${_scopeId}><div class="hero-section hero-1 flex justify-center" data-v-a5bf6e30${_scopeId}><div class="hero-text text-center sm:text-left px-6 sm:px-8 top-14 space-y-4" data-v-a5bf6e30${_scopeId}><p class="text-xl sm:text-[40px] sm:leading-[49px] text-primary-500 font-bold max-w-sm sm:w-[37%]" data-v-a5bf6e30${_scopeId}> Nature’s Gift, bottled for your pleasure</p><p class="hidden sm:flex text-primary-500 text-lg leading-6 w-[45%]" data-v-a5bf6e30${_scopeId}>Our journey started when we unearthed a hidden gem—a source of untouched water, naturally purified by the very essence of rocks. From the moment we savored the first sip, we knew we had stumbled upon something extraordinary. It became our mission to bring this exquisite water from beneath the surface and share its pure essence with the world.</p><p class="flex sm:hidden text-center text-lg" data-v-a5bf6e30${_scopeId}>It is our mission to share the pure essence of naturally purified water with the world.</p></div></div><div class="hero-section hero-2" data-v-a5bf6e30${_scopeId}><div class="hero-text flex justify-center text-center sm:text-left sm:justify-end px-6 sm:px-8 top-14" data-v-a5bf6e30${_scopeId}><div class="sm:w-[45%] space-y-4" data-v-a5bf6e30${_scopeId}><p class="text-xl sm:text-[40px] text-primary-500 font-bold w-full" data-v-a5bf6e30${_scopeId}>Pure. Natural. Refreshing.</p><p class="hidden sm:flex text-primary-500 text-lg sm:w-[90%]" data-v-a5bf6e30${_scopeId}>Mont Mineral Water flows through layers of ancient sedimentary rocks, delicately and naturally purified. Our meticulous process of reverse osmosis and ozonization ensures the utmost purity while retaining the essence of minerals and alkaline that grant Mont Mineral Water its signature velvety smoothness.</p><p class="hidden sm:flex text-primary-500 text-lg sm:w-[90%]" data-v-a5bf6e30${_scopeId}>With each sip, immerse yourself in a world of pure refreshment and unbridled joy. Discover the taste that transcends ordinary water.</p><p class="flex sm:hidden text-center text-lg" data-v-a5bf6e30${_scopeId}>Our meticulous process of reverse osmosis and ozonization ensures the utmost purity while retaining the essence of minerals and alkaline that grant Mont Mineral Water its signature velvety smoothness. </p></div></div></div><div class="hero-section hero-3" data-v-a5bf6e30${_scopeId}><div class="hero-text flex flex-col items-center sm:items-start text-white px-6 sm:px-16 top-16 sm:top-24 space-y-4" data-v-a5bf6e30${_scopeId}><p class="text-xl text-center sm:text-start sm:text-[40px] sm:leading-[49px] font-bold max-w-sm sm:w-[]" data-v-a5bf6e30${_scopeId}> Share the Joy of Pure Refreshment</p><p class="hidden sm:flex text-lg w-[45%]" data-v-a5bf6e30${_scopeId}>Indulge in the moments that matter most – whether it&#39;s a delightful meal with loved ones, an invigorating day at the park, or a serene evening at home. Elevate every experience with Mont Mineral Water, the ultimate companion.</p><p class="hidden sm:flex text-lg w-[42%]" data-v-a5bf6e30${_scopeId}>Immerse yourself in its pure, invigorating essence – a treasure meant to be shared.</p><p class="hidden sm:flex text-secondary-500 text-lg w-[45%]" data-v-a5bf6e30${_scopeId}> Don&#39;t Drink Alone</p><p class="flex sm:hidden text-center text-lg" data-v-a5bf6e30${_scopeId}>Elevate every moment with Mont Mineral Water, your ultimate companion, best enjoyed with loved ones. Don&#39;t drink alone. </p></div></div></div>`);
					else return [createVNode("div", { class: "page-wrapper" }, [
						createVNode("div", { class: "hero-section hero-1 flex justify-center" }, [createVNode("div", { class: "hero-text text-center sm:text-left px-6 sm:px-8 top-14 space-y-4" }, [
							createVNode("p", { class: "text-xl sm:text-[40px] sm:leading-[49px] text-primary-500 font-bold max-w-sm sm:w-[37%]" }, " Nature’s Gift, bottled for your pleasure"),
							createVNode("p", { class: "hidden sm:flex text-primary-500 text-lg leading-6 w-[45%]" }, "Our journey started when we unearthed a hidden gem—a source of untouched water, naturally purified by the very essence of rocks. From the moment we savored the first sip, we knew we had stumbled upon something extraordinary. It became our mission to bring this exquisite water from beneath the surface and share its pure essence with the world."),
							createVNode("p", { class: "flex sm:hidden text-center text-lg" }, "It is our mission to share the pure essence of naturally purified water with the world.")
						])]),
						createVNode("div", { class: "hero-section hero-2" }, [createVNode("div", { class: "hero-text flex justify-center text-center sm:text-left sm:justify-end px-6 sm:px-8 top-14" }, [createVNode("div", { class: "sm:w-[45%] space-y-4" }, [
							createVNode("p", { class: "text-xl sm:text-[40px] text-primary-500 font-bold w-full" }, "Pure. Natural. Refreshing."),
							createVNode("p", { class: "hidden sm:flex text-primary-500 text-lg sm:w-[90%]" }, "Mont Mineral Water flows through layers of ancient sedimentary rocks, delicately and naturally purified. Our meticulous process of reverse osmosis and ozonization ensures the utmost purity while retaining the essence of minerals and alkaline that grant Mont Mineral Water its signature velvety smoothness."),
							createVNode("p", { class: "hidden sm:flex text-primary-500 text-lg sm:w-[90%]" }, "With each sip, immerse yourself in a world of pure refreshment and unbridled joy. Discover the taste that transcends ordinary water."),
							createVNode("p", { class: "flex sm:hidden text-center text-lg" }, "Our meticulous process of reverse osmosis and ozonization ensures the utmost purity while retaining the essence of minerals and alkaline that grant Mont Mineral Water its signature velvety smoothness. ")
						])])]),
						createVNode("div", { class: "hero-section hero-3" }, [createVNode("div", { class: "hero-text flex flex-col items-center sm:items-start text-white px-6 sm:px-16 top-16 sm:top-24 space-y-4" }, [
							createVNode("p", { class: "text-xl text-center sm:text-start sm:text-[40px] sm:leading-[49px] font-bold max-w-sm sm:w-[]" }, " Share the Joy of Pure Refreshment"),
							createVNode("p", { class: "hidden sm:flex text-lg w-[45%]" }, "Indulge in the moments that matter most – whether it's a delightful meal with loved ones, an invigorating day at the park, or a serene evening at home. Elevate every experience with Mont Mineral Water, the ultimate companion."),
							createVNode("p", { class: "hidden sm:flex text-lg w-[42%]" }, "Immerse yourself in its pure, invigorating essence – a treasure meant to be shared."),
							createVNode("p", { class: "hidden sm:flex text-secondary-500 text-lg w-[45%]" }, " Don't Drink Alone"),
							createVNode("p", { class: "flex sm:hidden text-center text-lg" }, "Elevate every moment with Mont Mineral Water, your ultimate companion, best enjoyed with loved ones. Don't drink alone. ")
						])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AboutMontMineralWater.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AboutMontMineralWater_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-a5bf6e30"]]);
//#endregion
export { AboutMontMineralWater_default as default };
