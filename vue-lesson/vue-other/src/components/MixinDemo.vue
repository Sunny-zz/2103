<template>
  <div>
    <h4>混入 mixin</h4>
    <!-- 就是使用 mixin 模拟组件的一部分 js 功能，然后混入到任意组件内 -->
    <!-- 1. 局部混入 -->
    <!-- 2. 全局混入  很少用 -->
    <p>{{text}}</p>
  </div>
</template>


<script>
// import mixin from '../plugins/minxin'
export default {
  data() {
    return {
      text: 'hello'
    }
  },
  // mixins: [mixin],
  // 混入的 mixin 会自动和组件的进行合并,当合并发生冲突的时候重复的内容，以组件本身为准
  created () {
    console.log('我是组件本身的生命周期钩子函数 created');
  },
}
</script>

<style>

</style>