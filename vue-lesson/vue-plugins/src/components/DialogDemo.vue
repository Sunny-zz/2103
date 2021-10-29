<template>
  <div class="dialog-demo">
    <div class="dialog-title">
      <slot name="title" />
    </div>
    <div class="dialog-content">
      <!-- 接收父组件传递的插槽 -->
      <!-- 没有给 slot 设置 name 属性其实就相当于接收了 default 插槽 -->
      <!-- <slot name='default' /> -->
      <slot />
    </div>
    <div class="dialog-foot">
      <slot name="foot" />
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   title: {
  //     type: String,
  //     default: "默认的对话框标题",
  //   },
  // },
};
</script>

<style lang='less'>
.dialog-demo {
  width: 500px;
  // height: 200px;
  min-height: 200px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
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
</style>