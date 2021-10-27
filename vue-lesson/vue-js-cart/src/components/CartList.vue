<template>
  <div>
    <!-- <CartItem
      v-for="item in cartList"
      :key="item.id"
      v-bind="item"
      :changeStatus='changeStatus'
      :delGoods='delGoods'
    /> -->

     <CartItem
      v-for="item in cartList"
      :key="item.id"
      v-bind="{...item, ...$attrs}"
    />
  </div>
</template> 

<script>
// $listeners 自定义事件集合   $attrs prop集合
// 上面两个对象 当组件接收了对应的，那么对象内就没有这个属性
// 在 vue 中如何测试 console
// 1. 在生命周期 created  mounted 相当于进入页面
// 2. 函数内直接 log 测试   比如计算属性没有算对

// 合并对象
// ...
// for in 
// Object.assign
import CartItem from "./CartItem.vue";
export default {
  components: { CartItem },
  // props: ["cartList", 'changeStatus','delGoods'],
  props: ["cartList"],
  created () {
    console.log(this.$attrs); 
  }
};
</script>

<style>
</style>