<template>
  <div>
    <p>我是儿子组件, 接收父组件传递的 count: {{count()}} <button @click="handleClick">+10</button></p>
    <Grandson />
    <!-- <Grandson @add='(num) => $emit("add", num)' :count='count' /> -->

    <!--  @add='$emit("add")' -->
    <!-- 因为 $emit('add') 相当于接收 add 函数并且调用 add 函数，那么直接将函数调用当作 自定义事件传递的话， 那么其实传递的值会变成 function(){ add函数调用} , 所以不能直接将  $emit('add') 当作自定义事件传递过去 -->
  </div>
</template>

<script>
import Grandson from './Grandson.vue'
export default {
  mounted () {
    // this.$once  作用是给组件添加一个自定义事件，而且这个自定义事件只会触发一次
    // this.$on 作用是给组件添加一个自定义事件

    // 绑定自定义事件的时候 有些特殊事件 
    // 比如 hook:beforeDestroy  绑定一个组件销毁前的事件侦听 组件销毁前自动触发
    this.$once('hook:beforeDestroy', function(){
      console.log('组件 son 销毁前')
    })
  },
  components: { Grandson },
  // props: ['count']
  // 注入者
  inject: ['count', 'add'],
  methods: {
    handleClick() {
      // this.add(10)
      this.$emit('add', 10)
    }
  }
}
</script>

<style>

</style>