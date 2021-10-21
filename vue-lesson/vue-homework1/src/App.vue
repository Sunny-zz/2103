<template>
  <div class="app">
    <h2>app</h2>
    <Banner />
    <hr />
    <div class="items">
      <!-- 本地图片地址当做 prop 向下传递的话，子组件接收之后无法使用 -->
      <!-- 解决方案 1. require(本地图片地址) 2. 使用 import 导入然后当做 data  麻烦 3. 换成网络地址-->
      <!-- <Item
        :src="require('./assets/images/page2-img1.png')"
        p="PSD source files are available for
the registered members."
        title_import="MULTIPLE"
        title_content="Languages"
      /> -->
      <Item :post="{
        src:require('./assets/images/page2-img1.png'),
        p: 'PSD source files are available for the registered members.',
        p_key: 'members',
        title_import: 'MULTIPLE',
        title_content: 'Languages'
      }"  />
      <!-- <Item
        :src="require('./assets/images/page2-img2.png')"
        p="The basic package is available for
anyone without registration."
        title_import="MULTIPLE1"
        title_content="Languages1"
      />
      <Item
        :src="require('./assets/images/page2-img3.png')"
        p="This Software Template goes with two packages."
        title_import="MULTIPLE2"
        title_content="Languages2"
      /> -->
      <!-- <Item :src='img1' />
      <Item :src='img2'/>
      <Item :src='img3'/> -->
    </div>
    <hr>
    <List />
    <hr>
    <WatchDemo />
    <hr>
    <ComputedDemo />
    <hr>
    <!-- <PropDemo /> -->
    <hr>
    <EmitDemo />
    <hr>
    <LifeCircle />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Item from "./components/Item.vue";
import List from "./components/List.vue";
import WatchDemo from "./components/WatchDemo.vue";
import ComputedDemo from "./components/ComputedDemo.vue";
// import PropDemo from "./components/PropDemo.vue";
import EmitDemo from "./components/EmitDemo.vue";
import LifeCircle from "./components/LifeCircle.vue";
// import img1 from './assets/images/page2-img1.png'
// import img2 from './assets/images/page2-img2.png'
// import img3 from './assets/images/page2-img3.png'
export default {
  name: "App",
  components: {
    Banner,
    Item,
    List,
    WatchDemo,
    ComputedDemo,
    // PropDemo,
    EmitDemo,
    LifeCircle
  },
  data() {
    return {
      // img1,
      // img2,
      // img3
    };
  },
};
</script>

<style scoped>
.items {
  display: flex;
  justify-content: space-around;
}
</style>