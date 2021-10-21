<template>
  <div class="form">
    <h3>vue 中的表单</h3>
    <input type="text" :value="text1" @input="handleInput"  >
    <br>
    <!-- <input v-model.lazy="text2" type="text"> -->
    <!-- <input v-model.number="text2" type="text"> -->
    <input v-model.trim="text2" type="text">
    <br>
    <label for="x">是否同意</label><input type="checkbox" id='x' :checked='isAgree' @change="isAgree = !isAgree"  >

     <label for="x">是否同意</label><input type="checkbox" id='x' v-model="isAgree1" >
  </div>
</template>

<script>
export default {
  data: () => ({
    text1: '123',
    text2: 123456789,
    isAgree: true,
    isAgree1: false
  }),
  methods: {
    handleInput(e){
      // console.log(1111)
      // 根据输入的内容 修改 text 
      // 输入的内容 可通过事件对象获取html结构从而获取结构内的 value 值
      console.log(e.target.value)
      this.text1 = e.target.value
    }
  }
}
</script>

<style>

</style>