<template>
  <div :id="Data.id" class="card">
    <h1>ID: {{ Data.id }}</h1>
    <h2>{{ Data.name }}</h2>
    <h3>Location: {{ Data.location }}</h3>
    <h3>Salary: ${{ Data.pay }}</h3>
    <button :id="Data.name" @click="youSure">Fire</button>
    <button @click="toUpdate">Edit</button>
    <!--     <p id="demo"></p> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { routerKey, useRouter } from 'vue-router'
import { useTargetStore } from '../stores/target.js'

const router = useRouter()
const user = useTargetStore()

const props = defineProps({
  Data: Object,
  id: Number
})

function youSure(e) {
  let fireTarget = e.target.id
  let confirmAction = confirm('Are you sure you want to fire ' + fireTarget + '?')
  e.preventDefault()
  if (confirmAction === true) {
    fire(e)
    alert(fireTarget + ' fired successfully.')
  } else {
    alert(fireTarget + ' lives to work another day!')
  }
}
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

function toUpdate(e) {
  user.target = e.target.parentElement.id
  console.log(user.target)

  router.push({ path: '/UpdateEmployee' })
}
</script>

<style scoped>
h1 {
  font-size: 1.2rem;
  font-weight: 500;
}
.card {
  font-size: 16px;
  width: 25rem;
  background-color: aliceblue;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
  margin-bottom: 3rem;
}
button {
  border-radius: 2rem;
  border: solid, 1.5px;
  border-color: black;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(0, 0, 0);
  background-color: aliceblue;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  transition: all 0.2s;
  margin-left: 1rem;
}

button:hover {
  border-color: rgb(0, 0, 0);
  background-color: rgb(37, 131, 214);
  color: rgb(255, 255, 255);
}
</style>
