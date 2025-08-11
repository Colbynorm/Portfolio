<template>
  <div>
    <!-- Loading -->
    <v-card v-if="loading" class="pa-4" outlined> Loading tournament… </v-card>

    <!-- Error -->
    <v-card v-else-if="error" class="pa-4" color="red lighten-5" outlined>
      <span class="red--text">Error: {{ error }}</span>
    </v-card>

    <!-- Tournament Info -->
    <v-card v-else-if="tournament" class="pa-6" outlined>
      <v-card-title class="d-flex justify-space-between align-start">
        <div>
          <div class="text-h5 font-weight-bold">{{ tournament.Name }}</div>
          <div class="text-body-2 grey--text">{{ venueLine }}</div>
          <div class="mt-2 text-body-2">
            <strong>Dates:</strong>
            {{ formatDate(tournament.StartDate) }} →
            {{ formatDate(tournament.EndDate) }}
            <span v-if="status" :class="statusClass" class="ml-3 font-weight-medium">
              {{ status }}
            </span>
          </div>
        </div>
        <div class="text-right">
          <div class="text-body-2"><strong>Par:</strong> {{ tournament.Par ?? 'TBD' }}</div>
          <div class="text-body-2"><strong>Yards:</strong> {{ tournament.Yards ?? 'TBD' }}</div>
          <div class="text-body-2"><strong>Purse:</strong> {{ prettyPurse }}</div>
          <div class="text-body-2"><strong>Format:</strong> {{ tournament.Format ?? 'TBD' }}</div>
        </div>
      </v-card-title>

      <v-divider class="my-4"></v-divider>

      <!-- Rounds -->
      <v-card-text v-if="tournament.Rounds?.length">
        <div class="text-subtitle-2 font-weight-medium mb-2">Rounds</div>
        <v-list dense>
          <v-list-item v-for="r in tournament.Rounds" :key="r.RoundID">
            Round {{ r.Number }} — {{ formatDate(r.Day) }}
          </v-list-item>
        </v-list>
      </v-card-text>

      <!-- Leaderboard -->
      <v-dialog v-model="showLeaderboard" max-width="600">
        <v-card>
          <v-card-title class="headline">Leaderboard for {{ tournament?.Name }}</v-card-title>
          <v-card-text>
            <template v-if="loadingLeaderboard">Loading leaderboard...</template>
            <template v-else-if="leaderboardError">
              <div class="red--text">{{ leaderboardError }}</div>
            </template>
            <template v-else-if="leaderboard.length">
              <v-list dense>
                <v-list-item v-for="player in leaderboard" :key="player.PlayerID">
                  <v-list-item-title>{{ player.Name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Score: {{ player.Score }}, Position: {{ player.Position }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </template>
            <template v-else>
              <div>No leaderboard data available.</div>
            </template>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="showLeaderboard = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Actions -->
      <v-card-actions>
        <v-btn color="primary" @click="openLeaderboard"> Open Leaderboard </v-btn>
        <v-btn v-if="tournament.IsInProgress" color="green lighten-3" text> Live Mode </v-btn>
      </v-card-actions>
    </v-card>

    <!-- No Selection -->
    <v-card v-else class="pa-4" outlined>
      <span class="grey--text">No tournament selected</span>
    </v-card>
  </div>
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

const showLeaderboard = ref(false)

function openLeaderboard() {
  if (tournament.value?.TournamentID) {
    emit('open-leaderboard', tournament.value.TournamentID)
    console.log(tournament.value.TournamentID)
    showLeaderboard.value = true
  }
}

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

const leaderboard = ref<any[]>([])
const loadingLeaderboard = ref(false)
const leaderboardError = ref<string | null>(null)

async function fetchLeaderboard(id: number) {
  loadingLeaderboard.value = true
  leaderboardError.value = null
  leaderboard.value = []

  try {
    const { data } = await axios.get(`http://localhost:3001/leaderboard/${id}`)
    leaderboard.value = data
  } catch (err: any) {
    console.error('Error fetching leaderboard:', err)
    leaderboardError.value =
      err?.response?.data?.error || err.message || 'Failed to load leaderboard'
  } finally {
    loadingLeaderboard.value = false
  }
}

watch(
  () => props.tournamentId,
  (id) => {
    if (id === null) {
      leaderboard.value = []
      leaderboardError.value = null
      loadingLeaderboard.value = false
      return
    }
    fetchLeaderboard(id)
  },
  { immediate: true },
)

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
