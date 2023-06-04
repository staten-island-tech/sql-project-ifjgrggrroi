import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient.js'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    loggedIn: false,
    currentUser: null
  }),

  actions: {
    /*  async login(email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password })
      this.loggedIn = true
    },

    async createAccount(email, password) {
      const { user, error } = await supabase.auth.signUp({ email, password })
      this.loggedIn = true
    },

    async logout() {
      const { error } = await supabase.auth.signOut()
      this.loggedIn = false
    } */
    loadUser() {
      this.currentUser = supabase.auth.user()
    },
    clearUser() {
      this.currentUser = null
    }
  },

  getters: {
    isAuthenticated() {
      return !!this.currentUser
    }
  }
})
