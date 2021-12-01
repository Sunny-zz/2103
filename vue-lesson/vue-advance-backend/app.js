// 导入 express
const express = require('express')

// 创建一个空的服务器
const app = express()


const menus = [
  { pid: -1, name: '购物车', id: 1, auth: 'cart' },
  { pid: 1, name: '购物车列表', id: 4, auth: 'cart-list' },
  { pid: 4, name: '彩票', id: 5, auth: 'lottery' },
  { pid: 4, name: '商品', id: 6, auth: 'product' },
  { pid: -1, name: '商店', id: 2, auth: 'shop' },
  { pid: -1, name: '个人中心', id: 3, auth: 'store' },
];
// 路由功能   请求接口
//  cors 策略
// 跨域   协议 域名 端口号

// 如何解决跨域问题
// 1. 后端服务器设置请求头， 允许跨域
// 2. 使用代理
// 3. 等等
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// get  localhost:3008/authmenu   menus 数组
app.get('/authmenu', function (req, res) {
  res.send(menus)
})

// 将服务器启动在本地的 3008 端口
app.listen(3008, function () {
  console.log('服务器启动在了 3008 端口')
})