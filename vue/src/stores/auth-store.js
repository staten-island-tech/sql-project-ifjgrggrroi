import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  user: null,
  loggedIn: false
})
