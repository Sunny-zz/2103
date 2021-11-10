<template>
  <div>
    <h3>我是列表</h3>
    <hr />
    <h3>进入 离开 列表过渡</h3>
    <button @click="show = !show">切换show</button>
    <transition
      name="fade"
      appear
      appear-class="custom-appear-class"
      appear-active-class="custom-appear-active-class"
    >
      <p v-show="show">hello vue</p>
    </transition>
    <hr />
    <h2>多个元素的过渡</h2>
    <button @click="show1 = !show1">切换show1</button>
    <transition name="fade" mode="out-in" appear>
      <p v-if="show1" key="a">vue</p>
      <p v-else key="b">react</p>
    </transition>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show1: true
    };
  },
  // 当动画执行的时候会有一些钩子函数触发，这心钩子函数可以用来制作一些 js 实现的高级动画
};
</script>

<style>
/* 进入的动画 */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 4s;
}

/* 离开的动画 */
@keyframes bounceOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  33% {
    opacity: 0.5;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
/* .fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}*/

.fade-leave-active {
  /* transition: all 2s; */
  animation: bounceOut 1s;
}

.custom-appear-class {
  opacity: 0;
  transform: scale(0.5);
}

.custom-appear-active-class {
  transition: all 3s;
}
</style>