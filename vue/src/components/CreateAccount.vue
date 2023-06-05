<template>
  <h1 class="heading">Create Account</h1>
  <div class="form-wrapper">
    <form @submit="signUp">
      <input type="email" v-model="email" placeholder="Email" required />

      <input type="password" v-model="password" placeholder="Password" required />
      <div><button type="submit">Sign Up</button></div>
      <p v-if="auth.currentUser !== null">
        Account created. <router-link to="/login">Login Here</router-link>
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

<style lang="scss" scoped></style>
