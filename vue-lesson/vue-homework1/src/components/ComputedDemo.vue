<template>
  <div class="computed-demo">
    <h3>计算属性</h3>
    <div>
      <label for="">firstName: </label><input type="text" v-model="firstName" />
      <br />
      <label for="">lastName: </label><input type="text" v-model="lastName" />
      <br />
      <!-- v-model 的作用是   用户输入了 对应的 data 对改变 ，当修改 data 对应的 input 的显示也会改变-->
      <!-- 当你把一个计算属性赋值给 v-model 的时候，用户输入内容就相当于 对 计算属性进了修改 默认是不允许的 会报错 -->
      <!-- 假如有需求，要修改计算属性， 那么就需要给计算属性设置 setter ， 去修改对应的 来源 data-->
      <label for="">fullName: </label><input type="text" v-model="fullName"  />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    // fullName(){
    //   return this.firstName + ' ' +  this.lastName
    // }
    // 计算属性要添加 setter 的话需要写成对象类型
    // 对象下有两个方法  get  set
    // get 方法的作用和原来的计算属性一样，就是根据 data 返回一个值
    // set 方法用于处理修改计算属性的，该方法会接收一个参数(value),这个参数指的是，修改后的 计算属性的值
    fullName: {
      get(){
        return this.firstName + ' ' +  this.lastName
      },
      set(value){
        const arr = value.split(' ')
        this.firstName = arr[0]
        this.lastName = arr[1]
      }
    }
  }
};
</script>

<style>
</style>