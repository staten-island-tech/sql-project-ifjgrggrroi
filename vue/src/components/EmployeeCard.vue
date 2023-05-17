<template>
  <div class="parent">
    <div class="card">
      <h1>Name : {{ alldata.name }}</h1>
      <h2>Location : {{ alldata.location }}</h2>
      <h2>ID : {{ alldata.id }}</h2>
      <h2>Pay : ${{ alldata.pay }}</h2>
      <button @click="fire(event)" class="btn">FIRE</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  alldata: Object,
  id: Number
})

async function fire(event) {
  try {
    let { data: alldata, error } = await supabase
      .from('alldata')
      .delete()
      .eq('id', event.target.parentElement.remove())

    getData()
    Data.value = alldata
    console.log(alldata)
  } catch (error) {
    console.log(error)
  }
}
</script>

<!-- <div class="card" v-for="alldata in Data" :key="alldata.id">
    <h1>Name : {{ alldata.name }}</h1>
    <h2>Location : {{ alldata.location }}</h2>
    <h2>ID : {{ alldata.id }}</h2>
    <h2>Pay : ${{ alldata.pay }}</h2>
    <button @click="fire(event)" class="btn">FIRE</button>
  </div> -->

<style scoped>
.parent {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  text-align: center;
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
