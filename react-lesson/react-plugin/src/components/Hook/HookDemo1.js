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

import { useState, useEffect } from "react"
// useState 就是创建 state 用的
// 函数组件 函数本身其实就相当于 render 生命周期
export default function HookDemo1() {
  // 创建了一个叫 num 的 state 初始值是 0
  // 还创建了一个 setNum 用于修改 num   
  // setNum 修改就是赋值修改传递新的值覆盖原来的
  const [num, setNum] = useState(100)
  const [show, setShow] = useState(true)
  // 使用生命周期获取新的 num 更新
  // useEffect 可以当做生命周期钩子，而且他表示的是 初始化时以及更新时

  // useEffect 内使用 setInterval  需要每次更新的时候销毁 setInterval 并生成新的 setInterval，就是每次更新的时候 setInterval 只执行一次，然后会生成新的 setInterval

  // 当 useEffect 内使用了 useEcffect 函数外的变量时会出问题
  // useEffect(() => {
  //   // console.log('useEffect 的参数函数触发')
  //   const timer = setInterval(() => {
  //     // console.log('setInterval 触发了')
  //     setNum(num + 1)
  //   }, 500)
  //   return () => {
  //     if(timer){
  //       // 清除上一次的 timer 
  //       clearInterval(timer)
  //     }
  //   }
  // })
  // 无论修改组件内的哪一个 state  useEffect 都会触发
  // 给 useEffect 传递第二个参数 参数为数组, 会控制该 useEffect 的触发
  // 只有当 数组内的数据发生改变的时候才会触发
  // 数组内的数据并不一定写成 state
  // 当数组写成空数组的时候 useEffect 只会初始化话时候执行
  // 如果使用了 useEffect 的第二个参数的话,那么一定要确保数组内包含 所有外部作用域中会随时间变化并且在 effect 中使用的变量
  useEffect(() => {
    // console.log('num 更新了')
    // const timer = setTimeout(() => {
    //   console.log('修改 num')
    //   setNum(num + 1)
    // }, 1500)
    // return () => {
    //   if (timer) {
    //     clearTimeout(timer)
    //   }
    // }
  }, [num])

  useEffect(() => {
    // console.log('show 更新了')
  }, [])

  return (
    <div>
      <div>
        <p className="num">{num}</p>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
        <button onClick={() => setShow(!show)}>出现消失</button>
        {show && <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F36zhen-10049121.cos.myqcloud.com%2F36_website%2F1504852752617.png&refer=http%3A%2F%2F36zhen-10049121.cos.myqcloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643252127&t=80c511a8c24d1e795ad693c860380778" alt="" />}
      </div>
    </div>
  )
}
