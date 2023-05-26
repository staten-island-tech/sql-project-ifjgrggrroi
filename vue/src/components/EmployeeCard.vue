<template>
  <div class="card">
    <h1>Name : {{ Data.name }}</h1>
    <h2>Location : {{ Data.location }}</h2>
    <h2>ID : {{ Data.id }}</h2>
    <h2>Pay : ${{ Data.pay }}</h2>
    <button @click="fire" class="btn">FIRE</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const props = defineProps({
  Data: Object,
  id: Number,
})
 async fire() {
      const { data: alldata, error } = await supabase.from('alldata').delete().eq('id', '4')
    }
  /*   Data: ref(''),
  async getdata() {
    let { data: alldata, error } = await supabase.from('alldata').select('*')

    Data.value = await alldata
    console.log(alldata)
  }, */
</script>

<!-- let { data: alldata, error } = await supabase .from('alldata') .delete() .eq('id',
event.target.parentElement.remove()) -->

<style scoped>
.card {
  font-size: 16px;
  width: 25rem;
  background-color: aliceblue;
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
