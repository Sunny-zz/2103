<template>
  <label for="">
    <input type="text" @focus="onFocus" v-model="text" />
  </label>
</template>

<script>
// 子组件中可以使用 $listeners 获取子组件接收到的所有 事件
// 不能获取加 native 修饰符的事件
// 利用 $listeners  可以不使用 $emit 去接收父组件传递的自定义事件，用的比较少
// 可以利用 $listeners 将组件接受到的所有事件，一起全部传递给组件的子组件
// 也就是跨级传递的时候
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onFocus() {
      this.$listeners.focus();
    },
  },
};
</script>

<style>
</style>