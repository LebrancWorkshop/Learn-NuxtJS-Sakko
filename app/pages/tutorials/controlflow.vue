<template>
  <div>
    <ol>
      <TodoList v-for="todo in todos" :key="todo.id" :item="todo" />
    </ol>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'Learn NodeJS' },
        { id: 2, text: 'Learn Python' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
