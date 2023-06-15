<template>
  <div>
    <header>
      <div>
        <h1>Quiz Creation</h1>
      </div>
    </header>
    <section id="quiz-create-form">
      <v-form>
        <label for="title">Title</label>
        <v-text-field :name="title" :value="title">Title</v-text-field>
        <label for="description">Description</label>
        <v-text-field :name="description" :value="description">Description</v-text-field>
        <div id="question" v-for="(question, index) in quizForm.questions" :key="index">
          <label for="question">Question {{ index + 1}}</label>
          <v-text-field :name="question" :value="question.question">Question</v-text-field>
          <v-select label="Type" v-model="question.type" :items="['Choice', 'Essay']"></v-select>
          <div v-if="question.type === 'Choice'">
            <div id="choice" v-for="(choice, index) in question.choices" :key="index">
              <label for="choice">Choice {{ index + 1}}</label>
              <v-text-field :name="choice" :value="choice.choice">Choice</v-text-field>
              <v-checkbox :name="isCorrect" :value="choice.isCorrect">Correct</v-checkbox>
            </div>
          </div>
        </div>
      </v-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizForm: {
        title: "",
        description: "",
        questions: [
          {
            type: "Choice",
            question: "",
            choices: [
              {
                choice: "",
                isCorrect: false
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
