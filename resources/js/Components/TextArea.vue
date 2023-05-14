<template>
    <textarea
      class="border-gray-[#828282] focus:border-secondary-200 focus:ring-secondary-200 rounded-md shadow-sm placeholder:uppercase"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="textarea"
    ></textarea>
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
  