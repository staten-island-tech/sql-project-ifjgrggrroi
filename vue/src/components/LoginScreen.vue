<template>
  <h1>Login</h1>
  <form>
    <label>Email</label>
    <input type="email" />
    <label>Password</label>
    <input type="password" />
    <button type="submit" @click="loginHag">Login</button>
  </form>
</template>

<script setup>
import { useUserStore } from '../stores/userStore'

const store = useUserStore()
const authStore = useAuthStore()

const loginHag = () => {
  const { email, password } = event.target.elements
  console.log(email.value, password.value)
}
</script>
