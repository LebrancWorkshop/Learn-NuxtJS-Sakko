<template>
  <div>
    <div id="login">
      <label for="username">Username</label>
      <v-text-field type="text" placeholder="Enter your username" name="username" v-model="username" />

      <label for="password">Password</label>
      <v-text-field type="password" placeholder="Enter your password" name="password" v-model="password" />

      <v-btn color="green" @click="handleLogin">Login</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('Handle Login Success');
    }
  }
}
</script>

<style scoped>

</style>
