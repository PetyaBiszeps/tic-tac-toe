import { players, result } from '@/components/GameView/Constants.ts'
import { ref, watch } from 'vue'
import router from '@/router'

class GameViewData {
  player = ref(Math.random() < 0.5 ? players.p1.value : players.p2.value)
  isGameOver = ref('')

  boardState = ref({
    aA: '',
    aB: '',
    aC: '',

    bA: '',
    bB: '',
    bC: '',

    cA: '',
    cB: '',
    cC: ''
  })

  constructor() {
    watch([players.p1, players.p2], () => {
      if (this.player.value !== players.p1.value && this.player.value !== players.p2.value) {
        this.player.value = Math.random() < 0.5 ? players.p1.value : players.p2.value
      }
    }, { immediate: true })
  };

  checkStatus = () => {
    const checkEmpties = Object.entries(this.boardState.value)
      .flatMap((entry) => entry[1])
      .filter(entry => entry === '')

    if (checkEmpties.length === 0) this.isGameOver.value = result.noWinner

    if (this.boardState.value.aA && this.boardState.value.aA === this.boardState.value.aB && this.boardState.value.aA === this.boardState.value.aC) this.isGameOver.value = this.player.value   // 1st row
    if (this.boardState.value.bA && this.boardState.value.bA === this.boardState.value.bB && this.boardState.value.bA === this.boardState.value.bC) this.isGameOver.value = this.player.value   // 2nd row
    if (this.boardState.value.cA && this.boardState.value.cA === this.boardState.value.cB && this.boardState.value.cA === this.boardState.value.cC) this.isGameOver.value = this.player.value   // 3rd row

    if (this.boardState.value.aA && this.boardState.value.aA === this.boardState.value.bA && this.boardState.value.aA === this.boardState.value.cA) this.isGameOver.value = this.player.value   // 1st column
    if (this.boardState.value.aB && this.boardState.value.aB === this.boardState.value.bB && this.boardState.value.aB === this.boardState.value.cB) this.isGameOver.value = this.player.value   // 2nd column
    if (this.boardState.value.aC && this.boardState.value.aC === this.boardState.value.bC && this.boardState.value.aC === this.boardState.value.cC) this.isGameOver.value = this.player.value   // 3rd column

    if (this.boardState.value.aA && this.boardState.value.aA === this.boardState.value.bB && this.boardState.value.aA === this.boardState.value.cC) this.isGameOver.value = this.player.value
    if (this.boardState.value.cA && this.boardState.value.cA === this.boardState.value.bB && this.boardState.value.cA === this.boardState.value.aC) this.isGameOver.value = this.player.value
  }

  handleReset = () => {
    this.boardState.value = {
      aA: '',
      aB: '',
      aC: '',
      bA: '',
      bB: '',
      bC: '',
      cA: '',
      cB: '',
      cC: ''
    }

    this.player = ref(Math.random() < 0.5 ? players.p1.value : players.p2.value)
    this.isGameOver.value = ''
  }

  handleClick = (key: 'aA' | 'aB' | 'aC' | 'bA' | 'bB' | 'bC' | 'cA' | 'cB' | 'cC') => {
    if (this.isGameOver.value) return
    if (this.boardState.value[key] !== '') return
    this.boardState.value[key] = this.player.value

    this.checkStatus()
    if (this.isGameOver.value) return
    this.player.value = this.player.value === players.p1.value ? players.p2.value : players.p1.value
  }

  handleMessage = () => {
    if (this.isGameOver.value === result.noWinner) return 'All cells are filled, but no winner!'
    if (this.isGameOver.value === players.p1.value || this.isGameOver.value === players.p2.value) return result.winner(this.player.value)

    return `It is ${this.player.value === players.p1.value ? players.p1.value : players.p2.value} turn`
  }

  handleQuit = async () => {
    this.handleReset()
    await router.push('/')
  }
}

export const GameView = new GameViewData()
