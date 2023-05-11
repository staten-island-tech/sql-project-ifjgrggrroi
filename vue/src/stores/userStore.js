import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const accountInfo = reactive({
    email: '',
    password: ''
  })
  return { accountInfo }
})
