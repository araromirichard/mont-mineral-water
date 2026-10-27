import { n as FormButton_default, t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./InputError-BUHLoSfJ.js";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/Login.vue
var _sfc_main = {
	__name: "Login",
	__ssrInlineRender: true,
	props: {
		canResetPassword: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const form = useForm({
			email: "",
			password: "",
			remember: false
		});
		const submit = () => {
			form.post(route("login"), { onFinish: () => form.reset("password") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto min-h-screen flex justify-center items-center"${_scopeId}><div class="flex flex-col-reverse sm:flex-row py-6 sm:py-0 sm:space-x-16"${_scopeId}><div class="w-full flex justify-center items-center min-h-[50vh] bg-neutral-100"${_scopeId}><div class="w-full block justify-center items-center bg-neutral-100 p-8 rounded-sm"${_scopeId}><p class="text-primary-500 font-bold text-base py-2"${_scopeId}>Registered Customers</p><form class="w-full"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							placeholder: "Email address"
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
							placeholder: "password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex flex-col items-center mt-8 space-y-2"${_scopeId}>`);
						_push(ssrRenderComponent(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Log in `);
								else return [createTextVNode(" Log in ")];
							}),
							_: 1
						}, _parent, _scopeId));
						if (__props.canResetPassword) _push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("password.request"),
							class: "text-sm flext w-full text-right sm:text-center text-secondary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Forgot your password? `);
								else return [createTextVNode(" Forgot your password? ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div><div class="flex justify-center items-center space-x-3 py-2"${_scopeId}><span${_scopeId}>OR Sign In With </span><a${ssrRenderAttr("href", _ctx.route("google-redirect"))} class="flex justify-center items-center text-red-500 border-2 border-primary-500 rounded-3xl cursor-pointer hover:bg-primary-500 hover:text-white px-4 py-2 transition ease-in-out duration-300"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"${_scopeId}><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"${_scopeId}></path></svg></a></div><div${_scopeId}></div></form></div></div><div class="flex justify-end items-center sm:items-start w-full min-h-[50vh]"${_scopeId}><div class="w-full h-fit block justify-center items-center bg-neutral-100 p-8 rounded-sm space-y-3"${_scopeId}><p class="text-primary-500 font-bold text-base pt-2"${_scopeId}>New Customer?</p><p class="text-sm"${_scopeId}>By creating an account with our store, you will be able to move through the checkout process faster. </p>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("register"),
							class: "block items-center text-center w-full px-4 py-3 bg-gray-800 border border-transparent rounded-2xl font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Create Account `);
								else return [createTextVNode(" Create Account ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div></div></div>`);
					} else return [createVNode("div", { class: "container mx-auto min-h-screen flex justify-center items-center" }, [createVNode("div", { class: "flex flex-col-reverse sm:flex-row py-6 sm:py-0 sm:space-x-16" }, [createVNode("div", { class: "w-full flex justify-center items-center min-h-[50vh] bg-neutral-100" }, [createVNode("div", { class: "w-full block justify-center items-center bg-neutral-100 p-8 rounded-sm" }, [createVNode("p", { class: "text-primary-500 font-bold text-base py-2" }, "Registered Customers"), createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "w-full"
					}, [
						createVNode("div", null, [createVNode(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							placeholder: "Email address"
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
							placeholder: "password"
						}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$3, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, 8, ["message"])]),
						createVNode("div", { class: "flex flex-col items-center mt-8 space-y-2" }, [createVNode(FormButton_default, {
							class: ["", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Log in ")]),
							_: 1
						}, 8, ["class", "disabled"]), __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
							key: 0,
							href: _ctx.route("password.request"),
							class: "text-sm flext w-full text-right sm:text-center text-secondary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						}, {
							default: withCtx(() => [createTextVNode(" Forgot your password? ")]),
							_: 1
						}, 8, ["href"])) : createCommentVNode("", true)]),
						createVNode("div", { class: "flex justify-center items-center space-x-3 py-2" }, [createVNode("span", null, "OR Sign In With "), createVNode("a", {
							href: _ctx.route("google-redirect"),
							class: "flex justify-center items-center text-red-500 border-2 border-primary-500 rounded-3xl cursor-pointer hover:bg-primary-500 hover:text-white px-4 py-2 transition ease-in-out duration-300"
						}, [(openBlock(), createBlock("svg", {
							class: "w-4 h-4",
							"aria-hidden": "true",
							focusable: "false",
							"data-prefix": "fab",
							"data-icon": "google",
							role: "img",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 488 512"
						}, [createVNode("path", {
							fill: "currentColor",
							d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
						})]))], 8, ["href"])]),
						createVNode("div")
					], 32)])]), createVNode("div", { class: "flex justify-end items-center sm:items-start w-full min-h-[50vh]" }, [createVNode("div", { class: "w-full h-fit block justify-center items-center bg-neutral-100 p-8 rounded-sm space-y-3" }, [
						createVNode("p", { class: "text-primary-500 font-bold text-base pt-2" }, "New Customer?"),
						createVNode("p", { class: "text-sm" }, "By creating an account with our store, you will be able to move through the checkout process faster. "),
						createVNode(unref(Link), {
							href: _ctx.route("register"),
							class: "block items-center text-center w-full px-4 py-3 bg-gray-800 border border-transparent rounded-2xl font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
						}, {
							default: withCtx(() => [createTextVNode(" Create Account ")]),
							_: 1
						}, 8, ["href"])
					])])])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
