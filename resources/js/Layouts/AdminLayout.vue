<template>
    <ToastMessageList />

    <!-- Mobile backdrop -->
    <Transition name="fade">
        <div
            v-if="showingNavigationDropdown"
            class="fixed inset-0 z-30 sm:hidden bg-black/60"
            @click="showingNavigationDropdown = false"
        />
    </Transition>

    <!-- Top bar (full width) -->
    <header class="fixed top-0 left-0 right-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 justify-between">
        <div class="flex items-center gap-3">
            <!-- Mobile hamburger -->
            <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="sm:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
            >
                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <Link :href="route('dashboard')">
                <ApplicationLogo class="block h-10 w-auto" />
            </Link>
        </div>

        <!-- Page header slot + user dropdown -->
        <div class="flex items-center gap-4 flex-1 justify-end">
            <div class="flex-1 sm:ml-6">
                <slot name="header" />
            </div>
            <Dropdown align="right" width="48">
                <template #trigger>
                    <button type="button" class="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition duration-150">
                        <div class="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {{ $page.props.auth.user.first_name.charAt(0).toUpperCase() }}
                        </div>
                        <span class="hidden sm:block font-medium">{{ $page.props.auth.user.first_name }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </template>
                <template #content>
                    <div class="px-4 py-2 border-b border-gray-100">
                        <p class="text-sm font-semibold text-gray-800">{{ $page.props.auth.user.first_name }} {{ $page.props.auth.user.last_name }}</p>
                        <p class="text-xs text-gray-500 truncate">{{ $page.props.auth.user.email }}</p>
                    </div>
                    <DropdownLink :href="route('profile.edit')">Profile</DropdownLink>
                    <DropdownLink :href="route('logout')" method="post" as="button">Log Out</DropdownLink>
                </template>
            </Dropdown>
        </div>
    </header>

    <!-- Sidebar -->
    <aside
        class="fixed top-16 left-0 z-20 w-64 flex flex-col bg-primary-500 transition-transform duration-300 ease-in-out"
        :class="showingNavigationDropdown ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'"
        style="height: calc(100vh - 4rem);"
        aria-label="Sidebar"
    >
        <!-- Nav links -->
        <nav class="flex-1 px-3 py-5 overflow-y-auto space-y-0.5">
            <p class="px-3 mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Main</p>

            <SideNavLinks :href="route('admin.index')" :active="route().current('admin.index')">
                <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span class="ml-3">Dashboard</span>
            </SideNavLinks>

            <p class="px-3 mt-5 mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Manage</p>

            <SideNavLinks :href="route('admin.users.index')" :active="route().current('admin.users.index')">
                <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span class="ml-3">Users</span>
            </SideNavLinks>

            <SideNavLinks :href="route('admin.products.index')" :active="route().current('admin.products.index')">
                <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                </svg>
                <span class="ml-3">Products</span>
            </SideNavLinks>

            <SideNavLinks :href="route('admin.orders.index')" :active="route().current('admin.orders.index')">
                <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>
                <span class="ml-3">Orders</span>
            </SideNavLinks>
        </nav>

        <!-- Bottom: storefront link -->
        <div class="p-3 border-t border-white/10">
            <Link
                :href="route('homepage')"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm transition duration-150"
            >
                <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <span class="ml-3">View Storefront</span>
            </Link>
        </div>
    </aside>

    <!-- Main content -->
    <main class="sm:ml-64 pt-16 min-h-screen bg-gray-50">
        <slot />
    </main>
</template>

<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import ToastMessageList from '@/Components/ToastMessageList.vue';
import { Link } from '@inertiajs/vue3';
import SideNavLinks from '@/Components/SideNavLinks.vue';

const showingNavigationDropdown = ref(false);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
