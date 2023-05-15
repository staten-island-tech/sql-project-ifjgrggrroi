<template>
  <h1 class="heading">Login</h1>
  <div class="form-wrapper">
    <form @submit.prevent="loginHag">
      <div><label>Email</label></div>

      <input type="email" v-model="email" />
      <div><label>Password</label></div>

      <input type="password" v-model="password" />
      <div><button type="submit">Login</button></div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth-store'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    loginHag(e) {
      const auth = useAuthStore()
      e.preventDefault()
      if (this.email === 'annie@gmail.com' && this.password === 'password') {
        auth.login()
        console.log('correct')
        this.$router.push('/dashboard')
      } else {
        console.log('incorrect')
      }
    }
  }
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
