<template>
  <div>
    <h2>动态组件</h2>
    <div>
      <button @click="componentName = 'Posts'">Posts</button>
      <button @click="componentName = 'Archive'">Archive</button>
    </div>
    <!-- 当你使用 v-show 切换的时候组件并没有销毁，所以切换回原组件的话，状态(data)不会重置 -->
    <!-- 当使用 v-if 切换的话, 切换回原组件， data 就会重置 -->
    <!-- 如果想要在 v-if 的情况下 依然保留  posts 组件状态(data)的变化， 可以选择使用动态组件(keep-alive) -->
    <!-- <Posts v-if="tab === 'posts'" />
    <Archive v-else /> -->
    <!--  keep-alive  和   component  都是 vue 内置的全局组件，可以直接使用， 不会渲染任何的额外标签 -->
    <!-- 上述两个组件需要搭配使用， 而且 component 组件必须接收一个  is prop -->
    <!-- 这个 is 需要传递 组件名 作为其值 -->
    <keep-alive>
      <component :is="componentName" ></component>
    </keep-alive>
  </div>
</template>

<script>
import Archive from "./Archive.vue";
import Posts from "./Posts.vue";
export default {
  components: { Posts, Archive },
  data() {
    return {
      componentName: 'Posts',
    };
  },
};
</script>

<style>
</style>