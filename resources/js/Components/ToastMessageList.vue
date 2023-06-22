<template>
    <TransitionGroup tag="div" enter-active-class="duration-500" enter-from-class="translate-x-full opacity-0"
        leave-active-class="duration-500" leave-to-class="translate-x-full opacity-0"
        class="fixed top-5 right-10 w-full max-w-2xl z-50 space-y-2">
        <ToastMessage v-for="(item, index) in toast.items" :key="item.key" :message="item.message" :type="item.type"
            @remove="remove(index)" />
    </TransitionGroup>
</template>

<script setup>
import ToastMessage from '@/Components/ToastMessage.vue';
import { router, usePage } from '@inertiajs/vue3';
import { onUnmounted } from 'vue';
import { ref } from 'vue';
import toast from '@/Stores/ToastStore.js';



const page = usePage();

let removeFinishEvenlListener = router.on('finish', () => {
    if (page.props.toast.info) {
        toast.add({ message: page.props.toast.info, type: 'info' });
    } else if (page.props.toast.error) {
        toast.add({ message: page.props.toast.error, type: 'error' });
    } else if (page.props.toast.success) {
        toast.add({ message: page.props.toast.success, type: 'success' });
    }
});

function remove(index) {
    toast.remove(index);
};

onUnmounted(() => removeFinishEvenlListener());
</script>
