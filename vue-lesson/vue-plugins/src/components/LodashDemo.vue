<template>
  <div class="lodash-demo">
    <h2>lodash 的使用</h2>
    <button @click="handleClick">按钮1</button>
    <button @click="handleClick1">按钮2</button>
    <ul>
      <li v-for="num in arr" :key="num">{{ num }}</li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    handleClick() {
      // 直接使用并没有导致视图改变
      // console.log(_.reverse(this.arr))
      const arrCopy = [...this.arr];
      this.arr = _.reverse(arrCopy);
      // this.arr.reverse()
    },
    handleClick1: _.throttle(function(){
      const arrCopy = [...this.arr];
      this.arr = _.reverse(arrCopy);
    }, 2000),
  },
};
</script>

<style>
</style>