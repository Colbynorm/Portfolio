<template>
  <v-container fluid class="landing-container d-flex align-center justify-center text-center">
    <div class="content-wrapper">
      <h1 class="landing-title">Hey, I'm Colby!</h1>
      <h2 class="landing-subtitle">I craft clean, modern web experiences.</h2>

      <div class="button-group">
        <v-btn class="mr-4" color="primary" @click="$router.push('/projects')">
          <v-icon left>mdi-rocket</v-icon>
          View Projects
        </v-btn>

        <v-btn outlined color="secondary" @click="$router.push('/contact')">
          <v-icon left>mdi-email</v-icon>
          Get In Touch
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.landing-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #2c3e50);
  color: white;
  padding: 2rem;
  overflow: hidden;
  animation: fadeInBackground 2s ease forwards;
}

.content-wrapper {
  max-width: 800px;
  width: 100%;
  animation: fadeInUp 1.2s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
  animation-delay: 0.3s;
}

.landing-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.landing-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #cfd8dc;
  animation-delay: 0.5s;
}

.button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  animation-delay: 0.8s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInBackground {
  from {
    background: #000;
  }
  to {
    background: linear-gradient(135deg, #1e1e2f, #2c3e50);
  }
}

@media (max-width: 768px) {
  .landing-title {
    font-size: 2.2rem;
  }

  .landing-subtitle {
    font-size: 1.2rem;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }
}
</style>
