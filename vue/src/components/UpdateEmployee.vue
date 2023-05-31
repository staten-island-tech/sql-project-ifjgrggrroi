<template>
  <div>
    <h1>Employee Information</h1>
    <p><strong>Name:</strong>{{ Data.name }}</p>
    <p><strong>ID:</strong>{{ Data.id }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      props: {
        Data: Object,
        id: Number
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
