<template>
  <button class="Btn" @click="reroute">Back To Home Page</button>

  <form id="form">
    <div class="parent">
      <div class="form inputs">
        <div class="form-input">
          <label for="id" class="text">ID: </label>
          <input type="text" id="id" class="text-box" required />
        </div>

        <div class="form-input">
          <label for="name" class="text">Name: </label>
          <input type="text" id="name" class="text-box" required />
        </div>

        <div class="form-input">
          <label for="loation" class="text">Location: </label>
          <input type="text" id="location" class="text-box" required />
        </div>

        <div class="form-input">
          <label for="pay" class="text">Pay: </label>
          <input type="text" id="pay" class="text-box" required />
        </div>
      </div>
    </div>
  </form>

  <!-- <div>
    <button class="Btn" @click="myFunction">Try it</button>

    <p id="Card"></p>
  </div> -->
</template>

<script setup>
import { routerKey, useRouter } from 'vue-router'

const router = useRouter()

function reroute() {
  router.push({ path: '/' })
}
</script>

<script>
function newEmployee() {}

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

.parent {
  text-align: center;
}

.form-input {
  text-align: left;
  margin-bottom: 1rem;
  width: 14rem;
}

.text {
  font-size: 2rem;
}

.text-box {
  padding: 0.5rem;
  font-size: 2rem;
  width: 20rem;
}

.btn {
  font-size: 2rem;
  padding: 0.5rem;
}
</style>
