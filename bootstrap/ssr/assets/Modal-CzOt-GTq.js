import { computed, onMounted, onUnmounted, useSSRContext, watch } from "vue";
import { ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport } from "vue/server-renderer";
//#region resources/js/Components/Modal.vue
var _sfc_main = {
	__name: "Modal",
	__ssrInlineRender: true,
	props: {
		show: {
			type: Boolean,
			default: false
		},
		maxWidth: {
			type: String,
			default: "2xl"
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
				sm: "sm:max-w-sm",
				md: "sm:max-w-md",
				lg: "sm:max-w-lg",
				xl: "sm:max-w-xl",
				"2xl": "sm:max-w-2xl"
			}[props.maxWidth];
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderTeleport(_push, (_push) => {
				_push(`<div class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="fixed inset-0 transform transition-all" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}">`);
				if (__props.show) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				else _push(`<!---->`);
				_push(`</div></div>`);
			}, "body", false, _parent);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
