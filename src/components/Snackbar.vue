<template>
  <transition name="slide-fade">
    <div
      v-if="visible"
      class="snackbar text-white px-4 py-3 rounded-lg shadow-lg z-50"
      :style="{ backgroundColor: bgColor }"
    >
      <span v-if="props.color === 'success'"></span>
      <span v-else-if="props.color === 'error'"></span>
      <span v-else-if="props.color === 'warning'"></span>
      <span v-else></span>
      <span>{{ message }}</span>

      <v-btn variant="text" @click="closeSnackbar" icon="mdi-close"></v-btn>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  message: string
  color?: 'success' | 'error' | 'info' | 'warning'
}>()

const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    visible.value = newVal
  },
)

const closeSnackbar = () => {
  console.log(visible.value)
  visible.value = false
  emit('update:modelValue', false)
  console.log(visible.value)
}

const bgColor = computed(() => {
  switch (props.color) {
    case 'success':
      return '#22c55e'
    case 'error':
      return '#ef4444'
    case 'warning':
      return '#facc15'
    case 'info':
    default:
      return '#3b82f6'
  }
})
</script>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  font-weight: 600;
  font-size: 0.95rem;
}
</style>
