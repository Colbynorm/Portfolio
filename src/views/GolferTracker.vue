<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-2xl font-bold">Golf Tracker</h1>

    <div class="p-6">
      <h1 class="text-xl font-bold mb-4">Golf Tracker (Test Mode)</h1>
      <TournamentSelect @select="onTournamentSelect" />
    </div>

    <TournamentInfo :tournament-id="selectedTournament" @open-leaderboard="openLeaderboard" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TournamentSelect from '@/components/TournamentSelect.vue'
import TournamentInfo from '@/components/TournamentInfo.vue'
const selectedTournament = ref<number | null>(null)

function openLeaderboard(id: number) {
  console.log('Open leaderboard for', id)
}

function onTournamentSelect(id: number | null) {
  selectedTournament.value = id
  console.log('Selected Tournament ID:', selectedTournament.value)
}
</script>
