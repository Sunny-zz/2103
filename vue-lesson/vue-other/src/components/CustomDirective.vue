<template>
  <div>
    <h4>自定义指令</h4>
    <!-- 你需要对普通 DOM 元素进行底层操作, 可以选择使用指令实现  比如 事件的绑定  样式的消失和出现-->
    <!-- 默认让 input 获得焦点 -->
    <button v-on:click="changeShow">按钮</button>
    <input v-focus:[x].a.b.v="show" ref="myInput" v-show="show" type="text"  />
  </div>
</template>

<script>
// import Vue from "vue";
export default {
  data() {
    return {
      show: true,
      x: 'hello'
    };
  },
  // 自定义指令
  directives: {
    // focus 就是 v-focus 指令
    focus: {
      // 指令的定义
      // inserted 当指令绑定到元素上的时候自动触发
      // inserted 函数默认接收 元素的真实 dom 节点作为第一个参数

      // 每个指令都会有五个钩子函数
      // 1. bind：只调用一次，指令第一次绑定到元素时调用
      // 2. inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。 和bind基本上一样
      // 3. update：所在组件的 VNode (虚拟 的 dom 节点) 更新时调用，但是可能发生在其子 VNode 更新之前。
      // 4. componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      // 5. unbind：只调用一次，指令与元素解绑时调用。
      // 下面的指令 作用是 
      // 首次绑定指令的时候 如果传递的值是 true 那么默认就会让元素自动获得焦点
      // 当 v-focus 的值发生改变的时候，变化为 true 让元素获得焦点
      inserted: (el, { value }) => {
        if (value) el.focus();
      },
      update: (el, { value, arg, modifiers }, vnode) => {
        // console.log(vnode)
        // console.log(el)
        console.log(arg)
        console.log(modifiers)
        // vnode 是虚拟的 dom 节点 input， 该对象下有一个 context 属性，这个属性值的就是当前组件
        if (value) {
          vnode.context.$nextTick(() => {
            el.focus();
          });
        }
      },
    },
  },
  methods: {
    changeShow() {
      this.show = !this.show;
      // if (this.show) {
      //   this.$nextTick(() => {
      //     this.$refs.myInput.focus();
      //   });
      // }
    },
  },
};
</script>

<style>
</style>