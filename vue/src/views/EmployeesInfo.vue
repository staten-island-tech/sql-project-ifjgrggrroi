<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const employees = ref([])

async function getEmployees() {
  const { data } = await supabase.from('Employees').select()
  Employees.value = data

  onMounted(() => getEmployees())
}
</script>

<template>
  <ul>
    <li v-for="employee in Emoployees" :key="employee.id">{{ employee.employee }}</li>
  </ul>
</template>
