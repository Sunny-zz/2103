<template>
  <div class="box2" @click="handleClick1">
    <div class="box2-inner" @click.stop="handleClick2">
      <a href="#" @click.stop.prevent="handleClick3">哈哈哈</a>
    </div>
    <div class="box3" @click.self.once="handleClick4">
      <button>按钮</button>
      <p>啊哈哈哈哈哈</p>
    </div>
    <input type="text" @keydown.13="handleKeydown" >
  </div>
</template>

<script>
export default {
  methods: {
    handleClick1(){
      console.log('我是父级  box2')
    },
    handleClick2(){
      console.log('我是子级  box2-inner')
    },
    handleClick3(){
      console.log('我是a')
    },
    handleClick4(){
      console.log('我是box3')
    },
    handleKeydown(){
      console.log('11111111')
    }
  }
}
</script>

<style>
.box2{
  width: 500px;
  height: 500px;
  background-color: #ccc;
}
.box2 .box2-inner{
  width: 100px;
  height: 100px;
  background-color: rgb(48, 223, 230);
}
.box2 .box3 {
  width: 300px;
  height: 300px;
  background-color: rgb(233, 83, 195);
}
</style>