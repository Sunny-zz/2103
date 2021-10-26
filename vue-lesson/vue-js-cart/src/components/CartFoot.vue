<template>
  <div class="cart-foot">
    <div >
      <input type="checkbox" :checked='isAllChecked' @change="$emit('update:isAllChecked', $event.target.checked)" />
      <label>全选</label>
    </div>
    <span>删除选中商品</span>
    <span>已选{{ totalObj.checkedNums }}件商品</span>
    <span>总价: {{ totalObj.total | numberToFixed(2) }}</span>
  </div>
</template>

<script>
export default {
  props: ['isAllChecked', 'totalObj']
};
</script>

<style>
.cart-foot {
  height: 50px;
  border: 1px solid #ccc;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>