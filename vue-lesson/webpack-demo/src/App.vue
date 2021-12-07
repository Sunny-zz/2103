<template>
  <div>
    我是 vue 组件 app
    <div>
      <ul v-if="arr.length">
        <li v-for="item in arr" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <button @click="show = !show">出现消失</button>
    <transition name="fade">
      <div v-show="show" class="box">
        <span>哈哈哈</span>
      </div>
    </transition>
    <img :src="pic" alt="">
    <router-link to='/about'>about</router-link>
    <router-view />
  </div>
</template>

<script>
import pic from './assets/hello.svg'
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7],
      show: false,
      pic: pic
    };
  },
  created () {
    console.log(111);
  },
};
</script>

<style lang='less' >
// lang = less  vue 会解析成  import  xxx.less  
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  span{
    color: aqua;
  }
  display: flex;
  background: linear-gradient(red, green)
}

.fade-enter , .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
</style>