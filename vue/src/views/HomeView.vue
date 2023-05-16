<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
// import { fireBtn } from '../fireBtn.js'

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

async function fire() {
  try {
    let { data: alldata, error } = await supabase.from('alldata').delete().eq('id', '5')
    getData()
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

<!-- document.getElementsByClassName('btn').addEventListener('click', Fire)
  
  function Fire() {
console.log('helllo') } 

const {(data, error)} = await supabase.from('alldata').delete().eq('name',
'annie sr') -->

<template>
  <h1 class="header">Employee profiles</h1>

  <div class="parent">
    <div class="card" v-for="alldata in Data" :key="alldata.id">
      <h1>Name : {{ alldata.name }}</h1>
      <h2>Location : {{ alldata.location }}</h2>
      <h2>ID : {{ alldata.id }}</h2>
      <h2>Pay : ${{ alldata.pay }}</h2>
      <button @click="fire()" class="btn">FIRE</button>
    </div>
  </div>
</template>

<style>
.header {
  font-size: 6.5rem;
  margin-top: 2.5rem;
  text-align: center;
}

.parent {
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
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
