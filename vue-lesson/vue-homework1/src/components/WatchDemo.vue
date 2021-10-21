<template>
  <div class="watch-demo">
    <h3>侦听器</h3>
    <!-- 受控表单 -->
    <input type="text" v-model="question" />
    <!-- <p>答案: {{this.question.length ? answer : ''}}</p> -->
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "",
    };
  },
  computed: {
    // 计算属性中不能包含异步操作
    // answer(){
    //   let answer
    //   answer = this.question.length % 2 === 1 ? '否' : '是'
    //   return answer
    // }
  },
  // 当有些数据随着其他数据变动而变动时，并且这个改变存在异步操作，或者开销较大，计算属性就不能用了。可以考虑使用 侦听属性。但是侦听属性是通过 一个 data 的变化控制另外一个 data。
  // 侦听器 watch
  // 侦听器对象内的属性，属性名就是侦听的数据 ,属性值可以写成 对象或者函数
  // 1. 函数 当侦听的数据改变的时候函数就会触发, 函数内修改对应的 data 即可
  // 2. 对象  对象内必须设置一个  handler 方法，这个方法当侦听的数据改变的时候该方法就会触发, 除了 handler 之外，还可以设置 immediate 和 deep 属性，属性值都是布尔值，默认都是 false。 immediate 设置成 true，  handler 监听函数进入页面就触发。 deep 设置成 true，深度监听数据的变化，例如当数据是一个对象的时候( {a: 10, b: 20 } ), 把 b = 30, 默认并不会触发监听函数，deep 写成 true 就会触发了。
  watch: {
    // question(){
    //   console.log('question 变化了')
    //   setTimeout(() => {
    //     this.answer = this.question.length % 2 === 1 ? '否' : '是'
    //   },500)
    // }
    question: {
      handler() {
        // console.log('监听开始')
        // 任何的一个方法内最外层使用普通函数可以使用 this(组件本身)， 嵌套的函数必须使用箭头函数才能访问 this(组件本身)
        setTimeout( () => {
          this.answer = this.question.length % 2 === 1 ? "否" : "是";
        }, 500);
      },
      immediate: true,
      // deep: 
    },
  },
  methods: {
    // getAnswer(){
    //   setTimeout( () => {
    //     // 假装发请求
    //     // if(this.question.length%2===1){
    //     //   this.answer = '否'
    //     // }else{
    //     //   this.answer = '是'
    //     // }
    //     this.answer = this.question.length % 2 === 1 ? '否' : '是'
    //   } ,500)
    // }
  },
};
</script> 

<style>
</style>