<template>
  <li class="todo-item">
    <!-- @input  xx = event.target.value   :value -->
    <!-- @change  xx = event.target.checked   :checked -->
    <!-- <input v-model="todo.done" type="checkbox" name="" :id="todo.id" class="checkbox" /> -->
    <input @change="change" :checked="todo.done" type="checkbox" name="" :id="todo.id" class="checkbox" />
    <label class="completed" :for="todo.id">
      <span class="iconfont icon-duigou"></span>
    </label>

    <p @dblclick="isEditing = true"  v-show="!isEditing" :class="['text', { done: todo.done }]">{{ todo.todoText }}</p>
    <input class="text" v-show="isEditing" type="text" :value="todo.todoText" @blur="edit($event,todo.id)" >
    <span v-show="!isEditing" @click="delTodo(todo.id)" class="iconfont icon-cha del"></span>
  </li>
</template>

<script>
export default {
  // props: ["todoText", "id", "done"],
  props: ["todo", "delTodo", "changeDone" ,'editTodo'],
  // 当父组件传递给子组件的数据是对象类型的时候，子组件直接修改这个对象，可以成功，并不会报错
  // 所以我们直接使用了 v-model 修改了 todo.done 
  // 如果不直接修改 就想让 祖先组件定义修改方法，然后替他去执行。
  // 那么就不需要使用 v-model 换成 checked 和 change
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    change() {
      // 执行祖先提供的修改方法
      this.changeDone(this.todo.id)
    },
    edit(e,id){
      this.editTodo(id, e.target.value)
      this.isEditing = false
    }
  },
};
</script>

<style>
.todo-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.todo-item:first-child {
  border-top: 1px solid #ccc;
}

.todo-item .checkbox {
  display: none;
}
.todo-item .completed {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 24px;
}
.todo-item .completed span {
  display: none;
}

.todo-item .checkbox:checked + label {
  border-color: chartreuse;
}

.todo-item .checkbox:checked + label span {
  display: inline;
  color: chartreuse;
}
.todo-item .text {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 200px;
  flex-grow: 1;
}
.todo-item .text.done {
  color: #ccc;
  text-decoration: line-through;
}
.todo-item .del {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
</style>