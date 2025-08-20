<template>
  <div class="workout-app">
    <v-container>
      <v-btn color="primary" @click="dialog = true">+ Add Workout</v-btn>
      <v-list>
        <h2 class="section-title">My Workouts</h2>

        <transition-group name="fade" tag="div">
          <v-list-item v-for="workout in workouts" :key="workout.id" class="mb-2 workout-card">
            <div class="workout-item">
              <v-icon :icon="getWorkoutIcon(workout.type)" size="28" class="workout-icon" />
              <div class="workout-text">
                <div class="workout-title">{{ workout.name }}</div>
                <div class="workout-subtitle">
                  {{ workout.type }} – {{ workout.duration }} min on
                  {{ new Date(workout.date).toLocaleString() }}
                </div>
              </div>
              <div class="workout-actions">
                <v-btn icon @click="editWorkout(workout)">
                  <v-icon icon="mdi-pencil" />
                </v-btn>
                <v-btn icon color="red" @click="deleteWorkout(workout.id)">
                  <v-icon icon="mdi-delete" />
                </v-btn>
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
import { ref, watch, onMounted } from 'vue'
import Snackbar from '@/components/Snackbar.vue'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

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
  id: string
  name: string
  type: string
  duration: number
  date: string
}

const dialog = ref(false)
const editingWorkout = ref<WorkoutEntry | null>(null)

const form = ref({
  name: '',
  type: '',
  duration: 0,
  date: '',
})

const workouts = ref<WorkoutEntry[]>([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'workouts'))
  workouts.value = querySnapshot.docs.map(
    (docSnap) => ({ id: docSnap.id, ...docSnap.data() }) as WorkoutEntry,
  )
})

watch(dialog, (val) => {
  if (!val) {
    form.value = { name: '', type: '', duration: 0, date: '' }
    editingWorkout.value = null
  }
})

async function saveWorkout() {
  if (!form.value.name || !form.value.type || !form.value.date) {
    showSnackbar('Please fill in all required fields.', 'error')
    return
  }

  if (editingWorkout.value) {
    // update existing workout
    try {
      const workoutRef = doc(db, 'workouts', editingWorkout.value.id)
      await updateDoc(workoutRef, { ...form.value })
      const index = workouts.value.findIndex((w) => w.id === editingWorkout.value!.id)
      workouts.value[index] = { ...workouts.value[index], ...form.value }
      showSnackbar('Workout updated!', 'success')
      dialog.value = false
    } catch (err) {
      console.error(err)
      showSnackbar('Error updating workout.', 'error')
    }
  } else {
    // create new workout
    const newWorkout = {
      name: form.value.name,
      type: form.value.type,
      duration: form.value.duration,
      date: form.value.date,
      createdAt: new Date().toISOString(),
    }

    try {
      const docRef = await addDoc(collection(db, 'workouts'), newWorkout)
      workouts.value.unshift({ ...newWorkout, id: docRef.id })
      dialog.value = false
      showSnackbar('Workout saved!', 'success')
    } catch (err) {
      console.error(err)
      showSnackbar('Error saving workout.', 'error')
    }
  }
}

// Called when clicking edit
function editWorkout(workout: WorkoutEntry) {
  editingWorkout.value = workout
  form.value = { ...workout }
  dialog.value = true
}

// Called when clicking delete
async function deleteWorkout(id: string) {
  try {
    await deleteDoc(doc(db, 'workouts', id))
    workouts.value = workouts.value.filter((w) => w.id !== id)
    showSnackbar('Workout deleted!', 'success')
  } catch (err) {
    console.error(err)
    showSnackbar('Error deleting workout.', 'error')
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

.section-title {
  text-align: center;
  padding: 5px;
  font-size: 2rem;
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
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

.workout-card {
  border-left: 5px solid #6c63ff;
  border-radius: 12px;
  padding: 8px;
  transition: transform 0.2s ease;
}

.workout-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
}
</style>
