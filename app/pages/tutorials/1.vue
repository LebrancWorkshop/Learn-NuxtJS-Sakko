<template>
  <div>
    <h1>{{ message }}</h1>
    <span :title="title">Span Message</span>
    <span v-if="canSee">Hidden Message</span>
    <span v-else>You cannot see the Hidden Message</span>
    <div>
      <ol>
        <li v-for="(food, i) in foods" :key="i">{{ food }}</li>
      </ol>
    </div>
    <div>
      <p>{{ word }}</p>
      <v-btn color="blue" @click="reverseWord">Reverse Word</v-btn>
    </div>
    <div>
      <v-text-field v-model="dynamicWord"></v-text-field>
      <p>{{ dynamicWord }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Jaa',
      title: 'Title Naja',
      canSee: true,
      foods: [
        'Pizza',
        'Apple',
        'Shabu'
      ],
      word: 'Yahoo',
      dynamicWord: ''
    }
  },
  methods: {
    reverseWord() {
      this.word = this.word.split('').reverse().join('');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
