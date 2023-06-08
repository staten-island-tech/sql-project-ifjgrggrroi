<template>
  <div class="app">
    <h1 class="header">Employees</h1>
    <button @click="toAddEmployee">Add New Employee</button>
    <LogoutBtn></LogoutBtn>
    <div class="parent">
      <EmployeeCard v-for="dat in Data" :key="dat.id" :Data="dat" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import EmployeeCard from '../components/EmployeeCard.vue'
import { routerKey, useRouter } from 'vue-router'
import LogoutBtn from '../components/LogoutBtn.vue'

const router = useRouter()
const Data = ref('')

async function getData() {
  try {
    let { data: alldata, error } = await supabase.from('alldata').select('*')

    Data.value = await alldata
  } catch (error) {
    console.log(error)
  }
}

function toAddEmployee() {
  router.push({ path: '/AddEmployee' })
}

onMounted(() => {
  getData()
})
</script>

<style scoped>
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

button {
  font-size: 1rem;
  padding: 0.3em 1.2em;
  margin-top: 2rem;
  border: 1px solid;
  border-radius: 2em;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  background-color: rgb(37, 131, 214);
  transition: all 0.2s;
}

button:hover {
  border-color: rgb(0, 0, 0);
  background-color: aliceblue;
  color: rgb(0, 0, 0);
}
</style>
