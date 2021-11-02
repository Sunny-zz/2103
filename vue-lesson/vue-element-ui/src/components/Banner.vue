<template>
  <div class="banner">
    <h2>banner 轮播</h2>
    <!-- 任何一个 vue 组件都可以传递 class 以及 style  prop。 都相当于给组件内的根元素添加 class 和 style -->
    <el-carousel
      arrow="always"
      height="280px"
      class="my-carousel"
      trigger='click'
    >
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgSrc" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        {
          id: "1",
          imgSrc:
            "https://gw.alicdn.com/imgextra/i4/O1CN01h6eZ4D1Cgsg3pQjqF_!!6000000000111-2-tps-502-306.png",
        },
        {
          id: "2",
          imgSrc:
            "https://img.alicdn.com/imgextra/i4/6000000006983/O1CN01ASFICT21SGRWVD3nZ_!!6000000006983-0-octopus.jpg",
        },
        {
          id: "3",
          imgSrc:
            "https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg",
        },
        {
          id: "4",
          imgSrc:
            "https://img.alicdn.com/simba/img/TB1lUZLJVXXXXXtXFXXSutbFXXX.jpg",
        },
      ],
    };
  },
};
</script>

<style>
/* 当使用 ui 库的时候 组件的 style 一般不添加 scoped 属性，因为加了修改 ui 库组件的样式就修改不了了 */
.my-carousel {
  width: 520px;
}
.my-carousel img {
  width: 520px;
  height: 280px;
  border-radius: 14px;
}

.my-carousel .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.my-carousel .el-carousel__indicator.is-active button {
  background-color: red;
}
.my-carousel .el-carousel__arrow {
  width: 72px;
  border-radius: 18px;
}
.my-carousel .el-carousel__arrow--right {
  right: -46px;
  text-align: left;
  text-indent: 5px;
}
.my-carousel .el-carousel__arrow--left {
  left: -46px;
  text-align: right;
  padding-right: 8px;
}
.my-carousel .el-carousel__arrow:hover {
  background-color: rgba(31, 45, 61, 0.11);
}
</style>