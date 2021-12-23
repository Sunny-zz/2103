// react 的表单
import { Component, createRef } from 'react'
import Button from './Button'
export default class FormDemo extends Component {
  // react 希望将表单写成受控表单， 就是将表单内用户的输入制作成 state
  // 受控 其实就是 设置 value 以及提供修改 value 的方法绑定给 表单元素，这个修改的值要根据 事件对象获取
  state = {
    username: '123',
    address: '',
    education: '1',
    likes: ['angular', 'vue']
  }
  // 定义一个属性来存储 checkbox 真实 dom 节点，因为这个属性在类里面所有地方都可以使用
  checkbox = createRef()

  btn = createRef()
  // changeUsername = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // changeAddress = (e) => {
  //   this.setState({
  //     address: e.target.value
  //   })
  // }
  // changeEducation = (e) => {
  //   this.setState({
  //     education: e.target.value
  //   })
  // }
  changeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeLike = (e) => {
    const target = e.target
    const {likes} = this.state
    const value = target.value
    // 因为我们使用的是 setState 修改 state ，其实就相当于用一个新的 state 替换原来的
    this.setState({
      likes: target.checked ? [...likes, value] : likes.filter(item => item!==  value)
    })
  }

  submit = () => {
    // 利用了 ref 获取了 checkbox 的真实 dom， 通过真实 dom 获取了 复选框的选中和不选中
    console.log(this.checkbox.current.checked)
    console.log(this.btn.current)
  }

  render = () => {
    const { username, address, education, likes } = this.state
    return (
      <div>
        <h3>react 表单</h3>
        {/* onChange 事件是输入了就触发 并不是失去焦点 */}
        <input name='username' value={username} onChange={this.changeForm} type="text" />
        <br />
        <textarea name='address' value={address} onChange={this.changeForm} ></textarea>
        <br />
        <select name='education' value={education} onChange={this.changeForm}>
          <option value="">请选择</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <h4>你喜欢的框架有哪些？</h4>
        <label htmlFor="">vue</label>
        <input value="vue" onChange={this.changeLike} checked={likes.includes('vue')} type="checkbox" />
        <br />
        <label htmlFor="">react</label>
        <input value="react" onChange={this.changeLike} checked={likes.includes('react')} type="checkbox" />
        <br />
        <label htmlFor="">angular</label>
        <input value="angular" onChange={this.changeLike} checked={likes.includes('angular')} type="checkbox" />
        <br />
        <label htmlFor="">minipro</label>
        <input value="minipro" onChange={this.changeLike} checked={likes.includes('minipro')} type="checkbox" />
        <br />
        {/* 非受控组件 不使用 state。  初始展示效果的话，需要使用 defaultValue 或者 defaultChecked 等展示，不直接使用 value 等， 获取该元素的状态的话，使用 ref 获取 */}
        <input type="checkbox" ref={this.checkbox} defaultChecked={true} /><label htmlFor="">是否同意</label>

        <button onClick={this.submit}>提交</button>
        <Button ref={this.btn} text='按钮的组件提交' />
      </div>
    )
  }
}






