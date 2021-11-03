<template>
  <div class="app">
    <DrawerDemo />
    <hr>
    <DialogDemo />
  </div>
</template>

<script>
import DialogDemo from './components/DialogDemo.vue'
import DrawerDemo from './components/DrawerDemo.vue'
export default {
  components: { DrawerDemo, DialogDemo },
}
</script>

<style>
/* .app{
  width: 100vw;
  height: 100vh;
} */
</style>