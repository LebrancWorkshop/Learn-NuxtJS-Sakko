<!-- Methods รับค่า Argument ได้ แต่ Computed ทำไม่ได้  -->
<!-- ค่าใน Computed หากค่าไม่เปลี่ยน จะไม่ Run ใหม่ หากมีการ Re-Render แต่ค่าใน Methods จะมีการรันใหม่ เมื่อมีการ Re-Render  -->
<template>
  <div>
    <p>Message: {{ message }}</p>
    <p>Computed: {{ computedMessage }}</p>
    <p>Methods: {{ methodMessage() }}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Example Text',
        firstName: 'John',
        lastName: 'Spagehtti'
      }
    },
    computed: {
      computedMessage() {
        return this.message.split(' ').reverse().join(' ');
      },
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(val) {
          this.firstName = val.split(' ')[0];
          this.lastName = val.split(' ')[1];
        }
      }
    },
    methods: {
      methodMessage() {
        return this.message.split(' ').reverse().join(' ');
      }
    }
  }
</script>

<style scoped>

</style>
