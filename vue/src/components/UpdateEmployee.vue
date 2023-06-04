<template>
  <button class="Btn" @click="Reroute2">Back To Home Page</button>

  <div class="parent">
    <div v-for="dat in Data" :key="dat.id" :Data="dat" class="card">
      <h1 class="text">Update Employee</h1>
      <p class="text"><strong>Name: </strong> {{ dat.name }}</p>
      <p class="text"><strong>ID: </strong> {{ dat.id }}</p>
      <p class="text"><strong>Salary: </strong> <input /></p>
      <p>
        <strong><button class="btn" @click="Update">Submit</button></strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { routerKey, useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const router = useRouter()
const pays = ref('')
const Data = ref('')

function Reroute2() {
  router.push({ path: '/' })
}

async function Update(e) {
  try {
    const { data, error } = await supabase.from('alldata').update({ pay: '100' }).eq('id', 1)
    await supabase.from('pay').update({ pay: '100' }).eq('id', 1)

    /* e.preventDefault()
    let Pay = pays.value
    let target = e.target.parentElement.id
    let pay = 100

    let { data, error } = await supabase.from('Pay').update({ pay: Pay }).eq('id', target)
    e.target.parentElement.update()
 */
    console.log('Updated')
  } catch (error) {
    console.log(error)
  }
}

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

/* const { data, error } = await supabase.from('Pay').update({ pay: '100' }).eq('id', '1') */
</script>

<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 5rem;
  width: 85vw;
  /* width: 75vw; */
}
.Btn {
  border-radius: 2rem;
  font-size: 2.2rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}
.btn {
  border-radius: 2rem;
  font-size: 1rem;
  background-color: aliceblue;
  padding: 3px 10px 3px 10px;
  margin-top: 0.15rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.text {
  font-size: 20px;
}
.card {
  font-size: 16px;
  width: 20rem;
  background-color: aliceblue;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
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
