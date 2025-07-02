<template>
  <div class="about-wrapper">
    <v-container class="py-12" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <v-avatar size="120" class="mb-4 elevation-6">
            <v-img href="@/src/assets/logo.svg" alt="Avatar" />
          </v-avatar>
          <h1 class="display-1 font-weight-bold text-white">Hey, I'm Colby!</h1>
          <p class="mt-3 subtitle-1 text-grey-lighten-3">
            A passionate software engineer who turns <v-icon icon="mdi-coffee" /> into clean,
            scalable code.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-12" justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="8" class="pa-6 glass-card">
            <h2 class="text-h5 font-weight-bold mb-4">About Me</h2>
            <p>
              Hi! I'm a left-handed, plant-fueled CrossFit coach who deadlifts emotional baggage by
              day and slings JavaScript by night.
            </p>
            <p class="mt-4">
              When I'm not writing clean, maintainable code, you can find me yelling “Let’s gooo!”
              at people doing burpees or crying joyfully over a fresh tofu scramble. I’m powered by
              caffeine, Metallica riffs, and the haunting brilliance of Stephen King novels.
            </p>
            <p class="mt-4">
              I like my UI sleek, my state predictable, and my Git history cleaner than a freshly
              chalked barbell.
            </p>
            <p class="mt-4">
              Also, yes — being left-handed is a personality trait. I write code backwards in Vim
              just to assert dominance.
            </p>
            <p class="mt-10">
              <v-btn
                color="deep-purple accent-4"
                dark
                href="/assets/Colby_Norman_Resume.pdf"
                target="_blank"
                rel="noopener"
                prepend-icon="mdi-download"
              >
                View / Download Resume
              </v-btn>
            </p>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-10" justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h5 font-weight-bold mb-4 text-white">Skills</h2>
          <v-row>
            <v-col cols="6" sm="4" v-for="skill in skills" :key="skill.name">
              <v-hover v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  class="d-flex flex-column align-center pa-4 text-center glass-card"
                  :elevation="isHovering ? 12 : 4"
                  rounded="xl"
                >
                  <v-icon size="40" class="mb-2">{{ skill.icon }}</v-icon>
                  <strong>{{ skill.name }}</strong>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Blurred Background Blobs -->
    <div class="bg-blob top-left"></div>
    <div class="bg-blob bottom-right"></div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Vue 3', icon: 'mdi-vuejs' },
  { name: 'Vuetify', icon: 'mdi-vuetify' },
  { name: 'JavaScript', icon: 'mdi-language-javascript' },
  { name: 'TypeScript', icon: 'mdi-language-typescript' },
  { name: 'PHP', icon: 'mdi-language-php' },
  { name: 'SQL', icon: 'mdi-database' },
]
</script>

<style scoped>
.about-wrapper {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #2c2c54);
  overflow: hidden;
  padding-bottom: 100px;
}

.text-white {
  color: white;
}

.glass-card {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  z-index: 0;
}

.top-left {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #7e57c2, #512da8);
  top: -100px;
  left: -100px;
}

.bottom-right {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #9575cd, #7e57c2);
  bottom: -100px;
  right: -100px;
}
</style>
