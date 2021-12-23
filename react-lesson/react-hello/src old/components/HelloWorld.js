// 函数组件
// export default function HelloWorld() {
//   return (
//     <div>
//       <h2>hello world</h2>
//     </div>
//   )
// }

// class组件
import { Component } from 'react'

// 类组件需要继承 Component 类
// 组件类 内必须声明一个 render 方法
// render 方法的返回值需要返回一个 html 节点
class HelloWorld extends Component {
  // render() {
  //   return (
  //     <div>
  //       <h2>hello world</h2>
  //     </div>
  //   )
  // }
  render = () => (
    <div>
      <h2>hello world</h2>
    </div>
  )
}

export default HelloWorld

