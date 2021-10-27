<template>
  <div class="cart-item">
    <div>
      <input type="checkbox" :checked="status" @change="changeStatus(id)" />
    </div>
    <div class="goods-info">
      <img :src="goodsImg" alt="" />
      <p>{{ goodsName }}</p>
    </div>
    <div>￥{{ goodsPrice | numberToFixed(2) }}</div>
    <div>
      <button :disabled="numbers === 1" @click="sub">-</button>
      <input :value="numbers" type="number" @change="change" />
      <button @click="add">+</button>
    </div>
    <div>{{ subTotal | numberToFixed(2) }}</div>
    <button @click="delGoods(id)">删除</button>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "goodsName",
    "goodsPrice",
    "numbers",
    "goodsImg",
    "status",
    "changeStatus",
    "delGoods",
    "changeNumber",
  ],

  computed: {
    subTotal() {
      return this.numbers * this.goodsPrice;
    },
  },
  // updated () {
  //   console.log('更新');
  // },
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

  methods: {
    add() {
      this.changeNumber(this.id, this.numbers + 1);
    },
    sub() {
      if (this.numbers > 1) this.changeNumber(this.id, this.numbers - 1);
    },
    change(e) {
      const value = e.target.value
      // 输入的内容如果为空就变成 原来的
      // 输入的内容是 0 变成 1
      // const num =  value === '0' ? 1 : value === '' ? this.numbers : Number(value)
      if(value === '0'){
        alert('输入不能为0，最小为1')
        if(this.numbers === 1){
          e.target.value = 1
        }else{
          this.changeNumber(this.id, 1);
        }
      }else if(value === ''){
        alert('输入不能为空')
        e.target.value = this.numbers
      }else{
        this.changeNumber(this.id, Number(value));
      }
      
    },
  },
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>