<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
    }
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="border-none rounded-sm shadow-sm placeholder:capitalize placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest"
        :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)"
        ref="input" />
</template>
