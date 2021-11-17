<template>
  <div class="cart">
    <h3>Your Cart</h3>
    <!-- 循环这个 Product 组件 -->
    <!-- 循环的数据与 store 中的 products 有关系，但是不是一个数据 -->
    <!-- 所以购物车商品的数据需要单独设置 -->
    <ul>
      <li v-for="item in cartList" :key="item.product.id">
        <Product v-bind='item.product' :quantity='item.quantity' />
      </li>
    </ul>
    <p>total: ￥{{total.toFixed(2)}}</p>
  </div>
</template>

<script>
import Product from './Product.vue';
export default {
  components: { Product },
  computed: {
    cartList() {
      return this.$store.getters.cartList 
    },
    total(){
      return this.$store.getters.total
    }
  },
  // created () {
  //   console.log(this.cartList);
  // },
}
</script>

<style>

</style>