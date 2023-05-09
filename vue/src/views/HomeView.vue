<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const Data = ref('')

async function getEmployees() {
  try {
    let { data: employees, error } = await supabase.from('employees').select('*')

    Data.value = employees
    console.log(employees)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getEmployees()
})
</script>

<template>
  <div class="card" v-for="employee in Data" :key="employee.id">
    <h1>Employee ID : {{ employee.id }}</h1>
    <h2>Employee Name : {{ employee.name }}</h2>
  </div>
</template>

<!-- <ul>
    <li v-for="employee in Data" :key="employee.id">
      ID : {{ employee.id }}, Name {{ employee.name }}
    </li>
  </ul> -->
