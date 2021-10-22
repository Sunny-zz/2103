<template>
  <li class="todo-item">
    <input type="checkbox" name="" :id="id" class="checkbox" />
    <label class="completed" :for="id">
      <span class="iconfont icon-duigou"></span>
    </label>

    <p :class="['text', { done }]">{{ todoText }}</p>
    <!-- <input type="text"> -->
    <span class="iconfont icon-cha del"></span>
  </li>
</template>

<script>
export default {
  props: ["todoText", "id", "done"],
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