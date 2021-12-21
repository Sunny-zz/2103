<template>
  <!-- Fragment 允许 根 tempalte 有多个子级 -->
  <teleport to="#dialog">
    <!-- teleport vue 的内置组件 可以将内容渲染到页面的任何地方 -->
    <!-- to 的值 写选择器即可 -->
    <div class="dialog">
      <h5>对话框组件</h5>
    </div>
  </teleport>

  <h4></h4>
</template>

<style>
</style>