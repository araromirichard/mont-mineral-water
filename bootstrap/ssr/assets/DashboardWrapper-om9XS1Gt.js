import { t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, renderSlot, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
//#region resources/js/Pages/DashboardWrapper.vue
var _sfc_main = {
	__name: "DashboardWrapper",
	__ssrInlineRender: true,
	props: { auth: Object },
	setup(__props) {
		const defaultShippingAddress = usePage().props.auth.defaultShippingAddress;
		const ShippingAddresses = usePage().props.auth.shippingAddresses;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, { hasAppPages: false }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="h-auto min-h-[70vh] grid grid-cols-1 sm:grid-cols-4 justify-center items-center"${_scopeId}><div class="bg-primary-500 col-span-1 h-auto sm:h-full block justify-center py-40 space-y-6"${_scopeId}><div class="space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto"${_scopeId}><p class="text-neutral-500 sm:text-white text-xs sm:text-xl font-semibold"${_scopeId}>Account Overview</p> <span class="flex sm:hidden text-white"${_scopeId}>|</span><p class="text-neutral-200 hover:text-secondary-500"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), { href: _ctx.route("profile.edit") }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(_ctx.$page.props.auth.user.first_name)} ${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}`);
								else return [createTextVNode(toDisplayString(_ctx.$page.props.auth.user.first_name) + " " + toDisplayString(_ctx.$page.props.auth.user.last_name), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</p></div><div class="space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto"${_scopeId}><p class="text-neutral-500 sm:text-white text-xs sm:text-xl font-semibold"${_scopeId}>Address List</p> <span class="flex sm:hidden text-white"${_scopeId}>|</span>`);
						if (unref(defaultShippingAddress)) _push(`<p class="text-neutral-200 hover:text-secondary-500"${_scopeId}>${ssrInterpolate(unref(defaultShippingAddress).address)}, ${ssrInterpolate(unref(defaultShippingAddress).region)} <br${_scopeId}> <small class="text-[12px]"${_scopeId}>(default Address)</small></p>`);
						else _push(`<!---->`);
						if (!unref(defaultShippingAddress)) {
							_push(`<div${_scopeId}>`);
							if (unref(ShippingAddresses)) {
								_push(`<!--[-->`);
								ssrRenderList(unref(ShippingAddresses), (address) => {
									_push(`<p class="text-neutral-200 hover:text-secondary-500"${_scopeId}>${ssrInterpolate(address.address)}</p>`);
								});
								_push(`<!--]-->`);
							} else _push(`<p class="text-neutral-200 hover:text-secondary-500"${_scopeId}> No addresses currently saved </p>`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div><div class="space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("create-address"),
							class: "flex text-secondary-500"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> Create Address `);
								else return [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									"stroke-width": "1.5",
									stroke: "currentColor",
									class: "w-6 h-6 mr-2"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								})])), createTextVNode(" Create Address ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="col-span-3 h-full flex container mx-auto min-h-[70vh]"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "h-auto min-h-[70vh] grid grid-cols-1 sm:grid-cols-4 justify-center items-center" }, [createVNode("div", { class: "bg-primary-500 col-span-1 h-auto sm:h-full block justify-center py-40 space-y-6" }, [
						createVNode("div", { class: "space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto" }, [
							createVNode("p", { class: "text-neutral-500 sm:text-white text-xs sm:text-xl font-semibold" }, "Account Overview"),
							createTextVNode(),
							createVNode("span", { class: "flex sm:hidden text-white" }, "|"),
							createVNode("p", { class: "text-neutral-200 hover:text-secondary-500" }, [createVNode(unref(Link), { href: _ctx.route("profile.edit") }, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$page.props.auth.user.first_name) + " " + toDisplayString(_ctx.$page.props.auth.user.last_name), 1)]),
								_: 1
							}, 8, ["href"])])
						]),
						createVNode("div", { class: "space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto" }, [
							createVNode("p", { class: "text-neutral-500 sm:text-white text-xs sm:text-xl font-semibold" }, "Address List"),
							createTextVNode(),
							createVNode("span", { class: "flex sm:hidden text-white" }, "|"),
							unref(defaultShippingAddress) ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-neutral-200 hover:text-secondary-500"
							}, [
								createTextVNode(toDisplayString(unref(defaultShippingAddress).address) + ", " + toDisplayString(unref(defaultShippingAddress).region) + " ", 1),
								createVNode("br"),
								createTextVNode(),
								createVNode("small", { class: "text-[12px]" }, "(default Address)")
							])) : createCommentVNode("", true),
							!unref(defaultShippingAddress) ? (openBlock(), createBlock("div", { key: 1 }, [unref(ShippingAddresses) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(ShippingAddresses), (address) => {
								return openBlock(), createBlock("p", {
									class: "text-neutral-200 hover:text-secondary-500",
									key: address.id
								}, toDisplayString(address.address), 1);
							}), 128)) : (openBlock(), createBlock("p", {
								key: 1,
								class: "text-neutral-200 hover:text-secondary-500"
							}, " No addresses currently saved "))])) : createCommentVNode("", true)
						]),
						createVNode("div", { class: "space-y-0 space-x-2 sm:space-x-0 sm:space-y-1 flex items-center sm:flex-col sm:items-start container mx-auto" }, [createVNode(unref(Link), {
							href: _ctx.route("create-address"),
							class: "flex text-secondary-500"
						}, {
							default: withCtx(() => [(openBlock(), createBlock("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								class: "w-6 h-6 mr-2"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							})])), createTextVNode(" Create Address ")]),
							_: 1
						}, 8, ["href"])])
					]), createVNode("div", { class: "col-span-3 h-full flex container mx-auto min-h-[70vh]" }, [renderSlot(_ctx.$slots, "default")])])];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DashboardWrapper.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
