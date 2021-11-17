<template>
  <div>
    <h4>插件功能</h4>
    <!-- 就是给整个 vue 项目添加全局功能 -->
    <!-- 1. 添加全局资源， 全局指令  全局过滤器  全局组件  就是  Vue.directive  filter  component  -->
    <!-- 2. Vue.prototype.xx 给原型对象添加 -->
    <!-- 3. 混入 mixins -->
    <!-- 4. Vue.xx  例如 Vue.a = 10   这种方式相对比较少 -->
    <MixinDemo />
  </div>
</template>

<script>
import MixinDemo from './MixinDemo.vue'
export default {
  components: { MixinDemo },

}
</script>

<style>

</style>