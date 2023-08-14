<template>
  <div>
    <div id="question">
      <h1>Question</h1>
      <v-text-field class="inputQuestion" type="text" v-model="question"></v-text-field>
    </div>
    <div id="answer">
      <p>{{ answer }}</p>
    </div>
    <div id="display" v-if="imageDisplay !== ''">
      <img :src="imageDisplay" alt="Image Display" />
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    created() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    watch: {
      question(newQuestion, oldQuestion) {
        this.answer = 'Typing...';
        this.imageDisplay = '';
        this.debouncedGetAnswer();
      }
    },
    data() {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
        imageDisplay: ''
      }
    },
    methods: {
      getAnswer() {
        if(this.question === '') {
          this.answer = 'I cannot give you an answer until you ask a question!';
          this.imageDisplay = '';
          return
        }

        this.answer = 'Thinking...';
        this.$axios.get('https://yesno.wtf/api')
          .then(response => {
            this.answer = _.capitalize(response.data.answer);
            this.imageDisplay = response.data.image;
          })
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error;
          })
      }
    }
  }
</script>

<style scoped>
  .inputQuestion {
    width: 30%;
  }
</style>
