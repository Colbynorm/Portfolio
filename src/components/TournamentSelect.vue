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

//tournaments from API
const tournaments = ref<Tournament[]>([])

const items = computed(() =>
  tournaments.value.map((t) => ({
    label: `${t.Name} (${t.StartDate ? t.StartDate.slice(0, 10) : 'TBD'})`,
    value: t.TournamentID,
    startDate: t.StartDate,
  })),
)

const emit = defineEmits<{
  (e: 'select', tournamentId: number | null): void
}>()

async function fetchTournaments() {
  try {
    const { data } = await axios.get('http://localhost:3001/tournaments')
    const today = new Date()

    tournaments.value = (data || [])
      .filter((t: Tournament) => {
        if (!t.StartDate) return false
        const start = new Date(t.StartDate)
        const end = t.EndDate ? new Date(t.EndDate) : null
        const isFuture = start >= today
        const isActive = start <= today && end !== null && end >= today
        return isFuture || isActive
      })
      .sort(
        (a: any, b: any) =>
          (a.StartDate ? +new Date(a.StartDate) : Infinity) -
          (b.StartDate ? +new Date(b.StartDate) : Infinity),
      )
  } catch (err) {
    console.error('Error fetching tournaments:', err)
  }
}

function emitSelection(val: number | null) {
  emit('select', val)
}

onMounted(fetchTournaments)
</script>
