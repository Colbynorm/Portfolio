<script setup lang="ts">
import { ref } from 'vue'
import TournamentSelect from '@/components/TournamentSelect.vue'
import GolferSelect from '@/components/GolferSelect.vue'
import GolferInfo from '@/components/GolferInfo.vue'
import Leaderboard from '@/components/Leaderboard.vue'

// store tournament id as number or null
const selectedTournament = ref<number | null>(null)
const selectedGolfer = ref<number | null>(null)

// Handler matches the emitted type from TournamentSelect: number | ''
function onTournamentSelect(id: number | '') {
  // convert '' to null
  selectedTournament.value = id === '' ? null : id
  console.log('Selected Tournament ID:', selectedTournament.value)
  selectedGolfer.value = null // reset on new tournament
}

// Handler for golfer — match whatever GolferSelect emits (number | '')
function onGolferSelect(id: number | '') {
  selectedGolfer.value = id === '' ? null : id
}
</script>
