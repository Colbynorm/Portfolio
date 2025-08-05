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
        {{ tourney.Name }} ({{ tourney.StartDate ? tourney.StartDate.slice(0, 10) : 'TBD' }})
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
  StartDate?: string
  EndDate?: string
  IsOver?: boolean
  // add other fields you might use later (Venue, City, etc.)
}

const selected = ref<number | ''>('') // allow number or empty string
const tournaments = ref<Tournament[]>([])

const emit = defineEmits<{
  (e: 'select', tournamentId: number | ''): void
}>()

async function fetchTournaments() {
  try {
    const { data } = await axios.get('http://localhost:3001/tournaments')
    const today = new Date()

    // Debug log (optional)
    // console.log('raw tournaments', data);

    tournaments.value = (data || []).filter((t: Tournament) => {
      // If no start date, skip it
      if (!t.StartDate) return false

      const start = new Date(t.StartDate)
      const end = t.EndDate ? new Date(t.EndDate) : null

      // keep future events (start >= today) or currently active (start <= today <= end)
      const isFuture = start >= today
      const isActive = start <= today && end !== null && end >= today
      return isFuture || isActive
    })

    tournaments.value.sort((a, b) => {
      const aStart = a.StartDate ? new Date(a.StartDate).getTime() : Number.POSITIVE_INFINITY
      const bStart = b.StartDate ? new Date(b.StartDate).getTime() : Number.POSITIVE_INFINITY
      return aStart - bStart
    })
  } catch (err) {
    console.error('Error fetching tournaments:', err)
  }
}

function emitSelection() {
  emit('select', selected.value)
}

onMounted(fetchTournaments)
</script>
