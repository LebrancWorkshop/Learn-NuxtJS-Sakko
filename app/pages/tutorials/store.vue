<template>
  <div>
    <div id="content">
      <div v-if="$store.state.lang === 'en'">
        {{ content.en }}
      </div>
      <div v-else-if="$store.state.lang === 'th'">
        {{ content.th }}
      </div>
    </div>
    <div id="action">
      <v-btn color="green" @click="switchLanguage">Switch Language</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        th: "สวัสดี",
        en: "Hello"
      }
    }
  },
  methods: {
    switchLanguage() {
      if(this.$store.state.lang === 'en') {
        this.$store.commit('SET_LANG', 'th');
      } else {
        this.$store.commit('SET_LANG', 'en');
      }
    }
  }
}
</script>

<style scoped>

</style>
