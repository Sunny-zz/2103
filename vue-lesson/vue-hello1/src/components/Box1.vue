<template>
  <!-- <div :class="{box1: true, active: isActive }"> -->
  <!-- <div :class="['box1', isActive ? 'active' : '' ]"> -->
  <div :class="['box1', { active: isActive }]">
    <!-- <p :style="`font-size: ${fontSize}px;`">{{ num }}</p> -->
    <p :style="{ fontSize: fontSize +'px'}">{{ num }}</p>
    <button v-on:click="fun">按钮</button>
    <button v-on:click=" isActive = !isActive ">按钮1</button>
    <button v-on:click="fun1($event, 10, 20)">按钮2</button>
    <div class="disc"></div>
  </div>
</template>

<script>

export default {
  data: () => ({
    num: 1000,
    isActive: false,
    fontSize: 30
  }),
  methods: {
    fun(){
      // console.log(e)
      // console.log(this)
      // 组件的 data 可以直接使用  组件.data名 进行修改
      this.isActive = !this.isActive
    },
    fun1(e, a, b){
      console.log(e)
      console.log(a)
      console.log(b)
      // console.log(this)
      // 组件的 data 可以直接使用  组件.data名 进行修改
      this.isActive = !this.isActive
    }
  }
};
</script>

<style>
/* 虽然组件内是相互独立的，但是组件的 css 默认是全局的 */
.box1 p{
  margin: 0;
}
.box1 {
  width: 500px;
  height: 500px;
  background-color: #00b3d4;
  position: relative;
}
.box1.active {
  background-color: rgb(222, 250, 63);
}
.box1 .disc {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(87, 46, 223);
}
.box1 .disc:hover {
  animation: x 1s linear infinite;
}

@keyframes x {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>