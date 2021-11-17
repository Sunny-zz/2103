<template>
  <div class="shopping-cart">
    <h2>vuex 购物车</h2>
    <hr>
    <Products />
    <hr>
    <Cart />
  </div>
</template>

<script>
import Cart from './Cart.vue'

import Products from './Products.vue'
export default {
  components: { Products, Cart },

}
</script>

<style>

</style>