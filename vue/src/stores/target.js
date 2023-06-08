import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useTargetStore = defineStore('user', {
  state: () => {
    return {
      target: null
    }
  }
})

// import(defineStore)
