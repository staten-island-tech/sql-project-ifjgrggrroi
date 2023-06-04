<template>
  <button class="Btn" @click="reroute">Back To Home Page</button>
  <div v-for="dat in Data" :key="dat.id" :Data="dat">
    <h1>Update Employee</h1>
    <p><strong>Name:</strong> {{ dat.name }}</p>
    <p><strong>ID:</strong> {{ dat.id }}</p>
    <p><strong>Salary:</strong><input /></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const Data = ref('')
async function getData() {
  try {
    let { data: alldata, error } = await supabase.from('alldata').select('*')

    Data.value = await alldata
    console.log(alldata)
  } catch (error) {
    console.log(error)
  }
}
getData()
</script>

<style lang="scss" scoped></style>
