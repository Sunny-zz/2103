import Grandson from "./Grandson";
import { Consumer } from './Parent'
export default function Son() {
  return (
    // Consumer 是消费者， 给 Consumer 组件传递 函数 Children ，那么该函数的参数就是  Provider 提供的 value， 该函数返回 节点
    <Consumer>
      {({themeColor}) => <div>
        <h3 style={{ color: themeColor }}>
          我是子组件
        </h3>
        <Grandson />
      </div>}
    </Consumer>
  )
}
