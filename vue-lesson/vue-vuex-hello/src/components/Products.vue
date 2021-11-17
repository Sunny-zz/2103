<template>
  <div class="products">
    <h3>Products</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        <Product v-bind='product' />
        <button @click="add(product.id)">add to cart</button>
      </li>
    </ul>
    <!-- <ul>
      <Product v-for="product in products" :key="product.id"  v-bind='product' />
    </ul> -->
    
  </div>
</template>

<script>
import Product from './Product.vue'
export default {
  components: { Product },
  computed: {
    products() {
      return this.$store.state.products 
    }
  },
  methods: {
    add(id) {
      // 调用 store 内的 mutation 函数 addToCart 修改购物车数据
      this.$store.commit('addToCart', id)
    }
  },
}
</script>

<style>

</style>