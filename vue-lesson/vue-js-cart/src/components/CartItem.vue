<template>
  <div class="cart-item">
    <div>
      <input type="checkbox" :checked='status' @change="changeStatus(id)" />
    </div>
    <div class="goods-info">
      <img :src="goodsImg" alt="" />
      <p>{{ goodsName }}</p>
    </div>
    <div>￥{{ goodsPrice | numberToFixed(2)  }}</div>
    <div>
      <button>-</button>
      <input :value="numbers" type="text" />
      <button>+</button>
    </div>
    <div>{{ subTotal | numberToFixed(2) }}</div>
    <button>删除</button>
  </div>
</template>

<script>
export default {
  props: ["id", "goodsName", "goodsPrice", "numbers", "goodsImg", 'status', 'changeStatus'],

  computed: {
    subTotal() {
      return this.numbers * this.goodsPrice;
    },
  },
  // 用过滤器替代 函数
  // methods: {
    //   numberToFixed(number, n) {
      //     return number.toFixed(n);
  //   },
  // }, 
  // 组件内的过滤器
  // filters: {
  //   numberToFixed(number, n) {
  //     return  number.toFixed(n);
  //   },
  // },
  // vue全局过滤器
  // 去 main.js 查看
};
</script>

<style>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  border-top: 1px solid #ccc;
}
.cart-item .goods-info {
  width: 300px;
  display: flex;
  align-items: flex-start;
}
.cart-item .goods-info img {
  flex-shrink: 1;
  margin-right: 10px;
}
.cart-item .goods-info p {
  font-size: 14px;
  /* 1. 当行文本溢出隐藏 显示省略号 */
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  /* 固定宽  不换行  oh  文字超出显示省略号 */
  /* 2. 多行文本溢出隐藏 显示省略号 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>