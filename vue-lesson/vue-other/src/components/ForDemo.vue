<template>
  <div>
    <!-- 递归组件：就是组件内部使用组件本身， 前提是必须给组件设置 name 属性, name 属性的值就是组件标签名 -->
    <Menu :level='level' />
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  components: { Menu },
  data() {
    return {
      level: 5
    }
  },
};
</script>

<style>
</style>