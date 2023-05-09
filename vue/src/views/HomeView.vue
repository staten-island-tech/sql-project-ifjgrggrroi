<!-- <script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const employees = ref([])

async function getEmployees() {
  const { data } = await supabase.from('Employees').select()
  employees.value = data
}
onMounted(() => getEmployees())
</script>

<template>
  <ul>
    <li v-for="employee in employees" :key="employee.id">{{ employee.Employee }}</li>
  </ul>
</template>
<style scoped>
li {
  font-size: 100px;
}
</style>
 -->
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
  <ul>
    <li v-for="employee in Data" :key="employee.id">{{ employee.name }}</li>
  </ul>
</template>
