import type {
  Player
} from '@/types'

export default {
  playerSymbols: {
    x: 'X',
    o: 'O'
  } as Record<Player, string>,
  winningLines: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
} as const
