import type {
  Player
} from '@/types'

export default (): Player => {
  return Math.random() < 0.5 ? 'x' : 'o'
}
