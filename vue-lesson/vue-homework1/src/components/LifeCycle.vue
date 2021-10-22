<template>
  <div>
    <h3>生命周期钩子</h3>
    <!-- 每一个 vue 实例(每一个组件)创建的时候，都会经历一系列的初始化过程。其实就是执行了一些函数。beforeCreate  created  beforeMount  mounted  -->
    <!-- 所有的生命周期钩子函数都可以直接写在 script 导出的对象内 -->
    <!-- 所有生命周期都是同步函数 -->
    <button @click="add">+1</button>
    <p class="number">{{num}}</p>
    <button @click="show = false">消失</button>
    <Box v-if="show" />
  </div>
</template>

<script>
import Box from './Box.vue'
export default {
  data() {
    return {
      num: 100,
      show: true
    }
  },
  components: {
    Box,
  },
  beforeCreate(){
    console.log('我是 beforeCreate')
  },
  created(){
    // 组件的js相关以及模版语法都处理完毕。
    // 我们可以对组件的 data 进行修改 (通常这个修改相当于进入页面就要获取的数据) 
    // 可以发送 ajax 请求 更新 data
    console.log('我是 created')
    setTimeout(() => {
      console.log('我是 created 里面的 异步操作')
      this.num = 200
      this.$nextTick(() => {
        console.log(document.querySelector('.number').innerHTML)
      })
    }, 1000)
  },
  beforeMount(){
    console.log('我是 beforeMount')
  },
  mounted(){
    // 组件的 template 渲染到了页面上。那么 dom 节点渲染完毕。
    // 在这可以获取真实 dom 节点
    console.log('我是 mounted')
    // console.log(document.querySelector('.number'))
    // console.log(this.num)
    // 组件的 mounted 钩子，执行的时候，并不代表所有的子组件也都渲染完毕了 
    // 如果想要在所有子组件全部渲染完毕(整个组件的视图完全展示了)之后，在进行一些操作，可以使用组件下的  $nextTick 方法，该方法传递一个回调函数作为参数，该回调函数自动触发
    // 在修改数据之后立即使用这个方法，获取更新后的 DOM。不用去 updated 中获取
    // $nextTick 是异步操作
    this.$nextTick(() => {
      // console.log(this)
    })
  },
  beforeUpdate(){
    console.log('我是 beforeUpdate')
  },
  updated(){
    // 在这 data 更新完毕，并且页面更新渲染也完毕
    // 可以获取新的 data 以及新的真实 dom 节点
    // 在这不要更新 data，可能会导致无限循环
    console.log('我是 updated')
    // console.log(this.num)
    // console.log(document.querySelector('.number'))
  },
  methods: {
    add() {
      this.num ++
      this.$nextTick(() => {
        console.log(document.querySelector('.number').innerHTML)
      })
    }
  },
}
</script>

<style>

</style>