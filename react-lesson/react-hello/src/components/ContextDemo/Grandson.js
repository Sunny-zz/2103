
import { Consumer } from './Parent'
export default function Grandson() {
  return (
    <Consumer>
      {({themeColor, changeColor}) => <div>
        <h4 style={{ color: themeColor }}>
          我是孙子组件
        </h4>
        <button onClick={() => {changeColor('pink')}}>更新主题色</button>
      </div>}
    </Consumer>
  )
}