<template>
  <textarea
    class="border-none rounded-sm shadow-sm placeholder:capitalize placeholder:text-sm placeholder:text-neutral-300 placeholder:tracking-widest w-full"
    :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)"
    ref="textarea" :rows="rows"></textarea>
</template>
  
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
  },
  rows: {
    type: String,
    default: '3',
  }
});

defineEmits(['update:modelValue']);

const textarea = ref(null);

onMounted(() => {
  if (textarea.value.hasAttribute('autofocus')) {
    textarea.value.focus();
  }
});

defineExpose({ focus: () => textarea.value.focus() });
</script>
  