import { mergeProps, onMounted, ref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region resources/js/Components/FileInput.vue
var _sfc_main = {
	__name: "FileInput",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		accept: {
			type: String,
			default: "image/*"
		},
		multiple: {
			type: Boolean,
			default: true
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const input = ref(null);
		onMounted(() => {
			if (input.value.hasAttribute("autofocus")) input.value.focus();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${ssrRenderAttrs(mergeProps({
				type: "file",
				name: "images[]",
				accept: __props.accept,
				multiple: __props.multiple,
				ref_key: "input",
				ref: input,
				class: "border-transparent border-none focus:border-none"
			}, _attrs))}>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FileInput.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
