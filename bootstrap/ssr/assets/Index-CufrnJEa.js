import { t as _sfc_main$1 } from "./AdminLayout-ChNnk7U6.js";
import { t as _sfc_main$2 } from "./PaginationCom-BGiPx01J.js";
import { Fragment, computed, createBlock, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, watch, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/User/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		users: Object,
		filters: Object,
		user: Object
	},
	setup(__props) {
		const props = __props;
		ref("Users");
		const search = ref(props.filters.search);
		const perPage = ref(5);
		const filteredUsers = computed(() => {
			return props.users.data;
		});
		const fetchUsers = () => {
			router.get("/admin/users", {
				perPage: perPage.value,
				search: search.value
			}, {
				preserveState: true,
				replace: true
			});
		};
		function showUserDetails(userId) {
			router.get(route("admin.users.show", { id: userId }));
		}
		watch(search, (value) => {
			router.get("/admin/users", {
				search: value,
				perPage: perPage.value
			}, {
				preserveState: true,
				replace: true
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Users" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Users</h2>`);
					else return [createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Users")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-md sm:rounded-lg"${_scopeId}><div class="p-2 rounded-sm relative overflow-x-auto"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div class="pb-4 bg-white dark:bg-gray-900"${_scopeId}><label for="table-search" class="sr-only"${_scopeId}>Search</label><div class="relative mt-1"${_scopeId}><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"${_scopeId}><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"${_scopeId}></path></svg></div><input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-secondary-500 focus:border-blue-500" placeholder="Search for users"${ssrRenderAttr("value", search.value)}${_scopeId}></div></div><div class="flex px-2"${_scopeId}><select class="py-2 px-6 w-full rounded-md bg-gray-100 border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"${_scopeId}><option value="5"${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, "5") : ssrLooseEqual(perPage.value, "5")) ? " selected" : ""}${_scopeId}>5 Per Page</option><option value="10"${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, "10") : ssrLooseEqual(perPage.value, "10")) ? " selected" : ""}${_scopeId}>10 Per Page</option><option value="15"${ssrIncludeBooleanAttr(Array.isArray(perPage.value) ? ssrLooseContain(perPage.value, "15") : ssrLooseEqual(perPage.value, "15")) ? " selected" : ""}${_scopeId}>15 Per Page</option></select></div></div><table class="w-full text-sm text-left text-gray-500"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}> User name </th><th scope="col" class="px-6 py-3"${_scopeId}> Email </th><th scope="col" class="px-6 py-3"${_scopeId}> Phone </th><th scope="col" class="px-6 py-3"${_scopeId}> Address </th><th scope="col" class="px-6 py-3 flex justify-center"${_scopeId}> Actions <span class="sr-only"${_scopeId}>Actions</span></th></tr></thead><tbody${_scopeId}>`);
						if (filteredUsers.value && filteredUsers.value.length > 0) {
							_push(`<!--[-->`);
							ssrRenderList(filteredUsers.value, (user) => {
								_push(`<tr class="bg-white border-t hover:bg-gray-50"${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"${_scopeId}>${ssrInterpolate(user.first_name)} ${ssrInterpolate(user.last_name)}</th><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(user.email)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(user.phone)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(user.address)}</td><td class="px-6 py-4 flex justify-center items-center space-x-2"${_scopeId}><button class="p-1 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-secondary-300 hover:font-semibold"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg></button></td></tr>`);
							});
							_push(`<!--]-->`);
						} else _push(`<tr${_scopeId}><td colspan="5" class="text-center py-6 text-lg text-primary-500 font-semibold"${_scopeId}> No Users available.</td></tr>`);
						_push(`</tbody></table><div class="m-2 p-2 flex justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.users.links }, null, _parent, _scopeId));
						_push(`</div></div></div></div></div>`);
					} else return [createVNode("div", { class: "py-12" }, [createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [createVNode("div", { class: "bg-white overflow-hidden shadow-md sm:rounded-lg" }, [createVNode("div", { class: "p-2 rounded-sm relative overflow-x-auto" }, [
						createVNode("div", { class: "flex justify-between items-center" }, [createVNode("div", { class: "pb-4 bg-white dark:bg-gray-900" }, [createVNode("label", {
							for: "table-search",
							class: "sr-only"
						}, "Search"), createVNode("div", { class: "relative mt-1" }, [createVNode("div", { class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, [(openBlock(), createBlock("svg", {
							class: "w-5 h-5 text-gray-500 dark:text-gray-400",
							"aria-hidden": "true",
							fill: "currentColor",
							viewBox: "0 0 20 20",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createVNode("path", {
							"fill-rule": "evenodd",
							d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
							"clip-rule": "evenodd"
						})]))]), withDirectives(createVNode("input", {
							type: "text",
							id: "table-search",
							class: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-secondary-500 focus:border-blue-500",
							placeholder: "Search for users",
							"onUpdate:modelValue": ($event) => search.value = $event
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]])])]), createVNode("div", { class: "flex px-2" }, [withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => perPage.value = $event,
							onChange: fetchUsers,
							class: "py-2 px-6 w-full rounded-md bg-gray-100 border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
						}, [
							createVNode("option", { value: "5" }, "5 Per Page"),
							createVNode("option", { value: "10" }, "10 Per Page"),
							createVNode("option", { value: "15" }, "15 Per Page")
						], 40, ["onUpdate:modelValue"]), [[vModelSelect, perPage.value]])])]),
						createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [createVNode("tr", null, [
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " User name "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Email "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Phone "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3"
							}, " Address "),
							createVNode("th", {
								scope: "col",
								class: "px-6 py-3 flex justify-center"
							}, [createTextVNode(" Actions "), createVNode("span", { class: "sr-only" }, "Actions")])
						])]), createVNode("tbody", null, [filteredUsers.value && filteredUsers.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filteredUsers.value, (user) => {
							return openBlock(), createBlock("tr", {
								class: "bg-white border-t hover:bg-gray-50",
								key: user.id
							}, [
								createVNode("th", {
									scope: "row",
									class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap space-x-2"
								}, toDisplayString(user.first_name) + " " + toDisplayString(user.last_name), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.email), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.phone), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(user.address), 1),
								createVNode("td", { class: "px-6 py-4 flex justify-center items-center space-x-2" }, [createVNode("button", {
									onClick: ($event) => showUserDetails(user.id),
									class: "p-1 rounded-full bg-neutral-100 hover:bg-blue-100 hover:text-secondary-300 hover:font-semibold"
								}, [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									fill: "none",
									viewBox: "0 0 24 24",
									"stroke-width": "1.5",
									stroke: "currentColor",
									class: "w-6 h-6"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								}), createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								})]))], 8, ["onClick"])])
							]);
						}), 128)) : (openBlock(), createBlock("tr", { key: 1 }, [createVNode("td", {
							colspan: "5",
							class: "text-center py-6 text-lg text-primary-500 font-semibold"
						}, " No Users available.")]))])]),
						createVNode("div", { class: "m-2 p-2 flex justify-end" }, [createVNode(_sfc_main$2, { links: __props.users.links }, null, 8, ["links"])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
