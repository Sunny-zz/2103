<template>
  <div class="todo-item">
    <input @change="change" :checked="isDone" type="checkbox" name="" id="" />
    <input
      ref="input"
      v-if="isEditing"
      type="text"
      class="text"
      :value="text"
      @change="changeText"
    />
    <span @dblclick="edit" v-else :class="{ done: isDone, text: true }">{{
      text
    }}</span>
    <span class="del" @click="del">x</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// 修改单个 todo 的某个属性
// 请求地址 http://localhost:3008/todos/:id
// 请求方法  patch
// 请求参数  {需要修改的属性}   比如  {text: 新的 text}
// 返回值是修改之后的整个 todo

// 删除单个 todo
// 请求地址 http://localhost:3008/todos/:id
// 请求的方法 delete
// 请求参数  无
// 请求的返回值  无

export default {
  props: ["text", "isDone", "id"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    change(e) {
      this.changeTodo({ id: this.id, isDone: e.target.checked });
    },
    del() {
      this.delTodo(this.id);
    },
    ...mapActions(["changeTodo", "delTodo", "changeTodoText"]),
    edit() {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    async changeText(e) {
      await this.changeTodoText({ id: this.id, text: e.target.value });
      this.isEditing = false;
    },
  },
};
</script>

<style>
.todo-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
.done {
  color: #ccc;
  text-decoration: line-through;
}
.text {
  flex-grow: 1;
}
.del {
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px;
}
</style>