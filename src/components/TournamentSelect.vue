<template>
  <div>
    <label for="tournament" class="block font-semibold mb-1">Select Tournament</label>
    <select
      id="tournament"
      class="w-full p-2 border rounded"
      v-model="selected"
      @change="emitSelection"
    >
      <option value="" disabled>Select one...</option>
      <option
        v-for="tourney in tournaments"
        :key="tourney.TournamentID"
        :value="tourney.TournamentID"
      >
        {{ tourney.Name }} ({{ tourney.StartDate.slice(0, 10) }})
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Tournament {
  TournamentID: number
  Name: string
  StartDate: string
}

const selected = ref('')
const tournaments = ref<Tournament[]>([])

const emit = defineEmits<{
  (e: 'select', tournamentId: string): void
}>()

async function fetchTournaments() {
  try {
    const { data } = await axios.get('http://localhost:3001/tournaments')
    const today = new Date()

    console.log(tournaments)

    tournaments.value = data.filter((t: Tournament) => {
      const endDate = new Date(t.EndDate)
      return !t.IsOver || endDate >= today
    })

    tournaments.value.sort(
      (a, b) => new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime(),
    )
  } catch (err) {
    console.error('Error fetching tournaments:', err)
  }
}

function emitSelection() {
  emit('select', selected.value)
}

onMounted(fetchTournaments)
</script>
