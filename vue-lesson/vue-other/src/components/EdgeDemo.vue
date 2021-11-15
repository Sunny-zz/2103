<template>
  <div v-once>
    <h2>处理边界情况</h2>
    <h4>访问元素&组件</h4>

    <!-- 我们最好不要触达另一个组件实例内部或手动操作 DOM 元素 -->
    <!-- 1. 访问子组件实例或子元素 -->
    <!-- 使用 ref  -->
    <!-- 2. 访问父级组件实例 -->
    <!-- 在子组件中使用 $parent 获取父组件实例 -->
    <!-- 3. 访问根实例 -->
    <!-- 使用 $root 访问根组件(vue 中最大的组件) -->
    <hr />
    <h4>依赖注入</h4>
    <p>我是父组件，我的 count: {{ count }}</p>
    <Son @add="add" />
    <hr />
    <h4>事件侦听器</h4>
    <button @click="show = false">切换</button>
    <HandlerWatch v-if="show" />
    <!-- 在父组件中使用特殊的自定义事件和子组件的生命周期合并 -->
    <!-- 就可以实现在父组件中调用子组件内生命周期函数 -->
    <!-- 在父组件内帧听子组件的生命周期 -->
    <MyTable
      @hook:created="created"
      @hook:mounted="mounted"
      @hook:beforeUpdate="beforeUpdate"
      @hook:updated="updated"
    />
    <hr />
    <h4>控制更新</h4>
    <!-- 1. 强制更新  $forceUpdate()   99% 用不到 -->
    <!-- 当 data 的值是数组或者对象的时候，某些修改不会引发视图的变化 -->
    <!-- 1. 对象的新增属性和删除属性 -->
    <!-- 2. 数组直接使用 [下标] 修改， 直接修改数组的length -->
    <!-- 如何解决 -->
    <!-- 一般来说数组的修改选择使用数组的一些方法，或者对数组进行重新赋值 -->
    <!-- 一般来说对象的修改，可以使用 $set 方法实现属性的新增，所有的修改都可以使用重新赋值来修改 -->
    <button @click="$forceUpdate()">强制更新</button>
    <button @click="arr[3] = 100">将数组内的第四个改成100</button>
    <button @click="arr.splice(3, 1, 100)">将数组内的第四个改成100</button>
    <button @click="$set(arr, 3, 100)">将数组内的第四个改成100</button>
    <p>{{ arr[3] }}</p> 
    <button @click="obj.c = 30">给对象添加一个c属性</button>
    <!-- $set(a, b ,c ) -->
    <!-- a 数组或对象 (data)   b 新增或要修改的属性或下标   c 是对应的值 -->
    <button @click="$set(obj, 'c', 30)">给对象添加一个c属性</button>
    <p>{{obj}}</p>
    <!-- v-once 指令  -->
    <!-- 用于优化渲染， 当你的组件内容都是静态的，也就是只需要渲染一次就完事了，可以给组件的根元素 添加 v-once 指令， 这个根元素就会自动缓存 -->
    <!-- 加了和没加没有区别就不要加(区别就是渲染速度， 加了变快就可以加) -->
    <hr>
    <h4>循环引用</h4>
    <ForDemo />
  </div>
</template>

<script>
import ForDemo from './ForDemo.vue';
import HandlerWatch from "./HandlerWatch.vue";
import MyTable from "./MyTable.vue";
import Son from "./Son.vue";
export default {
  components: { Son, HandlerWatch, MyTable, ForDemo },
  // created () {
  //   console.log(this.$parent);
  //   console.log(this.$root)
  // },
  data() {
    return {
      count: 100,
      show: true,
      arr: [1, 2, 3, 4, 5, 6],
      obj: {a: 10, b: 20}
    };
  },
  // 依赖注入
  // provide 提供者
  provide() {
    return {
      // 当传递的数据是一个值的时候，这个值就是静态的不会随着改变而变化

      // 当直接将 count 传递过去的时候并不会动态改变，需要写成函数 返回 count
      count: () => {
        return this.count;
      },
      add: this.add,
    };
  },
  methods: {
    add(num) {
      this.count += num;
    },
    updated() {
      // console.log('子组件更新完毕')
    },
    beforeUpdate() {
      // console.log('子组件更新前')
    },
    created() {
      // console.log('子组件初始化')
    },
    mounted() {
      // console.log('子组件渲染完毕')
    },
  },
  // 组件销毁前制动执行， 我们也可以使用 hook 钩子来监听组件销毁

  // beforeDestroy () {
  //   console.log('组件销毁前，会执行')
  // },
};
</script>

<style>
</style>