<template>
  <!-- <button class="btn" :style="{backgroundColor: bgColor || '#000'}">{{newText}}</button> -->
    <button @click="$emit('handle-click',10 ,20 ,30)"  class="btn" :style="{backgroundColor: bgColor}">{{text}}</button>
</template>

<script>
export default {
  // 设置默认的 prop
  // prop 是单项的，子组件内不可直接对 prop 进行修改
  // 父组件不传递 text  bgColor， 就需要设置默认
  // props: ['text', 'bgColor'],
  // props 的对象类型
  // 对象下的属性名就是父组件传递的 prop 名, 属性值是对象,该对象下可以设置 type  default  required   validator
  // 1. type 规定传递的 prop 的值的类型
  // 2. default 规定传递的 props 的默认值
  // 3. required 规定是否必须传递该 prop
  // 4. validator 自定义的验证规则
  props: {
    text: {
      type: String,
      default: '默认按钮',
      // required: true,
      // 自定义一个规则 传递的值的长度不能大于等于5
      validator(value){
        // value 指的是 传递的 prop 的值
        // console.log(value.length)
        return value.length < 5 
      }
    },
    bgColor: {
      type: String,
      default: '#000'
    },
    // handleClick: {
    //   type: Function,
    //   // required: true
    // }
    // bgColor: String
  },
  computed: {
    // newText(){
    //   //  ??  前只有 undefined  null 的时候才会使用后面的值
    //   //  ?? 写在 template 无法编译
    //   return this.text ?? '默认按钮'
    // }
  },
  methods: {
    // myClick(){
    //   // 当父组件传递过来自定义事件，我们可以使用
    //   // $emit 接收
    //   // 1. 在 script 内   this.$emit('事件名',第一个参数...) 接收并调用
    //   // 2. 在 template 内  $emit('事件名',第一个参数...) 接收并调用
    //   this.$emit('click')
    // }
  }
}
</script>

<style>
  .btn{
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #fff;
  }
</style>