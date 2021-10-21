<template>
  <div class="emit-demo">
    <h3>自定义事件</h3>
    <!-- 自定义事件很像 prop  -->
    <!-- 就是父组件想要传递一个函数给子组件，传递的函数的方式 就可以使用自定义事件方式传递， 不需要使用 prop 方式 -->
    <!-- <Button :handleClick='login' text="登录" /> -->
    <!-- 在子组件上  @click='login' 定义了一个自定义事件名字叫 click 函数是 login -->
    <Button @handle-click='login' text="登录" />

    <!-- vue 推荐自定义事件名使用  kebab-case  方式命名，子组件接收的时候也是用 kebab-case ，因为事件名没有自动转换的功能不会自动转化成驼峰 -->

  
    <!-- .native 就是将事件直接绑定给组件的跟元素 -->
    <!-- <BaseInput @focus.native='onFocus' /> -->
    <BaseInput @focus='onFocus' />
    <!-- .sync -->
    <!-- 语法糖 -->
    <!-- <SyncDemo :number='number' @change-number='changeNumber' /> -->
    <!-- 作用 -->
    <!-- 1. 传递了 prop  -->
    <!-- 2. 定义了一个修改数据的方法，并且将该方法当作自定义事件传递给了子组件， 该方法修改数据的方式是赋值修改 -->
    <!-- .sync 同样适用  v-bind.sync='对象'  会将对象下的所有属性，都使用 sync 修饰 -->
    <SyncDemo :number.sync='number'  />
  </div>
</template>

<script>
import Button from './Button.vue'
import BaseInput from './BaseInput.vue'
import SyncDemo from './SyncDemo.vue'
export default {
  data() {
    return {
      number: 1000
    }
  },
  components: {
    Button,
    BaseInput,
    SyncDemo
  },
  methods: {
    login(a,b,c){
      console.log('登录的一顿操作')
      console.log(a,b,c)
    },
    onFocus(){
      console.log('获得焦点事件')
    },
    // changeNumber(newNumber){
    //   this.number = newNumber
    // }
  }
}
</script>

<style>

</style>