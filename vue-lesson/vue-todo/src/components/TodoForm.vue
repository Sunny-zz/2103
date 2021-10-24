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
        this.$emit('add-todo', todoText)
        this.todoText = ''
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