<template>
  <h1 class="heading">Login</h1>
  <div class="form-wrapper">
    <form>
      <div><label>Email</label></div>

      <input type="email" />
      <div><label>Password</label></div>

      <input type="password" />
      <div><button type="submit" @clicked="login">Login</button></div>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import { useAuthStore } from '../stores/auth-store'

export default {
  data: { useAuthStore },
  methods: {
    login() {
      this.useAuthStore.user = user.name
      this.useAuthStore.loggedIn = true
    }
  }
}

const loginHag = () => {
  const { email, password } = event.target.elements
  console.log(email.value, password.value)
}
</script>

<style>
html,
body {
  background-color: rgb(255, 219, 228);
}

.heading {
  font-size: 3.5rem;
  text-align: center;
}

.form-wrapper {
  width: 25rem;
  height: 30rem;
  margin: auto;
  background-color: white;
  border-radius: 2rem;
  text-align: center;
}

form {
  padding-top: 2rem;
  font-size: 2rem;
}

input {
  border-radius: 2rem;
  height: 2rem;
  width: 15rem;
  border: solid;
  border-color: black;
  border-width: 1px;
}
</style>
