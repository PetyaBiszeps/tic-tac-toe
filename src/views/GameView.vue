<script setup lang="ts">
import CommonBoard from '@/components/common/CommonBoard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import useGame from '@/composables/useGame.ts'
import {
  useRouter
} from 'vue-router'

// Init
const router = useRouter()
const {
  board, message,
  makeMove, reset
} = useGame()

async function quit() {
  reset()
  await router.push('/')
}
</script>

<template>
  <section style="gap: 8px; display: flex; flex-direction: column">
    <header style="text-align: center">
      <h1>{{ message }}</h1>
    </header>

    <main>
      <CommonBoard>
        <template #default>
          <div class="grid">
            <div
              v-for="(cell, index) in board"
              :key="index"
              class="grid__cell"

              @click="makeMove(index)"
            >
              <span>{{ cell === 'x' ? 'X' : cell === 'o' ? 'O' : '' }}</span>
            </div>
          </div>
        </template>
      </CommonBoard>
    </main>

    <footer>
      <div style="gap: 8px; display: flex; justify-content: space-between">
        <BaseButton
          type="reset"
          @click="reset"
        >
          Reset
        </BaseButton>

        <BaseButton @click="quit">
          Quit
        </BaseButton>
      </div>
    </footer>
  </section>
</template>

<style scoped lang="scss">
.grid {
  gap: clamp(0.5rem, 1vw, 2rem);
  display: grid;
  padding: clamp(0.25rem, 1.25vw, 1.25rem);
  place-items: center;
  grid-template-columns: repeat(3, 1fr);

  &__cell {
    width: 6rem;
    height: 6rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    font-size: 6rem;
    border-radius: 1rem;
    border: 2px solid var(--border);

    &:hover {
      animation: cellAnimation 0.15s linear 1 normal forwards;
    }
  }
}
</style>
