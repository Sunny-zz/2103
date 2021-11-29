<template>
  <div>
    <p>展示父组件的 num: {{value}}</p>
    <button @click="$emit('input', 200)">修改父组件的 num</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<style>

</style>