<template>
  <div>
    <div id="login">
      <label for="username">Username</label>
      <v-text-field type="text" placeholder="Enter your username" name="username" v-model="username" />

      <label for="password">Password</label>
      <v-text-field type="password" placeholder="Enter your password" name="password" v-model="password" />

      <v-btn color="green" @click="handleLogin">Login</v-btn>
      <v-btn color="red" @click="reset">Reset</v-btn>
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
      console.log(`Component\nUsername: ${this.username}\nPassword: ${this.password}\n\n`);
      this.$emit('login-emit', this.username, this.password);
    },
    reset() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>

</style>
