<template>
  <div class="box3">
    <button @click="changeShow">按钮</button>
    <div v-if="show" class="circle one">我是蓝色</div>
    <section v-else class="circle two">我是紫色</section>

    <div class="tabs">
      <ul>
        <!-- <li><button @click="showNum = 1">x</button></li>
        <li><button @click="showNum = 2">y</button></li>
        <li><button @click="showNum = 3">z</button></li> -->

        <li><button @click="chengShowNum(1)">x</button></li>
        <li><button @click="chengShowNum(2)">y</button></li>
        <li><button @click="chengShowNum(3)">z</button></li>
      </ul>
      <div v-if="showNum === 1">第一个</div>
      <div v-else-if="showNum === 2">第二个</div>
      <div v-else>第三个</div>
    </div>
    <br />
    <button @click="loginType = 'username'">username</button>
    <button @click="loginType = 'email'">email</button>
    <br />
    <!-- Vue 会尽可能高效地渲染元素 -->
    <!-- 比如下面的条件渲染，虽然是切换了两种登录类型，但是里面的 input 其实就是变化了 placeholder， 所以 vue 更新的时候并不会直接使用新的 input 去替换原来的而是在原来的基础上修改 placeholder -->
    <!-- 但是对于我们这个输入框来说并不希望不替换输入框，因为不替换的话 原来的输入内容会一直存在 -->
    <!-- 此时我们可以给需要替换的加一个 key 属性，属性值不同, input 就会替换成新的了， key 属性并不会渲染到页面上，只是 vue 底层做功能使用的 -->
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </template>
    <br />
    <h3 v-show="true">hwllo world</h3>
    <!-- <ul>
      <li v-for="number in numbers" :key="number">{{number}}</li>
    </ul> -->
    <!-- 列表渲染一般搭配条件渲染使用 -->
    <button @click="testChangeArr">测试修改数组</button>
    <ul v-if="numbers.length">
      <li v-for="(number, index) in numbers" :key="number">
        <span>{{ number }}</span>
        <span>{{ `对应的索引值是${index}` }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <br />
    <div>
      <!-- v-for 也可以循环对象  value 表示的是属性值， key 表示的是对应的属性名 -->
      <p v-for="(value, key, index) in user" :key="value">
        {{ index + "." + key + ":" + value }}
      </p>
    </div>

    <div>
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    showNum: 1,
    loginType: "email",
    numbers: [1, 2, 3, 4, 5, 6],
    user: {
      username: "小张",
      userage: 18,
    },
  }),
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    chengShowNum(num) {
      this.showNum = num;
    },
    testChangeArr(){
      // this.numbers[0] = 100
      // this.numbers.length = 0
      // console.log(this.numbers)
      this.numbers = this.numbers.filter(ele => ele % 2 === 1)
    }
  },
};
</script>

<style>
.box3 .circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  text-align: center;
  line-height: 300px;
}
.box3 .circle.one {
  background-color: rgb(21, 176, 238);
}
.box3 .circle.two {
  background-color: rgb(224, 46, 201);
}
</style>