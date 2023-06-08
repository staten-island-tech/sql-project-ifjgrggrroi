<template>
  <h1 class="header">Add an Employee</h1>
  <div class="form-wrapper">
    <form id="form" @submit="addData">
      <!-- <label for="name">Name</label> -->
      <input v-model="names" type="text" id="name" class="text-box" placeholder="Name" required />

      <!--    <label for="location">Location</label> -->
      <input
        v-model="locations"
        type="text"
        id="location"
        class="text-box"
        placeholder="Location"
        required
      />

      <!-- <label for="pay">Pay</label> -->
      <input
        v-model="pays"
        type="number"
        min="0"
        id="pay"
        class="text-box"
        placeholder="Salary"
        required
      />

      <!-- <input type="submit" value="Submit" id="submit" /> -->
      <button type="submit" id="Button" @click="routeToHome">Save</button>
    </form>
  </div>
  <!--   <button @click="routeToHome">Back To Home Page</button> -->
</template>

<script setup>
import { routerKey, useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'
import { ref, computed } from 'vue'

const router = useRouter()
const ids = ref('')
const names = ref('')
const locations = ref('')
const pays = ref('')

function routeToHome() {
  router.push({ path: '/home' })
}

async function addData(e) {
  try {
    e.preventDefault()
    // let ID = ids.value
    let name = names.value
    let location = locations.value
    let pay = pays.value
    let { data, error } = await supabase
      .from('alldata')
      .insert({ location: location, name: name, pay: pay })
    await supabase.from('AnnieTeaHouse').insert({ location: location })
    await supabase.from('Pay').insert([{ pay: pay }])
    await supabase.from('employees').insert([{ name: name }])
    console.log('added')
  } catch (error) {
    console.log('error')
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}
/* div {
  display: block;
  text-align: center;
  margin-top: auto;
} */

.form-wrapper {
  width: 25rem;
  height: 30rem;
  margin: auto;
  background-color: aliceblue;
  border-radius: 2rem;
  text-align: center;
}
form {
  padding-top: 2rem;
  font-size: 2rem;
}
/* .submit {
  text-align: center;
}

.form-inputs {
  text-align: left;
  width: 14rem;
}
.form-input {
  margin-bottom: 1rem;
}

.text {
  font-size: 2rem;
}

.text-box {
  padding: 0.5rem;
  width: 100%;
  align-items: center;
} */
input {
  border-radius: 2rem;
  height: 2.5rem;
  width: 15rem;
  border: solid;
  border-color: black;
  border-width: 1px;
  padding-left: 1.5rem;
  margin-top: 2rem;
}

button {
  display: block;
  margin: auto;
  margin-top: 1rem;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  background-color: rgb(37, 131, 214);
  transition: all 0.2s;
  border: 1px solid;
  border-radius: 2em;
}

button:hover {
  border-color: rgb(0, 0, 0);
  background-color: aliceblue;
  color: rgb(0, 0, 0);
}
</style>
