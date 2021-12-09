<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :count.sync='count' @say='say' msg="Welcome to Your Vue.js + TypeScript App" v-model="text" :type='type' />

    <p>展示父组件的 type {{ type.value }}</p>
    <button @click="type.value = 'ask'">修改 type</button>
    <p>计算属性 formatCount {{formatCount}}</p>
    <button @click="formatCount = '20,000,000'">修改计算属性</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

export interface Type {
  value: string
}

@Component({
  // 可以写  computed   components   filters   directives  生命周期 
  components: {
    HelloWorld,
  },

  created(){
    console.log(1111)
  },
})
export default class App extends Vue {
  // count 就是 data 中的 count
  count = 100000000
  text = 'hello'
  type: Type = {
    value: 'share'
  }
  // 类内的公共方法就相当于之前的 methods 内的函数
  say(text: string){
    console.log(text)
  }
  // 计算属性的写法
  // 1000000  ---->  1, 000 , 000
  // '000,000,000,1'  
  get formatCount (){
    const {count} = this
    if(count< 1000) return count.toString()
    const reverseCount = count.toString().split('').reverse()
    const copy = [...reverseCount]
    let time = 0
    for(let i = 2; i < reverseCount.length; i+=3){
      time ++ 
      copy.splice(i +  time , 0, reverseCount.length - 1 === i ? '':',')
    }
    console.log(copy)
    return  copy.reverse().join('')
    // return count.toLocaleString()
  }

  set formatCount(value){
    // 字符串转数字的话 ts 并不能直接 * 1 
    this.count = Number(value.replace(/,/g, ''))
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
