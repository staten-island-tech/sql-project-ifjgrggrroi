<template>
  <h1 class="header">Employee profiles</h1>
  <div class="parent">
    <EmployeeCard v-for="(dat, index) in Data" :key="dat.id" :id="index + 1" :Data="dat" />
  </div>
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

onMounted(() => {
  getData()
})
</script>

<!-- this.alldata = this.alldata.filter((t) => t !== name) -->

<!-- <EmployeeCard v-for="alldata in Data" :key="alldata.id" :Data="alldata" /> -->

<style>
.header {
  font-size: 6.5rem;
  margin-top: 2.5rem;
  text-align: center;
  margin: auto;
}

.parent {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: auto;
  width: 75vw;
}
</style>
