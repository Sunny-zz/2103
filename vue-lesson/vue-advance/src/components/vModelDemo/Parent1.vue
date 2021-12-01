<template>
  <div>
    <p>父组件内的 data: {{num}}</p>
    <!-- v-model 简化的是 value prop 和 input 自定义事件 -->
    <!-- 组件上的 v-model 不要加修饰符 -->
    <Son v-model='num'  />
    <ul>
      <li v-for="ele in arr" :key="ele">{{ele}}</li>
    </ul>
  </div>
</template>

<script>

import Son from './Son1.vue'
export default {
  components: { Son },
  // mounted () {
  //   console.log(this.$children[0]);
  // },
  data() {
    return {
      num: 1000,
      arr: [1,2,3]
    }
  },
  created () {
    
    // console.log(this.arr);
  },
}
</script>

<style>

</style>