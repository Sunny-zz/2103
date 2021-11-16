<template>
  <div>
    <DynamicDemo />
    <hr />
    <EdgeDemo />
    <hr />
    <CustomDirective />
    <hr />
    <RenderFunction />
    <hr>
    <MyButton />
    <hr>
    <PluginsDemo />
  </div>
</template>

<script>
import CustomDirective from "./components/CustomDirective.vue";
import DynamicDemo from "./components/DynamicDemo.vue";
import EdgeDemo from "./components/EdgeDemo.vue";
import RenderFunction from "./components/RenderFunction.vue";
import MyButton from './components/FunComponent'
import PluginsDemo from './components/PluginsDemo.vue';
export default {
  components: { DynamicDemo, EdgeDemo, CustomDirective, RenderFunction, MyButton, PluginsDemo },
};
</script>

<style>
body {
  height: 3000px;
}
</style>