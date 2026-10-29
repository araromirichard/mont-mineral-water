import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as ApplicationLogo_default } from "./ApplicationLogo-De7nLcr7.js";
import { t as _sfc_main$3 } from "./ToastMessageList-BoY0bwIF.js";
import { t as _sfc_main$4 } from "./DropdownLink-i2Q5OIsF.js";
import { computed, createBlock, createTextVNode, createVNode, mergeProps, onMounted, onUnmounted, openBlock, ref, renderSlot, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
//#region resources/js/Components/Dropdown.vue
var _sfc_main$2 = {
	__name: "Dropdown",
	__ssrInlineRender: true,
	props: {
		align: {
			type: String,
			default: "right"
		},
		width: {
			type: String,
			default: "48"
		},
		contentClasses: {
			type: String,
			default: "py-1 bg-white"
		}
	},
	setup(__props) {
		const props = __props;
		const closeOnEscape = (e) => {
			if (open.value && e.key === "Escape") open.value = false;
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
		const widthClass = computed(() => {
			return { 48: "w-48" }[props.width.toString()];
		});
		const alignmentClasses = computed(() => {
			if (props.align === "left") return "origin-top-left left-0";
			else if (props.align === "right") return "origin-top-right right-0";
			else return "origin-top";
		});
		const open = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
			ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
			_push(`</div><div class="fixed inset-0 z-40" style="${ssrRenderStyle(open.value ? null : { display: "none" })}"></div><div class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}" style="${ssrRenderStyle([{ "display": "none" }, open.value ? null : { display: "none" }])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
			ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/SideNavLinks.vue
var _sfc_main$1 = {
	__name: "SideNavLinks",
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
		const classes = computed(() => props.active ? "flex items-center w-full px-3 py-2.5 rounded-lg text-white bg-white/10 border-l-4 border-secondary-300 font-semibold text-sm transition duration-150 ease-in-out" : "flex items-center w-full px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent font-medium text-sm transition duration-150 ease-in-out");
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
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SideNavLinks.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AdminLayout.vue
var _sfc_main = {
	__name: "AdminLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const showingNavigationDropdown = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
			if (showingNavigationDropdown.value) _push(`<div class="fixed inset-0 z-30 sm:hidden bg-black/60" data-v-6f972666></div>`);
			else _push(`<!---->`);
			_push(`<header class="fixed top-0 left-0 right-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 justify-between" data-v-6f972666><div class="flex items-center gap-3" data-v-6f972666><button class="sm:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors" data-v-6f972666><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-6f972666><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-6f972666></path></svg></button>`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("dashboard") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-10 w-auto" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "block h-10 w-auto" })];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex items-center gap-4 flex-1 justify-end" data-v-6f972666><div class="flex-1 sm:ml-6" data-v-6f972666>`);
			ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
			_push(`</div>`);
			_push(ssrRenderComponent(_sfc_main$2, {
				align: "right",
				width: "48"
			}, {
				trigger: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition duration-150" data-v-6f972666${_scopeId}><div class="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0" data-v-6f972666${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name.charAt(0).toUpperCase())}</div><span class="hidden sm:block font-medium" data-v-6f972666${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6f972666${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-6f972666${_scopeId}></path></svg></button>`);
					else return [createVNode("button", {
						type: "button",
						class: "flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition duration-150"
					}, [
						createVNode("div", { class: "w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0" }, toDisplayString(_ctx.$page.props.auth.user.first_name.charAt(0).toUpperCase()), 1),
						createVNode("span", { class: "hidden sm:block font-medium" }, toDisplayString(_ctx.$page.props.auth.user.first_name), 1),
						(openBlock(), createBlock("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							class: "h-4 w-4 text-gray-400",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M19 9l-7 7-7-7"
						})]))
					])];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="px-4 py-2 border-b border-gray-100" data-v-6f972666${_scopeId}><p class="text-sm font-semibold text-gray-800" data-v-6f972666${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)} ${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}</p><p class="text-xs text-gray-500 truncate" data-v-6f972666${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</p></div>`);
						_push(ssrRenderComponent(_sfc_main$4, { href: _ctx.route("profile.edit") }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Profile`);
								else return [createTextVNode("Profile")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Log Out`);
								else return [createTextVNode("Log Out")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode("div", { class: "px-4 py-2 border-b border-gray-100" }, [createVNode("p", { class: "text-sm font-semibold text-gray-800" }, toDisplayString(_ctx.$page.props.auth.user.first_name) + " " + toDisplayString(_ctx.$page.props.auth.user.last_name), 1), createVNode("p", { class: "text-xs text-gray-500 truncate" }, toDisplayString(_ctx.$page.props.auth.user.email), 1)]),
						createVNode(_sfc_main$4, { href: _ctx.route("profile.edit") }, {
							default: withCtx(() => [createTextVNode("Profile")]),
							_: 1
						}, 8, ["href"]),
						createVNode(_sfc_main$4, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button"
						}, {
							default: withCtx(() => [createTextVNode("Log Out")]),
							_: 1
						}, 8, ["href"])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div></header><aside class="${ssrRenderClass([showingNavigationDropdown.value ? "translate-x-0" : "-translate-x-full sm:translate-x-0", "fixed top-16 left-0 z-20 w-64 flex flex-col bg-primary-500 transition-transform duration-300 ease-in-out"])}" style="${ssrRenderStyle({ "height": "calc(100vh - 4rem)" })}" aria-label="Sidebar" data-v-6f972666><nav class="flex-1 px-3 py-5 overflow-y-auto space-y-0.5" data-v-6f972666><p class="px-3 mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500" data-v-6f972666>Main</p>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.index"),
				active: _ctx.route().current("admin.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6f972666${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" data-v-6f972666${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" data-v-6f972666${_scopeId}></path></svg><span class="ml-3" data-v-6f972666${_scopeId}>Dashboard</span>`);
					else return [(openBlock(), createBlock("svg", {
						class: "w-5 h-5 flex-shrink-0",
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
					}), createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
					})])), createVNode("span", { class: "ml-3" }, "Dashboard")];
				}),
				_: 1
			}, _parent));
			_push(`<p class="px-3 mt-5 mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500" data-v-6f972666>Manage</p>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.users.index"),
				active: _ctx.route().current("admin.users.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-6f972666${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" data-v-6f972666${_scopeId}></path></svg><span class="ml-3" data-v-6f972666${_scopeId}>Users</span>`);
					else return [(openBlock(), createBlock("svg", {
						class: "w-5 h-5 flex-shrink-0",
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
					})])), createVNode("span", { class: "ml-3" }, "Users")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.products.index"),
				active: _ctx.route().current("admin.products.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-6f972666${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" data-v-6f972666${_scopeId}></path></svg><span class="ml-3" data-v-6f972666${_scopeId}>Products</span>`);
					else return [(openBlock(), createBlock("svg", {
						class: "w-5 h-5 flex-shrink-0",
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
					})])), createVNode("span", { class: "ml-3" }, "Products")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.orders.index"),
				active: _ctx.route().current("admin.orders.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-6f972666${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" data-v-6f972666${_scopeId}></path></svg><span class="ml-3" data-v-6f972666${_scopeId}>Orders</span>`);
					else return [(openBlock(), createBlock("svg", {
						class: "w-5 h-5 flex-shrink-0",
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
					})])), createVNode("span", { class: "ml-3" }, "Orders")];
				}),
				_: 1
			}, _parent));
			_push(`</nav><div class="p-3 border-t border-white/10" data-v-6f972666>`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("homepage"),
				class: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm transition duration-150"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-6f972666${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" data-v-6f972666${_scopeId}></path></svg><span class="ml-3" data-v-6f972666${_scopeId}>View Storefront</span>`);
					else return [(openBlock(), createBlock("svg", {
						class: "w-5 h-5 flex-shrink-0",
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
					})])), createVNode("span", { class: "ml-3" }, "View Storefront")];
				}),
				_: 1
			}, _parent));
			_push(`</div></aside><main class="sm:ml-64 pt-16 min-h-screen bg-gray-50" data-v-6f972666>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AdminLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-6f972666"]]);
//#endregion
export { AdminLayout_default as t };
