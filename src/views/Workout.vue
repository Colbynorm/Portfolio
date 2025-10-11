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
                  {{ workout.type }} – {{ workout.duration }} min
                  <span v-if="workout.type === 'Strength' && workout.weight">
                    • {{ workout.weight }} lbs</span
                  >
                  <span v-if="workout.type === 'Cardio' && workout.notes">
                    • "{{ workout.notes }}"</span
                  >
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

      <!-- Dialog -->
      <v-dialog v-model="dialog" max-width="500px" persistent>
        <v-card>
          <v-card-title>Add Workout</v-card-title>
          <v-card-text>
            <v-text-field v-model="form.name" label="Exercise Name" />

            <v-select v-model="form.type" :items="['Cardio', 'Strength']" label="Type" />

            <v-text-field v-model="form.duration" type="number" label="Duration (min)" />

            <!-- Show weight input for Strength workouts -->
            <v-text-field
              v-if="form.type === 'Strength'"
              v-model="form.weight"
              type="number"
              label="Weight Used (lbs)"
            />

            <!-- Show notes input for Cardio workouts -->
            <v-textarea
              v-if="form.type === 'Cardio'"
              v-model="form.notes"
              label="Notes"
              auto-grow
              rows="2"
            />
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

// 🔥 Dynamic icon selector
function getWorkoutIcon(type: string): string {
  switch (type.toLowerCase()) {
    case 'cardio':
      return 'mdi-run-fast'
    case 'strength':
      return 'mdi-dumbbell'
    default:
      return 'mdi-help-circle-outline'
  }
}

// Snackbar logic
const snackbarVisible = ref(false)
const snackbarMessage = ref('')
const snackbarColor = ref<'success' | 'error' | 'info' | 'warning'>('info')

function showSnackbar(message: string, color: 'success' | 'error' | 'info' | 'warning' = 'info') {
  snackbarMessage.value = message
  snackbarVisible.value = true
  snackbarColor.value = color
}

// Workout interface
interface WorkoutEntry {
  id: string
  name: string
  type: string
  duration: number
  weight?: number
  notes?: string
}

const dialog = ref(false)
const editingWorkout = ref<WorkoutEntry | null>(null)

const form = ref({
  name: '',
  type: '',
  duration: 0,
  weight: undefined as number | undefined,
  notes: '',
})

const workouts = ref<WorkoutEntry[]>([])

// Load workouts
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'workouts'))
  workouts.value = querySnapshot.docs.map(
    (docSnap) => ({ id: docSnap.id, ...docSnap.data() }) as WorkoutEntry,
  )
})

// Reset form when dialog closes
watch(dialog, (val) => {
  if (!val) {
    form.value = { name: '', type: '', duration: 0, weight: undefined, notes: '' }
    editingWorkout.value = null
  }
})

// Save workout (add or update)
async function saveWorkout() {
  if (!form.value.name || !form.value.type) {
    showSnackbar('Please fill in all required fields.', 'error')
    return
  }

  try {
    if (editingWorkout.value) {
      const workoutRef = doc(db, 'workouts', editingWorkout.value.id)
      await updateDoc(workoutRef, { ...form.value })
      const index = workouts.value.findIndex((w) => w.id === editingWorkout.value!.id)
      workouts.value[index] = { ...workouts.value[index], ...form.value }
      showSnackbar('Workout updated!', 'success')
    } else {
      const newWorkout = { ...form.value, createdAt: new Date().toISOString() }
      const docRef = await addDoc(collection(db, 'workouts'), newWorkout)
      workouts.value.unshift({ ...newWorkout, id: docRef.id })
      showSnackbar('Workout saved!', 'success')
    }
    dialog.value = false
  } catch (err) {
    console.error(err)
    showSnackbar('Error saving workout.', 'error')
  }
}

// Edit existing workout
function editWorkout(workout: WorkoutEntry) {
  editingWorkout.value = workout
  form.value = { ...workout } as any
  dialog.value = true
}

// Delete workout
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
  gap: 12px;
}

.workout-icon {
  flex-shrink: 0;
}

.section-title {
  text-align: center;
  padding: 5px;
  font-size: 2rem;
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  -webkit-text-fill-color: transparent;
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
  -webkit-text-fill-color: transparent;
}

.workout-text {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  border-radius: 8px;
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
}

.workout-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
}
</style>
