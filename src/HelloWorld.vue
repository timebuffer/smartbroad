<!-- src/components/HelloWorld.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from Vue!'
    }
  }
}
</script>

<style scoped>
div {
  color: blue;
}
</style>
