<script setup lang="ts">
import CommonBoard from '@/components/common/CommonBoard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import usePlayers from '@/composables/usePlayers.ts'
import {
  useRouter
} from 'vue-router'

// Init
const router = useRouter()
const {
  p1Name,
  p2Name
} = usePlayers()

// Methods
async function startGame() {
  await router.push('/game')
}
</script>

<template>
  <CommonBoard title="Welcome to Tic Tac Toe game!">
    <template #default>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <BaseInput
          v-model="p1Name"
          placeholder="Enter 'player №1' name"
          name="player-one"
        />

        <BaseInput
          v-model="p2Name"
          placeholder="Enter 'player №2' name"
          name="player-two"
        />
      </div>
    </template>

    <template #footer>
      <BaseButton
        type="submit"
        @click="startGame"
      >
        Start
      </BaseButton>
    </template>
  </CommonBoard>
</template>
