<template>
  <div>
    <h1 class="p-6 mb-4">Golf Tournament Tracker</h1>

    <div class="p-6">
      <TournamentSelect style="width: 30rem" @select="onTournamentSelect" />
    </div>

    <TournamentInfo :tournament-id="selectedTournament" />
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
