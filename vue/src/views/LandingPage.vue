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

button {
  display: block;
  margin: auto;
  margin-top: 1rem;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  background-color: rgb(37, 131, 214);
  transition: all 0.2s;
  border: 1px solid;
  border-radius: 2em;
}

button:hover {
  border-color: rgb(0, 0, 0);
  background-color: aliceblue;
  color: rgb(0, 0, 0);
}
</style>
