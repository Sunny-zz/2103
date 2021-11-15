<template>
  <div>
    <DynamicDemo />
    <hr>
    <EdgeDemo />
  </div>
</template>

<script>
import DynamicDemo from './components/DynamicDemo.vue'
import EdgeDemo from './components/EdgeDemo.vue'
export default {
  components: { DynamicDemo, EdgeDemo }
}
</script>

<style>
body{
  height: 3000px;
}
</style>