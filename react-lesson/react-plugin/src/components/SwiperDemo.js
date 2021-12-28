// swiper 7.0 +  插件的使用
import { Component } from 'react'
// swiper 7 中内置了 react 的使用方法
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
// 主要的 css 
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// 自己的 css
import './swiper-demo.less'
export default class SwiperDemo extends Component {
  render = () => (
    <div>
      <Swiper
        // modules 是模块，需要什么额外的模块直接写在该数组内
        // 模块的使用需要使用 modules 添加上， 然后还需要传递对应的 props，最后在引入对应的 css
        modules={[Pagination, Navigation]}
        className='swiper-demo'
        pagination={{ clickable: true }}
        loop
        navigation
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}