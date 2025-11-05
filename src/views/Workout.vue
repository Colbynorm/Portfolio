<template>
  <div class="workout-app">
    <v-container>
      <!-- 🔐 Login Section -->
      <div class="auth-section">
        <v-btn v-if="!user" :loading="signingIn" color="primary" @click="signInWithGoogle">
          <v-icon start>mdi-google</v-icon> Sign in with Google
        </v-btn>

        <div v-else class="user-info">
          <span class="user-name">{{ user.displayName }}</span>
          <v-btn color="red" @click="logout" size="small">Logout</v-btn>
        </div>
      </div>

      <!-- 🚫 Show message if user not logged in -->
      <div v-if="!user" class="login-reminder">
        <p>Please sign in to view and save your workouts 🏋️‍♂️</p>
      </div>

      <div v-else>
        <!-- ➕ Add Workout -->
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
                      • {{ workout.weight }} lbs
                    </span>
                    <span v-if="workout.type === 'Cardio' && workout.notes">
                      • "{{ workout.notes }}"
                    </span>
                  </div>
                </div>
                <div class="workout-actions">
                  <v-btn icon color="green" @click="editWorkout(workout)">
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

        <!-- 🧾 Dialog -->
        <v-dialog v-model="dialog" max-width="500px" persistent>
          <v-card>
            <v-card-title>{{ editingWorkout ? 'Edit Workout' : 'Add Workout' }}</v-card-title>
            <v-card-text>
              <v-text-field v-model="form.name" label="Exercise Name" />
              <v-select v-model="form.type" :items="['Cardio', 'Strength']" label="Type" />
              <v-text-field v-model="form.duration" type="number" label="Duration (min)" />

              <v-text-field
                v-if="form.type === 'Strength'"
                v-model="form.weight"
                type="number"
                label="Weight Used (lbs)"
              />

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
      </div>
    </v-container>

    <Snackbar v-model="snackbarVisible" :message="snackbarMessage" :color="snackbarColor" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth'
import { db, auth } from '@/firebase'
import Snackbar from '@/components/Snackbar.vue'

// 💪 Workout interface
interface WorkoutEntry {
  id: string
  name: string
  type: string
  duration: number
  weight?: number
  notes?: string
  userId: string
}

// 🔔 Snackbar logic
const snackbarVisible = ref(false)
const snackbarMessage = ref('')
const snackbarColor = ref<'success' | 'error' | 'info' | 'warning'>('info')

function showSnackbar(message: string, color: 'success' | 'error' | 'info' | 'warning' = 'info') {
  snackbarMessage.value = message
  snackbarVisible.value = true
  snackbarColor.value = color
}

const signingIn = ref(false)
const provider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  signingIn.value = true

  try {
    if (import.meta.env.PROD) {
      // 🏭 Use redirect in production to avoid COOP/CSP issues
      await signInWithRedirect(auth, provider)
      // getRedirectResult will auto-resolve when returning to the page
      const result = await getRedirectResult(auth)
      if (result?.user) {
        showSnackbar(`Welcome back, ${result.user.displayName}!`, 'success')
      }
    } else {
      // 🧪 Popup mode for local dev (less strict)
      const result = await signInWithPopup(auth, provider)
      if (result.user) {
        showSnackbar(`Welcome, ${result.user.displayName}!`, 'success')
      }
    }
  } catch (error: any) {
    if (error.code === 'auth/popup-closed-by-user') {
      console.log('Popup closed by user 😅')
      showSnackbar('Sign-in cancelled.', 'warning')
    } else {
      console.error('Firebase Auth Error:', error)
      showSnackbar('Sign-in failed. Try again later.', 'error')
    }
  } finally {
    signingIn.value = false
  }
}

// 🔥 Workout logic
const dialog = ref(false)
const editingWorkout = ref<WorkoutEntry | null>(null)
const workouts = ref<WorkoutEntry[]>([])

const form = ref({
  name: '',
  type: '',
  duration: 0,
  weight: undefined as number | undefined,
  notes: '',
})

// 👤 User state
const user = ref<User | null>(null)

onAuthStateChanged(auth, async (currentUser) => {
  user.value = currentUser
  console.log(user.value)
  if (user.value) {
    await loadUserWorkouts()
  } else {
    workouts.value = []
  }
})

// 🧠 Load user-specific workouts
async function loadUserWorkouts() {
  console.log(user.value)
  if (!user.value) return
  const q = query(collection(db, 'workouts'), where('userId', '==', user.value.uid))
  const snapshot = await getDocs(q)
  workouts.value = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as WorkoutEntry)
  console.log(workouts.value)
}

// 💡 Helper to remove undefined fields
function cleanObject<T extends Record<string, any>>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined)) as T
}

// 💾 Save workout
async function saveWorkout() {
  if (!form.value.name || !form.value.type) {
    showSnackbar('Please fill in all required fields.', 'error')
    return
  }
  if (!user.value) {
    showSnackbar('Please sign in first.', 'error')
    return
  }

  try {
    if (editingWorkout.value) {
      console.log('editing workout')
      const workoutRef = doc(db, 'workouts', editingWorkout.value.id)
      const cleanedForm = cleanObject(form.value)
      await updateDoc(workoutRef, cleanedForm)
      const index = workouts.value.findIndex((w) => w.id === editingWorkout.value!.id)
      workouts.value[index] = { ...workouts.value[index], ...cleanedForm }
      showSnackbar('Workout updated!', 'success')
    } else {
      console.log('new workout')
      const newWorkout = cleanObject({
        ...form.value,
        createdAt: new Date().toISOString(),
        userId: user.value.uid,
      })
      console.log(newWorkout)
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

// ✏️ Edit
function editWorkout(workout: WorkoutEntry) {
  editingWorkout.value = workout
  form.value = { ...workout } as any
  dialog.value = true
}

// 🗑️ Delete
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

async function logout() {
  await signOut(auth)
  showSnackbar('Logged out successfully!', 'info')
}

// Reset form
watch(dialog, (val) => {
  if (!val) {
    form.value = { name: '', type: '', duration: 0, weight: undefined, notes: '' }
    editingWorkout.value = null
  }
})

// 🧩 Workout icons
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
</script>

<style scoped>
.auth-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-name {
  font-weight: 600;
}

.login-reminder {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #ccc;
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

.workout-item {
  display: flex;
  align-items: center;
  gap: 12px;
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

.v-card {
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>
