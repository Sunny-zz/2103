<template>
  <div>
    <p>我是孙子组件:, 接收祖先组件传递的 count: {{count()}} <button @click="add(100)">+100</button></p>
  </div>
</template>

<script>
export default {
  inject: ['count', 'add']
}
</script>

<style>

</style>