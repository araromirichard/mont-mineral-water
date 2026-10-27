import { t as ApplicationLogo_default } from "./ApplicationLogo-De7nLcr7.js";
import { t as _sfc_main$3 } from "./ToastMessageList-BoY0bwIF.js";
import "./NavLink-Bz8QwDgc.js";
import { t as _sfc_main$4 } from "./DropdownLink-i2Q5OIsF.js";
import { t as _sfc_main$5 } from "./ResponsiveNavLink-DxUco59W.js";
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
		const classes = computed(() => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-primary-500 text-left text-base font-bold text-primary-500 bg-neutrals-50 focus:outline-none focus:text-primary-500 focus:bg-neutrals-50 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-neutrals-700 hover:text-gray-800 hover:bg-neutral-100 hover:border-neutrals-300 focus:outline-none focus:text-neutrals-700 focus:bg-neutrals-100 focus:border-neutrals-300 transition duration-150 ease-in-out");
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
			_push(`<nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("dashboard") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "block h-9 w-auto fill-current text-gray-800" })];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
			_push(ssrRenderComponent(_sfc_main$2, {
				align: "right",
				width: "48"
			}, {
				trigger: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-full text-gray-500 bg-white hover:bg-gray-100 hover:p-2 focus:outline-none transition ease-in-out duration-150 cursor-pointer"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg></button></span>`);
					else return [createVNode("span", { class: "inline-flex rounded-md" }, [createVNode("button", {
						type: "button",
						class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-full text-gray-500 bg-white hover:bg-gray-100 hover:p-2 focus:outline-none transition ease-in-out duration-150 cursor-pointer"
					}, [createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1), (openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-6 h-6"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
					})]))])])];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$4, { href: _ctx.route("profile.edit") }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Profile `);
								else return [createTextVNode(" Profile ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Log Out `);
								else return [createTextVNode(" Log Out ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$4, { href: _ctx.route("profile.edit") }, {
						default: withCtx(() => [createTextVNode(" Profile ")]),
						_: 1
					}, 8, ["href"]), createVNode(_sfc_main$4, {
						href: _ctx.route("logout"),
						method: "post",
						as: "button"
					}, {
						default: withCtx(() => [createTextVNode(" Log Out ")]),
						_: 1
					}, 8, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
				hidden: showingNavigationDropdown.value,
				"inline-flex": !showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
				hidden: !showingNavigationDropdown.value,
				"inline-flex": showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{
				block: showingNavigationDropdown.value,
				hidden: !showingNavigationDropdown.value
			}, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
			_push(ssrRenderComponent(_sfc_main$5, {
				href: _ctx.route("admin.index"),
				active: _ctx.route().current("admin.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				href: _ctx.route("admin.users.index"),
				active: _ctx.route().current("admin.users.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Users `);
					else return [createTextVNode(" Users ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				href: _ctx.route("admin.products.index"),
				active: _ctx.route().current("admin.products.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Products `);
					else return [createTextVNode(" Products ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				href: _ctx.route("admin.orders.index"),
				active: _ctx.route().current("admin.orders.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Orders `);
					else return [createTextVNode(" Orders ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
			_push(ssrRenderComponent(_sfc_main$5, { href: _ctx.route("profile.edit") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Profile `);
					else return [createTextVNode(" Profile ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				href: _ctx.route("logout"),
				method: "post",
				as: "button"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Log Out `);
					else return [createTextVNode(" Log Out ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></nav><aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-neutrals-200 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar"><div class="h-full px-3 pb-4 overflow-y-auto bg-neutrals-200 dark:bg-gray-800"><div class="shrink-0 flex items-center">`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("dashboard") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-14 w-auto fill-current text-gray-800" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "block h-14 w-auto fill-current text-gray-800" })];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				class: "flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100",
				href: _ctx.route("admin.index"),
				active: _ctx.route().current("admin.index")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"${_scopeId}></path></svg><span class="mx-3"${_scopeId}>Dashboard</span>`);
					else return [(openBlock(), createBlock("svg", {
						class: "h-6 w-6",
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
					})])), createVNode("span", { class: "mx-3" }, "Dashboard")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.users.index"),
				active: _ctx.route().current("admin.users.index"),
				class: "flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"${_scopeId}></path></svg><span class="mx-3"${_scopeId}>Users</span>`);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-6 h-6"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
					})])), createVNode("span", { class: "mx-3" }, "Users")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.products.index"),
				active: _ctx.route().current("admin.products.index"),
				class: "flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"${_scopeId}></path></svg><span class="mx-3"${_scopeId}>Products</span>`);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-6 h-6"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
					})])), createVNode("span", { class: "mx-3" }, "Products")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$1, {
				href: _ctx.route("admin.orders.index"),
				active: _ctx.route().current("admin.orders.index"),
				class: "flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"${_scopeId}></path></svg><span class="mx-3"${_scopeId}>Orders</span>`);
					else return [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-6 h-6"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
					})])), createVNode("span", { class: "mx-3" }, "Orders")];
				}),
				_: 1
			}, _parent));
			_push(`</div></aside><main class="p-4 sm:ml-64">`);
			if (_ctx.$slots.header) {
				_push(`<header class="bg-white"><div class="max-w-7xl mx-auto pt-2 pb-6 px-4 sm:px-6 lg:px-8">`);
				ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
				_push(`</div></header>`);
			} else _push(`<!---->`);
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
//#endregion
export { _sfc_main as t };
