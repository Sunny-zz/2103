<template>
  <div class="todo-footer">
    <span class="left">1 item left</span>
    <div class="btns">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <button class="right">Clear completed</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.todo-footer {
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.todo-footer .btns {
  position: absolute;
  top: 50%;
  left: 46%;
  transform: translate(-50%, -50%);
}

</style>