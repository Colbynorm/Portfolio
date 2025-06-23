<template>
  <div class="projects-wrapper pa-8">
    <h1 class="text-h4 font-weight-bold mb-8 text-center">
      <v-icon icon="mdi-rocket" /> My Projects
    </h1>

    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="6" lg="4">
        <v-card
          class="ma-4"
          @click="goTo(project.route)"
          hover
          elevation="6"
          style="cursor: pointer"
        >
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
          <v-chip
            v-for="tech in project.technologies"
            :key="tech"
            class="ma-1"
            color="deep-purple lighten-3"
            text-color="black"
            label
            small
          >
            {{ tech }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const projects = [
  {
    title: 'Weather App',
    description: 'Real-time weather forecast with Vue 3 + OpenWeatherMap API.',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind'],
    route: '/weather',
  },
  // {
  //   title: 'Workout Tracker',
  //   description: 'Log your WODs and PRs. Built for fellow Crossfitters',
  //   technologies: ['Vue', 'Pinia', 'Vuetify', 'Firebase'],
  //   github: 'https://github.com/Colbynorm/workout-tracker',
  //   demo: '',
  //   image: 'https://source.unsplash.com/400x200/?fitness',
  // },
  // {
  //   title: 'KingBook',
  //   description: 'A Stephen King reading list tracker for fans of The King',
  //   technologies: ['Vue', 'Node.js', 'MongoDB'],
  //   github: 'https://github.com/Colbynorm/kingbook',
  //   demo: '',
  //   image: 'https://source.unsplash.com/400x200/?books',
  // },
]

const goTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.projects-wrapper {
  background: linear-gradient(135deg, #f3e5f5, #ede7f6);
  min-height: 100vh;
}
</style>
