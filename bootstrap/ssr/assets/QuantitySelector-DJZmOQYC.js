import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
//#region resources/js/Components/QuantitySelector.vue
var _sfc_main = {
	__name: "QuantitySelector",
	__ssrInlineRender: true,
	props: { quantity: Number },
	emits: ["add", "minus"],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "quantity-selector border border-gray-300 flex items-center rounded space-x-2" }, _attrs))} data-v-5facb309><button class="quantity-btn" data-v-5facb309><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-5facb309><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" data-v-5facb309></path></svg></button><div class="quantity-value flex-grow flex items-center justify-center font-bold text-xs" data-v-5facb309>${ssrInterpolate(__props.quantity)}</div><button class="quantity-btn" data-v-5facb309><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-5facb309><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" data-v-5facb309></path></svg></button></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/QuantitySelector.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var QuantitySelector_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-5facb309"]]);
//#endregion
export { QuantitySelector_default as t };
