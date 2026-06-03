<script setup lang="ts">
import type {
  ICommonBoard
} from '@/types'

const {
  title
} = defineProps<ICommonBoard>()
</script>

<template>
  <section class="commonBoard">
    <header
      v-if="$slots.header || title"
      class="commonBoard__header"
    >
      <slot name="header">
        <h1 class="commonBoard__header__title">
          {{ title }}
        </h1>
      </slot>
    </header>

    <main class="commonBoard__main">
      <slot />
    </main>

    <footer
      v-if="$slots.footer"
      class="commonBoard__footer"
    >
      <slot name="footer" />
    </footer>
  </section>
</template>
