<script setup lang="ts">
import type {
  IBaseButton
} from '@/types'

const {
  type = 'button',
  disabled = false
} = defineProps<IBaseButton>()

const emit = defineEmits<{
  (e: 'click', event: PointerEvent): void
}>()

// Init
// Constants
// Methods
function handleClick(e: PointerEvent) {
  if (disabled) {
    return
  }
  emit('click', e)
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="baseButton"

    @click="handleClick"
  >
    <slot name="left" />
    <slot />
    <slot name="right" />
  </button>
</template>
