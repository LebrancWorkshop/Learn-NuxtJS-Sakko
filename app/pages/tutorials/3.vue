<template>
  <div>
    <div id="main">
      <h1 :style="{color: color}">{{ message }}</h1>
    </div>
    <div id="color-controller">
      <v-btn color="green" @click="changeColor('green')">Green</v-btn>
      <v-btn color="yellow" @click="changeColor('yellow')">Yellow</v-btn>
      <v-btn color="orange" @click="changeColor('orange')">Orange</v-btn>
      <v-btn color="white" @click="changeColor('white')">Reset</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Placeholder',
      color: 'white'
    }
  },
  methods: {
    changeColor(color) {
      this.color = color;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
