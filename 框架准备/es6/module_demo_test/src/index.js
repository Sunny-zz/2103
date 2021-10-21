// es6 模块
// export导出      import导入
// const x = require('./about')
// console.log(x)

// import 导入
// 导入的方式

// 1. 命名导入    对应的是命名导出

// import {x, b as m} from './about'
// 导入的时候其实相当于对象的解构赋值
// const {name , age} = {name: 'xxx', age: 10}

// console.log(x)
// console.log(m)

import * as obj from './about'
// 将导出的整个对象导入
console.log(obj)
console.log(obj.x)
console.log(obj.b)
console.log(obj.c)
console.log(obj.default)
setTimeout(() => {
  console.log(obj.c)
}, 2000)
// 一般来说 import 要写在 js 文件的顶端
// 下面的写法不推荐
// import {x} from './about'
// console.log(x)

// 2. 默认导入  对应默认导出
// 正常是写在 import 一起的(但是为了授课笔记写到了下面)
// 使用任意的名导入 但是不要加 花括号
// import hhh from './about'

// console.log(hhh)

// 命名导入和默认导入一起写
// import n, { b } from './about'
// console.log(n)
// console.log(b)


// 3. import 方法  import()
// 当我在条件句中想要引入某个模块，使用 import 报错
// 还有其他语句中直接使用 import 引入报错

const age = 20

if(age > 10){
  // import() 返回的是一个 Promise 
  // Promise 下有一个 then 方法
  // then 方法需要接收一个函数作为参数
  // 这个函数内的默认参数就是模块内导出的对象
  import('./about.js').then(function(res){
    console.log(res.c)
  })
}
// 按需加载

// 直接导入 home.js 让其运行
import './home'

