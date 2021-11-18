<template>
  <div class="todo-content">
    <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapState } from "vuex";
export default {
  components: { TodoItem },
  // 当我们获取 store 数据的时候一般都是计算属性获取
  // 这种方式有一个简写的方法 借助 vuex 提供的 mapState 方法
  // mapState 方法调用的时候需要传递参数
  // 第一种传递对象作为参数，这个对象内的属性就相当于计算属性
  // 计算属性的值有两种写法
  // 1. 属性值写成字符串，该字符串表示的是 state 内的某一数据 例如 todos: 'todos' 获取 store 内的 todos
  // 2. 属性值写成函数 这个函数默认接收 store 内的 state 作为参数，该函数的返回值就是计算属性的值  例如  todos: (state) => state.todos     获取 store 内的 todos,  需要注意在这个函数内想要使用 组件内的 this 必须写成普通函数

  // 第二种传递数组作为参数
  // 数组内写字符串， 字符串就是 store.state 内的数据  例如    ['todos'] , 当你组件内的计算属性名，和 store 内的 state 下的属性名数据要相同名字的话，可以直接使用数组形式
  // mapState 调用之后会返回一个对象， 这个对象我们使用的时候需要和组件内的 computed 合并，将 mapState 内设置好的 计算属性和组件的计算属性合并
  computed: {
    // todos() {
    //   return this.$store.state.todos
    // }
    // ...mapState({
    //   // todos: 'todos'
    //   todos: (state) => state.todos
    // }),
    ...mapState(['todos']),
  },
};
</script>

<style>
</style>