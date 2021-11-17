<template>
  <div>
    <span>{{ title }}</span>
    <span>-</span>
    <span>￥{{ price }}</span>
    <span v-if="quantity">x</span>
    <span v-if="quantity">{{quantity}}</span>
  </div>
  <!-- <li>
    <div>
      <span>{{ title }}</span>
      <span>-</span>
      <span>￥{{ price }}</span>
    </div>
    <button>add to cart</button>
  </li> -->
</template>

<script>
export default {
  props: ["price", "title", "quantity" ],
};
</script>

<style>
</style>