<template>
  <div class="todo-footer">
    <span class="left"
      >{{ activeNum }} item{{ activeNum === 1 ? "" : "s" }} left</span
    >
    <div class="btns">
      <button :style="{color: filterType==='all' ? 'red' : 'black'}" @click="changType('all')">All</button>
      <button :style="{color: filterType==='active' ? 'red' : 'black'}" @click="changType('active')">Active</button>
      <button :style="{color: filterType==='completed' ? 'red' : 'black'}" @click="changType('completed')">Completed</button>
    </div>
    <button @click="handleDel" v-show="doneNum" class="right">Clear completed</button>
  </div>
</template>

<script>
export default {
  props: ["activeNum","doneNum","filterType"],
  methods: {
    handleDel() {
      this.$emit('delComletedTodo')
    },
    changType(type){
      this.$emit('update:filterType', type)
      sessionStorage.setItem('filterType', type)
    }
  }
};
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