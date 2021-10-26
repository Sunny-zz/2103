<template>
  <div class="app">
    <h2>购物车</h2>
    <Cart />
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
export default {
  components: {
    Cart,
  },
}
</script>

<style>
.app {
  margin-left: 200px;
}
</style>