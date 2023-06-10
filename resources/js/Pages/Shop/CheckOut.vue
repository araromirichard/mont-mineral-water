<template>
    <Head title="Checkout" />
    <div class="container mx-auto w-full min-h-screen bg-white p-10">
        <ToastMessageList />
        <div class="flex justify-center items-center">
            <ApplicationLogo class=" w-16 h-auto" />
        </div>

        <!-- <pre>{{ orderItems }}</pre> -->
        <div class="flex justify-center items-center space-x-3 pt-4 sm:pt-6 md:pt-7 ">
            <BreadcrubItem :href="route('shop')"
                customClass="flex justify-center items-center space-x-2 text-secondary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="uppercase font-semibold text-xs">chart</span>
            </BreadcrubItem>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-3 h-6 text-secondary-400">
                <path fill-rule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clip-rule="evenodd" />
            </svg>
            <BreadcrubItem href="#" customClass="flex justify-center items-center space-x-2 text-secondary-400">
                <div
                    class="rounded-full bg-secondary-400 border-none text-white p-1 text-xs font-semibold h-4 w-4 flex items-center justify-center">
                    2
                </div>
                <span class="uppercase font-medium text-sm">checkout</span>
            </BreadcrubItem>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-3 h-6 text-secondary-400">
                <path fill-rule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clip-rule="evenodd" />
            </svg>
            <BreadcrubItem href="#" customClass="flex justify-center items-center space-x-2 text-neutral-400">
                <div class="rounded-full bg-white border border-neutral-300 text-neutral-300 p-1.5 font-medium h-3 w-3 flex items-center justify-center"
                    style="font-size: 10px; line-height: 0.7rem;">
                    3
                </div>
                <span class="uppercase font-normal text-xs">Place order</span>
            </BreadcrubItem>
        </div>
        <form @submit.prevent="submit" class="space-y-3 ">
            <div class="grid grid-cols-11 gap-x-7 gap-y-3 mt-6 sm:mt-10">
                <div class="col-span-12 sm:col-span-6 bg-neutral-100 rounded-sm p-7">
                    <p class="text-md sm:text-xl font-bold tracking-wide text-primary-500">
                        Contact information
                    </p>


                    <div>
                        <div class="space-y-2 py-3">
                            <p class="text-secondary-400 font-semibold text-base">Hi, {{ $page.props.auth.user.first_name }}
                                {{ $page.props.auth.user.last_name }}</p>
                            <p class="font-normal text-xs text-primary-500 tracking-wider">{{ $page.props.auth.user.email
                            }};
                                {{ $page.props.auth.user.phone }}</p>
                            <div class="flex items-center" v-if="useDefaultAddress">
                                <input type="checkbox" id="useDefaultAddress"
                                    class="border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest h-4 w-4 text-primary-500"
                                    v-model="defaultAddress">
                                <label for="useDefaultAddress" class="ml-2 text-xs text-primary-500">Use default shipping
                                    address</label>

                            </div>
                        </div>
                    </div>
                    <div v-if="!defaultAddress">
                        <div class="flex justify-between items-start mt-[30px]">
                            <p class="text-primary-500 font-semibold text-md sm:text-lg">Shipping Address</p>

                        </div>
                        <div class="mt-4">
                            <TextInput id="address" type="text" class="mt-1 block w-full" v-model="form.shipping.address"
                                required autocomplete="address" placeholder="address" />
                            <InputError class="mt-2" :message="form.errors.address" />
                        </div>
                        <div class="mt-4">
                            <TextInput id="appartment" type="text" class="mt-1 block w-full"
                                v-model="form.shipping.apartment" required autocomplete="appartment"
                                placeholder="Apartment, suite, etc. (optional)" />
                            <InputError class="mt-2" :message="form.errors.appartment" />
                        </div>
                        <div class="mt-4">
                            <TextInput id="contact_phone" type="tel" class="mt-1 block w-full"
                                v-model="form.shipping.contact" required autocomplete="tel"
                                placeholder="Contact phone number" />
                            <InputError class="mt-2" :message="form.errors.contact_phone" />
                        </div>
                        <div class="flex flex-wrap -mx-2 mt-4 space-y-2 sm:space-y-0">
                            <div class="w-full md:w-1/2 px-2">
                                <div>
                                    <TextInput id="region" type="text" class="mt-1 block w-full"
                                        v-model="form.shipping.region" required autocomplete="region"
                                        placeholder="region address" />
                                    <InputError class="mt-2" :message="form.errors.region" />
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-2">
                                <div>
                                    <TextInput id="district" type="text" class="mt-1 block w-full"
                                        v-model="form.shipping.district" required autocomplete="district"
                                        placeholder="district" />
                                    <InputError class="mt-2" :message="form.errors.district" />
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-start mt-2 py-1">
                            <label class="flex items-center">
                                <input type="checkbox"
                                    class="border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"
                                    v-model="form.saveAddress">
                                <span class="ml-2 text-secondary-400 font-normal text-xs">Save Address</span>
                            </label>
                        </div>

                    </div>

                    <div class="py-3">
                        <Link :href="route('shop')"
                            class="text-secondary-400 font-medium capitalize text-sm flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Back to Cart</span>
                        </Link>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-5">
                    <div class=" border border-neutral-400 p-8 w-full h-auto">
                        <p class="text-md sm:text-xl font-bold tracking-wide text-primary-500">
                            Your Order
                        </p>
                        <div>
                            <OrderItem v-for="item in orderItems.cartItems" :key="item.productId" :item="item" />
                        </div>
                        <div class="cartActions border-y border-spacing-1 border-gray-300 py-4">
                            <div class="grid grid-cols-4">
                                <p class="col-span-2 col-start-2 text-primary-500 font-bold tracking-wide text-sm px-4">
                                    Subtotal:
                                </p>
                                <p class="flex m-0 space-x-2 items-center justify-end">
                                    <span class="uppercase font-bold text-primary-500 tracking-wide text-xs">ghs</span>
                                    <span class="text-sm font-bold text-right tracking-wide text-primary-500">
                                        {{ orderItems.subTotal.toLocaleString('en-GH', { useGrouping: true }) }}
                                    </span>
                                </p>
                            </div>
                            <div class="grid grid-cols-4">
                                <p class="col-span-2 col-start-2 text-primary-500 font-normal tracking-wide text-sm px-4">
                                    Delivery:
                                </p>
                                <p class="flex m-0 space-x-5 items-center justify-end text-start">
                                    <span
                                        class="uppercase font-normal text-primary-500 text-left tracking-wide text-sm">ghs</span>

                                    <span class="text-sm font-normal tracking-wide text-primary-500">
                                        {{ orderItems.delivery.toLocaleString('en-GH', { useGrouping: true }) }}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 py-4">
                            <p class="col-span-2 col-start-2 text-secondary-400 font-bold tracking-wide text-base px-4">
                                Total:
                            </p>
                            <p class="flex m-0 space-x-2 items-center justify-end text-start">
                                <span
                                    class="uppercase font-bold text-secondary-400 text-left tracking-wide text-base">ghs</span>
                                <span class="text-base font-bold tracking-wide text-secondary-400">
                                    {{ orderItems.total.toLocaleString('en-GH', { useGrouping: true }) }}
                                </span>
                            </p>
                        </div>
                        <div class="flex justify-end items-center py-3">
                            <button type="submit"
                                class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out border-2 bg-primary-500 rounded-full shadow-md group"
                                :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Place Order
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 pl-2 animate-pulse font-semibold">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <Modal :show="showOrderSuccessModal" @close="closeModal">
        <div class="flex flex-col justify-center items-center pt-16 pb-10 px-8 sm:px-10 md:px-12 space-y-4">
            <div class="py-4">
                <img src="/storage/frontend/checkout.png" alt="checkout-icon" class=" w-14 h-14">
            </div>
            <p class="text-primary-500 text-xl sm:text-3xl tracking-wider text-center">Thank you</p>
            <p class="text-primary-500 font-bold text-sm sm:text-lg md:text-md text-center">ORDER ID {{ $page.props.orderNumber }}</p>

            <p class="text-center text-base sm:text-[1.12rem] max-w-md ">
                You order has been placed.
                A Mont representative will reach out to this number <strong>0864 36763 2633</strong>
                within 30 minutes.
            </p>

            <p class="text-center text-base sm:text-[1.12rem] max-w-md ">If you don’t receive a call from us, Please call us on
                <strong>+233 488947 89849</strong>
            </p>
            
            <div class="pb-4">
                <Link :href="route('dashboard')" class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-semibold text-neutral-200 transition duration-300 ease-out border-2 bg-primary-500 rounded-full shadow-md group">Okay</Link>
            </div>

        </div>
    </Modal>
