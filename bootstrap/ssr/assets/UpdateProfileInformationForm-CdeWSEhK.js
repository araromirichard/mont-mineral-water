import { t as _sfc_main$1 } from "./InputLabel-CznyKaCe.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./InputError-BUHLoSfJ.js";
import { t as PrimaryButton_default } from "./PrimaryButton-BJ03_ftZ.js";
import { createTextVNode, unref, useSSRContext, withCtx } from "vue";
import { Link, useForm, usePage } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
//#region resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue
var _sfc_main = {
	__name: "UpdateProfileInformationForm",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const user = usePage().props.auth.user;
		const form = useForm({
			first_name: user.first_name,
			last_name: user.last_name,
			phone: user.phone,
			email: user.email
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div class="flex flex-wrap -mx-2 space-y-2 sm:space-y-0"><div class="w-full md:w-1/2 px-2"><div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				for: "first_name",
				value: "First Name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				id: "first_name",
				type: "text",
				class: "mt-1 block w-full",
				modelValue: unref(form).first_name,
				"onUpdate:modelValue": ($event) => unref(form).first_name = $event,
				required: "",
				autofocus: "",
				autocomplete: "first_name",
				placeholder: "first name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, {
				class: "mt-2",
				message: unref(form).errors.first_name
			}, null, _parent));
			_push(`</div></div><div class="w-full md:w-1/2 px-2"><div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				for: "last_name",
				value: "Last Name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				id: "last_name",
				type: "text",
				class: "mt-1 block w-full",
				modelValue: unref(form).last_name,
				"onUpdate:modelValue": ($event) => unref(form).last_name = $event,
				required: "",
				autofocus: "",
				autocomplete: "last_name",
				placeholder: "last name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, {
				class: "mt-2",
				message: unref(form).errors.last_name
			}, null, _parent));
			_push(`</div></div></div><div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				for: "phone",
				value: "Phone Naumber"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				id: "phone",
				type: "text",
				class: "mt-1 block w-full",
				modelValue: unref(form).phone,
				"onUpdate:modelValue": ($event) => unref(form).phone = $event,
				required: "",
				autofocus: "",
				autocomplete: "last_name",
				placeholder: "Phone Number"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, {
				class: "mt-2",
				message: unref(form).errors.phone
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				for: "email",
				value: "Email"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				id: "email",
				type: "email",
				class: "mt-1 block w-full",
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				required: "",
				autocomplete: "username"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, {
				class: "mt-2",
				message: unref(form).errors.email
			}, null, _parent));
			_push(`</div>`);
			if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
				_push(`<div><p class="text-sm mt-2 text-gray-800"> Your email address is unverified. `);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("verification.send"),
					method: "post",
					as: "button",
					class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Click here to re-send the verification email. `);
						else return [createTextVNode(" Click here to re-send the verification email. ")];
					}),
					_: 1
				}, _parent));
				_push(`</p><div class="mt-2 font-medium text-sm text-green-600" style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}"> A new verification link has been sent to your email address. </div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="flex items-center gap-4">`);
			_push(ssrRenderComponent(PrimaryButton_default, { disabled: unref(form).processing }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Save`);
					else return [createTextVNode("Save")];
				}),
				_: 1
			}, _parent));
			if (unref(form).recentlySuccessful) _push(`<p class="text-sm text-gray-600">Saved.</p>`);
			else _push(`<!---->`);
			_push(`</div></form></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
