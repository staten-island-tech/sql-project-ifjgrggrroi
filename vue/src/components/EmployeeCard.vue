<template>
  <div :id="Data.id" class="card">
    <h1>Name: {{ Data.name }}</h1>
    <h2>Location: {{ Data.location }}</h2>
    <h2>ID: {{ Data.id }}</h2>
    <h2>Pay: ${{ Data.pay }}</h2>
    <button @click="fire" class="btn">FIRE</button>
    <button @click="Reroute2" class="btn">EDIT</button>
    <!-- <button @click="Reroute2" class="btn">EDIT</button> -->
    <p id="demo"></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { routerKey, useRouter } from 'vue-router'
import { useUserStore } from '../Pinia.js'

const router = useRouter()
const user = useUserStore()

const props = defineProps({
  Data: Object,
  id: Number
})

async function fire(e) {
  let target = e.target.parentElement.id

  const { data, error } = await supabase.from('Pay').delete().eq('id', target)
  e.target.parentElement.remove()
  await supabase.from('employees').delete().eq('id', target)
  e.target.parentElement.remove()
  await supabase.from('AnnieTeaHouse').delete().eq('id', target)
  e.target.parentElement.remove()
  await supabase.from('alldata').delete().eq('id', target)
  e.target.parentElement.remove()

  const Data = ref('')

  async function getData() {
    try {
      let { data: alldata, error } = await supabase.from('alldata').select('*')

      Data.value = await alldata
    } catch (error) {
      console.log(error)
    }
  }
  getData()
}

// async function update(e) {
//   let Target = e.target.parentElement.id

//   console.log(Target)
// }

function Reroute2(e) {
  user.target = e.target.parentElement.id
  console.log(user.target)

  router.push({ path: '/UpdateEmployee' })
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
  border: solid, 1.5px;
  border-color: black;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(15, 22, 133);
  background-color: rgb(255, 255, 255);
  width: 5.5rem;
  height: 2.5rem;
  margin-left: 1rem;
}
.btn:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(15, 22, 133);
}
</style>
