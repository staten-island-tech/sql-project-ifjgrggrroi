<template>
  <div class="app">
    <h1 class="header">Employees</h1>
    <div class="parent">
      <EmployeeCard v-for="dat in Data" :key="dat.id" :Data="dat" />
    </div>
    <button class="Btn" @click="reroute">Add An Employee</button>
  </div>
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
}

function reroute() {
  router.push({ path: '/AddEmployee' })
}

onMounted(() => {
  getData()
})
</script>

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
