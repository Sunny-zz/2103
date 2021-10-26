<template>
  <div>
    <CartItem
      v-for="item in cartList"
      :key="item.id"
      v-bind="item"
      :changeStatus='changeStatus'
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: { CartItem },
  props: ["cartList", 'changeStatus'],
};
</script>

<style>
</style>