import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const userUserStore = defineStore('userStore', () => {
  const accountInfo = reactive({
    email: '',
    password: ''
  })
  return { accountInfo }
})
