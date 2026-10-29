import { t as AdminLayout_default } from "./AdminLayout-C8vXYz0r.js";
import { Fragment, computed, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Product/show.vue
var _sfc_main = {
	__name: "show",
	__ssrInlineRender: true,
	props: { product: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const getImageUrl = (path) => {
			return `/storage/${path}`;
		};
		const pagename = computed(() => {
			return "Product Details";
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: pagename.value }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("admin.products.index"),
							class: "bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Back `);
								else return [createTextVNode(" Back ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<h2 class="font-semibold text-xl text-gray-800 leading-tight py-4"${_scopeId}>${ssrInterpolate(__props.product.name)}&#39;s Details Page</h2>`);
					} else return [createVNode(unref(Link), {
						href: _ctx.route("admin.products.index"),
						class: "bg-neutral-600 text-neutral-50 py-2 px-4 hover:bg-neutral-800 transition ease-out duration-150 rounded-md"
					}, {
						default: withCtx(() => [createTextVNode(" Back ")]),
						_: 1
					}, 8, ["href"]), createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight py-4" }, toDisplayString(__props.product.name) + "'s Details Page", 1)];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="container mx-auto px-6 md:px-8 py-8"${_scopeId}><div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg"${_scopeId}><div class="p-4"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(__props.product.name)}</h1><p class="text-gray-600 mt-2"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Price</span> : GH₵ ${ssrInterpolate(__props.product.price)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Size</span> : ${ssrInterpolate(__props.product.size)}</p><p class="text-gray-600"${_scopeId}><span class="font-semibold text-primary-500"${_scopeId}>Description</span> : <span${_scopeId}>${__props.product.description ?? ""}</span></p></div><div class="grid grid-cols-2 gap-4 p-4"${_scopeId}><!--[-->`);
						ssrRenderList(__props.product.product_images, (image) => {
							_push(`<div${_scopeId}><img${ssrRenderAttr("src", getImageUrl(image))}${ssrRenderAttr("alt", image)} class="w-full h-auto rounded-lg"${_scopeId}></div>`);
						});
						_push(`<!--]--></div></div></div>`);
					} else return [createVNode("div", { class: "container mx-auto px-6 md:px-8 py-8" }, [createVNode("div", { class: "max-w-2xl mx-auto bg-white rounded-lg shadow-lg" }, [createVNode("div", { class: "p-4" }, [
						createVNode("h1", { class: "text-2xl font-bold" }, toDisplayString(__props.product.name), 1),
						createVNode("p", { class: "text-gray-600 mt-2" }, [createVNode("span", { class: "font-semibold text-primary-500" }, "Price"), createTextVNode(" : GH₵ " + toDisplayString(__props.product.price), 1)]),
						createVNode("p", { class: "text-gray-600" }, [createVNode("span", { class: "font-semibold text-primary-500" }, "Size"), createTextVNode(" : " + toDisplayString(__props.product.size), 1)]),
						createVNode("p", { class: "text-gray-600" }, [
							createVNode("span", { class: "font-semibold text-primary-500" }, "Description"),
							createTextVNode(" : "),
							createVNode("span", { innerHTML: __props.product.description }, null, 8, ["innerHTML"])
						])
					]), createVNode("div", { class: "grid grid-cols-2 gap-4 p-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.product.product_images, (image) => {
						return openBlock(), createBlock("div", { key: image.id }, [createVNode("img", {
							src: getImageUrl(image),
							alt: image,
							class: "w-full h-auto rounded-lg"
						}, null, 8, ["src", "alt"])]);
					}), 128))])])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
