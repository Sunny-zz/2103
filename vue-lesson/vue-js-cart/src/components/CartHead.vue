<template>
  <div class="cart-head">
    <form action="">
      <input type="checkbox" :checked='isAllChecked' @change="$emit('update:isAllChecked', $event.target.checked)" />
      <label>全选</label>
    </form>
  </div>
</template>

<script>
export default {
  props: ['isAllChecked']
};
</script>

<style>
.cart-head {
  height: 50px;
  background-color: #ccc;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
</style>