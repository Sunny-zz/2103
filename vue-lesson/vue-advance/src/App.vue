<template>
  <div>
    <!-- <h2>vue 组件间通信的方式</h2> -->
    <!-- <div class="box"></div> -->
    <!-- prop  $emit  slot   vuex  $listeners  $attrs  组件上的ref   $parent  $children   provide/inject  .sync v-model  事件总线EventBus -->
    <!-- prop  $attrs-->
    <!-- $emit：  .sync   v-model  $listeners -->
    <!-- slot -->
    <!-- 获取组件本身  组件上的ref   $parent  $children -->
    <!-- vuex -->
    <!-- provide/inject -->
    <!-- 事件总线EventBus  -->
    <!-- <Parent /> -->
    <!-- <Parent /> -->

    <!-- <button @click="visible = true">弹窗出现</button> -->
    <!-- .sync 功能只有子组件接收使用了，父组件才能使用 .sync 修饰符 -->
    <!-- <DialogDemo :lock-scroll='false' :beforeClose="beforeClose" :close-on-click-modal='false' :show-close="true" :modal='true' :visible="visible" @close='close' title="测试">
      <p>yjeqgwjehg</p>
      <p>yjeqgwjehg</p>
      <p>yjeqgwjehg</p>
      <p>yjeqgwjehg</p>
      <template #dialog-footer>
        <button>取消</button>
        <button>确定</button>
      </template>
    </DialogDemo> -->

    <!-- <el-button type='primary'>按钮</el-button> -->
    <!-- <hr> -->
    <!-- <AuthMenu /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import AuthMenu from './components/authMenu/AuthMenu.vue';
// import DialogDemo from "./components/dialogDemo/Dialog.vue";
// import Parent from "./components/vModelDemo/Parent1.vue";

export default {
  components: { 
    // Parent, 
    // DialogDemo, 
    // AuthMenu 
    },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    beforeClose(done){
      const res = window.confirm('是否真的要关闭')
      if(res) done()
    }
  },
  
};
</script>

<style>
/* .box{
  width: 200px;
  height: 200px;
  margin-left: 200px;
  background:linear-gradient(#9198e5, #9198e5) ,  linear-gradient(#9198e5, #9198e5);
  background-size: 2px 10px;
  background-position: 0 0 , 10px 10px;
  background-repeat: no-repeat;
} */
</style>