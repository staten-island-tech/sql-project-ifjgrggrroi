import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: []
  }),

  actions: {
    async getUsers() {
      let { data: users, error } = await supabase.from('users').select('*')
      this.users = users
      console.log(this.users)
    },

    async createUser(user) {
      const { data, error } = await supabase.from('users').insert([user])

      this.users.push(data)
    }
  }
})
