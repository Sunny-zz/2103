<template>
  <div class="todos">
    <TodoForm @add-todo='addTodo' />
    <TodoList :lists='lists' />
    <TodoFooter />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
export default {
  data() {
    return {
      lists: [
        {
          id: '12d3s',
          todoText: '学习 vue',
          done: false
        },
        {
          id: '78d3s',
          todoText: '学习 react',
          done: true
        },
        {
          id: '5t6y7u',
          todoText: '学习 小程序',
          done: false
        }
      ]
    }
  },
  components: {
    TodoForm,
    TodoList,
    TodoFooter
  },
  methods: {
    addTodo(todoText) {
      // 根据输入的内容修改数组
      // 给数组添加新的一项
      // 选择 push 
      // 创建一个 新的 对象
      // 格林威治时间   new Date().getTime() ---> 75173172543123
      this.lists.push({
        id: new Date().getTime().toString(),
        todoText
      })
    }
  },
}
</script>

<style>
  .todos{
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
  }
</style>