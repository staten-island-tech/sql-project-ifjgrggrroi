<template>
  <div class="app">
    <h1 class="header">Employees</h1>
    <div class="parent">
      <EmployeeCard v-for="dat in Data" :key="dat.id" :Data="dat" />
    </div>
    <button class="Btn" @click="reroute">Add An Employee</button>
    <!-- <button @click="addData" class="Btn">Add Employee</button> -->
  </div>
  <!-- <UpdateEmployee></UpdateEmployee> -->
  <!-- <div class="parent">
    <div class="card" v-for="alldata in Data" :key="alldata.id" :Data="alldata">
      <h1>Name : {{ alldata.name }}</h1>
      <h2>Location : {{ alldata.location }}</h2>
      <h2>ID : {{ alldata.id }}</h2>
      <h2>Pay : ${{ alldata.pay }}</h2>
      <button class="btn">FIRE</button>
    </div>
  </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import EmployeeCard from '../components/EmployeeCard.vue'
import { routerKey, useRouter } from 'vue-router'

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

  /*   function fire(e) {
    e.target.parentElement.remove()
    let target = e.target.parentElement.id
    console.log(target)
  } */
}

function reroute() {
  router.push({ path: '/AddEmployee' })
}

/* async function fire() {
  try {
    const { data: alldata, error } = await supabase.from('alldata').delete().eq('id', '3')

    getData()
    Data.value = alldata
    console.log(alldata)
  } catch (error) {
    console.log(error)
  }
} */

onMounted(() => {
  getData()
})
</script>

<!-- this.alldata = this.alldata.filter((t) => t !== name) -->

<!-- <EmployeeCard v-for="alldata in Data" :key="alldata.id" :Data="alldata" /> -->

<style>
.app {
  text-align: center;
}

.header {
  font-size: 6.5rem;
  padding-top: 3.5rem;
  text-align: center;
  margin: auto;
}

.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  width: 80vw;
  /* width: 75vw; */
}

.Btn {
  border-radius: 2rem;
  font-size: 2.2rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  text-align: center;
}
</style>
