<template>
  <h1 class="header">Employee profiles</h1>

  <EmployeeCard v-for="alldata in Data" :key="alldata.id" :Data="alldata" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import EmployeeCard from '../components/EmployeeCard.vue'

const Data = ref('')
async function getData() {
  try {
    let { data: alldata, error } = await supabase.from('alldata').select('*')

    Data.value = alldata
    console.log(alldata)
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
// this.alldata = this.alldata.filter((t) => t !== name)
</script>

<style>
.header {
  font-size: 6.5rem;
  margin-top: 2.5rem;
  text-align: center;
}
</style>
