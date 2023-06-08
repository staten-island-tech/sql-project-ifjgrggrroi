import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient.js'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    loggedIn: useLocalStorage('loggedIn', false),
    //loggedIn: false,
    currentUser: null
  }),

  actions: {
    async login() {
      this.loggedIn = true
    },

    async createAccount(email, password) {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password
        })
        this.loggedIn = false
        this.currentUser = user
      } catch (error) {
        console.log('oops')
      }
    },

    async logout() {
      const { error } = await supabase.auth.signOut()
      this.loggedIn = false
      this.currentUser = null
    },
    loadUser() {
      this.currentUser = supabase.auth.user()
    }
  },

  getters: {
    isAuthenticated() {
      return !!this.currentUser
    }
  }
})
