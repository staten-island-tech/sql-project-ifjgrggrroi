<template>
  <button class="Btn" @click="Reroute2">Back To Home Page</button>
  <div v-for="dat in Data" :key="dat.id" :Data="dat">
    <h1>Update Employee</h1>
    <p><strong>Name:</strong> {{ dat.name }}</p>
    <p><strong>ID:</strong> {{ dat.id }}</p>
    <p><strong>Salary:</strong><input /></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { routerKey, useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const router = useRouter()

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

function Reroute2() {
  router.push({ path: '/' })
}
</script>

<style scoped>
.Btn {
  border-radius: 2rem;
  font-size: 2.2rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}
.UpdateEmployee {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
</style>
