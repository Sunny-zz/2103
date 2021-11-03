<template>
  <div class="drawer-demo">
    <el-button
      :class="{ 'open-status': show }"
      @click="toggleDrawer"
      size="medium"
      type="primary"
      :icon="show ? 'el-icon-close' : 'el-icon-setting'"
    ></el-button>
    <!--在父组件 想要获取 drawer 组件，也就是 drawer 组件 内的 this -->
    <!-- 可以在组件上使用 ref 可以获取组件 -->
    <el-drawer ref='drawer' title="我是标题" @closed='closed' :visible.sync='show'  >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.show = !this.show;
      console.log(this.$refs.drawer.closeDrawer)
    },
    close(){
      this.show = false
      console.log('点击了关闭')
    },
    closed(){
      console.log('动画结束了')
    }

  },
};
</script>

<style lang='less'>
.drawer-demo {
  .el-button--medium {
    padding: 10px 12px;
    font-size: 24px;
    // border-radius: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: fixed;
    right: 0;
    top: 20%;
    z-index: 9999;
    transition: right 0.3s;
  }
  .open-status {
    right: 30%;
  }
}
body .v-modal {
  background: #d5d5d5;
}
</style>