</template>

<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import BreadcrubItem from '@/Components/BreadcrubItem.vue'
import InputError from '@/Components/InputError.vue';
import Modal from '@/Components/Modal.vue';
import OrderItem from '@/Components/OrderItem.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage, Head } from '@inertiajs/vue3';
import { ref, watchEffect, watch } from 'vue';
import { debounce } from 'lodash';
import axios from 'axios';
import ToastStore from '@/Stores/ToastStore';
import ToastMessageList from '@/Components/ToastMessageList.vue';


const props = defineProps({
    orderItems: Object

});
const page = usePage();

const useDefaultAddress = page.props.auth.defaultShippingAddress;
const showOrderSuccessModal = ref(false);
const defaultAddress = ref(false);

const orderNumber = ref(null);

const form = useForm({

    shipping: {
        address: '',
        apartment: '',
        contact: '',
        region: '',
        district: '',
    },
    saveAddress: false,

});

function closeModal() {

    showOrderSuccessModal.value = false;
};

// watcher and method to check if the mail already exist in the user's table


watchEffect(() => {
    if (form.saveUser) {
        checkUserExists();
    }
});


const submit = () => {
    form.post(route('orders-store'), {
        onSuccess: () => {
            // Handle success response
            showOrderSuccessModal.value = true;
            orderNumber.value = window.sessionStorage.getItem('orderNumber');
        },
        onError: (error) => {
            // Handle error response
            console.error('Failed to place the order', error);
            ToastStore.add({ message: error.message + ' Failed to place the order' })
        }
    });
};



// watcher to check if the user already have a default shipping address



// const handleUseDefaultAddress = () => {

//     // console.log(page.props.auth.user.id);
//     axios
//         .get(`/api/shipping-address/${page.props.auth.user.id}`)
//         .then(response => {
//             console.log(response);
//             const shippingAddress = response.data.shipping_address;
//             if (shippingAddress && shippingAddress.is_default) {
//                 // Set the form data using the retrieved shipping address
//                 form.shipping = shippingAddress;
//                 // Add other relevant form fields
//                 // ...
//             }
//         })
//         .catch(error => {
//             // Handle error
//             console.log(error);
//             useDefaultAddress.value = false;
//             ToastStore.add({ message: error.message + ' please, fill the form' })
//         });
// };

watchEffect(() => {
    if (defaultAddress.value) {
        console.log(JSON.stringify(useDefaultAddress, null, 2))
        // handleUseDefaultAddress();
        form.shipping = useDefaultAddress;
    }
});
</script>

<style lang="scss" scoped></style>