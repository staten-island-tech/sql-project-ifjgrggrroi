import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    loggedIn: false
  }),

  actions: {
    login() {
      this.loggedIn = true
    },

    logout() {
      this.loggedIn = false
    }
  }
})
