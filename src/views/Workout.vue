<template>
  <div class="workout-app">
    <v-container>
      <v-btn color="primary" @click="dialog = true">+ Add Workout</v-btn>
      <v-list>
        <h2 class="section-title">My Workouts</h2>

        <transition-group name="fade" tag="div">
          <v-list-item
            v-for="workout in workouts"
            :key="workout.id"
            class="mb-2"
            style="border-left: 5px solid #6c63ff"
          >
            <div class="workout-item">
              <v-icon :icon="getWorkoutIcon(workout.type)" size="28" class="workout-icon" />
              <div class="workout-text">
                <div class="workout-title">{{ workout.name }}</div>
                <div class="workout-subtitle">
                  {{ workout.type }} – {{ workout.duration }} min on
                  {{ new Date(workout.date).toLocaleString() }}
                </div>
              </div>
            </div>
          </v-list-item>
        </transition-group>
      </v-list>

      <v-dialog v-model="dialog" max-width="500px" persistent>
        <v-card>
          <v-card-title>Add Workout</v-card-title>
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
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted } from 'vue'

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'workouts'))
  querySnapshot.forEach((doc) => {
    workouts.value.push({ id: doc.id, ...doc.data() } as unknown as WorkoutEntry)
  })
})

function getWorkoutIcon(type: string): string {
  switch (type.toLowerCase()) {
    case 'cardio':
      return 'mdi-run-fast'
    case 'strength':
      return 'mdi-dumbbell'
    case 'mobility':
      return 'mdi-yoga'
    default:
      return 'mdi-help-circle-outline'
  }
}

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

async function saveWorkout() {
  if (!form.value.name || !form.value.type || !form.value.date) {
    showSnackbar('Please fill in all required fields.', 'error')
    return
  }

  const newWorkout = {
    name: form.value.name,
    type: form.value.type,
    duration: form.value.duration,
    date: form.value.date,
    createdAt: new Date().toISOString(),
  }

  try {
    await addDoc(collection(db, 'workouts'), newWorkout)
    workouts.value.unshift({ ...newWorkout, id: Date.now() })
    dialog.value = false
    showSnackbar('Workout saved to Firebase!', 'success')
    form.value = { name: '', type: '', duration: 0, date: '' }
  } catch (err) {
    showSnackbar('Error saving workout.', 'error')
    console.error(err)
  }
}
</script>

<style scoped>
.workout-item {
  display: flex;
  align-items: center;
  gap: 12px; /* space between icon and text */
}

.workout-icon {
  flex-shrink: 0;
}

.workout-text {
  display: flex;
  flex-direction: column;
}

.section-title {
  text-align: center;
  padding: 5px;
  font-size: 2rem;
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.workout-app {
  min-height: 100vh;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  justify-content: center;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.v-btn {
  font-weight: bold;
  letter-spacing: 1px;
}

.v-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(108, 99, 255, 0.6);
}

.v-card {
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.v-card-title {
  text-align: center;
  padding: 5px;
  font-size: 2rem;
  background: linear-gradient(90deg, #6c63ff, #a044ff);
}

.workout-text {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.v-list-item:hover .workout-text {
  background-color: rgba(255, 255, 255, 0.05);
}

.workout-title {
  font-weight: 600;
  font-size: 1.1rem;
}

.workout-subtitle {
  font-size: 0.9rem;
  color: #aaa;
}
</style>
