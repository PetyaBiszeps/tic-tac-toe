import WelcomeView from '@/views/WelcomeView.vue'
import GameView from '@/views/GameView.vue'
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'Home',
    component: WelcomeView
  }, {
    path: '/game',
    name: 'Game',
    component: GameView
  }]
})

export default router
