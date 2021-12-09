<template>
  <div class="hello">
    <h1>{{ msg }} {{syncCount}}</h1>
    <h2>{{text}}</h2>
    <button @click="sayFun('hello')">按钮</button>
    <button @click="handleClick(200)">修改 父组件的 count</button>
    <button @click="change('hello world')">修改 text</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Model, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';
import { Type } from '../App.vue'
@Component
export default class HelloWorld extends Vue {
  // @Prop(类型校验)   @Prop(String)   @Prop({type: String , required: true, default: 'xx'})
  @Prop({required: true, type: String}) 
  // 装饰的属性和父组件传递的 prop 名字一致
  private msg!: string
  
  @Prop(Object)
  type !: Type

  @Watch('type', { immediate: true, deep: true })
  onTypeChange(type: Type){
    console.log(type.value)
  }
  

  // @Model  会自动接收传递过来的 value prop 装饰给 text
  // @Model('v-model 传递过来的自定义事件名')
  @Model('change')
  text!: string

  // @Emit()  不传参数那么修饰的方法名和父组件传递的自定义事件名一致
  // @Emit('自定义事件名') 传参的话  修饰的方法名不能和参数名一致，相当于替换了一个名
  @Emit() 
  say(text: string){}

  @Emit()
  change(text: string){}

  // @PropSync('父组件的 prop 名', {校验})
  // 校验可省略
  @PropSync('count', {type: Number, required: true})
  // 装饰属性的名不能和父组件的 prop 名相同
  // 装饰之后 syncCount 属性就会被制作成计算属性，而且在 计算属性的 set 中修改父组件传递的数据
  syncCount !: number

  handleClick(num: number){
    this.syncCount = num
  }
}
</script>

<style scoped>

</style>
