<template>
  <div class="golf-app">
    <!-- Header -->
    <header class="header">
      <h1 class="title">⛳ Golf Tournament Tracker</h1>
      <p class="subtitle">Follow tournaments, leaderboards, and live action.</p>
    </header>

    <!-- Main Content -->
    <main class="main">
      <!-- Tournament Selector -->
      <v-card class="selector-card" elevation="4">
        <v-card-title class="font-weight-bold text-lg"> 🎟️ Select a Tournament </v-card-title>
        <v-card-text>
          <TournamentSelect style="width: 100%" @select="onTournamentSelect" />
        </v-card-text>
      </v-card>

      <!-- Tournament Info -->
      <transition name="fade">
        <div v-if="selectedTournament" class="tournament-info">
          <TournamentInfo :tournament-id="selectedTournament" />
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TournamentSelect from '@/components/TournamentSelect.vue'
import TournamentInfo from '@/components/TournamentInfo.vue'

const selectedTournament = ref<number | null>(null)

function onTournamentSelect(id: number | null) {
  selectedTournament.value = id
  console.log('Selected Tournament ID:', selectedTournament.value)
}
</script>

<style scoped>
.golf-app {
  min-height: 100vh;
  background: linear-gradient(180deg, #e6f7f1 0%, #fdfdfd 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #43a047, #1b5e20);
  color: white;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.subtitle {
  margin-top: 0.5rem;
  opacity: 0.9;
  font-size: 1rem;
}

.main {
  margin-top: 2rem;
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.selector-card {
  border-radius: 16px;
  background: white;
}

.tournament-info {
  animation: popIn 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes popIn {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
