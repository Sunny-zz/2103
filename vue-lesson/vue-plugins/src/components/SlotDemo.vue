<template>
  <div class="slot-demo">
    <h2>slot 插槽</h2>
    <!-- 版本 2.6.0 +  -->
    <!-- 也是组件复用中需要用到的 -->
    <!-- 有一个对话框组件 -->
    <!-- 想要传递任意内容给对话框展示，选择使用 插槽 -->
    <!-- 插槽的使用 -->
    <!-- 父组件中，在子组件的开始标签和结束标签之间传递需要展示的内容 -->
    <!-- 子组件中 使用 <slot /> 标签接收 -->

    <!-- 我们想传递多个 插槽， 在子组件中分别展示 -->
    <!-- 就需要使用具名插槽 v-slot:名   可以简写成  #名 -->
    <DialogDemo>
      <template v-slot:title>
        <h3>是否<span class="del">删除</span>吗?</h3>
      </template>
      <!-- 下面这个 ul 没有命名 其实相当于命名成了 default -->
      <!-- <template v-slot:default>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </template> -->
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <template #foot>
        <button>取消</button>
        <button>确定</button>
      </template>
    </DialogDemo>
    <!-- <DialogDemo >
      <template #title>
        <span>提示</span>
      </template>
      <p>我是一则提示信息</p>
    </DialogDemo> -->
  </div>
</template>

<script>
import DialogDemo from "./DialogDemo.vue";
export default {
  components: { DialogDemo },
};

</script>

<style>
.del {
  color: red;
}
</style>