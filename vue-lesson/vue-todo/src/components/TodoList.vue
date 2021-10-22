<template>
  <div class="todo-list">
    <ul class="list">
      <TodoItem  v-for="todo in lists" :key="todo.id" v-bind='todo' />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  props: ['lists'],
  components: {
    TodoItem,
  },
}
</script>

<style>
.list{
  list-style: none;
  padding-left: 0;
  margin: 0;
}
</style>