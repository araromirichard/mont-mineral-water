import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as AdminLayout_default } from "./AdminLayout-C8vXYz0r.js";
import { Fragment, Transition, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Order/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: { order: Object },
	setup(__props) {
		const props = __props;
		const showStatusForm = ref(false);
		const form = useForm({ selectedStatus: props.order.status });
		const statusOptions = [
			{
				label: "Pending",
				value: "pending"
			},
			{
				label: "Cancelled",
				value: "cancelled"
			},
			{
				label: "Approved",
				value: "approved"
			},
			{
				label: "Fulfilled",
				value: "fulfilled"
			}
		];
		const pagename = computed(() => "Order Details");
		const handleChangeStatusClick = () => {
			if (!showStatusForm.value) {
				showStatusForm.value = true;
				return;
			}
			showStatusForm.value = false;
			form.put(route("admin.orders.update", { order: props.order.id }), { selectedStatus: form.selectedStatus });
		};
		const statusChipClass = computed(() => (status) => {
			const base = "px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full";
			switch (status) {
				case "pending": return `${base} bg-amber-100 text-amber-800`;
				case "cancelled": return `${base} bg-red-100 text-red-800`;
				case "approved": return `${base} bg-green-100 text-green-800`;
				case "fulfilled": return `${base} bg-blue-100 text-blue-800`;
				default: return `${base} bg-gray-100 text-gray-800`;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: pagename.value }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3" data-v-29b2abb2${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.orders.index"),
							class: "flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4" data-v-29b2abb2${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" data-v-29b2abb2${_scopeId}></path></svg> Orders `);
								else return [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									"stroke-width": "2",
									stroke: "currentColor",
									class: "w-4 h-4"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								})])), createTextVNode(" Orders ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<span class="text-gray-300" data-v-29b2abb2${_scopeId}>/</span><h2 class="font-semibold text-lg text-gray-800" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.order_number)}</h2></div>`);
					} else return [createVNode("div", { class: "flex items-center gap-3" }, [
						createVNode(unref(Link), {
							href: _ctx.route("admin.orders.index"),
							class: "flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
						}, {
							default: withCtx(() => [(openBlock(), createBlock("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "2",
								stroke: "currentColor",
								class: "w-4 h-4"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							})])), createTextVNode(" Orders ")]),
							_: 1
						}, 8, ["href"]),
						createVNode("span", { class: "text-gray-300" }, "/"),
						createVNode("h2", { class: "font-semibold text-lg text-gray-800" }, toDisplayString(__props.order.order_number), 1)
					])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-8 px-4 sm:px-6 lg:px-8" data-v-29b2abb2${_scopeId}><div class="max-w-5xl mx-auto space-y-6" data-v-29b2abb2${_scopeId}><div class="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4" data-v-29b2abb2${_scopeId}><div class="flex items-center gap-4" data-v-29b2abb2${_scopeId}><span class="${ssrRenderClass(statusChipClass.value(__props.order.status))}" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.status)}</span><span class="text-sm text-gray-500" data-v-29b2abb2${_scopeId}>Placed ${ssrInterpolate(new Date(__props.order.created_at).toLocaleDateString("en-GB", {
							day: "numeric",
							month: "short",
							year: "numeric"
						}))}</span></div><div class="flex items-center gap-3" data-v-29b2abb2${_scopeId}>`);
						if (showStatusForm.value) {
							_push(`<div class="flex items-center gap-2" data-v-29b2abb2${_scopeId}><label for="status" class="text-sm font-medium text-gray-700" data-v-29b2abb2${_scopeId}>New status:</label><select id="status" class="rounded-md border-gray-300 text-sm py-1.5 focus:ring-secondary-500 focus:border-secondary-500" data-v-29b2abb2${_scopeId}><!--[-->`);
							ssrRenderList(statusOptions, (optionStatus) => {
								_push(`<option${ssrRenderAttr("value", optionStatus.value)} data-v-29b2abb2${ssrIncludeBooleanAttr(Array.isArray(unref(form).selectedStatus) ? ssrLooseContain(unref(form).selectedStatus, optionStatus.value) : ssrLooseEqual(unref(form).selectedStatus, optionStatus.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(optionStatus.label)}</option>`);
							});
							_push(`<!--]--></select></div>`);
						} else _push(`<!---->`);
						_push(`<button class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary-500 hover:bg-primary-300 transition duration-150 disabled:opacity-50"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-29b2abb2${_scopeId}>`);
						if (!showStatusForm.value) _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-29b2abb2${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" data-v-29b2abb2${_scopeId}></path></svg>`);
						else _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-29b2abb2${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" data-v-29b2abb2${_scopeId}></path></svg>`);
						_push(` ${ssrInterpolate(showStatusForm.value ? "Confirm Update" : "Change Status")}</button></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-29b2abb2${_scopeId}><div class="lg:col-span-2 space-y-6" data-v-29b2abb2${_scopeId}><div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden" data-v-29b2abb2${_scopeId}><div class="px-6 py-4 border-b border-gray-100" data-v-29b2abb2${_scopeId}><h3 class="font-semibold text-gray-800" data-v-29b2abb2${_scopeId}>Order Items</h3></div><table class="w-full text-sm" data-v-29b2abb2${_scopeId}><thead data-v-29b2abb2${_scopeId}><tr class="text-xs uppercase tracking-wider text-gray-400 bg-gray-50" data-v-29b2abb2${_scopeId}><th class="px-6 py-3 text-left font-semibold" data-v-29b2abb2${_scopeId}>Product</th><th class="px-6 py-3 text-right font-semibold" data-v-29b2abb2${_scopeId}>Price</th><th class="px-6 py-3 text-right font-semibold" data-v-29b2abb2${_scopeId}>Qty</th><th class="px-6 py-3 text-right font-semibold" data-v-29b2abb2${_scopeId}>Subtotal</th></tr></thead><tbody class="divide-y divide-gray-50" data-v-29b2abb2${_scopeId}><!--[-->`);
						ssrRenderList(__props.order.order_items, (item) => {
							_push(`<tr class="hover:bg-gray-50" data-v-29b2abb2${_scopeId}><td class="px-6 py-4 font-medium text-gray-800" data-v-29b2abb2${_scopeId}>${ssrInterpolate(item.product_name)}</td><td class="px-6 py-4 text-right text-gray-600" data-v-29b2abb2${_scopeId}>GH₵ ${ssrInterpolate(item.price)}</td><td class="px-6 py-4 text-right text-gray-600" data-v-29b2abb2${_scopeId}>${ssrInterpolate(item.quantity)}</td><td class="px-6 py-4 text-right font-semibold text-gray-800" data-v-29b2abb2${_scopeId}>GH₵ ${ssrInterpolate((item.price * item.quantity).toFixed(2))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table><div class="px-6 py-4 border-t border-gray-100 bg-gray-50 space-y-1.5" data-v-29b2abb2${_scopeId}><div class="flex justify-between text-sm text-gray-600" data-v-29b2abb2${_scopeId}><span data-v-29b2abb2${_scopeId}>Subtotal</span><span data-v-29b2abb2${_scopeId}>GH₵ ${ssrInterpolate(__props.order.subtotal)}</span></div><div class="flex justify-between text-sm text-gray-600" data-v-29b2abb2${_scopeId}><span data-v-29b2abb2${_scopeId}>Delivery</span><span data-v-29b2abb2${_scopeId}>GH₵ ${ssrInterpolate(__props.order.delivery)}</span></div><div class="flex justify-between text-base font-bold text-primary-500 pt-2 border-t border-gray-200" data-v-29b2abb2${_scopeId}><span data-v-29b2abb2${_scopeId}>Total</span><span data-v-29b2abb2${_scopeId}>GH₵ ${ssrInterpolate(__props.order.total)}</span></div></div></div>`);
						if (__props.order.shipping_address) _push(`<div class="bg-white rounded-xl border border-gray-100 shadow-sm" data-v-29b2abb2${_scopeId}><div class="px-6 py-4 border-b border-gray-100" data-v-29b2abb2${_scopeId}><h3 class="font-semibold text-gray-800" data-v-29b2abb2${_scopeId}>Shipping Address</h3></div><div class="px-6 py-4 text-sm text-gray-600" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.shipping_address)}</div></div>`);
						else _push(`<!---->`);
						_push(`</div><div class="space-y-6" data-v-29b2abb2${_scopeId}><div class="bg-white rounded-xl border border-gray-100 shadow-sm" data-v-29b2abb2${_scopeId}><div class="px-6 py-4 border-b border-gray-100" data-v-29b2abb2${_scopeId}><h3 class="font-semibold text-gray-800" data-v-29b2abb2${_scopeId}>Customer</h3></div><div class="px-6 py-4 space-y-3" data-v-29b2abb2${_scopeId}><div class="flex items-center gap-3" data-v-29b2abb2${_scopeId}><div class="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.user.first_name.charAt(0).toUpperCase())}</div><div data-v-29b2abb2${_scopeId}><p class="text-sm font-semibold text-gray-800" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.user.first_name)} ${ssrInterpolate(__props.order.user.last_name)}</p><p class="text-xs text-gray-500" data-v-29b2abb2${_scopeId}>Customer</p></div></div><div class="space-y-2 pt-2 border-t border-gray-100" data-v-29b2abb2${_scopeId}><div class="flex items-start gap-2 text-sm" data-v-29b2abb2${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" data-v-29b2abb2${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-v-29b2abb2${_scopeId}></path></svg><span class="text-gray-600 break-all" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.user.email)}</span></div>`);
						if (__props.order.user.phone) _push(`<div class="flex items-start gap-2 text-sm" data-v-29b2abb2${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" data-v-29b2abb2${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" data-v-29b2abb2${_scopeId}></path></svg><span class="text-gray-600" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.user.phone)}</span></div>`);
						else _push(`<!---->`);
						_push(`</div></div></div><div class="bg-white rounded-xl border border-gray-100 shadow-sm" data-v-29b2abb2${_scopeId}><div class="px-6 py-4 border-b border-gray-100" data-v-29b2abb2${_scopeId}><h3 class="font-semibold text-gray-800" data-v-29b2abb2${_scopeId}>Order Info</h3></div><div class="px-6 py-4 space-y-3 text-sm" data-v-29b2abb2${_scopeId}><div class="flex justify-between" data-v-29b2abb2${_scopeId}><span class="text-gray-500" data-v-29b2abb2${_scopeId}>Order #</span><span class="font-medium text-gray-800 text-xs" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.order_number)}</span></div><div class="flex justify-between" data-v-29b2abb2${_scopeId}><span class="text-gray-500" data-v-29b2abb2${_scopeId}>Status</span><span class="${ssrRenderClass(statusChipClass.value(__props.order.status))}" data-v-29b2abb2${_scopeId}>${ssrInterpolate(__props.order.status)}</span></div><div class="flex justify-between" data-v-29b2abb2${_scopeId}><span class="text-gray-500" data-v-29b2abb2${_scopeId}>Date</span><span class="text-gray-700" data-v-29b2abb2${_scopeId}>${ssrInterpolate(new Date(__props.order.created_at).toLocaleDateString("en-GB"))}</span></div></div></div></div></div></div></div>`);
					} else return [createVNode("div", { class: "py-8 px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "max-w-5xl mx-auto space-y-6" }, [createVNode("div", { class: "flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4" }, [createVNode("div", { class: "flex items-center gap-4" }, [createVNode("span", { class: statusChipClass.value(__props.order.status) }, toDisplayString(__props.order.status), 3), createVNode("span", { class: "text-sm text-gray-500" }, "Placed " + toDisplayString(new Date(__props.order.created_at).toLocaleDateString("en-GB", {
						day: "numeric",
						month: "short",
						year: "numeric"
					})), 1)]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode(Transition, { name: "fade-slide" }, {
						default: withCtx(() => [showStatusForm.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "flex items-center gap-2"
						}, [createVNode("label", {
							for: "status",
							class: "text-sm font-medium text-gray-700"
						}, "New status:"), withDirectives(createVNode("select", {
							id: "status",
							"onUpdate:modelValue": ($event) => unref(form).selectedStatus = $event,
							class: "rounded-md border-gray-300 text-sm py-1.5 focus:ring-secondary-500 focus:border-secondary-500"
						}, [(openBlock(), createBlock(Fragment, null, renderList(statusOptions, (optionStatus) => {
							return createVNode("option", {
								key: optionStatus.value,
								value: optionStatus.value
							}, toDisplayString(optionStatus.label), 9, ["value"]);
						}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).selectedStatus]])])) : createCommentVNode("", true)]),
						_: 1
					}), createVNode("button", {
						class: "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary-500 hover:bg-primary-300 transition duration-150 disabled:opacity-50",
						disabled: unref(form).processing,
						onClick: handleChangeStatusClick
					}, [!showStatusForm.value ? (openBlock(), createBlock("svg", {
						key: 0,
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-4 h-4"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
					})])) : (openBlock(), createBlock("svg", {
						key: 1,
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-4 h-4"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M4.5 12.75l6 6 9-13.5"
					})])), createTextVNode(" " + toDisplayString(showStatusForm.value ? "Confirm Update" : "Change Status"), 1)], 8, ["disabled"])])]), createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [createVNode("div", { class: "lg:col-span-2 space-y-6" }, [createVNode("div", { class: "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden" }, [
						createVNode("div", { class: "px-6 py-4 border-b border-gray-100" }, [createVNode("h3", { class: "font-semibold text-gray-800" }, "Order Items")]),
						createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", null, [createVNode("tr", { class: "text-xs uppercase tracking-wider text-gray-400 bg-gray-50" }, [
							createVNode("th", { class: "px-6 py-3 text-left font-semibold" }, "Product"),
							createVNode("th", { class: "px-6 py-3 text-right font-semibold" }, "Price"),
							createVNode("th", { class: "px-6 py-3 text-right font-semibold" }, "Qty"),
							createVNode("th", { class: "px-6 py-3 text-right font-semibold" }, "Subtotal")
						])]), createVNode("tbody", { class: "divide-y divide-gray-50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.order.order_items, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4 font-medium text-gray-800" }, toDisplayString(item.product_name), 1),
								createVNode("td", { class: "px-6 py-4 text-right text-gray-600" }, "GH₵ " + toDisplayString(item.price), 1),
								createVNode("td", { class: "px-6 py-4 text-right text-gray-600" }, toDisplayString(item.quantity), 1),
								createVNode("td", { class: "px-6 py-4 text-right font-semibold text-gray-800" }, "GH₵ " + toDisplayString((item.price * item.quantity).toFixed(2)), 1)
							]);
						}), 128))])]),
						createVNode("div", { class: "px-6 py-4 border-t border-gray-100 bg-gray-50 space-y-1.5" }, [
							createVNode("div", { class: "flex justify-between text-sm text-gray-600" }, [createVNode("span", null, "Subtotal"), createVNode("span", null, "GH₵ " + toDisplayString(__props.order.subtotal), 1)]),
							createVNode("div", { class: "flex justify-between text-sm text-gray-600" }, [createVNode("span", null, "Delivery"), createVNode("span", null, "GH₵ " + toDisplayString(__props.order.delivery), 1)]),
							createVNode("div", { class: "flex justify-between text-base font-bold text-primary-500 pt-2 border-t border-gray-200" }, [createVNode("span", null, "Total"), createVNode("span", null, "GH₵ " + toDisplayString(__props.order.total), 1)])
						])
					]), __props.order.shipping_address ? (openBlock(), createBlock("div", {
						key: 0,
						class: "bg-white rounded-xl border border-gray-100 shadow-sm"
					}, [createVNode("div", { class: "px-6 py-4 border-b border-gray-100" }, [createVNode("h3", { class: "font-semibold text-gray-800" }, "Shipping Address")]), createVNode("div", { class: "px-6 py-4 text-sm text-gray-600" }, toDisplayString(__props.order.shipping_address), 1)])) : createCommentVNode("", true)]), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "bg-white rounded-xl border border-gray-100 shadow-sm" }, [createVNode("div", { class: "px-6 py-4 border-b border-gray-100" }, [createVNode("h3", { class: "font-semibold text-gray-800" }, "Customer")]), createVNode("div", { class: "px-6 py-4 space-y-3" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0" }, toDisplayString(__props.order.user.first_name.charAt(0).toUpperCase()), 1), createVNode("div", null, [createVNode("p", { class: "text-sm font-semibold text-gray-800" }, toDisplayString(__props.order.user.first_name) + " " + toDisplayString(__props.order.user.last_name), 1), createVNode("p", { class: "text-xs text-gray-500" }, "Customer")])]), createVNode("div", { class: "space-y-2 pt-2 border-t border-gray-100" }, [createVNode("div", { class: "flex items-start gap-2 text-sm" }, [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					})])), createVNode("span", { class: "text-gray-600 break-all" }, toDisplayString(__props.order.user.email), 1)]), __props.order.user.phone ? (openBlock(), createBlock("div", {
						key: 0,
						class: "flex items-start gap-2 text-sm"
					}, [(openBlock(), createBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
					})])), createVNode("span", { class: "text-gray-600" }, toDisplayString(__props.order.user.phone), 1)])) : createCommentVNode("", true)])])]), createVNode("div", { class: "bg-white rounded-xl border border-gray-100 shadow-sm" }, [createVNode("div", { class: "px-6 py-4 border-b border-gray-100" }, [createVNode("h3", { class: "font-semibold text-gray-800" }, "Order Info")]), createVNode("div", { class: "px-6 py-4 space-y-3 text-sm" }, [
						createVNode("div", { class: "flex justify-between" }, [createVNode("span", { class: "text-gray-500" }, "Order #"), createVNode("span", { class: "font-medium text-gray-800 text-xs" }, toDisplayString(__props.order.order_number), 1)]),
						createVNode("div", { class: "flex justify-between" }, [createVNode("span", { class: "text-gray-500" }, "Status"), createVNode("span", { class: statusChipClass.value(__props.order.status) }, toDisplayString(__props.order.status), 3)]),
						createVNode("div", { class: "flex justify-between" }, [createVNode("span", { class: "text-gray-500" }, "Date"), createVNode("span", { class: "text-gray-700" }, toDisplayString(new Date(__props.order.created_at).toLocaleDateString("en-GB")), 1)])
					])])])])])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Show_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-29b2abb2"]]);
//#endregion
export { Show_default as default };
