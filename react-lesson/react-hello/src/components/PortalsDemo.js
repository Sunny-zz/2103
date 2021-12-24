// Portals 可以将子节点渲染到存在于父组件以外的dom节点
import { Component } from 'react'
import { createPortal } from 'react-dom'
// createPortal 用法  createPortal(节点：需要渲染的节点,节点: 渲染的目标节点)
export default class PortalsDemo extends Component {

  state = {
    show: true
  }

  render = () => {
    return (
      <>
        <button onClick={() => this.setState({ show: false })}>修改</button>
        {
          this.state.show ? <div className='wrap'>

            {/* 这是一个遮罩盒子，我们希望这个盒子被渲染到 body 标签内 */}
            {
              createPortal(
                <div className="mask">
                </div>,
                document.body
              )
            }
          </div> : '消失了'
        }
      </>
    )
  }
}

