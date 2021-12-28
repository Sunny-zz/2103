// echarts 练习
import { Component } from 'react'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
// import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

import './echarts-demo.less'

import axios from 'axios'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);
export default class EchartsDemo extends Component {
  state = {
    goods: []
  }

  myChart = null

  add = async () => {
    const res = await axios.post('http://localhost:3008/goods', { name: '外套', sales: 30 })
    // console.log(res.data)
    this.setState({
      goods: [...this.state.goods, res.data]
    })
    // 因为 echarts 是属于 原生 dom 插件，所以数据更新的时候，图表并不会更新，需要手动更新
    // echarts 更新直接重新执行 setOption 将需要修改的配置重新配置即可
    this.myChart.setOption({
      xAxis: {
        data: this.goodsName
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: this.goodsSales
        }
      ]
    })
  }

  render = () => (
    <>
      <button onClick={this.add}>新增一项商品</button>
      <div id='main'></div>
    </>

  )


  // 相当于计算属性 
  get goodsName() {
    const { goods } = this.state
    return goods.map(ele => ele.name)
  }
  // set goodsName(value){
  //   console.log('goodsName 计算属性发生了改变' + value)
  // }
  get goodsSales() {
    const { goods } = this.state
    return goods.map(ele => ele.sales)
  }

  // 在 react 的类组件中，类的某个方法内做的 state 的计算是属于 局部作用域下的其他的方法内无法访问
  // react 类组件中可以使用 get 和 set 来处理计算属性的事 就跟 vue 的一样
  async componentDidMount() {
    // 发送请求获取数据更新 state
    const res = await axios.get('http://localhost:3008/goods')
    // setState 处于异步函数 内那么 setState 的更新是同步的
    this.setState({
      goods: res.data
    })
    // console.log(this.state.goods)
    // 需要在页面上已经有了 main 之后才能初始化 echarts
    this.myChart = echarts.init(document.getElementById('main'));
    this.myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: this.goodsName
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: this.goodsSales
        }
      ]
    });
  }

}
