import { mergeProps, onMounted, ref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
//#region resources/js/Components/TextInput.vue
var _sfc_main$1 = {
	__name: "TextInput",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const input = ref(null);
		onMounted(() => {
			if (input.value.hasAttribute("autofocus")) input.value.focus();
		});
		__expose({ focus: () => input.value.focus() });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${ssrRenderAttrs(mergeProps({
				class: "border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest",
				value: __props.modelValue,
				placeholder: __props.placeholder,
				ref_key: "input",
				ref: input
			}, _attrs))}>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/InputError.vue
var _sfc_main = {
	__name: "InputError",
	__ssrInlineRender: true,
	props: { message: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(_attrs, { style: __props.message ? null : { display: "none" } }))}><p class="text-sm text-error-400">${ssrInterpolate(__props.message)}</p></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$1 as n, _sfc_main as t };
