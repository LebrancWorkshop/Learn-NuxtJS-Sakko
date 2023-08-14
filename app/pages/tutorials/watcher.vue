<template>
  <div>
    <div id="question">
      <h1>Question</h1>
      <v-text-field class="inputQuestion" type="text" v-model="question"></v-text-field>
    </div>
    <div id="answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question: '',
        answer: ''
      }
    }
  }
</script>

<style scoped>
  .inputQuestion {
    width: 30%;
  }
</style>
