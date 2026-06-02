import { p1Name, p2Name } from '@/components/WelcomeView/WelcomeViewData.ts'
import { computed } from 'vue'

export enum defaultNames {
  p1 = 'Player №1',
  p2 = 'Player №2'
}

export const players = {
  p1: computed(() => p1Name.value || defaultNames.p1),
  p2: computed(() => p2Name.value || defaultNames.p2)
}

export const result = {
  winner: (player: string) => `${player} wins!`,
  noWinner: 'All cells are filled, but no winner!'
}
