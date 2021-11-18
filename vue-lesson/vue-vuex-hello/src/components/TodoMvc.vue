<template>
  <div class="todomvc">
    <h2>TODO MVC</h2>
    <TodoHead />
    <TodoContent />
    <TodoFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TodoContent from "./TodoContent.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoHead from "./TodoHead.vue";
export default {
  components: { TodoHead, TodoContent, TodoFooter },
  created() {
    // const res = await this.$axios.get("/todos");
    // console.log(res)
    // 更新 store
    // 在组件内使用 commit 触发 mutation 有点麻烦
    // 我们可以借助 vuex 中的 mapMutations 函数来简化提交 mutation 函数的操作
    // this.getTodos()

    // 触发 action
    // this.$store.dispatch('getTodos')
    this.getTodos()
  },
  methods: {
    // ...mapMutations(['getTodos']),
    // ...mapMutations({
    //   getTodos: 'getTodos'
    // }),
    // 上面 mapMutations 函数返回一个对象，这个对象需要和组件的 methods 合并
    // mapMutations 函数的传参  
    // 1. 数组 数组内的数组项就是 store 内的 mutation 函数名   2. 对象 对象的属性的属性值是 store 内的 mutation 函数名
    // 两种参数的区别就是换不换名字
    
    // 使用 mapActions 简化获取 action 函数
    // 用法和 mapMutations 一样
    ...mapActions(['getTodos'])
  },
};
</script>

<style>
.todomvc {
  width: 400px;
  margin: 0 auto;
}
</style>