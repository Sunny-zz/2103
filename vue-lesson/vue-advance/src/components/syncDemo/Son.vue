<template>
  <div>
    <p>展示父组件的 num: {{num}}</p>
    <button @click="$emit('update:num', 200)">修改父组件的 num</button>
  </div>
</template>

<script>
export default {
  props: ['num']
}
</script>

<style>

</style>