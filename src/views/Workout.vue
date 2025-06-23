<template>
  <div class="workout-app">
    <v-container>
      <v-btn color="primary" @click="dialog = true">+ Add Workout</v-btn>
      <v-list>
        <v-list-item
          v-for="workout in workouts"
          :key="workout.id"
          class="mb-2"
          style="border-left: 5px solid #6c63ff"
        >
          <div class="workout-text">
            <div class="workout-title">{{ workout.name }} 💪</div>
            <div class="workout-subtitle">
              {{ workout.type }} – {{ workout.duration }} min on
              {{ new Date(workout.date).toLocaleString() }}
            </div>
          </div>
        </v-list-item>
      </v-list>

      <v-dialog v-model="dialog" max-width="500px" persistent>
        <v-card>
          <v-card-title>Add/Edit Workout</v-card-title>
          <v-card-text>
            <v-text-field v-model="form.name" label="Exercise Name" />
            <v-select
              v-model="form.type"
              :items="['Cardio', 'Strength', 'Mobility']"
              label="Type"
            />
            <v-text-field v-model="form.duration" type="number" label="Duration (min)" />
            <v-text-field v-model="form.date" label="Date/Time" type="datetime-local" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green" @click="saveWorkout">Save</v-btn>
            <v-btn @click="dialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <Snackbar v-model="snackbarVisible" :message="snackbarMessage" :color="snackbarColor" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Snackbar from '@/components/Snackbar.vue'

const snackbarVisible = ref(false)
const snackbarMessage = ref('')
const snackbarColor = ref<'success' | 'error' | 'info' | 'warning'>('info')

function showSnackbar(message: string, color: 'success' | 'error' | 'info' | 'warning' = 'info') {
  snackbarMessage.value = message
  snackbarVisible.value = true
  snackbarColor.value = color
}

interface WorkoutEntry {
  id: number
  name: string
  type: string
  duration: number
  date: string
}

const dialog = ref(false)

watch(dialog, (val) => {
  if (!val) {
    form.value = {
      name: '',
      type: '',
      duration: 0,
      date: '',
    }
  }
})

const form = ref({
  name: '',
  type: '',
  duration: 0,
  date: '',
})

const workouts = ref<WorkoutEntry[]>([])

let nextId = 1 // Simple incremental ID

function saveWorkout() {
  if (!form.value.name || !form.value.type || !form.value.date) {
    showSnackbar('Please fill in all required fields.', 'error')
    return
  }

  workouts.value.unshift({
    id: nextId++,
    name: form.value.name,
    type: form.value.type,
    duration: form.value.duration,
    date: form.value.date,
  })

  // Close dialog
  dialog.value = false

  // Reset form
  form.value = {
    name: '',
    type: '',
    duration: 0,
    date: '',
  }

  showSnackbar('Workout saved successfully!', 'success')
}
</script>

<style scoped>
.workout-app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

.workout-logger {
  background: linear-gradient(135deg, #1e1e2f, #272742);
  border-radius: 16px;
  color: white;
}

.glass-card {
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid lime;
  border-radius: 12px;
  padding: 12px;
}

.workout-text {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
}

.workout-title {
  font-weight: bold;
  font-size: 1.1rem;
  color: #ffffff;
}

.workout-subtitle {
  font-size: 0.9rem;
  color: #ccc;
}
</style>
