<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn">
      <router-link :to='{name: "Home"}'> home </router-link>
    </button>
    <TransitionDemo />
  </div>
</template>
<script>
import TransitionDemo from "../components/TransitionDemo.vue";
export default {
  components: { TransitionDemo },
};
</script>
<style>
.about {
  height: 2000px;
}
.btn {
  position: fixed;
  bottom: 100px;
  right: 100px;
}
</style>