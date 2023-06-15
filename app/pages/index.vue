<template>
  <div>
    <h1>Index Page</h1>
    <v-btn color="orange" @click="alertTest">Alert Test</v-btn>
  </div>
</template>

<script>
  export default {
    methods: {
      alertTest() {
        alert("ไม่อยากเป็น ส.ว.");
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
