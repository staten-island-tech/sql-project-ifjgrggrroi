<template>
  <div class="parent">
    <div class="card">
      <h1 class="text">Update Employee</h1>
      <p>ID: {{ user.target }}</p>
      <p class="text">
        <strong>Name: </strong> <input v-model="names" placeholder="Enter text" required />
      </p>
      <p class="text">
        <strong>Location: </strong>
        <input v-model="locations" placeholder="Enter a place" required />
      </p>
      <!--  <p class="text">
        <strong>Location ID: </strong>
        <input v-model="locationIDs" placeholder="Enter a ID" required />
      </p> -->
      <p class="text">
        <strong>Salary: </strong> <input v-model="pays" placeholder="Enter a number" required />
      </p>
      <button class="btn" @click="Update">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { routerKey, useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'
import { useTargetStore } from '../stores/target.js'

const router = useRouter()
const Data = ref('')
const user = useTargetStore()

const props = defineProps({
  Data: Object,
  id: Number
})

const names = ref('')
const pays = ref('')
const locations = ref('')

async function Update(e) {
  try {
    let Name = names.value
    let Pay = pays.value
    let Location = locations.value

    e.preventDefault()

    const { data, error } = await supabase
      .from('alldata')
      .update({ salary: Pay, employee_name: Name, location_name: Location })
      .eq('id', user.target)
    await supabase.from('employees').update({ name: Name, salary: Pay }).eq('id', user.target)

    console.log('Updated')
  } catch (error) {
    console.log(error)
  }
  router.push({ path: '/home' })
}

async function getData() {
  try {
    let { data: alldata, error } = await supabase.from('alldata').select('*')

    Data.value = await alldata
    console.log(alldata)
  } catch (error) {
    console.log(error)
  }
}
getData()
</script>

<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 5rem;
  margin-top: 5rem;
  width: 85vw;
  /* width: 75vw; */
}
.Btn {
  border-radius: 2rem;
  font-size: 2.2rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}
.btn {
  border-radius: 2rem;
  font-size: 1rem;
  background-color: aliceblue;
  padding: 3px 10px 3px 10px;
  margin-top: 0.15rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.text {
  font-size: 25px;
}
.card {
  width: 25rem;
  background-color: aliceblue;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
}
.UpdateEmployee {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

h2 {
  font-size: 15px;
}
</style>
