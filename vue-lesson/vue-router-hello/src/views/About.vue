<template>
  <transition name="rotate">
    <div class="about">
      <h1>This is an about page</h1>
      <TransitionDemo />
    </div>
  </transition>
</template>
<script>
import TransitionDemo from "../components/TransitionDemo.vue";
export default {
  components: { TransitionDemo },
};
</script>
<style>
.about {
  transform: rotate(0);
}
.rotate-enter{
  transform: rotate(360deg);
}
.rotate-enter-active{
  transition: all 1s;
}
</style>