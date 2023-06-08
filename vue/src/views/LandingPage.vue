<script setup>
import LogoutBtn from '../components/LogoutBtn.vue'
import { routerKey, useRouter } from 'vue-router'

const router = useRouter()

function Reroute3() {
  router.push({ path: '/home' })
}
</script>

<template>
  <div>
    <h1>Annie's Tea House</h1>
    <div class="app">
      <h2 class="text">Welcome Managaer</h2>
      <button @click="Reroute3">View Employees</button>
      <LogoutBtn></LogoutBtn>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 5rem;
  text-align: center;
  background-color: ;
}
.text {
  font-size: 3rem;
  text-align: center;
}
.app {
  text-align: center;
}
</style>
