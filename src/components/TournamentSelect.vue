<template>
  <div>
    <v-select
      v-model="selected"
      :items="items"
      item-title="label"
      item-value="value"
      label="Select Tournament"
      dense
      outlined
      @update:modelValue="emitSelection"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

interface Tournament {
  TournamentID: number
  Name: string
  StartDate?: string
  EndDate?: string
  IsOver?: boolean
}

const selected = ref<number | null>(null)
const tournaments = ref<Tournament[]>([])

const items = computed(() =>
  tournaments.value.map((t) => ({
    label: `${t.Name} (${t.StartDate ? t.StartDate.slice(0, 10) : 'TBD'})`,
    value: t.TournamentID,
  })),
)

const emit = defineEmits<{
  (e: 'select', tournamentId: number | null): void
}>()

async function fetchTournaments() {
  try {
    // Fetch tournaments and current live tournament in parallel
    const [allTournamentsRes, currentTournamentRes] = await Promise.all([
      axios.get('http://localhost:3001/tournaments'),
      axios.get('http://localhost:3001/current-tournament').catch(() => null), // fallback if no current tournament
    ])

    const today = new Date()

    // Filter upcoming and active tournaments
    let filtered = (allTournamentsRes.data || [])
      .filter((t: Tournament) => {
        if (!t.StartDate) return false
        const start = new Date(t.StartDate)
        const end = t.EndDate ? new Date(t.EndDate) : null
        const isFuture = start >= today
        const isActive = start <= today && end !== null && end >= today
        return isFuture || isActive
      })
      .sort(
        (a: Tournament, b: Tournament) =>
          (a.StartDate ? +new Date(a.StartDate) : Infinity) -
          (b.StartDate ? +new Date(b.StartDate) : Infinity),
      )

    // If current tournament is missing, add it at the front
    const currentTournament = currentTournamentRes?.data
    if (
      currentTournament &&
      !filtered.some((t: any) => t.TournamentID === currentTournament.TournamentID)
    ) {
      filtered.unshift(currentTournament)
    }

    tournaments.value = filtered

    // Auto-select current tournament if available
    if (currentTournament) {
      selected.value = currentTournament.TournamentID
      emit('select', selected.value)
    }
  } catch (err) {
    console.error('Error fetching tournaments:', err)
  }
}

function emitSelection(val: number | null) {
  emit('select', val)
}

onMounted(fetchTournaments)
</script>
