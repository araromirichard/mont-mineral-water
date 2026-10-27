import { n as FormButton_default } from "./AppLayout-BlnyL3wK.js";
import { n as _sfc_main$1, t as _sfc_main$2 } from "./InputError-BUHLoSfJ.js";
import _sfc_main$3 from "./DashboardWrapper-om9XS1Gt.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/DashBoard/CreateShippingAddress.vue
var _sfc_main = {
	__name: "CreateShippingAddress",
	__ssrInlineRender: true,
	props: {
		orders: Object,
		filters: Object
	},
	setup(__props) {
		const form = useForm({
			address: "",
			apartment: "",
			contact: "",
			region: "",
			district: ""
		});
		const submit = () => {
			form.post(route("save-address"), { onSuccess: () => {
				form.reset();
			} });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$3, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto flex items-center justify-center sm:pt-32 sm:pb-8"${_scopeId}><div class="bg-neutral-100 max-w-xl p-8 rounded-sm"${_scopeId}><p class="text-primary-500 font-bold text-base py-2"${_scopeId}>New Shipping Address</p><form class="space-y-3"${_scopeId}><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							id: "address",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).address,
							"onUpdate:modelValue": ($event) => unref(form).address = $event,
							required: "",
							autocomplete: "address",
							placeholder: "address"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.address
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							id: "appartment",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).apartment,
							"onUpdate:modelValue": ($event) => unref(form).apartment = $event,
							required: "",
							autocomplete: "appartment",
							placeholder: "Apartment, suite, etc. (optional)"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.appartment
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							id: "contact_phone",
							type: "tel",
							class: "mt-1 block w-full",
							modelValue: unref(form).contact,
							"onUpdate:modelValue": ($event) => unref(form).contact = $event,
							required: "",
							autocomplete: "tel",
							placeholder: "Contact phone number"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.contact_phone
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0"${_scopeId}><div class="w-full md:w-1/2 px-2"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							id: "region",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).region,
							"onUpdate:modelValue": ($event) => unref(form).region = $event,
							required: "",
							autocomplete: "region",
							placeholder: "region address"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.region
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="w-full md:w-1/2 px-2"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							id: "district",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).district,
							"onUpdate:modelValue": ($event) => unref(form).district = $event,
							required: "",
							autocomplete: "district",
							placeholder: "district"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.district
						}, null, _parent, _scopeId));
						_push(`</div></div></div><div class="flex items-center justify-end mt-6 py-4"${_scopeId}>`);
						_push(ssrRenderComponent(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Register `);
								else return [createTextVNode(" Register ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form></div></div>`);
					} else return [createVNode("div", { class: "container mx-auto flex items-center justify-center sm:pt-32 sm:pb-8" }, [createVNode("div", { class: "bg-neutral-100 max-w-xl p-8 rounded-sm" }, [createVNode("p", { class: "text-primary-500 font-bold text-base py-2" }, "New Shipping Address"), createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "space-y-3"
					}, [
						createVNode("div", { class: "mt-4" }, [createVNode(_sfc_main$1, {
							id: "address",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).address,
							"onUpdate:modelValue": ($event) => unref(form).address = $event,
							required: "",
							autocomplete: "address",
							placeholder: "address"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.address
						}, null, 8, ["message"])]),
						createVNode("div", { class: "mt-4" }, [createVNode(_sfc_main$1, {
							id: "appartment",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).apartment,
							"onUpdate:modelValue": ($event) => unref(form).apartment = $event,
							required: "",
							autocomplete: "appartment",
							placeholder: "Apartment, suite, etc. (optional)"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.appartment
						}, null, 8, ["message"])]),
						createVNode("div", { class: "mt-4" }, [createVNode(_sfc_main$1, {
							id: "contact_phone",
							type: "tel",
							class: "mt-1 block w-full",
							modelValue: unref(form).contact,
							"onUpdate:modelValue": ($event) => unref(form).contact = $event,
							required: "",
							autocomplete: "tel",
							placeholder: "Contact phone number"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.contact_phone
						}, null, 8, ["message"])]),
						createVNode("div", { class: "flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0" }, [createVNode("div", { class: "w-full md:w-1/2 px-2" }, [createVNode("div", null, [createVNode(_sfc_main$1, {
							id: "region",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).region,
							"onUpdate:modelValue": ($event) => unref(form).region = $event,
							required: "",
							autocomplete: "region",
							placeholder: "region address"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.region
						}, null, 8, ["message"])])]), createVNode("div", { class: "w-full md:w-1/2 px-2" }, [createVNode("div", null, [createVNode(_sfc_main$1, {
							id: "district",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).district,
							"onUpdate:modelValue": ($event) => unref(form).district = $event,
							required: "",
							autocomplete: "district",
							placeholder: "district"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$2, {
							class: "mt-2",
							message: unref(form).errors.district
						}, null, 8, ["message"])])])]),
						createVNode("div", { class: "flex items-center justify-end mt-6 py-4" }, [createVNode(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Register ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					], 32)])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/DashBoard/CreateShippingAddress.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
