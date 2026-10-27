import { t as _sfc_main$1 } from "./AdminLayout-ChNnk7U6.js";
import { computed, createTextVNode, createVNode, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/User/show.vue
var _sfc_main = {
	__name: "show",
	__ssrInlineRender: true,
	props: { user: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const initials = computed(() => {
			return `${props.user.first_name.charAt(0).toUpperCase()}${props.user.last_name.charAt(0).toUpperCase()}`;
		});
		const pagename = computed(() => {
			return props.user.first_name + " Details";
		});
		const fullname = computed(() => {
			return props.user.first_name + " " + props.user.last_name;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: pagename.value }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.users.index"),
							class: "bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Back `);
								else return [createTextVNode("Back ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<h2 class="font-semibold text-xl text-gray-800 leading-tight py-4"${_scopeId}>${ssrInterpolate(fullname.value)}&#39;s Details Page</h2>`);
					} else return [createVNode(unref(Link), {
						href: _ctx.route("admin.users.index"),
						class: "bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md"
					}, {
						default: withCtx(() => [createTextVNode("Back ")]),
						_: 1
					}, 8, ["href"]), createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight py-4" }, toDisplayString(fullname.value) + "'s Details Page", 1)];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="px-8 py-4"${_scopeId}><div class="bg-neutrals-50 rounded-lg shadow-md p-4 max-w-md"${_scopeId}><h2 class="text-xl font-bold mb-4"${_scopeId}>${ssrInterpolate(fullname.value)}</h2><div class="flex flex-row space-x-4"${_scopeId}><div class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0"${_scopeId}><p class="text-gray-700 text-2xl"${_scopeId}>${ssrInterpolate(initials.value)}</p></div><div${_scopeId}><p class="text-gray-500 mb-2"${_scopeId}>${ssrInterpolate(__props.user.email)}</p><p class="text-gray-500"${_scopeId}>${ssrInterpolate(__props.user.phone)}</p><p class="text-gray-500"${_scopeId}>${ssrInterpolate(__props.user.address)}</p></div></div></div></div>`);
					else return [createVNode("div", { class: "px-8 py-4" }, [createVNode("div", { class: "bg-neutrals-50 rounded-lg shadow-md p-4 max-w-md" }, [createVNode("h2", { class: "text-xl font-bold mb-4" }, toDisplayString(fullname.value), 1), createVNode("div", { class: "flex flex-row space-x-4" }, [createVNode("div", { class: "w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0" }, [createVNode("p", { class: "text-gray-700 text-2xl" }, toDisplayString(initials.value), 1)]), createVNode("div", null, [
						createVNode("p", { class: "text-gray-500 mb-2" }, toDisplayString(__props.user.email), 1),
						createVNode("p", { class: "text-gray-500" }, toDisplayString(__props.user.phone), 1),
						createVNode("p", { class: "text-gray-500" }, toDisplayString(__props.user.address), 1)
					])])])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
