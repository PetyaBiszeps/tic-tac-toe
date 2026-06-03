<script setup lang="ts">
import usePlayers from '@/composables/usePlayers.ts'
import {
  useRouter
} from 'vue-router'

// Init
const router = useRouter()
const {
  p1Name,
  p2Name
} = usePlayers()

async function startGame() {
  await router.push('/game')
}
</script>

<template>
  <div>
    <h1>Welcome to Tic Tac Toe game!</h1>

    <label>
      <input
        v-model="p1Name"
        placeholder="Enter 'player №1' name"
        type="text"
      >
      <input
        v-model="p2Name"
        placeholder="Enter 'player №2' name"
        type="text"
      >
    </label>

    <button
      type="submit"
      @click="startGame"
    >
      Start
    </button>
  </div>
</template>

<style scoped>
div {
  margin: auto;
  border-radius: 0.75rem;
  background: var(--bg-welcome);
  border: 2px solid var(--border);
  padding: clamp(0rem, 1.25vw, 1.25rem);
}

h1 {
  color: var(--h1);
  text-align: center;
  margin-bottom: clamp(0.5rem, 1.25vw, 1.25rem);
}

label {
  gap: 0.75rem;
  display: flex;
  max-width: 36rem;
  flex-direction: column;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 0.35rem;
  border: 2px solid var(--border);
}

button {
  display: block;
  cursor: pointer;
  font-weight: bold;
  color: var(--text);
  font-size: 1.25rem;
  padding: 0.5rem 4rem;
  border-radius: 0.35rem;
  background: var(--bg-button);
  border: 2px solid var(--border);
  margin: clamp(0.4rem, 1vw, 1.25rem) auto auto;
}

button:hover {
  background: var(--bg-hover);
}
</style>
