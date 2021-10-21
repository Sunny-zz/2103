// 第三方模块 jquery 的导入
// var $ = require('jquery')
// $('.change_color').click(function () {
//   $('.box').css('background-color', 'red')
// })

// 导入自定义模块 index
// 模块后缀是 js 可以省略
// 模块导入相当于执行整个模块然后将导出的内容获取到
var x = require('./index')
console.log(x)