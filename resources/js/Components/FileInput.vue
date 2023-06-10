<script setup>
import { onMounted, ref, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);
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

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus();
  }
});

const handleChange = (event, modelValue) => {
  const files = Array.from(event.target.files);
  const images = files.filter(file => file.type.startsWith('image/'));
  emit('update:modelValue', [...modelValue, ...images]);
};


</script>

<template>
  <input type="file" name="images[]" :accept="accept" :multiple="multiple" @change="event => handleChange(event, modelValue)"
    ref="input" class="border-transparent border-none focus:border-none" />
</template>
