## 微信小程序

### 项目目录


### wxml 
就相当于 html ，但是只写页面相关标签，不写 js css。
微信页面里面的标签称为组件，是微信小程序内置的。一般不需要写原生的标签。

#### 小程序组件

基础内容
- text 文字
- rich-text 富文本
- progress 进度条
- icon 图标

视图容器组件  (块元素)
- view 相当于 div
- scroll-view 带滚动条的 div
- swiper 滑块视图容器
- swiper-item 滑块视图容器的一项

开放能力 
- open-data 用于展示微信开放的数据(微信头像，电话 等)

表单
- button 也可以设置 open-type 来获取开放能力

导航
- navigator  小程序内跳转的

媒体
- image 默认大小 320x240

特殊标签
- block 主要用于 wx:if  wx:for 的书写，不会渲染任何的标签  类似于 vue 的 template

### 数据绑定
如何将 js 嵌入到 wxml 中，使用 {{}} 语法即可

### 样式
小程序内的样式单位一般不写 px %, 写成 rpx
小程序横向全屏是 750rpx， 相当于 100%
样式默认可以使用 @import 导入