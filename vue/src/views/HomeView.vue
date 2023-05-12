<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

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

<template>
  <div class="parent">
    <div class="card" v-for="alldata in Data" :key="alldata.id">
      <h1>Employee Name : {{ alldata.name }}</h1>
      <h2>Employee ID : {{ alldata.id }}</h2>
      <h2>Employee Location : {{ alldata.location }}</h2>
      <h2>Employee Pay : ${{ alldata.pay }}</h2>
      <button class="btn">FIRE</button>
    </div>
  </div>
</template>

<style>
.parent {
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5rem auto;
  width: 100%;
  text-align: center;

  /* display: flex;
  flex-direction: row;
  align-items: center; */
}

.card {
  font-size: 16px;
  width: 32rem;
  background-color: aliceblue;
  margin: auto;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
}

.btn {
  border-radius: 2rem;
  font-size: 2rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
}
</style>
