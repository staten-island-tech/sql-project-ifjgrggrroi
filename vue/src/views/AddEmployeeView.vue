<template>
  <button class="Btn" @click="reroute">Back To Home Page</button>

  <h1 class="header">Add an Employee</h1>

  <form id="form" @submit="addData">
    <div class="parent">
      <div class="form inputs">
        <div class="form-input">
          <label for="ID" class="text">ID</label>
          <input
            v-model="ids"
            type="number"
            min="0"
            id="id"
            class="text-box"
            placeholder="Enter a Number"
            required
          />
        </div>

        <div class="form-input">
          <label for="name" class="text">Name</label>
          <input
            v-model="names"
            type="text"
            id="name"
            class="text-box"
            placeholder="Enter a Name"
            required
          />
        </div>

        <div class="form-input">
          <label for="location" class="text">Location</label>
          <input
            v-model="locations"
            type="text"
            id="location"
            class="text-box"
            placeholder="Enter a Place"
            required
          />
        </div>

        <div class="form-input">
          <label for="pay" class="text">Pay</label>
          <input
            v-model="pays"
            type="number"
            min="0"
            id="pay"
            class="text-box"
            placeholder="Enter a Number"
            required
          />
        </div>
      </div>
    </div>
    <div class="submit">
      <!-- <input type="submit" value="Submit" id="submit" /> -->
      <input type="submit" value="Submit" id="Button" />
    </div>
  </form>

  <!-- <div>
    <button class="Btn" @click="myFunction">Try it</button>

    <p id="Card"></p>
  </div> -->
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

function reroute() {
  router.push({ path: '/' })
}

async function addData(e) {
  try {
    e.preventDefault()
    let ID = ids.value
    let name = names.value
    let location = locations.value
    let pay = pays.value
    let { data, error } = await supabase
      .from('alldata')
      .insert({ id: ID, location: location, name: name, pay: pay })
    await supabase.from('AnnieTeaHouse').insert({ id: ID, location: location })
    await supabase.from('Pay').insert([{ id: ID, pay: pay }])
    await supabase.from('employees').insert([{ id: ID, name: name }])
    console.log('added')
  } catch (error) {
    console.log('error')
  }
}

/* async function catchError(e) {
  try {
    let ID = ids.value
    let { data: alldata, error } = await supabase.from('alldata').select('id')

    console.log(ids)
  } catch {
    console.log(Error2)
  }
}

if () {
      id.value = alldata.id
      console.log("Duplicate ID")
    }
    else {
      console.log('ERROR')
    } */
</script>

<script>
/* const DOMSelectors = {
  submitForm: document.querySelector('form'),
  ID: document.getElementById('id'),
  Name: document.getElementById('name'),
  Location: document.getElementById('location'),
  Pay: document.getElementById('pay')
  let { data, error } = await supabase
      .from('alldata')
      .insert({ id: '13', location: 'Brooklyn', name: 'angelaWang', pay: '25' })
}

function clearfields() {
  DOMSelectors.ID.value = ''
  DOMSelectors.Name.value = ''
  DOMSelectors.Location.value = ''
  DOMSelectors.Pay.value = ''
}

DOMSelectors.submitForm.addEventListener('submit', function (event) {
  let ID = DOMSelectors.ID.value
  let Name = DOMSelectors.Name.value
  let Location = DOMSelectors.Location.value
  let Pay = DOMSelectors.Pay.value

  event.preventDefault()
  clearfields()
}) */

/*  let { data, error } = await supabase
      .from('AnnieTeaHouse')
      .insert([{ id: '13', location: 'Brooklyn' }], { upsert: true }) */

/* const { data, error } = await supabase
  .from('alldata')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue') */

// getData()

/* function myFunction() {
  let text
  let User = prompt('Please enter employee name:', 'Harry Potter')
  if (User == null || User == '') {
    text = 'User cancelled the prompt.'
  } else {
    text = 'Hello ' + User + '! How are you today?'
  }
  document.getElementById('Card').innerHTML = text
} */
</script>

<style>
.header {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.submit {
  text-align: center;
}

#Button {
  border-radius: 2rem;
  font-size: 1.5rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
  width: 15%;
}

.Btn {
  border-radius: 2rem;
  font-size: 2.2rem;
  background-color: aliceblue;
  padding: 5px 15px 5px 15px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
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
}

.btn {
  font-size: 2rem;
  padding: 0.5rem;
}
</style>
