import { ref, computed } from 'vue'

const p1Name = ref('')
const p2Name = ref('')

export default () => {
  const players = {
    x: computed(() => p1Name.value.trim() || 'Player №1'),
    o: computed(() => p2Name.value.trim() || 'Player №2')
  }

  return {
    players,
    p1Name, p2Name
  }
}
