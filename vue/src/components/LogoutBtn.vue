<template>
  <button @click="logout">Logout</button>
</template>

<script>
import { useAuthStore } from '../stores/auth-store'
export default {
  methods: {
    logout(e) {
      const auth = useAuthStore()
      e.preventDefault()
      auth.logout
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 1px solid;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  background-color: rgb(37, 131, 214);
  transition: all 0.2s;
}

button:hover {
  border-color: rgb(0, 0, 0);
  background-color: aliceblue;
  color: rgb(0, 0, 0);
}
</style>
