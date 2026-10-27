import { computed, mergeProps, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
//#region resources/js/Components/NavLink.vue
var _sfc_main = {
	__name: "NavLink",
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
		const classes = computed(() => props.active ? "inline-flex items-center px-1 pt-1 text-lg font-semibold leading-6 text-secondary-500 focus:outline-none transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 text-lg font-medium leading-5 text-primary-500 hover:text-neutrals-700 hover:border-b-2 hover:border-secondary-500 focus:outline-none focus:text-neutrals-700 transition duration-150 ease-in-out");
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
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
