<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-row no-gutters>
        <v-col cols="12">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped></style>
