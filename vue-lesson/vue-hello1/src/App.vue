<template>
  <div class="app">
    <h2>hello vue</h2>
    <Box />
    <Box1 />
    <Box2 />
    <Box3 />
    <Box4 />
    <hr>
    <button @click="obj.b.d.e = 200">按钮</button>
    {{obj}}
  </div>
</template>

<script>
import Box from "./components/Box.vue";
import Box1 from "./components/Box1.vue";
import Box2 from "./components/Box2.vue";
import Box3 from "./components/Box3.vue";
import Box4 from "./components/Box4.vue";
export default {
  components: {
    Box,
    Box1,
    Box2,
    Box3,
    Box4
  },
  data() {
    return {
      obj: {
        a:10,
        b:{
          c: 20,
          d:{
            e:30
          }
        }
      }
    }
  },
  updated() {
    console.log('更新了')
  },
};
</script>

<style>
h2 {
  color: red;
}
</style>
