// class 的应用
// 面向对象编程  一切皆对象
// const div = {
//   tagName: 'div',
//   content: '哈哈哈',
//   style: {
//     width: '200px'
//   }
// }
// 一类 banner

// const banner = {
//   imgLength: 7,
//   autoplay: true,
//   effect: 'fade',
//   nextfun: function(){},
//   content: '哈哈哈',
//   style: {
//     width: '200px'
//   }
// }

// 轮播图插件

;(function(){
  class mySwiper {
    // 将某个 div 制作成轮播图，并添加上轮播功能
    constructor(selector, options) {
      // 不一样的属性或方法
      // 每一个小的 slide 以及 slide 个数   html 结构就解决了  不需要 js 解决
  
      // 参数
      // 两个1. 哪个div   2. 配置项(所有相关的配置)
      // 自动播放
      // 容器大小
      // 哪个 div   类名
      this.ele = document.querySelector(selector)
      // width 是指的轮播图的视口宽度 也就是 container 的宽度 
      this.width = this.ele.clientWidth
      // swiperWrap 指的是轮播图包裹 slide  和盒子
      this.swiperWrap = this.ele.querySelector('.swiper-wrap')
      // slide 的个数
      this.slideNum = this.ele.querySelectorAll('.slide').length
      // 默认的 激活索引 因为自动播放和点击分页器都需要控制
      this.index = 0
      // 默认配置
      const defaultOptions = {
        autoPlay: false,
        isHasArrow: true,
        isHasPagination: true,
        // effect: 'fade'  需要配套的 css 以及初始化的时候添加上对应的 css
      }
      // 真正的配置， 合并用户配置和默认配置
      this.options = { ...defaultOptions, ...options }
      // 当创建实例的时候 默认就让 初始化的 init 执行
      this.init()
    }
  
    // 公共功能
    // 1. 默认第一个图片和按钮的样式是激活状态   默认的初始化功能
    init() {
      // 控制 slide 的包裹盒子的宽度
      this.swiperWrap.style.width = this.slideNum * 100 + '%'
      // 控制 wrap 的 margin
      this.swiperWrap.style.marginLeft = '0px'
  
      // 将所有的 slide 的宽度设置成 container 的宽度
      for (let i = 0; i < this.slideNum; i++) {
        this.ele.querySelectorAll('.slide')[i].style.width = this.width + 'px'
      }
      const { isHasPagination, isHasArrow, autoPlay } = this.options
      // 添加 slide 的切换功能
      if (isHasPagination) {
        this.paginationClick()
        // 将第一个分页器按钮 激活
        this.ele.querySelector('.swiper-pagination span:first-child').classList.add('active')
      }
      if (isHasArrow) {
        this.arrowChange()
      }
      if (autoPlay) {
        this.autoPlay()
      }
    }
  
    // 2. 给分页器添加 slide 切换功能   初始化的时候就要执行
    paginationClick() {
      const that = this
  
      const pagination = that.ele.querySelectorAll('.swiper-pagination span')
  
      for (let i = 0; i < pagination.length; i++) {
        pagination[i].onclick = function () {
          // console.log(i)
          // that.ele.querySelector('.swiper-wrap').style.marginLeft = i * -that.width + 'px'
          // for (let j = 0; j < pagination.length; j++) {
          //   pagination[j].classList.remove('active')
          // }
          // this.classList.add('active')
          that.change(i)
          that.index = i
        }
      }
    }
  
    // 自动播放功能   初始化的时候就要执行
    autoPlay() {
      // let index = 0
      const that = this
      function fun() {
        that.index++
        if (that.index >= that.slideNum) {
          that.index = 0
        }
        // that.ele.querySelector('.swiper-wrap').style.marginLeft = index * -that.width + 'px'
        // for (let j = 0; j < pagination.length; j++) {
        //   pagination[j].classList.remove('active')
        // }
        // pagination[index].classList.add('active')
        that.change(that.index)
      }
      let run = setInterval(fun, 2500)
  
      that.ele.onmouseenter = function () {
        clearInterval(run)
      }
      that.ele.onmouseleave = function () {
        run = setInterval(fun, 2500);
      }
    }
    //#region 
    // 滑入和滑出控制自动播放
    // 当一个方法内定义的变量另一个方法也想要用的话，需要在 constructor 内使用 this 定义，将这个变量定义成对象的某个属性，这样任何地方都可以使用了
    // 比如自动播放的索引值 当点击分页器的时候需要控制
  
    // controlAutoPlay() {
    //   const that = this
    //   that.ele.onmouseenter = function () {
    //     clearInterval(that.run)
    //   }
    //   that.ele.onmouseleave = function () {
    //     that.run = setInterval(fun, 2500);
    //   }
    // }
    //#endregion
    // 换图和按钮 要根据 索引值 实现功能
    change(index) {
      this.ele.querySelector('.swiper-wrap').style.marginLeft = index * -this.width + 'px'
      if (this.options.isHasPagination) {
        const pagination = this.ele.querySelectorAll('.swiper-pagination span')
        for (let j = 0; j < pagination.length; j++) {
          pagination[j].classList.remove('active')
        }
        pagination[index].classList.add('active')
      }
    }
  
    // 添加左右箭头切换功能
    arrowChange() {
      const that = this
      that.ele.querySelector('.prev').onclick = function () {
        // console.log('点击了左箭头')
        that.index--
        if (that.index < 0) {
          that.index = that.slideNum - 1
        }
        that.change(that.index)
      }
      that.ele.querySelector('.next').onclick = function () {
        // console.log('点击了右箭头')
        that.index++
        if (that.index >= that.slideNum) {
          that.index = 0
        }
        that.change(that.index)
      }
    }
  }
  window.mySwiper = mySwiper
})()