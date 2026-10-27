import { n as FormButton_default, t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import { computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/VerifyEmail.vue
var _sfc_main = {
	__name: "VerifyEmail",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const props = __props;
		const form = useForm({});
		const submit = () => {
			form.post(route("verification.send"));
		};
		const verificationLinkSent = computed(() => props.status === "verification-link-sent");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto sm:max-w-screen-sm h-[80vh] flex flex-col justify-center items-center"${_scopeId}><div class="mb-4 text-lgr text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
						if (verificationLinkSent.value) _push(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><div class="mt-4 flex flex-col items-center justify-between"${_scopeId}>`);
						_push(ssrRenderComponent(FormButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Resend Verification Email `);
								else return [createTextVNode(" Resend Verification Email ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Log Out`);
								else return [createTextVNode(" Log Out")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form></div>`);
					} else return [createVNode("div", { class: "container mx-auto sm:max-w-screen-sm h-[80vh] flex flex-col justify-center items-center" }, [
						createVNode("div", { class: "mb-4 text-lgr text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
						verificationLinkSent.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mb-4 font-medium text-sm text-green-600"
						}, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("div", { class: "mt-4 flex flex-col items-center justify-between" }, [createVNode(FormButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Resend Verification Email ")]),
							_: 1
						}, 8, ["class", "disabled"]), createVNode(unref(Link), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						}, {
							default: withCtx(() => [createTextVNode(" Log Out")]),
							_: 1
						}, 8, ["href"])])], 32)
					])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
