import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as AdminLayout_default } from "./AdminLayout-C8vXYz0r.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, inject, mergeProps, onMounted, openBlock, provide, ref, renderList, toDisplayString, unref, useSSRContext, useSlots, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import axios from "axios";
import VueApexCharts from "vue3-apexcharts";
//#region resources/js/Components/BaseCardComponent.vue
var _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-200 ease-in-out font-sans" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BaseCardComponent.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var BaseCardComponent_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/Components/BaseTabWrapper.vue
var _sfc_main$2 = {
	__name: "BaseTabWrapper",
	__ssrInlineRender: true,
	setup(__props) {
		const slots = useSlots();
		const tabTitle = ref(slots.default().map((tab) => tab.props.title));
		const selectedTitle = ref("USERS");
		provide("selectedTitle", selectedTitle);
		onMounted(() => {
			selectedTitle.value = "USERS";
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><p class="text-base font-semibold text-primary-500">Last 5 ${ssrInterpolate(selectedTitle.value)}</p><div class="flex w-full bg-white outline-none mt-4 text-gray-500 border-b border-gray-200 space-x-1"><!--[-->`);
			ssrRenderList(tabTitle.value, (title, index) => {
				_push(`<button class="bg-gray-100 text-neutral-500 focus:text-primary-500 focus:border-b-4 focus:bg-gray-200 focus:border-primary-500 focus:font-semibold px-6 py-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-center">${ssrInterpolate(title)}</button>`);
			});
			_push(`<!--]--></div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BaseTabWrapper.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/BaseTab.vue
var _sfc_main$1 = {
	__name: "BaseTab",
	__ssrInlineRender: true,
	props: { title: {
		type: String,
		required: true
	} },
	setup(__props) {
		const selectedTitle = inject("selectedTitle");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(_attrs, { style: __props.title === unref(selectedTitle) ? null : { display: "none" } }))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BaseTab.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Admin/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		monthlySalesChart: Object,
		percentageSoldChart: Object
	},
	setup(__props) {
		const dashboardMetrics = ref(null);
		const last5Orders = ref(null);
		const last5Users = ref(null);
		const orderMetrics = ref(null);
		const userMetrics = ref(null);
		const salesMetrics = ref(null);
		const metricsLoading = ref(false);
		const metricsError = ref(null);
		const statusChipClass = computed(() => (status) => {
			let baseClass = "px-4 inline-flex text-xs leading-5 font-semibold rounded-full shadow-sm";
			switch (status) {
				case "pending": return `${baseClass} bg-amber-100 text-amber-800`;
				case "cancelled": return `${baseClass} bg-red-100 text-red-800`;
				case "approved": return `${baseClass} bg-green-100 text-green-800`;
				case "fulfilled": return `${baseClass} bg-blue-100 text-blue-800`;
				default: return `${baseClass} bg-gray-100 text-gray-800`;
			}
		});
		const fetchDashboardMetrics = () => {
			metricsLoading.value = true;
			metricsError.value = null;
			axios.get(`/api/admin-dashboard-metrics`).then((response) => {
				dashboardMetrics.value = response.data.data;
				last5Orders.value = response.data.data.last5Orders;
				last5Users.value = response.data.data.last5Users;
				orderMetrics.value = response.data.data.orderMetrics;
				userMetrics.value = response.data.data.userMetrics;
				salesMetrics.value = response.data.data.salesMetrics;
			}).catch(() => {
				metricsError.value = "Failed to load dashboard metrics. Please refresh the page.";
			}).finally(() => {
				metricsLoading.value = false;
			});
		};
		onMounted(() => {
			fetchDashboardMetrics();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="font-semibold text-lg text-gray-800 leading-tight" data-v-d70fb3a5${_scopeId}>Dashboard</h2>`);
					else return [createVNode("h2", { class: "font-semibold text-lg text-gray-800 leading-tight" }, "Dashboard")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-8 px-4 sm:px-6 lg:px-8" data-v-d70fb3a5${_scopeId}><div class="max-w-7xl mx-auto" data-v-d70fb3a5${_scopeId}>`);
						if (metricsLoading.value) _push(`<div class="py-4 text-center text-gray-500 text-sm" data-v-d70fb3a5${_scopeId}>Loading metrics...</div>`);
						else _push(`<!---->`);
						if (metricsError.value) _push(`<div class="py-4 px-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(metricsError.value)}</div>`);
						else _push(`<!---->`);
						if (dashboardMetrics.value) {
							_push(`<div class="grid gap-4 grid-auto-fit py-4" data-v-d70fb3a5${_scopeId}>`);
							_push(ssrRenderComponent(BaseCardComponent_default, null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<div class="flex items-start justify-between" data-v-d70fb3a5${_scopeId}><div data-v-d70fb3a5${_scopeId}><p class="text-xs font-semibold uppercase tracking-widest text-gray-400" data-v-d70fb3a5${_scopeId}>Total Users</p><p class="text-4xl font-bold text-primary-500 mt-2" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(userMetrics.value.totalUsersCount)}</p><div class="flex items-center gap-3 mt-3" data-v-d70fb3a5${_scopeId}><span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5" data-v-d70fb3a5${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500" data-v-d70fb3a5${_scopeId}></span> ${ssrInterpolate(userMetrics.value.verifiedUsersCount)} verified </span><span class="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5" data-v-d70fb3a5${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-400" data-v-d70fb3a5${_scopeId}></span> ${ssrInterpolate(userMetrics.value.unverifiedUsersCount || 0)} unverified </span></div></div><div class="rounded-xl p-3 bg-teal-50 flex-shrink-0" data-v-d70fb3a5${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-teal-500" data-v-d70fb3a5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" data-v-d70fb3a5${_scopeId}></path></svg></div></div>`);
									else return [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", null, [
										createVNode("p", { class: "text-xs font-semibold uppercase tracking-widest text-gray-400" }, "Total Users"),
										createVNode("p", { class: "text-4xl font-bold text-primary-500 mt-2" }, toDisplayString(userMetrics.value.totalUsersCount), 1),
										createVNode("div", { class: "flex items-center gap-3 mt-3" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500" }), createTextVNode(" " + toDisplayString(userMetrics.value.verifiedUsersCount) + " verified ", 1)]), createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createTextVNode(" " + toDisplayString(userMetrics.value.unverifiedUsersCount || 0) + " unverified ", 1)])])
									]), createVNode("div", { class: "rounded-xl p-3 bg-teal-50 flex-shrink-0" }, [(openBlock(), createBlock("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "w-6 h-6 text-teal-500"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
									})]))])])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(BaseCardComponent_default, null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<div class="flex items-start justify-between" data-v-d70fb3a5${_scopeId}><div data-v-d70fb3a5${_scopeId}><p class="text-xs font-semibold uppercase tracking-widest text-gray-400" data-v-d70fb3a5${_scopeId}>Total Orders</p><p class="text-4xl font-bold text-primary-500 mt-2" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(orderMetrics.value.totalOrdersCount)}</p><div class="flex items-center gap-3 mt-3" data-v-d70fb3a5${_scopeId}><span class="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-0.5" data-v-d70fb3a5${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-500" data-v-d70fb3a5${_scopeId}></span> ${ssrInterpolate(orderMetrics.value.fulfilledOrdersCount)} fulfilled </span><span class="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5" data-v-d70fb3a5${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-400" data-v-d70fb3a5${_scopeId}></span> ${ssrInterpolate(orderMetrics.value.pendingOrdersCount)} pending </span></div></div><div class="rounded-xl p-3 bg-indigo-50 flex-shrink-0" data-v-d70fb3a5${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-500" data-v-d70fb3a5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" data-v-d70fb3a5${_scopeId}></path></svg></div></div>`);
									else return [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", null, [
										createVNode("p", { class: "text-xs font-semibold uppercase tracking-widest text-gray-400" }, "Total Orders"),
										createVNode("p", { class: "text-4xl font-bold text-primary-500 mt-2" }, toDisplayString(orderMetrics.value.totalOrdersCount), 1),
										createVNode("div", { class: "flex items-center gap-3 mt-3" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-500" }), createTextVNode(" " + toDisplayString(orderMetrics.value.fulfilledOrdersCount) + " fulfilled ", 1)]), createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createTextVNode(" " + toDisplayString(orderMetrics.value.pendingOrdersCount) + " pending ", 1)])])
									]), createVNode("div", { class: "rounded-xl p-3 bg-indigo-50 flex-shrink-0" }, [(openBlock(), createBlock("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "w-6 h-6 text-indigo-500"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
									})]))])])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(BaseCardComponent_default, null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<div class="flex items-start justify-between" data-v-d70fb3a5${_scopeId}><div data-v-d70fb3a5${_scopeId}><p class="text-xs font-semibold uppercase tracking-widest text-gray-400" data-v-d70fb3a5${_scopeId}>Revenue (Fulfilled)</p><p class="text-4xl font-bold text-primary-500 mt-2" data-v-d70fb3a5${_scopeId}>GH₵ ${ssrInterpolate(salesMetrics.value.totalFulfilledAmount)}</p><div class="flex items-center gap-3 mt-3" data-v-d70fb3a5${_scopeId}><span class="inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 rounded-full px-2 py-0.5" data-v-d70fb3a5${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-rose-500" data-v-d70fb3a5${_scopeId}></span> ${ssrInterpolate(salesMetrics.value.totalFulfilledQuantity)} units sold </span></div></div><div class="rounded-xl p-3 bg-rose-50 flex-shrink-0" data-v-d70fb3a5${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-rose-500" data-v-d70fb3a5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" data-v-d70fb3a5${_scopeId}></path></svg></div></div>`);
									else return [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", null, [
										createVNode("p", { class: "text-xs font-semibold uppercase tracking-widest text-gray-400" }, "Revenue (Fulfilled)"),
										createVNode("p", { class: "text-4xl font-bold text-primary-500 mt-2" }, "GH₵ " + toDisplayString(salesMetrics.value.totalFulfilledAmount), 1),
										createVNode("div", { class: "flex items-center gap-3 mt-3" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-rose-500" }), createTextVNode(" " + toDisplayString(salesMetrics.value.totalFulfilledQuantity) + " units sold ", 1)])])
									]), createVNode("div", { class: "rounded-xl p-3 bg-rose-50 flex-shrink-0" }, [(openBlock(), createBlock("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "w-6 h-6 text-rose-500"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
									})]))])])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div class="grid gap-4 grid-auto-fit bg-neutral-50 overflow-hidden shadow-sm sm:rounded-lg" data-v-d70fb3a5${_scopeId}><div class="p-3 bg-white" data-v-d70fb3a5${_scopeId}>`);
						_push(ssrRenderComponent(unref(VueApexCharts), {
							width: __props.monthlySalesChart.width,
							height: __props.monthlySalesChart.height,
							type: __props.monthlySalesChart.type,
							options: __props.monthlySalesChart.options,
							series: __props.monthlySalesChart.series
						}, null, _parent, _scopeId));
						_push(`</div><div class="p-3 bg-white" data-v-d70fb3a5${_scopeId}>`);
						_push(ssrRenderComponent(unref(VueApexCharts), {
							width: __props.percentageSoldChart.width,
							height: __props.percentageSoldChart.height,
							type: __props.percentageSoldChart.type,
							options: __props.percentageSoldChart.options,
							series: __props.percentageSoldChart.series
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg pt-6" data-v-d70fb3a5${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(_sfc_main$1, { title: "USERS" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(`<table class="w-full text-sm text-left text-gray-500" data-v-d70fb3a5${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50" data-v-d70fb3a5${_scopeId}><tr data-v-d70fb3a5${_scopeId}><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> User name </th><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Email </th><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Phone </th><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Address </th></tr></thead><tbody data-v-d70fb3a5${_scopeId}>`);
												if (last5Users.value && last5Users.value.length > 0) {
													_push(`<!--[-->`);
													ssrRenderList(last5Users.value, (user) => {
														_push(`<tr class="bg-white border-t hover:bg-gray-50" data-v-d70fb3a5${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(user.first_name)} ${ssrInterpolate(user.last_name)}</th><td class="px-6 py-4" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(user.email)}</td><td class="px-6 py-4" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(user.phone)}</td><td class="px-6 py-4" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(user.address)}</td></tr>`);
													});
													_push(`<!--]-->`);
												} else _push(`<tr data-v-d70fb3a5${_scopeId}><td colspan="5" class="text-center py-6 text-lg text-primary-500 font-semibold" data-v-d70fb3a5${_scopeId}> No Users available.</td></tr>`);
												_push(`</tbody></table>`);
											} else return [createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " User name "),
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Email "),
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Phone "),
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Address ")
											])]), createVNode("tbody", null, [last5Users.value && last5Users.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(last5Users.value, (user) => {
												return openBlock(), createBlock("tr", {
													class: "bg-white border-t hover:bg-gray-50",
													key: user.id
												}, [
													createVNode("th", {
														scope: "row",
														class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
													}, toDisplayString(user.first_name) + " " + toDisplayString(user.last_name), 1),
													createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.email), 1),
													createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.phone), 1),
													createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.address), 1)
												]);
											}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
												colspan: "5",
												class: "text-center py-6 text-lg text-primary-500 font-semibold"
											}, " No Users available.")]))])])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$1, { title: "ORDERS" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(`<table class="w-full text-sm text-left text-gray-500" data-v-d70fb3a5${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50" data-v-d70fb3a5${_scopeId}><tr data-v-d70fb3a5${_scopeId}><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Customer </th><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Order Number </th><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Total(incl. Delv.) </th><th scope="col" class="px-6 py-3" data-v-d70fb3a5${_scopeId}> Status </th><th scope="col" class="px-4 py-3" data-v-d70fb3a5${_scopeId}> Created At </th></tr></thead><tbody data-v-d70fb3a5${_scopeId}>`);
												if (last5Orders.value && last5Orders.value.length > 0) {
													_push(`<!--[-->`);
													ssrRenderList(last5Orders.value, (order) => {
														_push(`<tr class="bg-white border-t hover:bg-gray-50" data-v-d70fb3a5${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(order.user.email)}</th><td class="px-6 py-4" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(order.order_number)}</td><td class="px-6 py-4" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(order.total)}</td><td class="px-6 py-4" data-v-d70fb3a5${_scopeId}><span class="${ssrRenderClass(statusChipClass.value(order.status))}" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(order.status)}</span></td><td class="px-4 py-4" data-v-d70fb3a5${_scopeId}>${ssrInterpolate(order.created_at)}</td></tr>`);
													});
													_push(`<!--]-->`);
												} else _push(`<tr data-v-d70fb3a5${_scopeId}><td colspan="5" class="text-center py-6 text-lg text-primary-500 font-semibold" data-v-d70fb3a5${_scopeId}> No Orders available.</td></tr>`);
												_push(`</tbody></table>`);
											} else return [createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Customer "),
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Order Number "),
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Total(incl. Delv.) "),
												createVNode("th", {
													scope: "col",
													class: "px-6 py-3"
												}, " Status "),
												createVNode("th", {
													scope: "col",
													class: "px-4 py-3"
												}, " Created At ")
											])]), createVNode("tbody", null, [last5Orders.value && last5Orders.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(last5Orders.value, (order) => {
												return openBlock(), createBlock("tr", {
													class: "bg-white border-t hover:bg-gray-50",
													key: order.id
												}, [
													createVNode("th", {
														scope: "row",
														class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
													}, toDisplayString(order.user.email), 1),
													createVNode("td", { class: "px-6 py-4" }, toDisplayString(order.order_number), 1),
													createVNode("td", { class: "px-6 py-4" }, toDisplayString(order.total), 1),
													createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: statusChipClass.value(order.status) }, toDisplayString(order.status), 3)]),
													createVNode("td", { class: "px-4 py-4" }, toDisplayString(order.created_at), 1)
												]);
											}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
												colspan: "5",
												class: "text-center py-6 text-lg text-primary-500 font-semibold"
											}, " No Orders available.")]))])])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(_sfc_main$1, { title: "USERS" }, {
									default: withCtx(() => [createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " User name "),
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Email "),
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Phone "),
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Address ")
									])]), createVNode("tbody", null, [last5Users.value && last5Users.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(last5Users.value, (user) => {
										return openBlock(), createBlock("tr", {
											class: "bg-white border-t hover:bg-gray-50",
											key: user.id
										}, [
											createVNode("th", {
												scope: "row",
												class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
											}, toDisplayString(user.first_name) + " " + toDisplayString(user.last_name), 1),
											createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.email), 1),
											createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.phone), 1),
											createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.address), 1)
										]);
									}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
										colspan: "5",
										class: "text-center py-6 text-lg text-primary-500 font-semibold"
									}, " No Users available.")]))])])]),
									_: 1
								}), createVNode(_sfc_main$1, { title: "ORDERS" }, {
									default: withCtx(() => [createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Customer "),
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Order Number "),
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Total(incl. Delv.) "),
										createVNode("th", {
											scope: "col",
											class: "px-6 py-3"
										}, " Status "),
										createVNode("th", {
											scope: "col",
											class: "px-4 py-3"
										}, " Created At ")
									])]), createVNode("tbody", null, [last5Orders.value && last5Orders.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(last5Orders.value, (order) => {
										return openBlock(), createBlock("tr", {
											class: "bg-white border-t hover:bg-gray-50",
											key: order.id
										}, [
											createVNode("th", {
												scope: "row",
												class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
											}, toDisplayString(order.user.email), 1),
											createVNode("td", { class: "px-6 py-4" }, toDisplayString(order.order_number), 1),
											createVNode("td", { class: "px-6 py-4" }, toDisplayString(order.total), 1),
											createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: statusChipClass.value(order.status) }, toDisplayString(order.status), 3)]),
											createVNode("td", { class: "px-4 py-4" }, toDisplayString(order.created_at), 1)
										]);
									}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
										colspan: "5",
										class: "text-center py-6 text-lg text-primary-500 font-semibold"
									}, " No Orders available.")]))])])]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div></div>`);
					} else return [createVNode("div", { class: "py-8 px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "max-w-7xl mx-auto" }, [
						metricsLoading.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "py-4 text-center text-gray-500 text-sm"
						}, "Loading metrics...")) : createCommentVNode("", true),
						metricsError.value ? (openBlock(), createBlock("div", {
							key: 1,
							class: "py-4 px-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
						}, toDisplayString(metricsError.value), 1)) : createCommentVNode("", true),
						dashboardMetrics.value ? (openBlock(), createBlock("div", {
							key: 2,
							class: "grid gap-4 grid-auto-fit py-4"
						}, [
							createVNode(BaseCardComponent_default, null, {
								default: withCtx(() => [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", null, [
									createVNode("p", { class: "text-xs font-semibold uppercase tracking-widest text-gray-400" }, "Total Users"),
									createVNode("p", { class: "text-4xl font-bold text-primary-500 mt-2" }, toDisplayString(userMetrics.value.totalUsersCount), 1),
									createVNode("div", { class: "flex items-center gap-3 mt-3" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500" }), createTextVNode(" " + toDisplayString(userMetrics.value.verifiedUsersCount) + " verified ", 1)]), createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createTextVNode(" " + toDisplayString(userMetrics.value.unverifiedUsersCount || 0) + " unverified ", 1)])])
								]), createVNode("div", { class: "rounded-xl p-3 bg-teal-50 flex-shrink-0" }, [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									"stroke-width": "1.5",
									stroke: "currentColor",
									class: "w-6 h-6 text-teal-500"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								})]))])])]),
								_: 1
							}),
							createVNode(BaseCardComponent_default, null, {
								default: withCtx(() => [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", null, [
									createVNode("p", { class: "text-xs font-semibold uppercase tracking-widest text-gray-400" }, "Total Orders"),
									createVNode("p", { class: "text-4xl font-bold text-primary-500 mt-2" }, toDisplayString(orderMetrics.value.totalOrdersCount), 1),
									createVNode("div", { class: "flex items-center gap-3 mt-3" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-500" }), createTextVNode(" " + toDisplayString(orderMetrics.value.fulfilledOrdersCount) + " fulfilled ", 1)]), createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createTextVNode(" " + toDisplayString(orderMetrics.value.pendingOrdersCount) + " pending ", 1)])])
								]), createVNode("div", { class: "rounded-xl p-3 bg-indigo-50 flex-shrink-0" }, [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									"stroke-width": "1.5",
									stroke: "currentColor",
									class: "w-6 h-6 text-indigo-500"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
								})]))])])]),
								_: 1
							}),
							createVNode(BaseCardComponent_default, null, {
								default: withCtx(() => [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", null, [
									createVNode("p", { class: "text-xs font-semibold uppercase tracking-widest text-gray-400" }, "Revenue (Fulfilled)"),
									createVNode("p", { class: "text-4xl font-bold text-primary-500 mt-2" }, "GH₵ " + toDisplayString(salesMetrics.value.totalFulfilledAmount), 1),
									createVNode("div", { class: "flex items-center gap-3 mt-3" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 rounded-full px-2 py-0.5" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-rose-500" }), createTextVNode(" " + toDisplayString(salesMetrics.value.totalFulfilledQuantity) + " units sold ", 1)])])
								]), createVNode("div", { class: "rounded-xl p-3 bg-rose-50 flex-shrink-0" }, [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									"stroke-width": "1.5",
									stroke: "currentColor",
									class: "w-6 h-6 text-rose-500"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
								})]))])])]),
								_: 1
							})
						])) : createCommentVNode("", true),
						createVNode("div", { class: "grid gap-4 grid-auto-fit bg-neutral-50 overflow-hidden shadow-sm sm:rounded-lg" }, [createVNode("div", { class: "p-3 bg-white" }, [createVNode(unref(VueApexCharts), {
							width: __props.monthlySalesChart.width,
							height: __props.monthlySalesChart.height,
							type: __props.monthlySalesChart.type,
							options: __props.monthlySalesChart.options,
							series: __props.monthlySalesChart.series
						}, null, 8, [
							"width",
							"height",
							"type",
							"options",
							"series"
						])]), createVNode("div", { class: "p-3 bg-white" }, [createVNode(unref(VueApexCharts), {
							width: __props.percentageSoldChart.width,
							height: __props.percentageSoldChart.height,
							type: __props.percentageSoldChart.type,
							options: __props.percentageSoldChart.options,
							series: __props.percentageSoldChart.series
						}, null, 8, [
							"width",
							"height",
							"type",
							"options",
							"series"
						])])]),
						createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg pt-6" }, [createVNode(_sfc_main$2, null, {
							default: withCtx(() => [createVNode(_sfc_main$1, { title: "USERS" }, {
								default: withCtx(() => [createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " User name "),
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Email "),
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Phone "),
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Address ")
								])]), createVNode("tbody", null, [last5Users.value && last5Users.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(last5Users.value, (user) => {
									return openBlock(), createBlock("tr", {
										class: "bg-white border-t hover:bg-gray-50",
										key: user.id
									}, [
										createVNode("th", {
											scope: "row",
											class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
										}, toDisplayString(user.first_name) + " " + toDisplayString(user.last_name), 1),
										createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.email), 1),
										createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.phone), 1),
										createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.address), 1)
									]);
								}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
									colspan: "5",
									class: "text-center py-6 text-lg text-primary-500 font-semibold"
								}, " No Users available.")]))])])]),
								_: 1
							}), createVNode(_sfc_main$1, { title: "ORDERS" }, {
								default: withCtx(() => [createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Customer "),
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Order Number "),
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Total(incl. Delv.) "),
									createVNode("th", {
										scope: "col",
										class: "px-6 py-3"
									}, " Status "),
									createVNode("th", {
										scope: "col",
										class: "px-4 py-3"
									}, " Created At ")
								])]), createVNode("tbody", null, [last5Orders.value && last5Orders.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(last5Orders.value, (order) => {
									return openBlock(), createBlock("tr", {
										class: "bg-white border-t hover:bg-gray-50",
										key: order.id
									}, [
										createVNode("th", {
											scope: "row",
											class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
										}, toDisplayString(order.user.email), 1),
										createVNode("td", { class: "px-6 py-4" }, toDisplayString(order.order_number), 1),
										createVNode("td", { class: "px-6 py-4" }, toDisplayString(order.total), 1),
										createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: statusChipClass.value(order.status) }, toDisplayString(order.status), 3)]),
										createVNode("td", { class: "px-4 py-4" }, toDisplayString(order.created_at), 1)
									]);
								}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
									colspan: "5",
									class: "text-center py-6 text-lg text-primary-500 font-semibold"
								}, " No Orders available.")]))])])]),
								_: 1
							})]),
							_: 1
						})])
					])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Index_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-d70fb3a5"]]);
//#endregion
export { Index_default as default };
