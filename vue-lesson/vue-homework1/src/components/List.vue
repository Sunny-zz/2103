<template>
  <div class="list">
    <h2>Top</h2>
    <ul v-if="list.length">
      <!-- v-for 可以在组件上直接使用 循环生成多个 组件 -->
      <!-- <LiItem v-for="item in list" :key="item.id" :text='item.text' :color='item.color' /> -->

      <LiItem v-for="item in list" :key="item.id" v-bind='item' />
      <!-- v-bind 指令的特殊用法 -->
      <!-- 当我们给子组件传递 prop 的时候，传递对象下的很多个属性，写法很麻烦，我们可以选择值传递一个对象过去，然后组件内使用 对象.xxx 获取， 这种方式不如直接传递所有属性，子组件内直接用-->
      <!-- v-bind 其实就是传递所有属性的简写， 也就是说 v-bind='对象' （v-bind 不可简写）  那么这个对象下的所有属性都会被当做 prop 依次传递给子组件 -->
    </ul>
    <div v-else>请等待</div>
  </div>
</template>

<script>
import LiItem from "./LiItem.vue";
export default {
  data() {
    return {
      list: [
        {
          id: "de23de",
          text: "Sed ut perspiciatis unde omnis",
          color: 'red'
        },
        {
          id: "de2sed23",
          text: "Natus error sit voluptatem accuum",
          color: 'green'
        },
        {
          id: "de1pl323",
          text: "Doloremque laudantium totam",
          color: 'blue'
        },
        {
          id: "de1i123",
          text: "Rem aperiam eaque ipsa quae ab illo",
          color: 'black'
        },
        {
          id: "dry3e23",
          text: "Inventore veritatis et quasi",
          color: 'pink'
        },
        {
          id: "deyy123",
          text: "Architecto beatae vitae dicta sunt",
          color: 'yellow'
        },
      ],
    };
  },
  components: {
    LiItem,
  },
};
</script>

<style>
</style>