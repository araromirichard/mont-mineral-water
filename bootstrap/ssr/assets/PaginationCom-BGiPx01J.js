import { mergeProps, unref, useSSRContext } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Components/PaginationCom.vue
var _sfc_main = {
	__name: "PaginationCom",
	__ssrInlineRender: true,
	props: { links: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><!--[-->`);
			ssrRenderList(__props.links, (link, key) => {
				_push(`<!--[-->`);
				if (link.url === null) _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label ?? ""}</div>`);
				else _push(ssrRenderComponent(unref(Link), {
					key,
					href: link.url,
					class: ["mb-1 mr-1 px-4 py-3 text-sm leading-4 border rounded focus:text-neutrals-500 focus:border-neutrals-500 hover:bg-white", { "bg-neutrals-200": link.active }]
				}, null, _parent));
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PaginationCom.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
