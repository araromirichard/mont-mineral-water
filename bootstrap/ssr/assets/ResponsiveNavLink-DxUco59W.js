import { computed, mergeProps, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
//#region resources/js/Components/ResponsiveNavLink.vue
var _sfc_main = {
	__name: "ResponsiveNavLink",
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
		const classes = computed(() => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-gray-400 text-left text-base font-medium text-gray-700 bg-gray-50 focus:outline-none focus:text-gray-800 focus:bg-gray-100 focus:border-gray-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
