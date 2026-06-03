import GAME_CONSTANTS from '@/constants/GAME_CONSTANTS.ts'
import getRandomPlayer from '@/utils/getRandomPlayer.ts'
import getCellSymbol from '@/utils/getCellSymbol.ts'
import usePlayers from '@/composables/usePlayers.ts'
import { ref, computed } from 'vue'
import type {
  Cell,
  Player
} from '@/types'

export default () => {
  // Init
  const {
    players
  } = usePlayers()

  // Constants
  const board = ref<Cell[]>(Array(9).fill(null))
  const currentPlayer = ref<Player>(getRandomPlayer())

  const winner = computed<Player | null>(() => {
    for (const [a, b, c] of GAME_CONSTANTS.winningLines) {
      const cell = board.value[a]

      if (cell && cell === board.value[b] && cell === board.value[c]) {
        return cell
      }
    }

    return null
  })
  const isDraw = computed(() => board.value.every(Boolean) && !winner.value)
  const isGameOver = computed(() => Boolean(winner.value || isDraw.value))

  const message = computed(() => {
    if (winner.value) {
      return `${players[winner.value].value} wins!`
    }

    if (isDraw.value) {
      return 'All cells are filled, but no winner!'
    }
    return `It is ${players[currentPlayer.value].value} turn`
  })

  // Methods
  function switchPlayer() {
    currentPlayer.value = currentPlayer.value === 'x' ? 'o' : 'x'
  }

  function makeMove(index: number) {
    if (isGameOver.value || board.value[index]) {
      return
    }
    board.value[index] = currentPlayer.value

    if (!isGameOver.value) {
      return switchPlayer()
    }
  }

  function reset() {
    board.value = Array(9).fill(null)
    currentPlayer.value = getRandomPlayer()
  }

  return {
    board,
    currentPlayer,
    winner, isDraw, isGameOver, message,
    getCellSymbol, makeMove, reset
  }
}
