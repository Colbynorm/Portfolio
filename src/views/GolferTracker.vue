<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-2xl font-bold">Golf Tracker 🏌️‍♂️</h1>

    <div class="p-6">
      <h1 class="text-xl font-bold mb-4">Golf Tracker (Test Mode) 🧪</h1>
      <TournamentSelect @select="onTournamentSelect" />
    </div>

    <GolferSelect
      v-if="selectedTournament"
      :tournament-id="selectedTournament"
      @select="onGolferSelect"
    />

    <GolferInfo
      v-if="selectedGolfer"
      :golfer-id="selectedGolfer"
      :tournament-id="selectedTournament"
    />

    <Leaderboard v-if="selectedTournament" :tournament-id="selectedTournament" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TournamentSelect from '@/components/TournamentSelect.vue'
import GolferSelect from '@/components/GolferSelect.vue'
import GolferInfo from '@/components/GolferInfo.vue'
import Leaderboard from '@/components/Leaderboard.vue'

// store tournament id as number or null
const selectedTournament = ref<number | null>(null)
const selectedGolfer = ref<number | null>(null)

function onTournamentSelect(id: number | null) {
  // convert '' to null
  selectedTournament.value = id
  console.log('Selected Tournament ID:', selectedTournament.value)
  selectedGolfer.value = null
}

function onGolferSelect(id: number | '') {
  selectedGolfer.value = id === '' ? null : id
}
</script>
