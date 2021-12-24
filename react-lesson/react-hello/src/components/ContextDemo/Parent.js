import { Component, createContext } from 'react'
import Son from './Son'
// 根据  createContext 创建一个 context 上下文数据，并赋值初始值
// 创建好的 context 内有两个组件  Provider 提供者, Consumer 消费者
export const {Provider, Consumer} = createContext('#00b3d4');

export default class Parent extends Component {
  state = {
    themeColor: 'blue'
  }
  changeColor = (color) => {
    this.setState({
      themeColor: color
    })
  }
  render = () => {
    const {themeColor} = this.state
    return (
      <div>
        <h2 style={{color: themeColor}}>我是父组件</h2>
        <Provider value={{themeColor, changeColor: this.changeColor}}>
          {/* 利用 Provider 组件将 value 的值传递给 son 组件以及后代组件 */}
          <Son />
        </Provider>
      </div>
    )
  }
}