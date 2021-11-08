<template>
  <div>
    <h3>文章列表页</h3>
    <ul v-if="list.length">
      <li v-for="num in list" :key="num">{{num}}</li>
    </ul>
  </div>
</template>

<script>
// 因为该组件被制作成了动态路由， 那么在组件内就要根据不同的页面来展示不同的内容
// 我们可以通过 路由提供的全局路由数据， 来获取路由的动态参数(也就是路由地址内的变量)
// 全局路由数据 1. $route 当前路由信息  2. $router 全部的路由信息
// $route 内
// params 属性 动态路由参数对象
export default {
  data() {
    return {
      list: []
    }
  },
  watch: {
    // 当监听一个数据的时候
    // 这个数据可以是 data  prop  路由相关数据
    // 而且监听的数据不需要使用 this
    // 还有可以直接对象下的某一属性监听, 写成  '对象.属性' 即可
    "$route.params.type": {
      handler(newValue) {
        console.log(newValue);
        if( newValue ==='frontend'){
          this.list = [1,2,3]
        }else{
          this.list = [4,5,6]
        }
      },
      immediate: true
    },
  },
};
</script>

<style>
</style>