<template>
  <div class="render-function">
    <h4>渲染函数</h4>
    <!-- Vue 推荐在绝大多数情况下使用模板来创建你的 HTML, 也就是说 组件内的 html 结构一般都直接写在 template 内 -->
    <HashDemo  tag='p' hash='hello' >
      自定义的标题
    </HashDemo>
  </div>
</template>

<script>
import HashDemo from './HashDemo.vue'
export default {
  components: { HashDemo },
}
</script>

<style>

</style>