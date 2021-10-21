<template>
  <div class="banner">
    <div class="img-wrap">
      <div :class="['img', {'active': index === 0}]">
        <img src="../assets/images/1.jpg" alt="" />
      </div>
      <div :class="['img', {'active': index === 1}]">
        <img src="../assets/images/2.jpg" alt="" />
      </div>
      <div :class="['img', {'active': index === 2}]">
        <img src="../assets/images/3.jpg" alt="" />
      </div>
      <div :class="['img', {'active': index === 3}]">
        <img src="../assets/images/4.jpg" alt="" />
      </div>
      <div :class="['img', {'active': index === 4}]">
        <img src="../assets/images/5.jpg" alt="" />
      </div>
    </div>
    <ul class="pagination">
      <li @click="change(0)" :class="{'active': index === 0}"></li>
      <li @click="change(1)" :class="{'active': index === 1}"></li>
      <li @click="change(2)" :class="{'active': index === 2}"></li>
      <li @click="change(3)" :class="{'active': index === 3}"></li>
      <li @click="change(4)" :class="{'active': index === 4}"></li>
    </ul>
    <div class="prev" @click="prevClick">＜</div>
    <div class="next" @click="nextClick">＞</div>
  </div>
</template>

<script>
// 本地图片在 script 不能直接使用地址
export default {
  data(){
    return {
      // 实现功能定义的 data 越少越好
      index: 4
    }
  },
  methods: {
    change(ind){
      this.index = ind
    },
    nextClick(){
      this.index ++ 
      if(this.index > 4){
        this.index = 0
      }
    },
    prevClick(){
      this.index --
      if(this.index < 0){
        this.index = 4
      }
    }
  }
};
</script>

<style scoped>
/* 使用了 scoped  其实就是给组件内的所有标签（子组件只给最外层结构添加） 添加上一个唯一的属性，然后所有样式都会使用这个属性当作选择器 */
/* vue 组件的样式加了 scoped   限制该组件的样式是独立的 */
.banner {
  width: 590px;
  height: 470px;
  background-image: url('../assets/images/5.jpg');
  position: relative;
}
.banner .img{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s linear;
}
.banner .img img {
  width: 100%;
}
.banner .img.active{
  z-index: 1;
  opacity: 1;
}
.banner > ul {
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  z-index: 1;
  width: 100%;
}
.banner > ul li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.5);
  margin-right: 10px;
}
.banner > ul li.active{
  background-color: rgba(24, 146, 167, 0.774);
}
.banner > ul li:last-child{
  margin-right: 0;
}
.banner .prev, .banner .next{
  width: 50px;
  height: 80px;
  background-color: rgba(82, 80, 80, 0.507);
  position: absolute;
  z-index: 2;
  top: 50%;
  margin-top: -40px;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
.banner .prev{
  left: 0;
}
.banner .next{
  right: 0;
}
</style>