import { n as FormButton_default, t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./InputError-BUHLoSfJ.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/ResetPassword.vue
var _sfc_main = {
	__name: "ResetPassword",
	__ssrInlineRender: true,
	props: {
		email: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const form = useForm({
			token: props.token,
			email: props.email,
			password: "",
			password_confirmation: ""
		});
		const submit = () => {
			form.post(route("password.store"), { onFinish: () => form.reset("password", "password_confirmation") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto my-10 flex justify-center items-center min-h-[70vh]"${_scopeId}><div class="bg-neutral-100 max-w-xl p-8 rounded-sm"${_scopeId}><p class="text-primary-500 font-bold text-base py-2"${_scopeId}>Reset Password?</p><form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username",
							placeholder: "email address"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							required: "",
							autocomplete: "new-password",
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
							required: "",
							autocomplete: "new-password",
							placeholder: "re-type password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Reset Password `);
								else return [createTextVNode(" Reset Password ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form></div></div>`);
					} else return [createVNode("div", { class: "container mx-auto my-10 flex justify-center items-center min-h-[70vh]" }, [createVNode("div", { class: "bg-neutral-100 max-w-xl p-8 rounded-sm" }, [createVNode("p", { class: "text-primary-500 font-bold text-base py-2" }, "Reset Password?"), createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [
						createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username",
							placeholder: "email address"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, 8, ["message"])]),
						createVNode("div", { class: "mt-4" }, [createVNode(_sfc_main$2, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							required: "",
							autocomplete: "new-password",
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
							required: "",
							autocomplete: "new-password",
							placeholder: "re-type password"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, 8, ["message"])]),
						createVNode("div", { class: "flex items-center justify-end mt-4" }, [createVNode(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Reset Password ")]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
