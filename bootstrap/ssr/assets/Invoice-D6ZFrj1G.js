import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as ApplicationLogo_default } from "./ApplicationLogo-De7nLcr7.js";
import { mergeProps, ref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Admin/Invoice.vue
var _sfc_main = {
	__name: "Invoice",
	__ssrInlineRender: true,
	setup(__props) {
		const invoice = ref({
			date: "30 April 2024",
			invoicenumber: "#Mo1223",
			dueDate: "2023-09-30",
			items: [{
				description: "Product 1",
				quantity: 2,
				price: 50
			}, {
				description: "Product 2",
				quantity: 3,
				price: 30
			}]
		});
		const calculateTotal = () => {
			return invoice.value.items.reduce((total, item) => total + item.quantity * item.price, 0);
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-6 md:px-8 py-8 bg-slate-700" }, _attrs))} data-v-cce51ceb><div class="max-w-4xl mx-auto bg-white rounded shadow p-10" data-v-cce51ceb><div class="flex items-center justify-between" data-v-cce51ceb>`);
			_push(ssrRenderComponent(ApplicationLogo_default, { class: "h-18 w-auto fill-current text-gray-800" }, null, _parent));
			_push(`<div class="inline-block justify-items-end" data-v-cce51ceb><h2 class="font-sans text-4xl text-primary-500 uppercase font-extrabold py-2" data-v-cce51ceb>Invoice</h2><p class="text-base" data-v-cce51ceb>Invoice No: ${ssrInterpolate(invoice.value.invoicenumber)}</p></div></div><p class="text-base py-6" data-v-cce51ceb> To: </p><p class="font-sans font-bold text-base text-primary-500 py-2" data-v-cce51ceb> Nsyria Nelson </p><div class="w-full h-auto flex justify-between" data-v-cce51ceb><div class="max-w-xs" data-v-cce51ceb><p class="text-xs" data-v-cce51ceb> No 8, Abelekpe street, <br data-v-cce51ceb> beside Accra Mall, <br data-v-cce51ceb> East Legon <br data-v-cce51ceb> Accra. </p><p class="text-xs py-3" data-v-cce51ceb>018 7737 738 8737</p></div><div class="text-xs" data-v-cce51ceb><h2 data-v-cce51ceb>Invoice Date: ${ssrInterpolate(invoice.value.date)}</h2><p data-v-cce51ceb> 19, Swaniker Street, <br data-v-cce51ceb> Abelemkpe <br data-v-cce51ceb> Accra </p></div></div><div class="w-full" data-v-cce51ceb><table class="min-w-full text-center uppercase" data-v-cce51ceb><thead class="bg-primary-400 font-normal px-4" data-v-cce51ceb><tr class="h-14 text-white text-base font-normal" data-v-cce51ceb><th class="w-1/12 border border-neutral-300" data-v-cce51ceb>S/N</th><th class="w-5/12 border border-neutral-300" data-v-cce51ceb>Items </th><th class="w-2/12 border border-neutral-300" data-v-cce51ceb>Qty <br data-v-cce51ceb><span class="lowercase text-sm" data-v-cce51ceb>(per pack)</span></th><th class="w-2/12 border border-neutral-300" data-v-cce51ceb>Price <br data-v-cce51ceb><span class="text-sm" data-v-cce51ceb>(GHC)</span></th><th class="w-2/12 border border-neutral-300" data-v-cce51ceb>amt <br data-v-cce51ceb><span class="text-sm" data-v-cce51ceb>(GHC)</span></th></tr></thead><tbody class="bg-neutral-200" data-v-cce51ceb><!--[-->`);
			ssrRenderList(invoice.value.items, (item, index) => {
				_push(`<tr class="h-16 text-primary-100" data-v-cce51ceb><td class="w-1/12 border border-neutral-300" data-v-cce51ceb>${ssrInterpolate(index)}</td><td class="w-5/12 border border-neutral-300" data-v-cce51ceb>${ssrInterpolate(item.name)}</td><td class="w-2/12 border border-neutral-300" data-v-cce51ceb>${ssrInterpolate(item.quantity)}</td><td class="w-2/12 border border-neutral-300" data-v-cce51ceb>${ssrInterpolate(item.price)}</td><td class="w-2/12 border border-neutral-300" data-v-cce51ceb>${ssrInterpolate(item.quantity * item.price)}</td></tr>`);
			});
			_push(`<!--]--></tbody></table></div><div class="grid grid-cols-12 w-full h-auto text-neutral-50 mt-4 font-semibold" data-v-cce51ceb><div class="col-start-2 col-span-5 bg-primary-400 px-6 py-4 text-center" data-v-cce51ceb><p data-v-cce51ceb>Total Amount:</p></div><div class="col-start-7 col-span-4 bg-primary-400 px-6 py-4 text-center" data-v-cce51ceb></div><div class="col-span-2 col-start-11 col-end-13 bg-primary-400 px-6 py-4 text-center" data-v-cce51ceb><p data-v-cce51ceb>${ssrInterpolate(calculateTotal())}</p></div></div><div class="w-full h-auto flex flex-col items-end py-8" data-v-cce51ceb><img src="/signature.png" alt="Signature" class="mr-6 w-44 h-auto" data-v-cce51ceb><br data-v-cce51ceb><p class="mr-6" data-v-cce51ceb>Manager’s Signature</p></div><div class="text-center text-xs pt-4" data-v-cce51ceb><p data-v-cce51ceb>Goods purchased are non-refundable</p><p data-v-cce51ceb>Thank you</p></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Invoice.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Invoice_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-cce51ceb"]]);
//#endregion
export { Invoice_default as default };
