// 类组件

import { Component } from 'react'
import './user.css'
export default class User extends Component {
  // class 的特殊属性 state 就相当于组件的状态  state 的值必须是一个对象
  state = {
    user: {
      username: '第嘉',
      userage: 10
    },
    count: 100,
    show: true,
    arr: [1, 2, 3, 4, 5]
  }
  // constructor(){
  //   this.state = {
  //     user: {
  //       username: '第嘉',
  //       userage: 10
  //     },
  //     count: 100
  //   }
  // }

  add = () => {
    // 修改 state 不能直接修改 需要使用 setState 方法修改 这个方法 Component 类自带的，所以所有类组件可以直接使用
    // 使用 setState 的时候传递一个对象，对象内的属性写的就是要修改的具体的 state
    // 切记不能直接修改 state
    this.setState({
      count: this.state.count + 1
    })
  }

  sub = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  change = newCount => {
    this.setState({
      count: newCount
    })
  }

  changeAge = () => {
    this.setState({
      user: { ... this.state.user, userage: 20 }
    })
    // setState 的更新是异步的
    // setTimeout(() => {
    //   console.log(this.state.user.userage)
    // }, 0);
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render = () => {
    const { userage, username } = this.state.user
    const { count, show, arr } = this.state
    // 当 render 的返回值是 null 的时候组件什么都不渲染
    return (
      <div>
        <h3>用户信息</h3>
        <p>姓名: {username}</p>
        <p>年龄: {userage}</p>
        <button onClick={this.changeAge}>修改年龄</button>
        <p>{count}</p>
        <div>
          <button onClick={this.add}>+</button>
          <button onClick={this.sub}>-</button>
          <button onClick={() => this.change(1000)}>随便改</button>
        </div>
        <button onClick={this.changeShow}>消失出现</button>
        {/* 消失出现 1. 样式的消失   2.真正消失 */}
        {/* 行内样式要写成对象 */}
        {/* <div style={{display: show ? 'block' : 'none'}} ></div> */}
        {/* <div className={`box${ show ? '' : ' hide'}`}></div> */}
        {/* {
          show ? <div className="box"></div> : ''
        } */}
        {/* 当在 html 内写 undefined  null  ''  false 的时候不会渲染任何内容 */}
        {
          show && <div className="box"></div>
        }
        <hr />
        {/* react 的 jsx 内可以直接将数组内的值渲染到页面上 */}
        {/* 列表渲染 其实就是将数组数据变成  html 数组数据， 然后直接渲染到页面 */}
        <ul>
          {
            arr.map(ele => <li key={ele}>{ele}</li>) 
          }
        </ul>
      </div>
    )
  }
}

