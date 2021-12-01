<template>
  <div class="dialog">
    <div class="dialog-header">
      <h3>{{title}}</h3>
      <span>×</span>
    </div>
  </div>
</template>

<script>
// 自己按照 element ui 封装一个 对话框组件

// 组件的 功能
export default {
  props: {
    title: {
      type: String,
      required: true
    },
  },
}
</script>

<style>

</style>