<template>
  <div class="app">
    <DrawerDemo />
    <el-divider align='center' >分割线</el-divider>
    <DialogDemo />
    <el-divider align='center' >分割线</el-divider>
    <PaginationDemo />
    <el-divider align='center' >分割线</el-divider>
    <FormDemo />
    <!-- <el-divider align='center' >分割线</el-divider>
    <el-input v-model="text" placeholder="请输入内容"></el-input> -->
    <el-divider align='center' >分割线</el-divider>
    <TreeDemo />
    <el-divider align='center' >分割线</el-divider>
    <AsyncTreeDemo />
  </div>
</template>

<script>
import AsyncTreeDemo from './components/AsyncTreeDemo.vue'
// 当我们使用 element-ui 组件的时候，文档中的
// 组件的 Attributes 就是我们 vue 中的  prop
// 组件的 Slot 就是我们 vue 中的插槽
// 组件的 Methods 就相当于 vue 组件的 methods 想要调用的话，需要使用组件上的 ref 获取组件本身
// 组件的 Events 就是 vue 中的自定义事件
// 当使用一些文档中的函数的时候需要注意函数的参数
import DialogDemo from './components/DialogDemo.vue'
import DrawerDemo from './components/DrawerDemo.vue'
import FormDemo from './components/FormDemo.vue'
import PaginationDemo from './components/PaginationDemo.vue'
import TreeDemo from './components/TreeDemo.vue'
export default {
  components: { DrawerDemo, DialogDemo, PaginationDemo, FormDemo, TreeDemo, AsyncTreeDemo },
  // data() {
  //   return {
  //     text: ''
  //   }
  // },
}
</script>

<style>
/* .app{
  width: 100vw;
  height: 100vh;
} */
</style>