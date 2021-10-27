<template>
  <div class="cart">
    <!-- <CartHead :isAllChecked.sync='isAllChecked' @changeAllStatus='changeAllStatus' /> -->
    <CartHead :isAllChecked.sync="isAllChecked" />
    <CartList
      :cartList="cartList"
      :changeStatus="changeStatus"
      :delGoods="delGoods"
      :changeNumber='changeNumber'
    />
    <!-- <CartFoot :isAllChecked.sync='isAllChecked' @changeAllStatus='changeAllStatus'  :totalObj='totalObj' /> -->
    <CartFoot
      :isAllChecked.sync="isAllChecked"
      :totalObj="totalObj"
      @delCheckedGoods="delCheckedGoods"
    />
  </div>
</template>

<script>
import CartHead from "./CartHead.vue";
import CartFoot from "./CartFoot.vue";
import CartList from "./CartList.vue";
export default {
  data() {
    return {
      cartList: [
        {
          id: "16t2w3",
          goodsName:
            "绿箭（DOUBLEMINT）无糖薄荷糖原味薄荷味约35粒23.8g单盒金属装 办公室休闲零食（新旧包装随机发货）",
          goodsPrice: 70.0,
          numbers: 1,
          goodsImg:
            "https://img13.360buyimg.com/n0/s80x80_jfs/t1/220993/1/1127/187461/616fe92bE860d59e5/56a7ddc20c81ebdc.jpg.dpg",
          status: true,
        },
        {
          id: "1223w3",
          goodsName:
            "绿箭（DOUBLEMINT）无糖薄ada荷糖原味asd薄荷味约35粒23.8g单盒",
          goodsPrice: 80.9,
          numbers: 2,
          goodsImg:
            "https://img13.360buyimg.com/n0/s80x80_jfs/t1/220993/1/1127/187461/616fe92bE860d59e5/56a7ddc20c81ebdc.jpg.dpg",
          status: true,
        },
        {
          id: "121w3",
          goodsName:
            "绿箭（DOUBLEMINT）无糖薄ada荷糖原味薄荷ada味约35粒23.8g单盒",
          goodsPrice: 107.9,
          numbers: 3,
          goodsImg:
            "https://img13.360buyimg.com/n0/s80x80_jfs/t1/220993/1/1127/187461/616fe92bE860d59e5/56a7ddc20c81ebdc.jpg.dpg",
          status: true,
        },
      ],
    };
  },
  components: {
    CartHead,
    CartFoot,
    CartList,
  },
  computed: {
    // isAllChecked() {
    //   return this.cartList.every(ele => ele.status)
    // },
    isAllChecked: {
      get() {
        return this.cartList.every((ele) => ele.status);
      },
      set(newValue) {
        this.changeAllStatus(newValue);
      },
    },
    totalObj() {
      return this.cartList.reduce(
        (res, ele) => {
          const { status, numbers, goodsPrice } = ele;
          const checkedNums = status
            ? numbers + res.checkedNums
            : res.checkedNums;
          const total = status ? numbers * goodsPrice + res.total : res.total;
          return {
            checkedNums,
            total,
          };
        },
        { checkedNums: 0, total: 0 }
      );
    },
  },
  methods: {
    changeAllStatus(status) {
      this.cartList.forEach((ele) => {
        ele.status = status;
      });
    },
    changeStatus(id) {
      const currentGoods = this.cartList.find((ele) => ele.id === id);
      currentGoods.status = !currentGoods.status;
    },
    delGoods(id) {
      const index = this.cartList.findIndex((ele) => ele.id === id);
      this.cartList.splice(index, 1);
    },
    delCheckedGoods() {
      this.cartList = this.cartList.filter((ele) => !ele.status);
    },
    changeNumber(id, num) {
      console.log(id, num)
      const currentGoods = this.cartList.find((ele) => ele.id === id);
      currentGoods.numbers = num;
    }
  },
};
</script>

<style>
.cart {
  width: 800px;
}
</style>