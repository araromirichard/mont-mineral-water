<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-neutral-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="shrink-0 flex items-center">
                <Link href="#">
                <ApplicationLogo class="block h-14 w-auto fill-current text-gray-800" />
                </Link>
            </div>
            <div class="flex md:order-2 space-x-2">
                <button @click="handleOpenCart"
                    class="p-2 hover:bg-neutral-100 rounded-full transition duration-75 ease-in">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.28052 17.5L3.80251 9.5H21.1975L19.7195 17.5H5.28052Z" stroke="#051C2C" stroke-width="3"
                            stroke-linejoin="round" />
                        <circle cx="6.94937" cy="21.8798" r="1.94937" fill="#051C2C" />
                        <circle cx="17.9874" cy="21.8798" r="1.94937" fill="#051C2C" />
                        <path
                            d="M3.46535 1.67945C3.28832 0.870164 2.48875 0.357618 1.67945 0.53465C0.870164 0.711682 0.357618 1.51125 0.53465 2.32055L3.46535 1.67945ZM6.96535 17.6795L3.46535 1.67945L0.53465 2.32055L4.03465 18.3205L6.96535 17.6795Z"
                            fill="#051C2C" />
                    </svg>
                </button>
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
                    <div v-if="showDropdown" class="absolute right-12 mt-1 w-72 md:w-3/12 bg-white rounded shadow-md z-10">
                        <div class="px-4 py-1 dropdown-content text-primary-500">
                            <div class="flex items-center justify-between w-full">
                                <p class="font-semibold text-xl text-primary-500">Nshyria Owens</p>
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
                            <div class="space-y-2">
                                <p class="">Profile</p>
                                <p class="text-gray-600">Purchase History</p>
                            </div>
                            <div class="border-t border-neutrals-200">
                                <p class=" text-left py-2 mt-2 text-sm text-neutrals-700 cursor-pointer rounded">
                                    Sign out
                                </p>
                            </div>
                        </div>

                    </div>
                </transition>
                <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                    class="inline-flex items-center sm:hidden justify-center p-2 rounded-md text-neutral-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{
                                hidden: showingNavigationDropdown,
                                'inline-flex': !showingNavigationDropdown,
                            }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{
                                hidden: !showingNavigationDropdown,
                                'inline-flex': showingNavigationDropdown,
                            }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <!-- <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        Dashboard
                    </NavLink> -->
                    <NavLink href="#">
                        Shop
                    </NavLink>
                    <NavLink href="#">
                        Contact Us
                    </NavLink>
                    <NavLink href="#" >
                        About Mont
                    </NavLink>
                </div>

            </div>
        </div>
        <!-- Responsive Navigation Menu -->
        <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
            <div class="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink href="#">
                    Shop
                </ResponsiveNavLink>
                <ResponsiveNavLink href="#">
                    Contact us
                </ResponsiveNavLink>
                <ResponsiveNavLink href="#">
                    About Mont
                </ResponsiveNavLink>
            </div>

            <!-- Responsive Settings Options -->
            <div class="pt-4 pb-1 border-t border-gray-200">
                <div class="px-4">
                    <div class="font-medium text-base text-gray-800">
                        {{ $page.props.auth.user.name }}
                    </div>
                    <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                </div>

                <div class="mt-3 space-y-1">
                    <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                    <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    </nav>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
