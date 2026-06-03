<script setup lang="ts">
import { useId } from 'vue'
import type {
  IBaseInput
} from '@/types'

const {
  id,
  name,
  type = 'text',
  label,
  placeholder,
  disabled = false,
  readonly = false,
  autocomplete = 'off'
} = defineProps<IBaseInput>()

const emit = defineEmits<{
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

const model = defineModel<string | number | null>({
  required: true
})

// Constants
const idx = id ?? useId()
</script>

<template>
  <div :class="['inputWrapper']">
    <label
      v-if="label"
      :for="idx"
      class="inputWrapper__label"
    >
      {{ label }}
    </label>

    <input
      v-model="model"

      :id="idx"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      class="inputWrapper__input"

      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    >
  </div>
</template>
