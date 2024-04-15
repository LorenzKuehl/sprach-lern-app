<template>
  <div>
    <nav class="space-x-8 bg-green-200">
      <router-link to="/">Home</router-link>
      <router-link to="/add-voc">Vokabeln hinzufügen</router-link>
    </nav>
    <main class="bg-yellow-100 min-h-screen">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import router from './router'

export default {
  router
}
</script>

<style scoped></style>
