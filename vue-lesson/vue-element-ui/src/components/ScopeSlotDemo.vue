<template>
  <div>
    <h2>作用域插槽</h2>
    <!-- 我们想使用列表组件的时候，列表项展示内容的时候, 父组件想要展示他想要展示的任何方式，想到传递插槽, 但是插槽内的内容其实想要使用的是变化的，也就是数组内的某一项(text),父组件没有循环，子组件才有，所以需要子组件循环使用 插槽的时候 传递给插槽数据，这种插槽叫 作用域插槽 在父组件中可以使用子组件的数据 -->
    <List :data='arr' >
      <!-- item 就接受到了子组件传递的所有 prop 的对象 随意更改名字 -->
      <template v-slot:default="item">
        <h4>{{item.ele.text}}</h4>
      </template>
    </List>
  </div>
</template>

<script>
import List from './List.vue'
export default {
  components: { List },
  data() {
    return {
      arr: [
        {
          id: 1,
          text: '哈哈'
        },
        {
          id: 2,
          text: '666'
        },
        {
          id: 3,
          text: '前端'
        },
        {
          id: 4,
          text: '后端'
        }
      ]
    }
  },
}
</script>

<style>

</style>