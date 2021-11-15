<template>
  <div>
    <!-- 事件侦听器 -->
    <!-- 其实就是组件的自定义事件 -->
    <!-- 之前我们所学的自定义事件流程是 父组件在使用子组件的时候 传递  @xx='xx' 来给子组件绑定自定义事件，子组件使用 $emit 接收并调用该自定义事件 -->
    <!-- 还可以使用  $on   $once  直接在组件内给组件添加自定义事件(事件侦听) -->
    <!-- 一般都是在组件自己的生命周期创建自定义事件，然后在需要的时候使用 -->
    <button @click="handleClick">触发自己绑定的自定义事件</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 100,
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      // console.log("正在递增");
      this.count++;
    }, 500);
    // 绑定自定义事件的时候有一些特殊的自定义时间
    // hook:beforeDetory  这事件在组件销毁前自动触发
    this.$on("testFun", () => {
      console.log("在生命周期 mounted 绑定的自定义事件 testFun");
    });
    // 使用特殊的自定义事件侦听(其实就是组件的生命周期钩子侦听)，可以和组件的生命周期钩子合并  可以简化代码
    // 当一些简单的操作需要在多个生命周期执行，就需要些多个生命周期钩子函数，有了特殊的自定义事件之后可以简化
    this.$on("hook:beforeDestroy", () => {
      clearInterval(this.timer);
    });
    
  },
  // mounted() {
  //   console.log('组件渲染完毕1')
  // },
  methods: {
    handleClick() {
      this.$emit("testFun");
    },
  },
  // beforeDestroy () {
  //   clearInterval(this.timer)
  // },
};
</script>

<style>
</style>