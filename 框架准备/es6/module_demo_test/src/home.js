// 一般第三方node 包，都存在默认导出
// 所以在 es6 模块语法中使用 node 的第三方包的时候直接使用默认导入即可，路径直接写包名，不需要写路径
import $ from 'jquery'

const username = '第嘉'
console.log(username)

$('.box').css('background-color', 'red')


// ES6 模块与 CommonJS 模块(node 模块) 区别
// 1. CommonJS 模块导出的是一个值的拷贝，ES6 模块输出的是值的引用。换句话说后者会实时的获取到新数据
// 2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
// CommonJS 模块在 module.exports 执行的时候(reqiuire 的时候 )模块才完成，es6 模块 模块创建完了，无需 import 接口就设置完了
// 3. CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。

// 什么是同步和异步