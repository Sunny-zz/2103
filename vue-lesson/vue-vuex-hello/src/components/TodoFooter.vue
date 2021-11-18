<template>
  <div class="todo-footer">
    <span>0 item left</span>
    <div class="btns">
      <button>all</button>
      <button>active</button>
      <button>completed</button>
    </div>
    <button>clear completed</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.todo-footer{
  margin-top: 30px;
  display: flex;
}
.todo-footer .btns{
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
}
</style>