import { n as FormButton_default, t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import "./ToastMessageList-BoY0bwIF.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./InputError-BUHLoSfJ.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/Register.vue
var _sfc_main = {
	__name: "Register",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			password: "",
			password_confirmation: ""
		});
		const submit = () => {
			form.post(route("register"), { onFinish: () => form.reset("password", "password_confirmation") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto my-10 flex justify-center items-center min-h-[70vh]"${_scopeId}><div class="bg-neutral-100 max-w-xl p-8 rounded-sm"${_scopeId}><p class="text-primary-500 font-bold text-base py-2"${_scopeId}>Registered Customers</p><form class="space-y-3"${_scopeId}><div class="flex flex-wrap -mx-2 space-y-2 sm:space-y-0"${_scopeId}><div class="w-full md:w-1/2 px-2"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "first_name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).first_name,
							"onUpdate:modelValue": ($event) => unref(form).first_name = $event,
							placeholder: "first name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.first_name
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="w-full md:w-1/2 px-2"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "last_name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).last_name,
							"onUpdate:modelValue": ($event) => unref(form).last_name = $event,
							placeholder: "last name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.last_name
						}, null, _parent, _scopeId));
						_push(`</div></div></div><div class="flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0"${_scopeId}><div class="w-full md:w-1/2 px-2"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							placeholder: "email address"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="w-full md:w-1/2 px-2"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "phone",
							type: "tel",
							class: "mt-1 block w-full",
							modelValue: unref(form).phone,
							"onUpdate:modelValue": ($event) => unref(form).phone = $event,
							placeholder: "phone number"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.phone
						}, null, _parent, _scopeId));
						_push(`</div></div></div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							placeholder: "password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "password_confirmation",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
							placeholder: "Re-type password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center justify-end mt-6 py-4"${_scopeId}>`);
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
					} else return [createVNode("div", { class: "container mx-auto my-10 flex justify-center items-center min-h-[70vh]" }, [createVNode("div", { class: "bg-neutral-100 max-w-xl p-8 rounded-sm" }, [createVNode("p", { class: "text-primary-500 font-bold text-base py-2" }, "Registered Customers"), createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "space-y-3"
					}, [
						createVNode("div", { class: "flex flex-wrap -mx-2 space-y-2 sm:space-y-0" }, [createVNode("div", { class: "w-full md:w-1/2 px-2" }, [createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "first_name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).first_name,
							"onUpdate:modelValue": ($event) => unref(form).first_name = $event,
							placeholder: "first name"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.first_name
						}, null, 8, ["message"])])]), createVNode("div", { class: "w-full md:w-1/2 px-2" }, [createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "last_name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).last_name,
							"onUpdate:modelValue": ($event) => unref(form).last_name = $event,
							placeholder: "last name"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.last_name
						}, null, 8, ["message"])])])]),
						createVNode("div", { class: "flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0" }, [createVNode("div", { class: "w-full md:w-1/2 px-2" }, [createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							placeholder: "email address"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, 8, ["message"])])]), createVNode("div", { class: "w-full md:w-1/2 px-2" }, [createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "phone",
							type: "tel",
							class: "mt-1 block w-full",
							modelValue: unref(form).phone,
							"onUpdate:modelValue": ($event) => unref(form).phone = $event,
							placeholder: "phone number"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.phone
						}, null, 8, ["message"])])])]),
						createVNode("div", { class: "mt-4" }, [createVNode(_sfc_main$2, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							placeholder: "password"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, 8, ["message"])]),
						createVNode("div", { class: "mt-4" }, [createVNode(_sfc_main$2, {
							id: "password_confirmation",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
							placeholder: "Re-type password"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, 8, ["message"])]),
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
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
