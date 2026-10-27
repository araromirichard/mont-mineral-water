import { t as _sfc_main$1 } from "./AdminLayout-ChNnk7U6.js";
import { Fragment, Transition, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives, withModifiers } from "vue";
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
		const pagename = computed(() => {
			return "Product Details";
		});
		const handleChangeStatusClick = () => {
			if (!showStatusForm.value) {
				showStatusForm.value = true;
				return;
			} else {
				showStatusForm.value = !showStatusForm.value;
				const requestData = { selectedStatus: form.selectedStatus };
				form.put(route("admin.orders.update", { order: props.order.id }), requestData);
			}
		};
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: pagename.value }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.orders.index"),
							class: "bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Back `);
								else return [createTextVNode(" Back ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<h2 class="font-semibold text-xl text-gray-800 leading-tight py-4"${_scopeId}>${ssrInterpolate(__props.order.order_number)}&#39;s Details Page</h2>`);
					} else return [createVNode(unref(Link), {
						href: _ctx.route("admin.orders.index"),
						class: "bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md"
					}, {
						default: withCtx(() => [createTextVNode(" Back ")]),
						_: 1
					}, 8, ["href"]), createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight py-4" }, toDisplayString(__props.order.order_number) + "'s Details Page", 1)];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto px-6 md:px-8 py-8"${_scopeId}><div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg"${_scopeId}><div class="p-4 space-y-2"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}>Order Information</h1><p class="text-gray-600 mt-2"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Order Number</span>: ${ssrInterpolate(__props.order.order_number)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Status</span>: <span class="${ssrRenderClass(statusChipClass.value(__props.order.status))}"${_scopeId}>${ssrInterpolate(__props.order.status)}</span></p><p class="text-gray-600"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Subtotal</span>: GH₵ ${ssrInterpolate(__props.order.subtotal)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Delivery</span>: GH₵ ${ssrInterpolate(__props.order.delivery)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Total</span>: GH₵ ${ssrInterpolate(__props.order.total)}</p></div><div class="p-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>Order Items</h2><table class="mt-4 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="py-2 px-4 border-b-2 border-gray-300 font-semibold"${_scopeId}>Product Name</th><th class="py-2 px-4 border-b-2 border-gray-300 font-semibold"${_scopeId}>Price</th><th class="py-2 px-4 border-b-2 border-gray-300 font-semibold"${_scopeId}>Quantity</th></tr></thead><tbody${_scopeId}><!--[-->`);
						ssrRenderList(__props.order.order_items, (item) => {
							_push(`<tr${_scopeId}><td class="py-2 px-4 border-b border-gray-300"${_scopeId}>${ssrInterpolate(item.product_name)}</td><td class="py-2 px-4 border-b border-gray-300"${_scopeId}>${ssrInterpolate(item.price)}</td><td class="py-2 px-4 border-b border-gray-300"${_scopeId}>${ssrInterpolate(item.quantity)}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div>`);
						if (showStatusForm.value) {
							_push(`<div class="max-w-xs p-4"${_scopeId}><form${_scopeId}><label for="status" class="text-primary-500 font-bold"${_scopeId}>Select Status:</label><select id="status" class="block mt-1 w-full rounded-md border-gray-300"${_scopeId}><!--[-->`);
							ssrRenderList(statusOptions, (optionStatus) => {
								_push(`<option${ssrRenderAttr("value", optionStatus.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).selectedStatus) ? ssrLooseContain(unref(form).selectedStatus, optionStatus.value) : ssrLooseEqual(unref(form).selectedStatus, optionStatus.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(optionStatus.label)}</option>`);
							});
							_push(`<!--]--></select></form></div>`);
						} else _push(`<!---->`);
						_push(`<div class="p-4"${_scopeId}><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "bg-primary-500 text-white py-2 px-4 rounded-md"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>`);
						if (!showStatusForm.value) _push(`<span${_scopeId}>Change Order Status</span>`);
						else _push(`<!---->`);
						if (showStatusForm.value) _push(`<span${_scopeId}>Update Order Status</span>`);
						else _push(`<!---->`);
						_push(`</button></div><div class="px-4"${_scopeId}><hr class="text-gray-200"${_scopeId}></div><div class="p-4"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}>Customer Information</h1><p class="text-gray-600 mt-2"${_scopeId}><span class="font-semibold"${_scopeId}>Name</span>: ${ssrInterpolate(__props.order.user.first_name)} ${ssrInterpolate(__props.order.user.last_name)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold"${_scopeId}>Email</span>: ${ssrInterpolate(__props.order.user.email)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold"${_scopeId}>Phone</span>: ${ssrInterpolate(__props.order.user.phone)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold"${_scopeId}>Shipping Address</span>: ${ssrInterpolate(__props.order.shipping_address)}</p></div></div></div>`);
					} else return [createVNode("div", { class: "container mx-auto px-6 md:px-8 py-8" }, [createVNode("div", { class: "max-w-3xl mx-auto bg-white rounded-lg shadow-lg" }, [
						createVNode("div", { class: "p-4 space-y-2" }, [
							createVNode("h1", { class: "text-2xl font-bold" }, "Order Information"),
							createVNode("p", { class: "text-gray-600 mt-2" }, [createVNode("span", { class: "font-semibold text-primary-500" }, "Order Number"), createTextVNode(": " + toDisplayString(__props.order.order_number), 1)]),
							createVNode("p", { class: "text-gray-600" }, [
								createVNode("span", { class: "font-semibold text-primary-500" }, "Status"),
								createTextVNode(": "),
								createVNode("span", { class: statusChipClass.value(__props.order.status) }, toDisplayString(__props.order.status), 3)
							]),
							createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold text-primary-500" }, "Subtotal"), createTextVNode(": GH₵ " + toDisplayString(__props.order.subtotal), 1)]),
							createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold text-primary-500" }, "Delivery"), createTextVNode(": GH₵ " + toDisplayString(__props.order.delivery), 1)]),
							createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold text-primary-500" }, "Total"), createTextVNode(": GH₵ " + toDisplayString(__props.order.total), 1)])
						]),
						createVNode("div", { class: "p-4" }, [createVNode("h2", { class: "text-xl font-bold" }, "Order Items"), createVNode("table", { class: "mt-4 w-full" }, [createVNode("thead", null, [createVNode("tr", null, [
							createVNode("th", { class: "py-2 px-4 border-b-2 border-gray-300 font-semibold" }, "Product Name"),
							createVNode("th", { class: "py-2 px-4 border-b-2 border-gray-300 font-semibold" }, "Price"),
							createVNode("th", { class: "py-2 px-4 border-b-2 border-gray-300 font-semibold" }, "Quantity")
						])]), createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList(__props.order.order_items, (item) => {
							return openBlock(), createBlock("tr", { key: item.id }, [
								createVNode("td", { class: "py-2 px-4 border-b border-gray-300" }, toDisplayString(item.product_name), 1),
								createVNode("td", { class: "py-2 px-4 border-b border-gray-300" }, toDisplayString(item.price), 1),
								createVNode("td", { class: "py-2 px-4 border-b border-gray-300" }, toDisplayString(item.quantity), 1)
							]);
						}), 128))])])]),
						createVNode(Transition, { name: "fade-slide" }, {
							default: withCtx(() => [showStatusForm.value ? (openBlock(), createBlock("div", {
								key: 0,
								class: "max-w-xs p-4"
							}, [createVNode("form", { onSubmit: withModifiers(_ctx.submit, ["prevent"]) }, [createVNode("label", {
								for: "status",
								class: "text-primary-500 font-bold"
							}, "Select Status:"), withDirectives(createVNode("select", {
								id: "status",
								"onUpdate:modelValue": ($event) => unref(form).selectedStatus = $event,
								class: "block mt-1 w-full rounded-md border-gray-300"
							}, [(openBlock(), createBlock(Fragment, null, renderList(statusOptions, (optionStatus) => {
								return createVNode("option", {
									key: optionStatus.value,
									value: optionStatus.value
								}, toDisplayString(optionStatus.label), 9, ["value"]);
							}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).selectedStatus]])], 40, ["onSubmit"])])) : createCommentVNode("", true)]),
							_: 1
						}),
						createVNode("div", { class: "p-4" }, [createVNode("button", {
							class: ["bg-primary-500 text-white py-2 px-4 rounded-md", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing,
							onClick: handleChangeStatusClick
						}, [!showStatusForm.value ? (openBlock(), createBlock("span", { key: 0 }, "Change Order Status")) : createCommentVNode("", true), showStatusForm.value ? (openBlock(), createBlock("span", { key: 1 }, "Update Order Status")) : createCommentVNode("", true)], 10, ["disabled"])]),
						createVNode("div", { class: "px-4" }, [createVNode("hr", { class: "text-gray-200" })]),
						createVNode("div", { class: "p-4" }, [
							createVNode("h1", { class: "text-2xl font-bold" }, "Customer Information"),
							createVNode("p", { class: "text-gray-600 mt-2" }, [createVNode("span", { class: "font-semibold" }, "Name"), createTextVNode(": " + toDisplayString(__props.order.user.first_name) + " " + toDisplayString(__props.order.user.last_name), 1)]),
							createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold" }, "Email"), createTextVNode(": " + toDisplayString(__props.order.user.email), 1)]),
							createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold" }, "Phone"), createTextVNode(": " + toDisplayString(__props.order.user.phone), 1)]),
							createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold" }, "Shipping Address"), createTextVNode(": " + toDisplayString(__props.order.shipping_address), 1)])
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
