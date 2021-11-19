<template>
  <div class="todo-footer">
    <span>{{ activeTodosNum }} item{{ activeTodosNum === 1 ? "" : "s" }} left</span>
    <div class="btns">
      <button>all</button>
      <button>active</button>
      <button>completed</button>
    </div>
    <button>clear completed</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
</style>