<template>
  <div>
    <header>
      <h1>Login Form</h1>
    </header>
    <div>
      <LoginForm @login-emit="handleLoginEmit" />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm
  },
  data() {
    return {

    }
  },
  methods: {
    handleLoginEmit(username, password) {
      console.log(`Page\nUsername: ${username}\nPassword: ${password}\n\n`);
    }
  }
}
</script>

<style scoped>

</style>
