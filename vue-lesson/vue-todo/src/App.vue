<template>
  <div class="todos">
    <h2>todo mvc</h2>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
export default {
  name: "App",
  components: {
    Todos,
  },
};
</script>

<style>
</style>