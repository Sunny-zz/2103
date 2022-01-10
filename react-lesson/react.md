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


### Hook
一种在函数组件内替代类组件内的 state 生命周期等的技术。

#### useState 的基本使用
在函数组件内创建 state 以及修改的方法
- 导入 useState 从 react 包中  `import { useState } from 'react'`
- 使用 useState 创建 state 并赋值初始值 以及修改的方法。`const [num, setNum] = useState(100)`

#### useEffect 
相当于类组件内的生命周期(componentDidMount 、 componentDidUpdate 、componentWillUnmount )
useEffect 需要传递两个参数
- 第一个参数是函数，相当于 componentDidMount 、 componentDidUpdate。这个函数也可以设置返回值，返回值也是一个函数，返回值函数在数据更新的时候会优先于函数函数触发，返回值函数在组件卸载的时候也会触发。
  ***注意在第一个参数函数内如果使用了异步函数(setTimeout setInterval Promise 等会导致闭包，也就是内部使用的 state 可能一直是初始值，并不会发生改变)***
- 第二个参数是数组，该参数的作用是优化 effect 函数的执行。当数组是空数组的时候, effect 函数只会初始触一次。当数组不为空，那么数组内的数据变化的时候 effect 函数才会触发。

#### useRef
- 获取真实 dom 节点
- 可以在函数组件中创建一个全局变量(创建好的 ref 对象在组件的整个生命周期内保持不变)，可以利用 useRef 来解决 effect 函数中的闭包问题

#### useContext 
就是简化了 Consumer 组件获取 context 。
用法:
const value = useContext(context)

#### useMemo
可以优化在函数组件内的函数的触发。比如计算属性的计算在需要的时候计算..
用法: 
```js
  // z 函数是一个计算过程
  function z(){ 
    // 一顿操作
    return x
  }

  const res = useMemo(z, [计算使用的数据])
  // z 是计算函数  数组内的是依赖的数据项，res 获取的是 z 函数的返回值
  // 只有当依赖的数据发生改变的时候才会计算
```

#### 自定义 Hook
就是将 hook 的逻辑封装到一个函数中，这个函数就被称为自定义 hook 函数。
当多个组件需要用到同一种 hook 逻辑时,需要将 hook 逻辑分离成自定义 hook 然后在其他组件导入使用。



### redux
独立的状态管理工具。在 react 中使用的话，还需要借助 react-redux (或者 Redux Toolkit) 使用。
- 安装  npm i redux react-redux 
- 创建 createStore(reducer)
  - createStore 方法
  - reducer 函数 (初始化 store 以及 添加修改数据的行为 )
- 使用 需要使用 react-redux 
  - 先用 Provider 提供 store 给 App 组件
  - 在组件中使用 connect 或者 useSelector 动态获取 store 数据
  - 修改的话，需要使用 store.dispatch 发对应的 action 或者使用使用 useDispatch 获取 dispatch 来发 action

#### 不可变性
Redux 期望所有状态更新都是使用不可变的方式