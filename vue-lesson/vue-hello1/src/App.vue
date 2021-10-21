<template>
  <div class="app">
    <h2>hello vue</h2>
    <Box />
    <Box1 />
    <Box2 />
    <Box3 />
    <Box4 />
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
};
</script>

<style>
h2 {
  color: red;
}
</style>
