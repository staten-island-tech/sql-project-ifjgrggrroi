<template>
  <div>
    <button @click="myFunction">Try it</button>

    <p id="Card"></p>
  </div>
</template>

<script>
function myFunction() {
  let text
  let User = prompt('Please enter employee name:', 'Harry Potter')
  if (User == null || User == '') {
    text = 'User cancelled the prompt.'
  } else {
    text = 'Hello ' + User + '! How are you today?'
  }
  document.getElementById('Card').innerHTML = text
}
</script>

<style lang="scss" scoped></style>
