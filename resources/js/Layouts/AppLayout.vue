<script setup>
import { gsap } from 'gsap';
import { Link, usePage, useForm } from '@inertiajs/vue3';
import CartModal from '@/Components/CartModal.vue';
import { computed, nextTick, ref, reactive, onMounted } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import ShopCart from '@/Components/ShopCart.vue';
import store from '@/Stores/simpleStore';
import NavLink from '@/Components/NavLink.vue';
import MontMobileNavLink from '@/Components/MontMobileNavLink.vue';
import MontMobileSublink from '@/Components/MontMobileSublink.vue';
import ToastMessageList from '@/Components/ToastMessageList.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import FormButton from '@/Components/FormButton.vue';
import { onClickOutside } from '@vueuse/core';
import InputError from '@/Components/InputError.vue';


defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    hasAppPages: {
        type: Boolean,
        default: true,
    }
});

const emit = defineEmits(['scrollToContact'])

const user = reactive({
    auth: {
        user: usePage().props.auth.user,
    },
});

const dropdownRef = ref(null);
const Products = ref(null);

const showingNavigationDropdown = ref(false);
const showDropdown = ref(false);
const showSublinks = ref(false);
const showShopDropdown = ref(false);
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

// getters from my simple store
const cartCount = computed(() => {
  return store.getters.getCartCount();
});

// vueUse on ClickOutside..
onClickOutside(dropdownRef, () => {
    showDropdown.value = false; // Close the dropdown
});


const openCart = ref(false);
const shopDropdown = ref(null);

const handleOpenCart = () => {
    openCart.value = true;
};

const closeModal = () => {
    openCart.value = false;

};

// vueUse onClickOutside for the shop dropdown
onClickOutside(shopDropdown, () => {
    showShopDropdown.value = false; // Close the shop dropdown
});

const modalWidth = computed(() => {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? 'mobile' : 'lg';
});

function animateIn() {

    if (route().current('homepage')) {
        showShopDropdown.value = true;
        nextTick(() => {
            gsap.from(shopDropdown.value, {
                duration: 0.5,
                y: -20,
                opacity: 0,
                ease: 'power2.out',
            });
        });

    }
};

function animateOut() {
    gsap.to(shopDropdown.value, {
        duration: 0.3,
        y: 20,
        opacity: 0,
        ease: 'power2.in',
        onComplete: () => {
            showShopDropdown.value = false;
        },
    });
};


function toggleSublinks() {
    showSublinks.value = !showSublinks.value;
}



const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
            location.reload();
        },
    });
};



const fetchProducts = () => {
    axios
        .get(`/api/shop`)
        .then(response => {
            console.log(response.data);
            Products.value = response.data;
            console.log(JSON.stringify(Products.value, null, 2));
        })
        .catch(error => {
            // Handle error
            console.log(error);

        });
};

onMounted(() => {
    fetchProducts();
});

</script>



<template>
    <ToastMessageList />
    <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-neutral-100">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between container mx-auto py-4">
            <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center sm:hidden justify-center p-2 rounded-md text-neutral-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path :class="{
                        hidden: showingNavigationDropdown,
                        'inline-flex': !showingNavigationDropdown,
                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    <path :class="{
                        hidden: !showingNavigationDropdown,
                        'inline-flex': showingNavigationDropdown,
                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="shrink-0 flex items-center">
                <Link :href="route('homepage')">
                <ApplicationLogo class="block h-14 w-auto fill-current text-gray-800" />
                </Link>
            </div>
            <div class="flex sm:order-2 md:space-x-2">
                <!-- Cart button and other buttons -->
                <button @click="handleOpenCart"
                    class="relative p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.28052 17.5L3.80251 9.5H21.1975L19.7195 17.5H5.28052Z" stroke="#051C2C" stroke-width="3"
                            stroke-linejoin="round" />
                        <circle cx="6.94937" cy="21.8798" r="1.94937" fill="#051C2C" />
                        <circle cx="17.9874" cy="21.8798" r="1.94937" fill="#051C2C" />
                        <path
                            d="M3.46535 1.67945C3.28832 0.870164 2.48875 0.357618 1.67945 0.53465C0.870164 0.711682 0.357618 1.51125 0.53465 2.32055L3.46535 1.67945ZM6.96535 17.6795L3.46535 1.67945L0.53465 2.32055L4.03465 18.3205L6.96535 17.6795Z"
                            fill="#051C2C" />
                    </svg>
                    
                    <span v-if="cartCount > 0"
                        class="absolute top-2 right-1 -mt-1 -mr-1 px-[6px] text-xs font-normal text-white bg-secondary-400 rounded-full">{{
                            cartCount }}</span>
                </button>
