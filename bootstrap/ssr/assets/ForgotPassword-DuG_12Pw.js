import { n as FormButton_default, t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./InputError-BUHLoSfJ.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/ForgotPassword.vue
var _sfc_main = {
	__name: "ForgotPassword",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const form = useForm({ email: "" });
		const submit = () => {
			form.post(route("password.email"));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto my-10 flex justify-center items-center min-h-[70vh]"${_scopeId}><div class="bg-neutral-100 max-w-xl p-8 rounded-sm"${_scopeId}><p class="text-primary-500 font-bold text-base py-2"${_scopeId}>Forgot Password?</p><div class="mb-4 text-sm text-gray-600"${_scopeId}> No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div><form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
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
					} else return [createVNode("div", { class: "container mx-auto my-10 flex justify-center items-center min-h-[70vh]" }, [createVNode("div", { class: "bg-neutral-100 max-w-xl p-8 rounded-sm" }, [
						createVNode("p", { class: "text-primary-500 font-bold text-base py-2" }, "Forgot Password?"),
						createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, 8, ["message"])]), createVNode("div", { class: "flex items-center justify-end mt-4" }, [createVNode(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Register ")]),
							_: 1
						}, 8, ["class", "disabled"])])], 32)
					])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
