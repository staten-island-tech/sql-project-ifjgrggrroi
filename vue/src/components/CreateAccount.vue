<template>
  <h1 class="heading">Create Account</h1>
  <div class="form-wrapper">
    <form @submit="signUp">
      <input type="email" v-model="email" placeholder="Email" required />

      <input type="password" v-model="password" placeholder="Password" required />
      <div><button type="submit">Sign Up</button></div>
      <p v-if="auth.currentUser !== null">
        Account created successfully! <router-link to="/login">Click here to login</router-link>
      </p>
      <p>{{ redirect }}</p>
    </form>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth-store'
import { useUserStore } from '../stores/user-store'
import { supabase } from '../lib/supabaseClient'
export default {
  data() {
    return {
      email: '',
      password: '',
      redirect: '',
      auth: useAuthStore()
    }
  },

  methods: {
    async signUp(e) {
      e.preventDefault()
      const auth = useAuthStore()
      const userStore = useUserStore()
      auth.createAccount(this.email, this.password)
    }
  }
}
</script>

<style scoped>
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
