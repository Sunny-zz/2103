<template>
  <div class="todo-form">
    <!-- <span  v-show="allNum" :class="['iconfont', 'icon-xiangxia2', {allCompleted: !activeNum } ]"></span> -->
    <label for="all">
      <input @change="changeAll" :checked='!activeNum' type="checkbox" name="" id="all">
      <span v-show="allNum" class="iconfont icon-xiangxia2 allCompleted"></span>
    </label>
    <input class="todo-text" type="text" @keydown.enter="add" v-model="todoText" >
    <button @click="add" class="add">添加</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['allNum', 'activeNum'],
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    add() {
      const {todoText} = this
      if(todoText.trim()){
        // 1. 更新后端数据库
        axios.post('http://localhost:3008/todos', {todoText, done: false }).then(res => {
          // 2. 1 成功之后在更新本地，更新本地的时候一般要根据后端请求的返回值去更新
          // console.log(res.data.id)
          this.$emit('add-todo', todoText , res.data.id)
          this.todoText = ''
        })
      }
    },
    changeAll(e){
      // console.log(e.target.checked)
      this.$emit('changeAllStatus', e.target.checked)
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
.todo-form #all{
  display: none;
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
  font-weight: bolder;
}

.todo-form #all:checked + .allCompleted{
  color: #000;
}
</style>