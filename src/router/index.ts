import WelcomeView from '@/components/WelcomeView/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/components/GameView/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: WelcomeView },
    { path: '/game', name: 'Game', component: GameView }
  ]
})

export default router
