<template>
  <div v-if="loading" class="p-4 bg-white rounded shadow">Loading tournament…</div>

  <div v-else-if="error" class="p-4 bg-red-50 text-red-700 rounded">Error: {{ error }}</div>

  <div v-else-if="tournament" class="bg-white shadow-lg rounded-lg p-6">
    <div class="flex items-start gap-4">
      <div>
        <h2 class="text-2xl font-bold">{{ tournament.Name }}</h2>
        <p class="text-sm text-gray-500">
          {{ venueLine }}
        </p>
        <p class="mt-2 text-sm">
          <strong>Dates:</strong> {{ formatDate(tournament.StartDate) }} →
          {{ formatDate(tournament.EndDate) }}
          <span v-if="status" :class="statusClass" class="ml-3 font-semibold">{{ status }}</span>
        </p>
      </div>
      <div class="ml-auto text-right space-y-1">
        <p class="text-sm"><strong>Par:</strong> {{ tournament.Par ?? 'TBD' }}</p>
        <p class="text-sm"><strong>Yards:</strong> {{ tournament.Yards ?? 'TBD' }}</p>
        <p class="text-sm"><strong>Purse:</strong> {{ prettyPurse }}</p>
        <p class="text-sm"><strong>Format:</strong> {{ tournament.Format ?? 'TBD' }}</p>
      </div>
    </div>

    <!-- Optional: rounds list, short description -->
    <div v-if="tournament.Rounds?.length" class="mt-4">
      <h3 class="font-semibold">Rounds</h3>
      <ul class="list-disc ml-5 text-sm">
        <li v-for="r in tournament.Rounds" :key="r.RoundID">
          Round {{ r.Number }} — {{ formatDate(r.Day) }}
        </li>
      </ul>
    </div>

    <!-- Buttons / actions -->
    <div class="mt-4 flex gap-2">
      <button
        @click="$emit('open-leaderboard', tournament.TournamentID)"
        class="px-3 py-1 border rounded"
      >
        Open Leaderboard
      </button>
      <button v-if="tournament.IsInProgress" class="px-3 py-1 border rounded bg-green-50">
        Live Mode
      </button>
    </div>
  </div>

  <div v-else class="p-4 text-gray-500">No tournament selected</div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import axios from 'axios'

interface Tournament {
  TournamentID: number
  Name: string
  Venue?: string
  City?: string
  State?: string
  Country?: string
  StartDate?: string
  EndDate?: string
  Par?: number
  Yards?: number
  Purse?: number
  Format?: string
  IsInProgress?: boolean
  IsOver?: boolean
  Rounds?: Array<{ RoundID: number; Number?: number; Day?: string }>
}

const props = defineProps<{
  tournamentId: number | null
}>()

const emit = defineEmits<{
  (e: 'open-leaderboard', tournamentId: number): void
}>()

const tournament = ref<Tournament | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const fetchTournament = async (id: number) => {
  loading.value = true
  error.value = null
  tournament.value = null
  try {
    const { data } = await axios.get(`http://localhost:3001/tournament/${id}`)
    tournament.value = data
  } catch (err: any) {
    console.error('fetchTournament error', err)
    error.value = err?.response?.data?.error || err.message || 'Failed to load tournament'
  } finally {
    loading.value = false
  }
}

watch(
  () => props.tournamentId,
  (v) => {
    if (v === null) {
      tournament.value = null
      error.value = null
      loading.value = false
      return
    }
    fetchTournament(v)
  },
  { immediate: true },
)

function formatDate(dt?: string) {
  if (!dt) return 'TBD'
  return new Date(dt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const venueLine = computed(() => {
  if (!tournament.value) return ''
  const t = tournament.value
  const parts = [t.Venue, t.City, t.State || t.Country].filter(Boolean)
  return parts.join(' — ')
})

const status = computed(() => {
  if (!tournament.value) return ''
  if (tournament.value.IsInProgress) return 'In Progress'
  if (tournament.value.IsOver) return 'Completed'
  return 'Upcoming'
})

const statusClass = computed(() => {
  if (!tournament.value) return ''
  if (tournament.value.IsInProgress) return 'text-green-600'
  if (tournament.value.IsOver) return 'text-gray-500'
  return 'text-blue-600'
})

const prettyPurse = computed(() => {
  if (!tournament.value?.Purse) return 'TBD'
  return `$${Number(tournament.value.Purse).toLocaleString()}`
})
</script>

<style scoped></style>
