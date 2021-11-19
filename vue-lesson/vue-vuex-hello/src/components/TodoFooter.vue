<template>
  <div class="todo-footer">
    <span
      >{{ activeTodosNum }} item{{ activeTodosNum === 1 ? "" : "s" }} left</span
    >
    <div class="btns">
      <button
        :class="{ active: filterType === 'all' }"
        @click="change('all')"
      >
        all
      </button>
      <button
        :class="{ active: filterType === 'active' }"
        @click="change('active')"
      >
        active
      </button>
      <button
        :class="{ active: filterType === 'completed' }"
        @click="change('completed')"
      >
        completed
      </button>
    </div>
    <button>clear completed</button>
  </div>
</template>

<script>
import { mapGetters,  createNamespacedHelpers } from "vuex";
import {CHANGE_TYPE} from '../store/mutation_types'
// createNamespacedHelpers 这是一个辅助函数帮助我们去更方便的取命名空间模块下的内容
const { mapMutations, mapState } = createNamespacedHelpers('filterType')
export default {
  computed: {
    // 取 vuex 内的 getter 有点小复杂
    // 可以使用  mapGetters 简化   与   mapState 用法一样
    // activeTodosNum() {
    //   return this.$store.getters.activeTodosNum
    // }
    ...mapGetters(["activeTodosNum"]),
    // ...mapGetters({
    //   x: 'activeTodosNum'
    // })
    ...mapState(["filterType"]),
  },
  methods: {
    // 默认直接取的 changeType 是全局的 mutation
    // 但是 filterType 带了命名空间，所以它内部的所有内容的获取都得修改
    // ...mapMutations(["changeType"]),
    // 当需要取命名空间模块下的 内容时 需要写两个参数，第一个参数是模块名字符串
    // ...mapMutations('filterType', ['changeType'])
    // 当我们使用 createNamespacedHelpers  
    ...mapMutations([CHANGE_TYPE]),
    change(type) {
      // this.$store.commit('filterType/changeType', type)
      this[CHANGE_TYPE](type) 
    },
  },
};
</script>

<style>
.todo-footer {
  margin-top: 30px;
  display: flex;
}
.todo-footer .btns {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
}
.btns button.active {
  color: red;
}
</style>