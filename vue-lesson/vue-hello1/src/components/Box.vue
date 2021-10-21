<template>
  <div class="box-wrap">
    <div :class=" isActive ? 'box active' : 'box' ">哈哈哈哈{{num}}</div>
    <!-- <div v-bind:class="`box${isActive ? ' active' : ''}`">{{text}}</div> -->

    <!-- v-html 指令 用来解析 html 字符串(带标签的) -->
    <h3 v-html="text"></h3>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     // 在这里面的属性就是组件的数据 控制组件页面的变化
  //   }
  // }

  data: () => ({
    isActive: true,
    text: '<span>啊哈11哈111哈哈哈哈</span>',
    num: 100
  })
}
</script>

<style>
  .box{
    width: 200px;
    height: 200px;
    background-color: #ccc;
  }
  .box.active {
    background-color: #6ceb5c;
  }
</style>