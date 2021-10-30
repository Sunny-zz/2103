<template>
  <div v-show="show" class="dialog-demo">
    <div class="dialog-wrapper">
      <div class="dialog">
        <div class="dialog-title">
          <slot name="title" />
        </div>
        <div class="dialog-content">
          <!-- 接收父组件传递的插槽 -->
          <!-- 没有给 slot 设置 name 属性其实就相当于接收了 default 插槽 -->
          <!-- <slot name='default' /> -->
          <slot />
        </div>
        <!-- 当父组件没有传递 foot 插槽的话我们就不需要展示 dialog-foot ,所已就需要判断父组件传没传递 foot 插槽，可以使用 $slots 获取所有的插槽来判断  -->
        <div v-if="$slots.foot" class="dialog-foot">
          <slot name="foot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // title: {
    //   type: String,
    //   default: "默认的对话框标题",
    // }
  },
  data() {
    return {
      show: true,
    };
  },
  watch: {
    show: {
      handler(newValue) {
        if (newValue) {
          document.querySelector("body").style.overflowY = "hidden";
        } else {
          document.querySelector("body").style.overflowY = "auto";
        }
      },
      immediate: true
    },
  },
  created() {
    // console.log(this.$slots.foot)
    // document.querySelector('body').style.overflowY = 'hidden'
  },
  // updated(){
  //   if(this.show === false){
  //     document.querySelector('body').style.overflowY = 'auto'
  //   }else{
  //     document.querySelector('body').style.overflowY = 'hidden'
  //   }
  // }
};
</script>

<style lang='less'>
.dialog-demo {
  .dialog-wrapper {
    top: 0;
    left: 0;
    position: fixed;
    // 窗口的宽度百分比  vw   vh
    // 100vw    100% 的屏幕宽度
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .dialog {
      margin-top: 100px;
      width: 500px;
      // height: 200px;
      min-height: 200px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      .dialog-title {
        padding: 14px 0;
      }
      .dialog-content {
        flex-grow: 1;
      }
      .dialog-foot {
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
        button {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>