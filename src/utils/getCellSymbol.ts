import GAME_CONSTANTS from '@/constants/GAME_CONSTANTS.ts'
import type {
  Cell
} from '@/types'

export default (cell: Cell) => {
  return cell ? GAME_CONSTANTS.playerSymbols[cell] : ''
}
