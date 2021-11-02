<template>
  <div id="app">
    <!-- 使用 ui 库组件(element ui) 主要就是传递 prop 以及一些其他的父子组件的交互（插槽， 自定义事件） -->
    <el-button disabled>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <!-- 父组件传递 prop 给子组件的时候直接写名 不给值，将相当于传递过去一个布尔值 值为 true 相当于 :plain='true' -->
    <el-button type="success" plain loading>成功按钮</el-button>
    <el-button type="info" size="mini"
      ><span class="iconfont icon-xinxifill"></span
    ></el-button>
    <el-button type="warning" round>警告按钮</el-button>
    <!-- icon 属性 属性值是 element 内自带的字体图标名 -->
    <el-button type="danger" icon="el-icon-refresh-left" circle></el-button>
    <el-divider conttent-position="center">分割线</el-divider>
    <!-- size prop 可以传递 number 或者 string 传递 number的时候要使用 v-bind -->
    <el-avatar
      :size="100"
      shape="circle"
      src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png"
    />
    <el-divider conttent-position="center">分割线</el-divider>
    <!-- <el-drawer
      title="我是标题"
      :visible="show"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer> -->
     <el-divider conttent-position="center">分割线</el-divider>
     <Banner />
     <el-divider conttent-position="center">分割线</el-divider>
     <TabsDemo />
     <el-divider conttent-position="center">分割线</el-divider>
     <ScopeSlotDemo />
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import ScopeSlotDemo from './components/ScopeSlotDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
// 组件注册
export default {
  components: { Banner, TabsDemo, ScopeSlotDemo },
  name: "app",
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleClose(done){
      // 关闭抽屉
      done()
    }
  },
};
</script>

<style>
</style>


