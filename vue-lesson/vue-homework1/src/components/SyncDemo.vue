<template>
  <div>
    <button @click="$emit('update:number',number + 1)">+1按钮</button>
    <button @click="$emit('update:number',number - 1)">-1按钮</button>
    <span>{{number}}</span>
  </div>
</template>

<script>
export default {
  props: ['number'],
  // methods: {
  //   add(){
  //     // this.number ++
  //     // 想要修改父组件的 data，必须让父组件提供修改的方法。然后子组件执行。
  //     this.$emit('change-number', this.number + 1)
  
  //   },
  //   sub(){
  //     this.$emit('change-number', this.number - 1)
  //   }
  // }
}
</script>

<style>

</style>