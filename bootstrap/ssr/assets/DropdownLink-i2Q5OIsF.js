import { mergeProps, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
//#region resources/js/Components/DropdownLink.vue
var _sfc_main = {
	__name: "DropdownLink",
	__ssrInlineRender: true,
	props: { href: {
		type: String,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "block w-full px-3 py-2 text-left text-sm leading-5 font-semibold text-neutral-700 hover:bg-secondary-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
