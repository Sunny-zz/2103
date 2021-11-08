<template>
  <div class="app">
    <h2>hello vue router</h2>
    <div>
      <router-link to="/">跳转到 Home</router-link>
      |
      <router-link to="/about">跳转到 About</router-link>
    </div>
    <!-- router-view 是来展示路由的组件，会根据页面地址切换不同页面的展示， 就是用页面地址和路由对象的 path 匹配 -->
    <!-- 但是路由展示的时候默认最外层的 router-view 只展示最外层的页面， 想要展示子页面，需要在父组件中使用 router-view 组件，将子页面占到父组件内的某个地方  -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>