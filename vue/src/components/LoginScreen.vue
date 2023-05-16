<template>
  <h1 class="heading">Login</h1>
  <div class="form-wrapper">
    <form @submit="loginHag">
      <input type="email" v-model="email" placeholder="Email" required />

      <input type="password" v-model="password" placeholder="Password" required />
      <div><button type="submit">Login</button></div>
      <p>{{ incorrect }}</p>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth-store'
export default {
  data() {
    return {
      email: '',
      password: '',
      incorrect: ''
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
        this.incorrect = 'Incorrect username or password. Please try again.'
      }
    }
  }
}
</script>

<style>
html,
body {
  background-color: rgb(255, 255, 255);
}

.heading {
  font-size: 3.5rem;
  text-align: center;
}

.form-wrapper {
  width: 25rem;
  height: 30rem;
  margin: auto;
  background-color: aliceblue;
  border-radius: 2rem;
  text-align: center;
}

form {
  padding-top: 2rem;
  font-size: 2rem;
}

input {
  border-radius: 2rem;
  height: 2.5rem;
  width: 15rem;
  border: solid;
  border-color: black;
  border-width: 1px;
  padding-left: 1.5rem;
  margin-top: 2rem;
}
p {
  font-size: 1rem;
}
</style>
