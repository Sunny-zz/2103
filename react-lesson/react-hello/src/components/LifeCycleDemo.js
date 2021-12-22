// 生命周期 
import { Component } from 'react'

export default class LifeCycleDemo extends Component {
  state = {
    count: 100
  }

  constructor() {
    super()
    // console.log('我是生命周期 constructor')
  }
  // static 声明的方法是 类的私有方法，只能在类内使用， 类的实例无法调用
  static getDerivedStateFromProps() {
    // console.log('我是生命周期 getDerivedStateFromProps')
    return null
  }
  // 组件的生命周期  生命周期函数不写成 箭头函数 也能使用 this
  // 挂载  初始的渲染阶段  执行顺序 从上到下
  // constructor()  类的初始化， 1. 初始化 state  2. 为事件处理函数绑定实例 （es6 的箭头函数事件无需绑定实例）
  // static getDerivedStateFromProps()   用的很少
  // render()  必须返回页面内容 
  // componentDidMount() 页面挂在完毕， 组件的 html 渲染了页面上. 可以修改 state，也就是说可以发送请求获取数据修改 state

  // 更新 当组件的 state 或者 props 发生改变的时候就会触发组件的更新
  // static getDerivedStateFromProps()  用的很少
  // shouldComponentUpdate() 在更新的时候可以使用该函数阻止更新， 该函数接收两个参数 第一个是新的 props 第二个是 新的 state
  // render()
  // getSnapshotBeforeUpdate()  用的很少
  // componentDidUpdate() 组件更新 state 或者 props 完毕， 页面渲染更新 完毕。 在这个函数内也可以修改 state 但是必须写一个条件句去修改。否则会无限循环
  // 卸载
  // 错误处理*

  shouldComponentUpdate(){
    // console.log('我是生命周期 shouldComponentUpdate')
    return true
  }
  render = () => {
    const { count } = this.state
    // console.log('我是生命周期 render')
    return (
      <div>
        <p className='count'>{count}</p>
      </div>
    )
  }
  componentDidMount() {
    // console.log('我是生命周期 componentDidMount')
    setTimeout(() => {
      this.setState({
        count: 1000
      })
    }, 1000)
  }
  componentDidUpdate(){
    // console.log('我是生命周期 componentDidUpdate')
  }
  componentWillUnmount(){
    // console.log('我是生命周期 componentWillUnmount')
  }
}
