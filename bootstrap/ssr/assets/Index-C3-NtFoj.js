import { t as _sfc_main$3 } from "./AppLayout-BlnyL3wK.js";
import { n as ToastStore_default } from "./ToastMessageList-BoY0bwIF.js";
import { t as _sfc_main$4 } from "./InputLabel-CznyKaCe.js";
import { t as _sfc_main$5 } from "./InputError-BUHLoSfJ.js";
import { createVNode, mergeProps, onMounted, ref, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
//#region resources/js/Components/TextInputContact.vue
var _sfc_main$2 = {
	__name: "TextInputContact",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const input = ref(null);
		onMounted(() => {
			if (input.value.hasAttribute("autofocus")) input.value.focus();
		});
		__expose({ focus: () => input.value.focus() });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${ssrRenderAttrs(mergeProps({
				class: "border-none rounded-sm shadow-sm placeholder:capitalize placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest",
				value: __props.modelValue,
				placeholder: __props.placeholder,
				ref_key: "input",
				ref: input
			}, _attrs))}>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInputContact.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/TextArea.vue
var _sfc_main$1 = {
	__name: "TextArea",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			default: ""
		},
		rows: {
			type: String,
			default: "3"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const textarea = ref(null);
		onMounted(() => {
			if (textarea.value.hasAttribute("autofocus")) textarea.value.focus();
		});
		__expose({ focus: () => textarea.value.focus() });
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
				class: "border-none rounded-sm shadow-sm placeholder:capitalize placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest w-full",
				value: __props.modelValue,
				placeholder: __props.placeholder,
				ref_key: "textarea",
				ref: textarea,
				rows: __props.rows
			}, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextArea.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Contact/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			email: "",
			name: "",
			message: ""
		});
		const submit = () => {
			form.post(route("contact.store"), {
				onSuccess: () => {
					form.reset(), ToastStore_default.add({ message: "message sent successfully!" });
				},
				onError: () => {
					ToastStore_default.add({ message: "Failed to send Message, Try again" });
				}
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Contact Us" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto sm:px-40 py-20 sm:py-24 text-center sm:text-left"${_scopeId}><div class="grid grid-cols-12 space-y-4"${_scopeId}><div class="col-span-12 sm:col-span-6"${_scopeId}><p class="text-xl sm:text-[32px] font-bold py-6"${_scopeId}>Get in Touch with us</p><p class="flex text-lg sm:text-[20px] w-full sm:w-4/5 px-14 sm:px-0"${_scopeId}>Have questions about our products or interested in having Mont Mineral Water at your events? Reach out to us for more information. We&#39;re here to help!</p><div class="space-y-8 py-10"${_scopeId}><div class="flex flex-col sm:flex-row items-center space-x-4"${_scopeId}><img src="/storage/frontend/pin.png" alt="pin icon" class="w-10 h-auto"${_scopeId}><span class="text-primary-500 text-sm sm:text-lg font-normal leading-5 py-2 sm:py-0 px-8 sm:px-0 w-[60%]"${_scopeId}> No 18, Swaniker street, Abelemkpe, Accra </span></div><div class="flex flex-col sm:flex-row items-center space-x-4"${_scopeId}><img src="/storage/frontend/envelop.png" alt="envelop icon" class="w-10 sm:w-[45px] h-auto"${_scopeId}><span class="text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0"${_scopeId}> Info@Montwater.com </span></div><div class="flex flex-col sm:flex-row items-center space-x-4"${_scopeId}><img src="/storage/frontend/phone.png" alt="phone icon" class="w-10 h-auto"${_scopeId}><span class="text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0"${_scopeId}> +233 059 990 4409 </span></div><div class="flex flex-col sm:flex-row items-center space-x-4"${_scopeId}><img src="/storage/frontend/whatsapp.png" alt="whatsapp icon" class="w-10 sm:w-[45px] h-auto"${_scopeId}><span class="text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0"${_scopeId}> +233 059 990 4409 </span></div></div></div><div id="map" class="col-span-12 sm:col-span-6 sm:pt-8"${_scopeId}><iframe width="100%" height="100%" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}" src="https://www.google.com/maps?q=No+19%2C+Swaniker+street%2C+Abelemkpe%2C+Accra&amp;output=embed" allowfullscreen${_scopeId}></iframe></div></div><div${_scopeId}><div${_scopeId}><p class="text-xl sm:text-2xl font-extrabold py-6"${_scopeId}>Send a Message</p><div class="w-full flex justify-center items-center"${_scopeId}><div class="w-full block justify-center items-center bg-neutral-200 py-8 px-6 sm:px-14 rounded-sm"${_scopeId}><form class="w-full"${_scopeId}><div class="grid sm:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							for: "name",
							value: "Name",
							class: "font-bold mb-2 text-left"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).name,
							"onUpdate:modelValue": ($event) => unref(form).name = $event,
							required: "",
							autocomplete: "name",
							placeholder: "Your Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							class: "mt-2",
							message: unref(form).errors.name
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							for: "email",
							value: "Email",
							class: "font-bold mb-2 text-left"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autocomplete: "email",
							placeholder: "Email address"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div></div><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							for: "message",
							value: "Your Message",
							class: "font-bold mb-2 text-left"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							modelValue: unref(form).message,
							"onUpdate:modelValue": ($event) => unref(form).message = $event,
							placeholder: "Write your message",
							rows: "6"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							class: "mt-2",
							message: unref(form).errors.message
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="w-full flex justify-center items-center"${_scopeId}><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "block items-center px-10 py-3 mt-8 bg-gray-800 border border-transparent rounded-full font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}> Send Message </button></div><div${_scopeId}></div></form></div></div></div><div${_scopeId}></div></div></div>`);
					} else return [createVNode("div", { class: "container mx-auto sm:px-40 py-20 sm:py-24 text-center sm:text-left" }, [createVNode("div", { class: "grid grid-cols-12 space-y-4" }, [createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
						createVNode("p", { class: "text-xl sm:text-[32px] font-bold py-6" }, "Get in Touch with us"),
						createVNode("p", { class: "flex text-lg sm:text-[20px] w-full sm:w-4/5 px-14 sm:px-0" }, "Have questions about our products or interested in having Mont Mineral Water at your events? Reach out to us for more information. We're here to help!"),
						createVNode("div", { class: "space-y-8 py-10" }, [
							createVNode("div", { class: "flex flex-col sm:flex-row items-center space-x-4" }, [createVNode("img", {
								src: "/storage/frontend/pin.png",
								alt: "pin icon",
								class: "w-10 h-auto"
							}), createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-normal leading-5 py-2 sm:py-0 px-8 sm:px-0 w-[60%]" }, " No 18, Swaniker street, Abelemkpe, Accra ")]),
							createVNode("div", { class: "flex flex-col sm:flex-row items-center space-x-4" }, [createVNode("img", {
								src: "/storage/frontend/envelop.png",
								alt: "envelop icon",
								class: "w-10 sm:w-[45px] h-auto"
							}), createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0" }, " Info@Montwater.com ")]),
							createVNode("div", { class: "flex flex-col sm:flex-row items-center space-x-4" }, [createVNode("img", {
								src: "/storage/frontend/phone.png",
								alt: "phone icon",
								class: "w-10 h-auto"
							}), createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0" }, " +233 059 990 4409 ")]),
							createVNode("div", { class: "flex flex-col sm:flex-row items-center space-x-4" }, [createVNode("img", {
								src: "/storage/frontend/whatsapp.png",
								alt: "whatsapp icon",
								class: "w-10 sm:w-[45px] h-auto"
							}), createVNode("span", { class: "text-primary-500 text-sm sm:text-lg font-normal leading-5 w-[60%] py-2 sm:py-0 px-8 sm:px-0" }, " +233 059 990 4409 ")])
						])
					]), createVNode("div", {
						id: "map",
						class: "col-span-12 sm:col-span-6 sm:pt-8"
					}, [createVNode("iframe", {
						width: "100%",
						height: "100%",
						frameborder: "0",
						style: { "border": "0" },
						src: "https://www.google.com/maps?q=No+19%2C+Swaniker+street%2C+Abelemkpe%2C+Accra&output=embed",
						allowfullscreen: ""
					})])]), createVNode("div", null, [createVNode("div", null, [createVNode("p", { class: "text-xl sm:text-2xl font-extrabold py-6" }, "Send a Message"), createVNode("div", { class: "w-full flex justify-center items-center" }, [createVNode("div", { class: "w-full block justify-center items-center bg-neutral-200 py-8 px-6 sm:px-14 rounded-sm" }, [createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "w-full"
					}, [
						createVNode("div", { class: "grid sm:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("div", null, [
							createVNode(_sfc_main$4, {
								for: "name",
								value: "Name",
								class: "font-bold mb-2 text-left"
							}),
							createVNode(_sfc_main$2, {
								id: "name",
								type: "text",
								class: "mt-1 block w-full",
								modelValue: unref(form).name,
								"onUpdate:modelValue": ($event) => unref(form).name = $event,
								required: "",
								autocomplete: "name",
								placeholder: "Your Name"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$5, {
								class: "mt-2",
								message: unref(form).errors.name
							}, null, 8, ["message"])
						]), createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$4, {
								for: "email",
								value: "Email",
								class: "font-bold mb-2 text-left"
							}),
							createVNode(_sfc_main$2, {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								modelValue: unref(form).email,
								"onUpdate:modelValue": ($event) => unref(form).email = $event,
								required: "",
								autocomplete: "email",
								placeholder: "Email address"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$5, {
								class: "mt-2",
								message: unref(form).errors.email
							}, null, 8, ["message"])
						])]), createVNode("div", null, [
							createVNode(_sfc_main$4, {
								for: "message",
								value: "Your Message",
								class: "font-bold mb-2 text-left"
							}),
							createVNode(_sfc_main$1, {
								modelValue: unref(form).message,
								"onUpdate:modelValue": ($event) => unref(form).message = $event,
								placeholder: "Write your message",
								rows: "6"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$5, {
								class: "mt-2",
								message: unref(form).errors.message
							}, null, 8, ["message"])
						])]),
						createVNode("div", { class: "w-full flex justify-center items-center" }, [createVNode("button", {
							class: ["block items-center px-10 py-3 mt-8 bg-gray-800 border border-transparent rounded-full font-semibold text-xs text-white Capitalize tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, " Send Message ", 10, ["disabled"])]),
						createVNode("div")
					], 32)])])]), createVNode("div")])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
