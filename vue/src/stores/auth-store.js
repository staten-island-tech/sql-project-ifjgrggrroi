import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)
  isLoggedIn = ref(false)

  const login = async ({ email, password }) => {
    return null
  }
  return { user, login, isLoggedIn }
})