<!-- <pre>{{cartCount}}</pre> -->
                <button @click="toggleDropdown"
                    class="p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.4006 6.47619C17.4006 9.16494 15.1074 11.4524 12.1428 11.4524C9.17825 11.4524 6.88507 9.16494 6.88507 6.47619C6.88507 3.78744 9.17825 1.5 12.1428 1.5C15.1074 1.5 17.4006 3.78744 17.4006 6.47619Z"
                            stroke="#051C2C" stroke-width="3" />
                        <path d="M21.2857 24C21.2857 19.1609 17.1923 15.2381 12.1429 15.2381C7.0934 15.2381 3 19.1609 3 24"
                            stroke="#051C2C" stroke-width="3" />
                    </svg>

                </button>
                <transition name="slide-down">
                    <div v-if="showDropdown" ref="dropdownRef"
                        class="absolute right-0 sm:right-12 mt-1 w-full sm:w-4/12 bg-[#f2f2f2] rounded shadow-md z-20">
                        <div class=" py-1 dropdown-content text-primary-500">
                            <div class="flex items-center justify-between px-3 w-full">
                                <p class="font-bold text-xl text-primary-500" v-if="user.auth.user">
                                    {{
                                        user.auth.user.first_name }}
                                    {{
                                        user.auth.user.last_name }}
                                </p>
                                <p class="font-bold text-xl text-primary-500" v-else>Account Details</p>

                                <button @click="toggleDropdown"
                                    class="p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.4006 6.47619C17.4006 9.16494 15.1074 11.4524 12.1428 11.4524C9.17825 11.4524 6.88507 9.16494 6.88507 6.47619C6.88507 3.78744 9.17825 1.5 12.1428 1.5C15.1074 1.5 17.4006 3.78744 17.4006 6.47619Z"
                                            stroke="#051C2C" stroke-width="3" />
                                        <path
                                            d="M21.2857 24C21.2857 19.1609 17.1923 15.2381 12.1429 15.2381C7.0934 15.2381 3 19.1609 3 24"
                                            stroke="#051C2C" stroke-width="3" />
                                    </svg>

                                </button>
                            </div>
                            <div v-if="user.auth.user">
                                <div class="space-y-2">
                                    <DropdownLink :href="route('dashboard')">
                                        Profile
                                    </DropdownLink>
                                    <DropdownLink :href="route('admin.index')" v-if="$page.props.is_admin">
                                        Admin Dashboard
                                    </DropdownLink>
                                    <DropdownLink v-else>
                                        Purchase History
                                    </DropdownLink>
                                </div>
                                <div class="border-t border-neutrals-200">
                                    <DropdownLink :href="route('logout')" method="post" as="button">
                                        Sign Out
                                    </DropdownLink>
                                </div>
                            </div>
                            <div v-else class="px-4 py-4">

                                <form @submit.prevent="submit" class="w-full">
                                    <div>
                                        <InputLabel for="email" value="Email" class="font-bold" />
                                        <TextInput id="email" type="email"
                                            class="mt-1 rounded-xs bg-neutral-300 w-full border-none"
                                            v-model="form.email" />
                                        <InputError class="mt-2" :message="form.errors.email" />
                                    </div>
                                    <div class="mt-4">
                                        <InputLabel for="password" value="Password" class="font-bold" />
                                        <TextInput id="password" type="password"
                                            class="mt-1 rounded-xs bg-neutral-300 w-full border-none"
                                            v-model="form.password" />
                                        <InputError class="mt-2" :message="form.errors.password" />
                                    </div>
                                    <div class="flex flex-col items-center mt-8 space-y-2 pb-3 border-b-2">
                                        <FormButton class="" :class="{ 'opacity-25': form.processing }"
                                            :disabled="form.processing">
                                            Sign in
                                        </FormButton>
                                        <Link :href="route('password.request')"
                                            class="text-sm flext w-full text-start text-[#555F66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Forgot your password?
                                        </Link>
                                    </div>

                                    <div class="text-center text-neutral-700 text-base py-2">
                                        Don’t have an account?
                                        <Link :href="route('register')" class="text-secondary-400">Sign up here </Link> <br>
                                        <span class="pt-2">OR</span>
                                    </div>
                                </form>
                                <div class="text-center text-neutral-700 text-base">
                                    <a :href="route('google-redirect')" class="text-secondary-400">Sign in using Your
                                        Google Account </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </transition>

            </div>

            <div class="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1">

                <div class="hidden space-x-8 sm:flex">
                  
                    <div>
                        <NavLink :href="route('shop')" :active="route().current('shop')" @mouseover="animateIn">
                            Shop
                        </NavLink>
                        <div v-if="showShopDropdown" ref="shopDropdown"
                            class="flex justify-evenly items-center absolute left-0 right-0 top-20 w-full h-80 bg-white rounded shadow-xs z-10">
                            <!-- Dropdown content -->
                            <!-- Dropdown content -->
                            <template v-for="product in Products" :key="product.id">
                                <Link :href="route('show-product', { product: product.slug })">
                                <div class="flex flex-col justify-center items-center">
                                    <img :src="'/storage/' + product.image" :alt="product.name" class="w-56 h-auto" />
                                    <p class="shopdropdown__txt pt-2">{{ product.name }} | {{ product.size }}</p>
                                </div>
                                </Link>
                            </template>
                        </div>
                    </div>

                    <NavLink :href="route('contact.mont')" :active="route().current('contact.mont')">
                        Contact Us
                    </NavLink>
                    <NavLink :href="route('about.mont')" :active="route().current('about.mont')">
                        About Mont
                    </NavLink>
                </div>

            </div>
        </div>
        <!-- Responsive Navigation Menu -->
        <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
            class="sm:hidden w-full h-screen">
            <div class="pt-2 pb-3 space-y-1 h-full">
                <MontMobileNavLink href="#" as="button">
                    <div class="w-full h-[10vh] flex items-center text-xl" @click.stop.prevent="toggleSublinks">Shop
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 ml-4 mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </MontMobileNavLink>
                <div v-if="showSublinks" class="">

                    <template v-for="product in Products" :key="product.id">
                        <MontMobileSublink :href="route('show-product', { product: product.slug })">
                            <div class="w-full h-[10vh] text-xl flex items-center px-16">{{ product.name }} | {{
                                product.size }}</div>
                        </MontMobileSublink>
                    </template>
                </div>
                <MontMobileNavLink :href="route('contact.mont')">
                    <div class="w-full h-[10vh] flex items-center text-xl">Contact Us</div>
                </MontMobileNavLink>
                <MontMobileNavLink :href="route('about.mont')">
                    <div class="w-full h-[10vh] flex items-center text-xl">About Mont</div>
                </MontMobileNavLink>
            </div>
        </div>


    </nav>
    <CartModal :show="openCart" :max-width="modalWidth">
        <ShopCart @close-modal="closeModal" />
    </CartModal>
    <!-- Page Heading -->
    <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <slot name="header" />
        </div>
    </header>
    <main :class="{ 'mt-[88px]': hasAppPages }">
        
        <!-- <pre>{{ cartCount }}</pre> -->
        <slot></slot>
    </main>
    <footer class="bg-primary-500 w-full h-[200px] flex justify-center items-center">
        <div class=" w-full flex flex-col justify-center items-center">
            <ApplicationLogo class="block h-12 sm:h-16 w-auto fill-current text-gray-800" />
            <Link :href="route('shop')">
            <p class="footer__txt1 py-2 text-secondary-400 sm:text-neutral-100">Shop Mont</p>
            </Link>
            <p class="footer__txt2">See what we are up to:</p>
            <div class="space-x-3 py-2">
                <button>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.1407 7.30921V8.74359H8.0907V10.4967H9.1407V15.7082H11.299V10.4967H12.7469C12.7469 10.4967 12.8834 9.65609 12.949 8.7363H11.3074V7.53838C11.3074 7.35817 11.5428 7.11755 11.7761 7.11755H12.9511V5.2915H11.3522C9.08757 5.2915 9.1407 7.04671 9.1407 7.30921Z"
                            fill="#F2F2F2" />
                        <path
                            d="M10.5 18.8333C12.7102 18.8333 14.8298 17.9553 16.3926 16.3925C17.9554 14.8297 18.8334 12.7101 18.8334 10.4999C18.8334 8.28978 17.9554 6.17017 16.3926 4.60736C14.8298 3.04456 12.7102 2.16659 10.5 2.16659C8.2899 2.16659 6.17029 3.04456 4.60748 4.60736C3.04468 6.17017 2.16671 8.28978 2.16671 10.4999C2.16671 12.7101 3.04468 14.8297 4.60748 16.3925C6.17029 17.9553 8.2899 18.8333 10.5 18.8333ZM10.5 20.9166C4.74692 20.9166 0.083374 16.253 0.083374 10.4999C0.083374 4.74679 4.74692 0.083252 10.5 0.083252C16.2532 0.083252 20.9167 4.74679 20.9167 10.4999C20.9167 16.253 16.2532 20.9166 10.5 20.9166Z"
                            fill="#F2F2F2" />
                    </svg>

                </button>

                <button>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.12504 0.083252H14.875C18.2084 0.083252 20.9167 2.79159 20.9167 6.12492V14.8749C20.9167 16.4773 20.2802 18.014 19.1471 19.147C18.0141 20.2801 16.4774 20.9166 14.875 20.9166H6.12504C2.79171 20.9166 0.083374 18.2083 0.083374 14.8749V6.12492C0.083374 4.52257 0.719905 2.98585 1.85294 1.85282C2.98597 0.719783 4.52269 0.083252 6.12504 0.083252ZM5.91671 2.16659C4.92215 2.16659 3.96832 2.56167 3.26506 3.26493C2.5618 3.9682 2.16671 4.92202 2.16671 5.91658V15.0833C2.16671 17.1562 3.84379 18.8333 5.91671 18.8333H15.0834C16.0779 18.8333 17.0318 18.4382 17.735 17.7349C18.4383 17.0316 18.8334 16.0778 18.8334 15.0833V5.91658C18.8334 3.84367 17.1563 2.16659 15.0834 2.16659H5.91671ZM15.9688 3.72909C16.3141 3.72909 16.6453 3.86627 16.8895 4.11046C17.1337 4.35464 17.2709 4.68583 17.2709 5.03117C17.2709 5.3765 17.1337 5.70769 16.8895 5.95188C16.6453 6.19607 16.3141 6.33325 15.9688 6.33325C15.6235 6.33325 15.2923 6.19607 15.0481 5.95188C14.8039 5.70769 14.6667 5.3765 14.6667 5.03117C14.6667 4.68583 14.8039 4.35464 15.0481 4.11046C15.2923 3.86627 15.6235 3.72909 15.9688 3.72909ZM10.5 5.29158C11.8814 5.29158 13.2061 5.84032 14.1829 6.81707C15.1596 7.79382 15.7084 9.11858 15.7084 10.4999C15.7084 11.8813 15.1596 13.206 14.1829 14.1828C13.2061 15.1595 11.8814 15.7083 10.5 15.7083C9.1187 15.7083 7.79394 15.1595 6.81719 14.1828C5.84044 13.206 5.29171 11.8813 5.29171 10.4999C5.29171 9.11858 5.84044 7.79382 6.81719 6.81707C7.79394 5.84032 9.1187 5.29158 10.5 5.29158ZM10.5 7.37492C9.67124 7.37492 8.87638 7.70416 8.29033 8.29021C7.70428 8.87626 7.37504 9.67112 7.37504 10.4999C7.37504 11.3287 7.70428 12.1236 8.29033 12.7096C8.87638 13.2957 9.67124 13.6249 10.5 13.6249C11.3288 13.6249 12.1237 13.2957 12.7097 12.7096C13.2958 12.1236 13.625 11.3287 13.625 10.4999C13.625 9.67112 13.2958 8.87626 12.7097 8.29021C12.1237 7.70416 11.3288 7.37492 10.5 7.37492Z"
                            fill="#F2F2F2" />
                    </svg>

                </button>
            </div>

        </div>
    </footer>
</template>

<style>
.slide-down-enter-active {
    transition-delay: 50ms;
    transition: all 0.3s ease;
}

.slide-down-leave-active {
    transition: all 0.5s ease;
}

.slide-down-enter {
    opacity: 0;
    transform: translateY(-20px);
}

.slide-down-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-down-leave {
    opacity: 1;
    transform: translateY(0);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.dropdown {
    left: 0;
    right: auto;
    top: 3rem;
}

.shopdropdown__txt {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #051C2C;
}

#linkDropdown .absolute.left-0 {
    left: 0;
    top: 100%;
    /* Add this line to position the sublinks below the "Shop" link */
}

#linkDropdown .absolute.mt-2 {
    margin-top: 0.5rem;
}


/* Add the following styles to push the subsequent links downward */
.push-downward {
    position: relative;
    top: 2rem;
    /* Adjust this value as needed */
}

.footer__txt1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
}

.footer__txt2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    color: #FFFFFF;
}

.badge {
    @apply absolute top-0 right-0 -mt-1 -mr-1 px-1 text-xs font-semibold text-white bg-red-500 rounded-full;
}
</style>
