<template>
  <div class="todo-list">
    <ul class="list">
      <TodoItem v-bind='$listeners' v-for="todo in lists" :key="todo.id" :todo='todo' />
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
  created () {
    // console.log(this.$listeners)
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