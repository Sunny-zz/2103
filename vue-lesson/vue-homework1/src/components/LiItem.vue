<template>
  <li :style="{color: color}">
    {{reverseText}}
  </li>
</template>

<script>
export default {
  props: ['text', 'color'],
  // 计算属性虽然写成了函数，但是最终计算属性只是一个值
  computed: {
    reverseText(){
      return this.text.split(' ').reverse().join(' ')
    }
  },
  methods: {
    // 方法可以达到计算属性相同的效果。但是计算属性会缓存
    // reverseText(){
    //   return this.text.split(' ').reverse().join(' ')
    // }
  }
}
</script>

<style>

</style>