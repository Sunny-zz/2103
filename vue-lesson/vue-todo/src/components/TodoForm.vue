<template>
  <div class="todo-form">
    <span class="iconfont icon-xiangxia2"></span>
    <input class="todo-text" type="text" @keydown.enter="add" v-model="todoText" >
    <button @click="add" class="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    add() {
      const {todoText} = this
      if(todoText.trim()){
        this.$emit('add-todo', todoText)
        this.todoText = ''
      }
    }
  },
}
</script>

<style>
.todo-form {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.todo-form .todo-text{
  margin-left: 10px;
  margin-right: 10px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 20px;
}
.todo-form span {
  font-size: 20px;
  color: #ccc;
}
.todo-form .all{
  color: #000;
}
</style>