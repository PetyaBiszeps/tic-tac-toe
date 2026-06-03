<script setup lang="ts">
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
  <h1>{{ message }}</h1>

  <div>
    <div class="gameField">
      <div class="wrapper">
        <div
          v-for="(cell, index) in board"
          :key="index"
          class="cell"
          @click="makeMove(index)"
        >
          {{ cell === 'x' ? 'X' : cell === 'o' ? 'O' : '' }}
        </div>
      </div>
    </div>

    <div class="buttonsDiv">
      <button
        class="resetButton"
        type="reset"
        @click="reset"
      >
        Reset
      </button>
      <button
        class="quitButton"
        type="button"
        @click="quit"
      >
        Quit
      </button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.gameField {
  border-radius: 0.75rem;
  background: var(--bg-welcome);
  border: 2px solid var(--border);
  padding: clamp(0rem, 1.25vw, 1.25rem);
}

.wrapper {
  display: grid;
  border-radius: 1rem;
  grid-gap: clamp(0.5rem, 1vw, 2rem);
  grid-template-columns: repeat(3, 1fr);
  padding: clamp(0.25rem, 1.25vw, 1.25rem);
}

.cell {
  width: 6rem;
  height: 6rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-size: 6rem;
  border-radius: 1rem;
  border: 2px solid var(--border);
}

.cell:hover {
  animation: cellAnimation 0.15s linear 1 normal forwards;
}

@keyframes cellAnimation {
  from {
    background: white;
  }

  to {
    background: var(--bg-hover);
  }
}

.buttonsDiv {
  display: flex;
  justify-content: space-between;
}

button {
  display: block;
  cursor: pointer;
  font-weight: bold;
  color: var(--text);
  font-size: 1.5rem;
  padding: 0.5rem 4rem;
  border-radius: 0.35rem;
  background: var(--bg-button);
  border: 2px solid var(--border);
  margin-top: clamp(0.4rem, 1vw, 1.25rem);
}

.resetButton:hover {
  background: var(--bg-hover2);
}

.quitButton:hover {
  background: var(--bg-hover);
}
</style>
