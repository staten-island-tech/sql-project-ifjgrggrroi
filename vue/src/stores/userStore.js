import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
  const accountInfo = reactive({
    email: '',
    password: ''
  })
})
