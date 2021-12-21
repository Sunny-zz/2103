<template>
  <div class="hello">
    <h1>{{ "hello" }}</h1>
    <h2 ref="myH2">{{ user }}</h2>
    <h3>user的长度{{ len }}</h3>
    <button @click="changeUser('hello vue3')">changeUser</button>
    <h3>{{title}} + {{author}}</h3>
    <button @click="changePostTitle">changTitle</button>
    <button @click="change">change</button>
  </div>
</template>

<script>
import { onMounted, ref, computed, watch, reactive, toRef, toRefs } from "vue";
export default {
  name: "HelloWorld",
  props: ["msg"],
  setup() {
    // console.log('setup')
    // console.log(props)
    // console.log(context)
    //  ref
    // 来创建基础的响应式数据   String  number  boolean
    // 模板的 dom 元素

    // toRef

    // 定义一个响应式数据   其实就是相当于 data
    // ref('')    (初始值)
    // 修改的时候使用  .value   修改

    // user
    const user = ref("");
    const myH2 = ref(null)
    console.log(myH2.value)
    const getUser = async () => {
      const res = await new Promise((resolve) => resolve("哈哈哈哈"));
      user.value = res;
    };
    const changeUser = (newUser) => {
      user.value = newUser;
    };
    // onMounted 相当于创建了生命周期 并且在生命周期内执行 getUser
    onMounted(() => {
      getUser()
      console.log(myH2.value)
    });
    const len = computed(() => user.value.length);
    // 当 user 变化需要执行的函数
    const onUserChange = () => {
      // console.log("user 改变了", user);
    };
    // watch 用法
    // 基本用法 watch(监听的数据, 监听函数, 配置项对象)
    watch(user, onUserChange, { immediate: true, deep: true });

    // ref 制作的响应式数据 整体响应的  就需要提供这个 ref 给组件
    // 我只想将 title 制作成响应的，而且指向给组件 title 
    // 可以使用 toRef 制作单个属性的响应，但是 ref 不能使用 toRef 结构
    // 需要使用 reactive 替代 ref 指向响应式对象数据

    // reactive 也是用于制作响应式数据的  一般来制作响应式对象
    // 功能基本上和 ref 类似  但是 修改和使用的时候不需要 .value, 而且可以被 toRef 解构
    const post = reactive({title: 'vue', author: '作者'})

    // const title = toRef(post, 'title')
    // toRefs    

    const {title, author} = toRefs(post)
    console.log(title)
    const changePostTitle = () => {
      title.value = '哈哈'
    }

    return {
      user,
      changeUser,
      len,
      myH2,
      title,
      author,
      changePostTitle
    };
  },
};
</script>

<style scoped>
</style>
