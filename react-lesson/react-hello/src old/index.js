import React from 'react';
// React 支持 jsx 语法
import ReactDOM from 'react-dom';
// ReactDom react 的虚拟 dom 包 用来解析 虚拟 dom 转化成真实 dom 挂载到 #root
import './index.css';

import App from './App';
// 组件 App

// import reportWebVitals from './reportWebVitals';

// 渲染 App 组件到 root

// <App /> 其实是一个 html 标签,  jsx 语法
ReactDOM.render(
  // React.StrictMode  react 的严格模式组件，禁止使用 一些过时的 api 等
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// 环境安装  create-react-app 
// react 版本 17.0.2
// 单页面应用     虚拟 dom 
// React  jsx 语法          ReactDom  渲染
// 组件  
// 函数组件   一个函数返回 html 节点并导出
// 类组件  一个类继承 React.Component 类， 这个类里面必须定义一个 render 方法 返回一个 html 节点

// props  组件复用的时候， 组件之间的交互，父组件给子组件传递的数据
// 函数组件  函数组件的参数就是父组件传递的 props 对象
// 类组件 组件实例(this) 下的 props 属性就是父组件传递的 props 对象
// props 是只读的 不能修改

// 样式   额外的 css 文件 
