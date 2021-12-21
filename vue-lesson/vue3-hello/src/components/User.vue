<template>
  <div>
    <p>姓名: {{ user.name }}</p>
    <p>年龄: {{ user.age }}</p>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue"
// defineComponent  可以直接先将 setup 函数定义成组件
// defineAsyncComponent  创建一个只有在需要时才会加载的异步组件   懒加载。
export default defineComponent(
  async () => {
    let user = ref({})
    const color = ref('red')
    const newUser = await new Promise(resolve => {
      setTimeout(() => {
        resolve({ name: '小张', age: 11 })
      }, 1000);
    })
    user.value = newUser
    return {
      user,
      color
    }
  }
)

// import { ref } from "vue"
// let user = ref({})
// const color = ref('red')
// const newUser = await new Promise(resolve => {
//   setTimeout(() => {
//     resolve({ name: '小张', age: 10 })
//   }, 1000);
// })
// user.value = newUser
</script>
<style>
  p{
    color: v-bind('user.age === 10 ? "red" : "blue"');
  }
</style>