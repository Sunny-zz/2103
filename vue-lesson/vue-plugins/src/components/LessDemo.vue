<template>
  <div class="less-demo">
    <h2>less 的使用</h2>
    <div class="box">
      <span>hello less</span>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang='less'>
@import '../assets/style.less';
// less 语法
// 变量
// 混合
// 嵌套
// 运算
// 函数 内置函数  if
// 导入 
@x: 100px;
@y: @x + 100px;
@textColor: rgb(134, 38, 245);

@imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F28%2F20161128073837_fr5mJ.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638002773&t=a1a4c72b47f1ee4d21a045836f5ede83';

// 映射方式定义一组变量
#colors() {
  primary: blue;
  secondary: green;
}

.border {
  border: 1px solid red;
}
.less-demo{
  h2{
    color: #colors[primary];
    .border()
  }
  .box{
    width: @x + 10px;
    margin-left: 100px + 100px;
    height: @y;
    // background-color: if(( 2 > 1), #ccc, red);
    // background-color: @bgColor;
    background-image: url(@imgUrl);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    color: @textColor;
    > span{
      .border();
      // & 就代表本身
      &:hover{
        color: #000; 
      }
    }
    &:hover {
      width: 200px;
      > span{
        font-size: 20px;
      }
    }
    
  }
}
</style>