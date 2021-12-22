## React

### 环境搭建
需要使用 create-react-app 官方脚手架，并不需要安装，因为 node>8.10  npm>5.6 ，默认就可以直接使用 create-react-app
- npx create-react-app 项目名 创建 react 项目。
- 安装好之后执行提示的命令，启动 react 项目即可。


### jsx 语法
js 内嵌入的 html 标签 就是 jsx 语法。html 标签内也可嵌入 js。 jsx 内写 js 直接使用 {} 包裹即可。 jsx 内标签的属性有几个需要特殊记忆。 1. class 写成 className   2. for 写成 htmlFor  3. 自定义属性名写成小驼峰 4. 标签内无内容写成单闭合

### 组件
- 函数组件 根据 props 展示 html 内容
- 类组件

两类组件的区别
- 有无 state 
- 有无生命周期

有了 hook 之后 函数组件内也可以使用 state 以及 生命周期

### props
props 是只读的

### 事件处理
- 基本的事件绑定语法
- 事件传参
- 事件内的 this
- 如何获取事件对象

### state
状态变页面变， 页面的变化需要 state 控制
state 的修改要使用 setState 修改， 不要直接修改 state 
setState 是异步操作

### 条件渲染
- 样式类   修改 style (行内style需要写成对象类型例如  style={{width: '100px', height: '200px', ...}} ) 或者 class
- dom 消失和出现   直接使用三目或者 && 控制需要的 dom 即可

### 列表渲染
react 的 jsx 语法内 可以直接渲染数组。列表渲染的话只需要将数组转化成标签数组即可。生成的每一个标签都需要添加一个唯一的 key 属性。

### 生命周期
- render
- componentDidMount
- componentDidUpdate
- componentWillUnmount

### 表单

### ref