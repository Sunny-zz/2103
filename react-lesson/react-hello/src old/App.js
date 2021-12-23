// .js 就可以当作一个组件
// 组件分类   
// 1.函数组件   
// 2.类class组件

// 函数组件
// 一个函数返回一个 html 节点 然后导出
// 只能返回一个根节点
// 可以借助 Fragments 实现多个子节点  就是空标签  不会渲染任何的标签   空标签是简写  React.Fragment  Fragment
// 

import logo from './logo.svg'
import './App.css'
// import React from 'react'
// react 17 之后组件内不需要额外的引入 React 用于支持 jsx 语法


// 图片的处理 在 js 文件内   1. 网络地址  2. 本地图片的话需要 import 再使用
// 组件的样式不做特殊处理的话 依然是全局样式

import HelloWorld from './components/HelloWorld';
import Button from './components/Button';
import User from './components/User';
import FormDemo from './components/FormDemo';
import Article from './components/Demo1/Article';
import Dialog from './components/Dialog';
import FilterableProductTable from './components/Demo2/FilterableProductTable';



function App() {

  // 登录事件
  function login() {
    console.log('登录')
  }
  // 注册事件
  function signup() {
    console.log('注册')
  }

  const dialogContent = <>
    <input type="text" />
    <br />
    <input type="text" />
  </>

  const dialogFooter = <>
    <button>确定按钮</button>
  </>

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          {/* 事件绑定 */}
          {/* onClick 必须赋值一个函数不能是函数调用 */}
          {/* <button onClick={login}>事件绑定测试1</button> */}
          {/* 事件传参 */}
          {/* 不能将 login 当成事件函数了, 写一个新的函数函数内执行 login 并传递参数， 新的函数是事件函数 */}
          {/* <button onClick={(e)=> {
            login('哈哈哈', e)
          }}>事件绑定测试2</button> */}
          <HelloWorld />
          {/* 组件的复用 希望按钮内的文字根据父级的使用产生变化 */}
          {/* props  组件复用的时候父组件给子组件传递数据 */}
          <Button text='登录' clickFun={login} />
          <Button text='注册' clickFun={signup} />
          <hr />
          <User />
          <hr />
          <FormDemo />
          <hr />
          <Article />
          <hr />
          {/* <Dialog dialogContent={dialogContent} dialogFooter={dialogFooter}></Dialog> */}
          <hr />
          <FilterableProductTable />
        </main>
      </div>
    </>
  );
}

export default App;

