import router from '@/router/router.ts'
import App from '@/App.vue'
import '@/styles/main.css'
import {
  createApp
} from 'vue'

createApp(App)
  .use(router)
  .mount('#app')
