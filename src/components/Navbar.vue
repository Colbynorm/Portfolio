<template>
  <v-app-bar app color="purple">
    <v-avatar class="me-3" icon="mdi-code-tags"></v-avatar>
    <v-toolbar-title class="font-weight-bold">Colby's Portfolio</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer app expand-on-hover rail class="pt-5" color="light-green">
    <v-list nav dense>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.to"
        :title="item.title"
        class="rounded-lg my-1"
        :prepend-icon="item.icon"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'About', icon: 'mdi-account-circle', to: '/about' },
  { title: 'Projects', icon: 'mdi-monitor-dashboard', to: '/projects' },
]
</script>

<style scoped>
.v-list-item {
  transition: all 0.3s ease;
}
.v-list-item:hover {
  background-color: #d1c4e9 !important;
  transform: translateX(2px);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
}
.v-avatar > .v-img {
  object-fit: cover;
}
</style>
