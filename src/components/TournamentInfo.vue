<template>
  <div>
    <!-- Loading -->
    <v-card v-if="loading" class="pa-4" outlined> Loading tournament… </v-card>

    <!-- Error -->
    <v-card v-else-if="error" class="pa-4" color="red lighten-5" outlined>
      <span class="red--text">Error: {{ error }}</span>
    </v-card>

    <!-- Tournament Info -->
    <v-card v-else-if="tournamentData" class="pa-6" outlined>
      <v-card-title class="d-flex justify-space-between align-start">
        <div>
          <div class="text-h5 font-weight-bold">{{ tournamentData.Name }}</div>
          <div class="text-body-2 grey--text">{{ venueLine }}</div>
          <div class="mt-2 text-body-2">
            <strong>Dates:</strong>
            {{ formatDate(tournamentData.StartDate) }} →
            {{ formatDate(tournamentData.EndDate) }}
            <span v-if="status" :class="statusClass" class="ml-3 font-weight-medium">
              {{ status }}
            </span>
          </div>
        </div>
        <div class="text-right">
          <div class="text-body-2"><strong>Par:</strong> {{ tournamentData.Par ?? 'TBD' }}</div>
          <div class="text-body-2"><strong>Yards:</strong> {{ tournamentData.Yards ?? 'TBD' }}</div>
          <div class="text-body-2"><strong>Purse:</strong> {{ prettyPurse }}</div>
          <div class="text-body-2">
            <strong>Format:</strong> {{ tournamentData.Format ?? 'TBD' }}
          </div>
        </div>
      </v-card-title>

      <v-divider class="my-4" />

      <!-- Rounds -->
      <v-card-text v-if="tournamentData.Rounds?.length">
        <div class="text-subtitle-2 font-weight-medium mb-2">Rounds</div>
        <v-list dense>
          <v-list-item v-for="r in tournamentData.Rounds" :key="r.RoundID">
            Round {{ r.Number }} — {{ formatDate(r.Day) }}
          </v-list-item>
        </v-list>
      </v-card-text>

      <!-- Actions -->
      <v-card-actions>
        <v-btn
          v-if="tournamentData?.IsInProgress"
          :color="liveMode ? 'red' : 'green'"
          @click="toggleLiveMode"
        >
          {{ liveMode ? 'Stop Live Mode' : 'Start Live Mode' }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Leaderboard Dialog -->
    <v-dialog v-model="showLeaderboard" max-width="600px" persistent>
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Leaderboard — {{ tournamentData?.Name }}</span>
          <v-btn icon @click="stopLiveMode">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider />

        <v-card-text>
          <div v-if="loadingLeaderboard">Loading leaderboard…</div>
          <div v-else-if="leaderboardError" class="red--text">Error: {{ leaderboardError }}</div>
          <v-list v-else>
            <v-list-item v-for="player in leaderboard" :key="player.PlayerID">
              <v-list-item-title
                >{{ player.Rank }} . {{ player.Name }} {{ player.TotalScore }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="primary" @click="stopLiveMode">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onBeforeUnmount } from 'vue'
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

interface LeaderboardEntry {
  PlayerID: number
  Rank: number
  Name: string
  TotalScore: string | number
}

const props = defineProps<{
  tournamentId: number | null
}>()

// State
const tournamentData = ref<Tournament | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const showLeaderboard = ref(false)
const leaderboard = ref<LeaderboardEntry[]>([])
const loadingLeaderboard = ref(false)
const leaderboardError = ref<string | null>(null)

const liveMode = ref(false)
let liveInterval: ReturnType<typeof setInterval> | null = null

// Fetch Tournament
const fetchTournamentData = async (id: number) => {
  loading.value = true
  error.value = null
  tournamentData.value = null
  try {
    const res = await fetch(`http://localhost:3001/tournament/${id}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    tournamentData.value = await res.json()
  } catch (err: any) {
    console.error('Error fetching tournament:', err)
    error.value = err.message || 'Failed to load tournament'
  } finally {
    loading.value = false
  }
}

// Fetch Leaderboard
async function fetchLeaderboard(id: number) {
  loadingLeaderboard.value = true
  leaderboardError.value = null
  leaderboard.value = []

  try {
    const { data } = await axios.get(`http://localhost:3001/leaderboard/${id}`)
    // Grab just the Players array
    leaderboard.value = data.Players ?? []
    console.log(leaderboard.value)
  } catch (err: any) {
    console.error('Error fetching leaderboard:', err)
    leaderboardError.value =
      err?.response?.data?.error || err.message || 'Failed to load leaderboard'
  } finally {
    loadingLeaderboard.value = false
  }
}

// Watchers
watch(
  () => props.tournamentId,
  (id) => {
    if (id) {
      fetchTournamentData(id)
    } else {
      tournamentData.value = null
      error.value = null
    }
  },
  { immediate: true },
)

// Live Mode Toggle
const toggleLiveMode = () => {
  if (!tournamentData.value) return

  liveMode.value = !liveMode.value

  if (liveMode.value) {
    // Open leaderboard and start polling
    showLeaderboard.value = true
    fetchLeaderboard(tournamentData.value.TournamentID)
    liveInterval = setInterval(() => {
      fetchLeaderboard(tournamentData.value!.TournamentID)
    }, 30000)
  } else {
    // Stop polling
    stopLiveMode()
  }
}

const stopLiveMode = () => {
  liveMode.value = false
  showLeaderboard.value = false
  if (liveInterval) {
    clearInterval(liveInterval)
    liveInterval = null
  }
}

// Cleanup on unmount
onBeforeUnmount(() => {
  if (liveInterval) clearInterval(liveInterval)
})

// Utils
function formatDate(dt?: string) {
  if (!dt) return 'TBD'
  return new Date(dt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const venueLine = computed(() => {
  if (!tournamentData.value) return ''
  const t = tournamentData.value
  return [t.Venue, t.City, t.State || t.Country].filter(Boolean).join(' — ')
})

const status = computed(() => {
  if (!tournamentData.value) return ''
  if (tournamentData.value.IsInProgress) return 'In Progress'
  if (tournamentData.value.IsOver) return 'Completed'
  return 'Upcoming'
})

const statusClass = computed(() => {
  if (!tournamentData.value) return ''
  if (tournamentData.value.IsInProgress) return 'text-green-600'
  if (tournamentData.value.IsOver) return 'text-gray-500'
  return 'text-blue-600'
})

const prettyPurse = computed(() => {
  if (!tournamentData.value?.Purse) return 'TBD'
  return `$${Number(tournamentData.value.Purse).toLocaleString()}`
})
</script>
