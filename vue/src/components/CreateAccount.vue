<template>
  <h1 class="heading">Create Account</h1>
  <div class="form-wrapper">
    <form @submit="signUp">
      <input type="email" v-model="email" placeholder="Email" required />

      <input type="password" v-model="password" placeholder="Password" required />
      <div><button type="submit">Sign Up</button></div>
    </form>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth-store'
import { useUserStore } from '../stores/user-store'
export default {
  data() {
    return {
      email: '',
      password: '',
      id: 0
    }
  },

  methods: {
    async signUp(e) {
      e.preventDefault()
      const auth = useAuthStore()
      const userStore = useUserStore()
      const user = {
        email: this.email,
        password: this.password,
        id: this.id++
      }

      await auth.createAccount(this.email, this.password, this.id)
      await userStore.createUser(user)
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped></style>
