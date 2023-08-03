<template>
  <div>
      <li>{{ item.text }}</li>
  </div>
</template>

<script>
export default {
  props: ['item'],
  mounted() {
    console.log(this.item);
  }
}
</script>

<style lang="css" scoped>
</style>
