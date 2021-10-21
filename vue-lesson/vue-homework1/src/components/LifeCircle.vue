<template>
  <div>
    <h3>生命周期钩子</h3>
    <!-- 每一个 vue 实例(每一个组件)创建的时候，都会经历一系列的初始化过程。其实就是执行了一些函数。beforeCreate  created  beforeMount  mounted  -->
    <!-- 所有的生命周期钩子函数都可以直接写在 script 导出的对象内 -->
    <!-- 所有生命周期都是同步函数 -->
  </div>
</template>

<script>
export default {
  beforeCreate(){
    console.log('我是 beforeCreate')
  },
  created(){
    // 组件的js相关以及模版语法都处理完毕。
    // 我们可以对组件的 data 进行修改 (通常这个修改相当于进入页面就要获取的数据) 
    // 可以发送 ajax 请求 更新 data
    console.log('我是 created')
  },
  beforeMount(){
    console.log('我是 beforeMount')
  },
  mounted(){
    // 组件的 template 渲染到了页面上。那么 dom 节点渲染完毕。
    // 在这可以获取真实 dom 节点
    console.log('我是 mounted')
  }
}
</script>

<style>

</style>