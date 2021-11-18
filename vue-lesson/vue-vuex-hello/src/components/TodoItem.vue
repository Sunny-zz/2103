<template>
  <div class="todo-item">
    <input @change="change" :checked='isDone' type="checkbox" name="" id="">
    <span :class="{done: isDone}" >{{text}}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// 修改单个 todo 的 isDone 属性
// 请求地址 http://localhost:3008/todos/:id  
// 请求方法  patch
// 请求参数  {需要修改的属性}   比如  {isDone: true}
// 返回值是修改之后的整个 todo
export default {
  props: ['text', 'isDone', 'id'],
  methods: {
    change(e) {
      this.changeTodo({id: this.id, isDone: e.target.checked })
    },
    ...mapActions(['changeTodo'])
  },
}
</script>

<style> 
.done{
  color: #ccc;
  text-decoration: line-through;
}

</style>