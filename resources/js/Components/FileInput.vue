<script setup>
import { onMounted, ref, defineEmits } from 'vue';

defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
    accept: {
        type: String,
        default: 'image/*',
    },
    multiple: {
        type: Boolean,
        default: true,
    }
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

const handleChange = (event) => {
    const files = Array.from(event.target.files);
    const images = files.filter(file => file.type.startsWith('image/'));
    emit('update:modelValue', [...modelValue, ...images]);
};

</script>

<template>
    <input type="file" name="file[]" :accept="accept" :multiple="multiple" @change="$emit('update:modelValue', $event.target.files)"
        ref="input" class="border-transparent border-none focus:border-none" />
</template>

