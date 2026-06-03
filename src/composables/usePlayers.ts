import { ref, computed } from 'vue'

const p1Name = ref('')
const p2Name = ref('')

const defaultNames = {
  x: 'Player №1',
  o: 'Player №2'
} as const

export default () => {
  const players = {
    x: computed(() => p1Name.value.trim() || defaultNames.x),
    o: computed(() => p2Name.value.trim() || defaultNames.o)
  }

  return {
    p1Name,
    p2Name,
    players
  }
}
