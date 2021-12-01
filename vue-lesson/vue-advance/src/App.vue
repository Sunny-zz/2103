<template>
  <div>
    <h2>vue 组件间通信的方式</h2>
    <!-- prop  $emit  slot   vuex  $listeners  $attrs  组件上的ref   $parent  $children   provide/inject  .sync v-model  事件总线EventBus -->
    <!-- prop  $attrs-->
    <!-- $emit：  .sync   v-model  $listeners -->
    <!-- slot -->
    <!-- 获取组件本身  组件上的ref   $parent  $children -->
    <!-- vuex -->
    <!-- provide/inject -->
    <!-- 事件总线EventBus  -->
    <!-- <Parent /> -->
    <Parent />

    <DialogDemo title='测试'/>
  </div>
</template>

<script>
import DialogDemo from './components/dialogDemo/Dialog.vue'
import Parent from './components/vModelDemo/Parent1.vue'
// import Parent from './components/syncDemo/Parent.vue'
export default {
  components: { Parent, DialogDemo },
}
</script>

<style>

</style>