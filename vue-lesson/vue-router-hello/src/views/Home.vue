<template>
  <transition name="fade">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <router-link :to="{ path: '/list' }">去列表页</router-link>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Home",
  // created () {
  //   console.log('组件初始化 data 完毕');
  // },
  // 组件内的路由守卫
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log('进入Home 组件之前')
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // console.log('updat')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // 在这也可以监听到 动态路有参数的改变，所以可以根据参数的变化 更新组件的数据。也就可以替换之前的 watch
    // 当这个组件是父路由的时候，跳转到其子路由也会触发 beforeRouteUpdate ，需要 next()
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // 一旦设置了 beforeRouteLeave 守卫，就必须在守卫执行的时候  next()
    next();
  },
};
</script>
