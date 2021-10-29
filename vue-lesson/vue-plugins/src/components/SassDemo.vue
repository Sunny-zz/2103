<template>
  <div class="sass-demo">
    <h2>sass 的使用</h2>
    <h3>sass 的使用</h3>
    <button class="btn">按钮</button>
    <h4>sass 的使用</h4>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
/* 继承 */
@import '../assets/btn.scss';

$color: red;

.sass-demo{
  > h2 {
    color: $color;
    font-size: 10px + 20px;
    @include border;
    &:hover{
      color: blue;
    }
  }
  h3{
    @include border;
    /* color: $textColor; */
  }
  h4{
    @extend h3;
    font-size: 10px;
  }
}
</style>