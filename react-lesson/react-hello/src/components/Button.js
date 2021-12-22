import { Component } from 'react'

export default class Button extends Component {

  // 类内创建的公共方法就可以当做函数使用，比如事件函数

  // 非生命周期函数(render 等)内想要使用 this 的话需要创建成箭头函数
  handleClick = () => {
    // console.log('我是按钮的点击事件')
    // console.log(this.props)
    this.props.clickFun()
    // handleClick 作为事件函数可以获取事件对象
    // 该事件对象经过了 react 包装，用法跟之前的一样
    // console.log(e)
  }

  render = () => {
    // render 函数默认会触发
    // 组件的 this 上会接收父组件传递的 props
    const {text} = this.props
    return (
      <button onClick={this.handleClick}>{text}</button>
    )
  }
}

// export default function Button(props) {
//   // 函数组件的函数内默认接受一个参数叫 props
//   // 参数 props 内存储的就是父组件传递的 props 对象
//   console.log(props)
//   const {text} = props
//   return (
//     <button>{text}</button>
//   )
// }
