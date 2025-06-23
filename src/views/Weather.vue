<template>
  <div class="weather-app">
    <v-container class="text-center d-flex flex-column justify-center align-center glass-card">
      <h1 class="headline mb-6">🌤️ Weather Vibes</h1>

      <v-text-field
        class="weather-input mb-4"
        v-model="city"
        label="Enter City"
        prepend-inner-icon="mdi-city"
        variant="solo-filled"
        @keyup.enter="fetchWeather"
      />

      <v-btn color="deep-purple-accent-4" @click="fetchWeather" :loading="loading">
        🔍 Get Weather
      </v-btn>

      <div v-if="weather" class="mt-8 weather-result">
        <v-img
          :src="`https://openweathermap.org/img/wn/${weather.icon}@4x.png`"
          contain
          width="120"
          class="mx-auto mb-2"
        />
        <h2 class="temp">{{ weather.temp }}°C</h2>
        <p class="desc">{{ weather.description }}</p>
        <p class="location">📍 {{ weather.city }}, {{ weather.country }}</p>
      </div>
    </v-container>
    <Snackbar v-model="snackbarVisible" :message="snackbarMessage" :color="snackbarColor" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Snackbar from '@/components/Snackbar.vue'

const snackbarVisible = ref(false)
const snackbarMessage = ref('')
const snackbarColor = ref<'success' | 'error' | 'info' | 'warning'>('info')

function showSnackbar(message: string, color: 'success' | 'error' | 'info' | 'warning' = 'info') {
  snackbarMessage.value = message
  snackbarVisible.value = true
  snackbarColor.value = color
}

const city = ref('')
const weather = ref<null | {
  temp: number
  description: string
  icon: string
  city: string
  country: string
}>(null)

const loading = ref(false)

const fetchWeather = async () => {
  if (!city.value) return

  loading.value = true
  try {
    const apiKey = '3910c585fac6f687c9543a7ed0717ea0'
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`,
    )
    const data = await response.json()

    console.log(data)

    if (data.cod !== 200) {
      showSnackbar('There was an issue. ' + data.message, 'error')
      weather.value = null
    } else {
      weather.value = {
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        city: data.name,
        country: data.sys.country,
      }
      showSnackbar('Successfully grabbed city!', 'success')
    }
  } catch (error) {
    console.error('Error fetching weather:', error)
    showSnackbar('Error fetching weather: ' + error, 'error')
    weather.value = null
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.weather-app {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #4f46e5, #a78bfa);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.headline {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}

.weather-input .v-input__control {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}

.weather-input {
  width: 15rem;
}

.temp {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.desc {
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0.25rem 0;
}

.location {
  font-size: 1rem;
  opacity: 0.9;
}
</style>
