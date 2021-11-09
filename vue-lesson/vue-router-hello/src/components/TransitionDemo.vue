<template>
  <div class="transition-demo">
    <h2>vue 的过渡和动画</h2>
    <button v-on:click="show = !show">Toggle</button>
    <!-- 当 animate 的版本是 4+ 的时候 类名前面要加 animate__ -->
    <transition
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
      v-on:enter="enter"
      appear
      mode="in-out"
    >
      <p v-if="show" key="a">hello</p>
      <p v-else key="b">哈哈哈哈哈哈</p>
    </transition>
    <hr />
    <button @click="nums.push(10)">add</button>
    <button @click="nums.splice(1, 1)">remove</button>
    <button @click="nums.reverse()">reverse</button>
    <transition-group name="list" style="list-style: none" tag="ul">
      <li v-for="num in nums" :key="num">{{ num }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      nums: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    enter: function () {
      console.log("1111111");
      // done();
    },
  },
};
</script>

<style>
/* p 元素有两个过程 */
/* xx 表示的是 transition 组件接受的 name 的值 */
/* 1. 消失到出现  添加上对应的类名*/
/* xx-enter   xx-enter-active    xx-enter-to */
/* xx-enter  在元素被插入之前将类名添加给元素，在元素被插入之后的下一帧移除。 */
/* xx-enter-active  在整个进入过渡的阶段中添加到元素上，在元素被插入之前生效，在过渡/动画完成之后移除。 */
/* xx-enter-to  2.1.8 版及以上  在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。 */

/* p的样式改变   none --> none 消失 -->  fade-enter --> fade-enter 消失 fade-enter-active  fade-enter-to 被添加 */

/* 2. 出现到消失  添加上对应的类名*/
/* xx-leave   xx-leave-active    xx-leave-to */

/* 其实给元素添加过渡效果很简单 */
/* 1. 消失到出现 */
/* 只需要设置 出现开始的那一帧  以及过渡的效果 ， 因为元素默认展示出来的样式就是最后一帧*/
/* 2. 出现到消失 */
/* 只需要设置 消失结束的那一帧  以及过渡的效果 ， 因为元素默认展示出来的样式就是第一帧*/
/* css 过渡实现 */
/* .fade-enter-active{
  transition: opacity 3s;
}
.fade-enter{
  opacity: 0;
}
.fade-leave-active{
  transition: all 3s;
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(100px);
} */
/* 当实现效果使用的不是 transition 而是 animation 的时候，就不需要设置第一帧和最后一帧。但是要注意动画结束或者动画开始的时候和元素原来的效果要一致。 */

/* css 动画 */
/* @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes jump {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-50px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
} */
/* .fade-enter-active{
  animation: bounce-in 1s;
}
.fade-leave-active{
  animation: jump 2s;
} */

/* 使用 animate.css 内的 动画实现动画效果 */

/* 当想要使用一些js去实现复杂的动画效果  可以选择给 transition 绑定一些钩子事件，在钩子事件中使用 js 实现动画 */

/* 初始渲染就执行动画 也就默认出现的时候就执行一次动画 */

/* 多个元素同时渲染 可以设置渲染模式  mode */

/* 列表的过渡 */
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* 当数组内的数据发生改变的时候 不是添加和删除，是替换 可以使用  xx-move 添加动画效果 */
.list-enter-active, .list-leave-to, .list-move {
  transition: all 1s;
}
</style>