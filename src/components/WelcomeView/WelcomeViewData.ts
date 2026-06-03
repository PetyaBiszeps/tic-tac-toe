import router from '@/router/router.ts'
import {
  ref
} from 'vue'

export const p1Name = ref<string>()
export const p2Name = ref<string>()

export const handleNames = async () => {
  if (p1Name.value !== undefined && p2Name.value !== undefined) {
    await router.push('/game')
  } else {
    await router.push('/')
  }
}
