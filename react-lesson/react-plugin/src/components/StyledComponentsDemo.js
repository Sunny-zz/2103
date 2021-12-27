// styled-components 练习
import { Component } from 'react'
import styled from 'styled-components'

// styled-components 用法
// 其实就是创建一个带样式的标签  如下就是创建了一个 H3 变量，是 h3 标签，带了颜色的样式
// 也相当于创建了一个标签组件 可以接受 props
const H3 = styled.h3`
  color: ${ props => props.color };
  width: 200px;
`

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  outline: none;
  border: none;
`

const LoginButton = styled(Button)`
  background-color: rgb(11, 238, 105);
`

const SignupButton = styled(Button)`
  background-color: rgb(50, 144, 233);
`
export default class StyledComponentsDemo extends Component {
  fun = () => {
    console.log(111)
  }
  render = () => (
    <div>
      <H3 color='green' onClick={this.fun}>hello styled-components</H3>
      <LoginButton>登录</LoginButton>
      <SignupButton>注册</SignupButton>
    </div>
  )
}