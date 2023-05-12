import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  id: 'user',
  state: () => ({
    name: 'Annie'
  }),
  actions: {
    async login(email, password) {
      const userData = await login(email, password)
      this.patch({
        name: user,
        ...userData
      })
    }
  }
})
