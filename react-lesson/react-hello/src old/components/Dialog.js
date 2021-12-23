// children  prop 案例
// 当组件自己无法确定自己的部分内容的展示，需要父组件提供
// 此时我们就可以使用父组件传递的 children  prop 来实现
// 比如 对话框组件

import { Component } from 'react'
import './dialog.css'
export default class Dialog extends Component {
  render = () => {
    const {dialogContent, dialogFooter} = this.props
    // children prop 存储的是父组件在使用子组件的时候标签之前传递的 html 内容
    // 当内容是一个节点(react.element)的话，那么 children 指的就是这个节点
    // 当内容是多个节点(react.element)的话， children 是个数组，存储这些节点
    // 因为 react 内可以直接写 jsx 语法，所以非 children prop 也可以传递 html 标签
    // 那么当多个节点处理的时候 children 用起来就没有普通的 prop 方便了

    // 这些几点可以直接在组件内展示
    // console.log(children)
    return (
      <div className='dialog-wrap'>
        <div className='dialog'>
          <div className="dialog-header">
            <h4>对话框标题</h4>
          </div>
          <div className="dialog-content">
            {/* 内容需要父组件传递 */}
            {/* {children.find(item => item.props.className === 'header')} */}
            {dialogContent}
          </div>
          <div className="dialog-footer">
            {/* 内容需要父组件传递 */}
            {/* {children.find(item => item.props.className === 'footer')} */}
            {dialogFooter}
          </div>
        </div>
      </div>
    )
  }
}