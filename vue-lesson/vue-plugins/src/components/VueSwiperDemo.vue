<template>
  <div class="vue-swiper">
    <h2>vue 组件的 swiper</h2>
    <Swiper :options="swiperOptions1">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
    <br>
    <br>
    <Swiper :options="swiperOptions2">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      swiperOptions1: {
        pagination: {
          el: ".swiper-pagination",
        }
      },
      swiperOptions2: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  }
};
</script>

<style>
.swiper-container {
  width: 590px;
  height: 470px;
  border: 1px solid #ccc;
}
</style>