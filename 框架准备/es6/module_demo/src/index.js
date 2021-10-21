// CommonJS规范
// const x = require('./about')
// console.log(x)


// es6 模块

// ES6 的模块内自动采用严格模式

// 整个  js 进入严格模式
// "use strict";

// function x (){
//   console.log(this)
// }
// x()

// es6 模块的两个命令 export导出  import导入
// 模块拥有单独作用域，其他模块想要使用某个模块的数据，需要先 export 然后 import 使用


// import 导入方式
// 1. 命名导入   对应命名导出
// 命名导入就类似一个对象解构赋值的过程
// 那么名字就不能改变，但是我们可以导入之后换名
// 比如将 num 换成 number  num as number
// num 就不能使用了
// import {num as number, str, bool, username} from './about'

// 将整个导出的对象导入，并重命名成 obj
import * as obj from './about'

// const {num} =  {num: num, str: str, bool: bool}

// console.log(number)
// console.log(str)
// console.log(bool)
// console.log(username)
// setTimeout(() => {
//   console.log(username)
// }, 2000)

console.log(obj.num)
console.log(obj.str)
console.log(obj.bool)
console.log(obj.username)
setTimeout(() => {
  console.log(obj.username)
}, 2000)