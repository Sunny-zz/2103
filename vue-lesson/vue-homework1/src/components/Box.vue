<template>
  <div class="box">
    测试组件销毁
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  created(){
    this.run = setInterval(() => {
      console.log('定时器一直在执行')
      this.count ++
    }, 500);
    window.onscroll = function(){
      console.log(111111)
    }
  },
  beforeDestroy () {
    console.log('组件开始销毁')
    clearInterval(this.run)
    window.onscroll = null
  },
  destroyed () {
    console.log('组件销毁完毕')
  },
}
</script>

<style>

</style>