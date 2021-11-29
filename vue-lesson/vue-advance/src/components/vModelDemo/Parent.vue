<template>
  <div>
    <p>父组件内的 data: {{num}}</p>
    <!-- v-model 简化的是 value prop 和 input 自定义事件 -->
    <!-- 组件上的 v-model 不要加修饰符 -->
    <Son v-model='num'  />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  components: { Son },
  data() {
    return {
      num: 100
    }
  },
}
</script>

<style>

</style>