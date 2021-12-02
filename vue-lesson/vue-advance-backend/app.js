// 导入 express
const express = require('express')
// const bodyParser = require('body-parser')
// 创建一个空的服务器
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 有菜单权限就可以访问对应页面， 没有的话页面就不能访问(没有这个页面)

// 树形数组
// const arr = [
//   {
//     pid: -1, name: '购物车', id: 1, auth: 'cart', children: [
//       {
//         pid: 1, name: '购物车列表', id: 4, auth: 'cart-list', children: [
//           { pid: 4, name: '彩票', id: 5, auth: 'lottery' },
//           { pid: 4, name: '商品', id: 6, auth: 'product' },
//         ]
//       },
//     ]
//   },
//   { pid: -1, name: '商店', id: 2, auth: 'shop' },
//   { pid: -1, name: '个人中心', id: 3, auth: 'store' },
// ]
// 扁平化数组
const menus = [
  { pid: -1, name: '购物车', id: 1, auth: 'cart' },
  { pid: 1, name: '购物车列表', id: 4, auth: 'cartlist' },
  { pid: 4, name: '彩票', id: 5, auth: 'lottery' },
  { pid: 4, name: '商品', id: 6, auth: 'product' },
  { pid: -1, name: '商店', id: 2, auth: 'shop' },
  { pid: -1, name: '个人中心', id: 3, auth: 'store' },
];
//#region 
//  cors 策略
// 跨域   协议 域名 端口号
// 如何解决跨域问题
// 1. 后端服务器设置响应头， 允许跨域
// 2. 使用代理  前端服务器的代理   
//    开发的时候使用的 vuecli 的话，可以借助 vuecli 的代理服务解决跨域问题 (本质其实就是利用 webpackServe 的 代理实现的)
// 3. 等等
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });
//#endregion
// 路由功能   请求接口
//方法 post  地址localhost:3008/authmenu   参数token: string     返回值menus 数组
app.post('/authmenu', function (req, res) {
  console.log(req.body)
  const {token} = req.body
  if(token === 'normal'){
    res.send(menus.slice(0,4))
  }else if (token === 'vip'){
    res.send(menus)
  }
})

// 将服务器启动在本地的 3008 端口
app.listen(3008, function () {
  console.log('服务器启动在了 3008 端口')
})


