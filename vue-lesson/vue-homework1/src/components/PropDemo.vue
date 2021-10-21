<template>
  <div class="prop-demo">
    <h3>prop</h3>
    <button @click="text ='阿拉啦啦'">修改</button>
    <Button bgColor='#00b3d4' text='登录' />
    <Button bgColor='rgb(39, 79, 209)' text='0000' />
    <Button :text='text' />
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  data(){
    return {
      text: '啊哈哈哈'
    }
  },
  components: {
    Button
  }
}
</script>

<style>

</style>