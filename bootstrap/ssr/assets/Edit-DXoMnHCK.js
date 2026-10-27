import { t as _sfc_main$1 } from "./AppLayout-BlnyL3wK.js";
import _sfc_main$2 from "./DeleteUserForm-DOLgZfw_.js";
import _sfc_main$3 from "./UpdatePasswordForm-D6VcVTPT.js";
import _sfc_main$4 from "./UpdateProfileInformationForm-CdeWSEhK.js";
import { createVNode, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Profile/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Profile</h2>`);
					else return [createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Profile")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-neutral-100 shadow sm:rounded-lg"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, _parent, _scopeId));
						_push(`</div><div class="p-4 sm:p-8 bg-neutral-100 shadow sm:rounded-lg"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div><div class="p-4 sm:p-8 bg-neutral-100 shadow sm:rounded-lg"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div></div></div>`);
					} else return [createVNode("div", { class: "py-12" }, [createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
						createVNode("div", { class: "p-4 sm:p-8 bg-neutral-100 shadow sm:rounded-lg" }, [createVNode(_sfc_main$4, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, 8, ["must-verify-email", "status"])]),
						createVNode("div", { class: "p-4 sm:p-8 bg-neutral-100 shadow sm:rounded-lg" }, [createVNode(_sfc_main$3, { class: "max-w-xl" })]),
						createVNode("div", { class: "p-4 sm:p-8 bg-neutral-100 shadow sm:rounded-lg" }, [createVNode(_sfc_main$2, { class: "max-w-xl" })])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
