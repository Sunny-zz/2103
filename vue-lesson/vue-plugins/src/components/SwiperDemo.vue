<template>
  <div class="swiper-demo">
    <h2>swiper 的使用</h2>
    <button @click="num++">按钮</button>
    <p>{{ num }}</p>
    <button class="add" @click="add">添加一个图片</button>
    <button @click="edit">修改一个图片</button>
    <button>删除一个图片</button>
    <div v-if="banner.length" class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" :key="item.id">
          <img :src="item.imgSrc" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import axios from "axios";
export default {
  data() {
    return {
      banner: [],
      num: 10,
    };
  },
  created() {
    axios.get("http://localhost:3008/banner").then((res) => {
      // console.log(res.data)
      this.banner = res.data;
      this.$nextTick(() => {
        this.mySwiper = new Swiper(".mySwiper", {
          // loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    });
  },
  // mounted() {
  //   this.$nextTick()
  // },
  updated() {
    // console.log("更新完毕了");
    // if (!this.mySwiper) {
    //   console.log('初始化 swiper')
    //   this.mySwiper = new Swiper(".swiper-container", {
    //     loop: true, // 循环模式选项
    //     // 如果需要分页器
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },
    //   });
    // }
  },
  methods: {
    add() {
      this.banner.push({
        id: "1234513w3",
        imgSrc:
          "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100011693251/FocusFullshop/CkRqZnMvdDEvMTg0NDkyLzE3LzEzMjI4LzM2Nzc3Ny82MGU2YzlmM0UwNTBkNjdiMC83YTMzYjJkMjNiYTAwNzhhLnBuZxIJMi10eV8wXzUzMAI47ot6QhMKD-Wuj-eigea4uOaIj-acrBAAQhAKDOemj-WIqeeLguS6qxABQhAKDOeri-WNs-aKoui0rRACQgoKBuS8mOi0qBAHWMOppcn0Ag/cr/s/q.jpg",
      });

      // this.$nextTick(() => {
      //   this.mySwiper.update();
      // });
    },
    edit() {
      // 修改数组内第一个对象下的 imgSrc 属性
      this.banner[0].imgSrc =
        "https://img13.360buyimg.com/pop/s590x470_jfs/t1/217412/2/419/96536/616918afE44c61fc3/b4d4e63add80b2bc.jpg.webp";
    },
  },
  watch: {
    // banner() {
    //   // 第一次修改 banner 无需更新
    //   // 第一次改之前是没有 this.mySwiper 的
    //   console.log(111);
    //   if (this.mySwiper) {
    //     this.$nextTick(() => {
    //       this.mySwiper.update();
    //     });
    //   }
    // },
    banner: {
      handler() {
        
        if (this.mySwiper) {
          this.$nextTick(() => {
            this.mySwiper.update();
          });
        }
      },
      // [{a,b,c}, {a,b,c}, {a,b,c}]
      // 修改 第一个对象的 a 属性 如果 deep 为 false 的话，不会检测到 banner 的变化
      // 还例如   {a: {b,c}}  修改 b 属性的时候 不会检测到变化
      deep: false,
      immediate: true
    },
  },
};
</script>

<style >
.swiper-container {
  width: 590px;
  height: 470px;
}
</style>