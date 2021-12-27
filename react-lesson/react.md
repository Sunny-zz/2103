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
setState何时同步何时异步？
由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 。
React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval/async await等。

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
受控 
非受控

### ref
获取真实 dom 节点，主要使用 react 自带的 createRef 方法来获取

ref 也可以在组件身上使用，用来获取组件本身
```jsx
x = createRef()
<Dialog ref={x}></Dialog>
```

### 特殊的 prop children 
当父组件传递的内容写在了子组件双标签之间的话，那么子组件或使用 children prop 来接收
```jsx

```
### 状态提升
组件之间的交互

### propTypes 类型检查
主要借助 prop-types 这个包来实现类型检查。
```jsx

class x extends Component{

}

x.propTypes = {
  a: PropTypes.string
}

x.defaultProps = {
  a: 'hello'
}

```


### 插件(第三方库的使用)

#### 样式类(less  sass  stylus  styled-components)
- sass   react 官方脚手架内置了 sass 功能，只需要下载包就能使用。执行 `npm i sass-loader node-sass`

- less   react 官方脚手架并没有内置 less 所以需要我们使用 webpack 的配置给脚手架新增 less 功能
  - 使用官方提供的 eject 命令暴露配置文件，在配置文件中修改配置 `npm run eject`
  - 安装 less  `npm i less less-loader`
  - 找到 webpack.config.js 配置文件

- styled-components 并不需要修改 配置直接使用即可  `npm i styled-components`

#### 原生 dom 插件 
swiper 3 4 5 6   jquery   echarts 等...  

#### react 组件类插件
swiper 7

#### 工具类插件
axios  lodash 