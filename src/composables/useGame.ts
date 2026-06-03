import usePlayers from '@/composables/usePlayers.ts'
import {
  ref,
  computed
} from 'vue'

type Player = 'x' | 'o'
type Cell = Player | null

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
] as const

function getRandomPlayer(): Player {
  return Math.random() < 0.5 ? 'x' : 'o'
}

export default () => {
  const { players } = usePlayers()

  const board = ref<Cell[]>(Array(9).fill(null))
  const currentPlayer = ref<Player>(getRandomPlayer())

  const winner = computed<Player | null>(() => {
    for (const [a, b, c] of winningLines) {
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        return board.value[a]
      }
    }

    return null
  })

  const isDraw = computed(() => {
    return board.value.every(Boolean) && !winner.value
  })

  const isGameOver = computed(() => {
    return Boolean(winner.value || isDraw.value)
  })

  const message = computed(() => {
    if (winner.value) {
      return `${players[winner.value].value} wins!`
    }

    if (isDraw.value) {
      return 'All cells are filled, but no winner!'
    }

    return `It is ${players[currentPlayer.value].value} turn`
  })

  function makeMove(index: number) {
    if (isGameOver.value || board.value[index]) return

    board.value[index] = currentPlayer.value

    if (!isGameOver.value) {
      currentPlayer.value = currentPlayer.value === 'x' ? 'o' : 'x'
    }
  }

  function reset() {
    board.value = Array(9).fill(null)
    currentPlayer.value = getRandomPlayer()
  }

  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    isGameOver,
    message,
    makeMove,
    reset
  }
}
