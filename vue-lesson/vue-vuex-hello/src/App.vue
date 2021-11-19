<template>
  <div>
    <TodoMvc />
  </div>
</template>

<script>
import TodoMvc from './components/TodoMvc.vue'
export default {
  components: { TodoMvc },

}

// 整个 vuex 知识点  

// vuex 数据拆分成两大类
// 全局的  和  模块内的 
// 每个数据都可以设置  
// state(数据本身)   模块内的写法一般写成函数返回对象      mapState
// mutations(修改数据的函数)      commit 提交 mutation       mapMutations
// actions(异步获取数据 提交 mutation)    dispatch 提交 action   mapActions           因为 action 函数 是异步的，所以可以使用 action 的时候注意异步处理，详见官方的 组合action
// getters(数据的计算属性)   mapGetters
// modules  模块可以嵌套

// 其中当使用模块的时候要注意
// 1. state   组件内获取模块的 state 的时候嵌套了一层对象 
// 2. mutations  actions   getters  默认都是全局的  但是当模块拥有了命名空间的话这些内容就不是全局的了，需要通过 模块名来获取
// 组件内获取 命名空间的模块内的内容时 可以借助  vuex 内的  createNameSpaceHelpers 简化获取方式

// 做功能的思路
// 1. 是否将 data 共享都到 vuex
// 2. 是否分模块
// 3. 定义初始的 state
// 4. 看功能是否需要异步 需要的话设计 action 和 mutation， 不需要的话只设置 mutation，再看是不是还需要计算属性 getter
// 5. 组件内去使用 state  getters  action  mutation



</script>

<style>

</style>
