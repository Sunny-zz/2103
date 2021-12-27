// react 16.8 + 新增的  知识点 hook
// 用来替代 类组件内的 state 以及 生命周期的一套流程 



// import { Component } from 'react'
// export default class HookDemo1 extends Component {

//   state= {
//     num: 100
//   }

//   add = () => {
//     this.setState({
//       num: this.state.num + 1
//     })
//   }

//   sub = () => {
//     this.setState({
//       num: this.state.num - 1
//     })
//   }

//   render = () => {
//     const {num} = this.state
//     return (
//       <div>
//         <p>{num}</p>
//         <button onClick={this.add}>+</button>
//         <button onClick={this.sub}>-</button>
//       </div>
//     )
//   }
// }

// 使用 hook 就不需要创建类组件了，直接函数组件即可
// 也就是说函数组件内可以使用 state 以及生命周期了，但是需要使用 hook 语法

import { useState } from "react"
// useState 就是创建 state 用的
export default function HookDemo1() {
  // 创建了一个叫 num 的 state 初始值是 0
  // 还创建了一个 setNum 用于修改 num   
  // setNum 修改就是赋值修改传递新的值覆盖原来的
  const [num, setNum] = useState(100)

  return (
    <div>
      <div>
        <p>{num}</p>
        <button onClick={()=> setNum(num + 1)}>+</button>
        <button onClick={()=> setNum(num - 1)}>-</button>
      </div>
    </div>
  )
}
