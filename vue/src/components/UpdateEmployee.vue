<template>
  <div>
    <h1>Update Employee</h1>
    <p>
      <strong>{{ Data.name }}</strong>
    </p>
    <p>
      <strong>{{ Data.id }}</strong>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  Data: Object,
  id: Number
})
</script>

<style lang="scss" scoped></style>
