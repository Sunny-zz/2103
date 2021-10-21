// ajax
// Asynchronous JavaScript and XML  简写成 ajax
// 不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容的艺术

// 1. 原生 ajax
// 2. jquery 的
// 3. 高级原生 ajax
// 4. axios

// 原生 ajax
// 1. 创建 XMLHttpRequest 对象
// const xhr = new XMLHttpRequest()
// 2. 使用 open 方法创建 ajax 请求
// open('请求类型', '请求地址', 请求是否异步(默认 true 就是异步的  必须异步))
// 请求类型有 GET  POST  PUT  PATCH  DELETE 等，到底用哪个后台说了算，一般来说取数据(比如商品列表)使用 GET, 传递数据(比如登录，评论) 使用 POST 
// 请求地址就是 url 地址，后端提供的某个数据的接口地址
// 向后端请求用户列表信息
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

// 3. 使用 send 方法将创建好的请求发出
// 如果请求需要传递数据 就需要给 send 方法传参
// xhr.send()

// 4. onreadystatechange 监听整个请求的过程
// readyState 状态
// 0: 请求未初始化
// 1: 服务器连接已建立
// 2: 请求已接收
// 3: 请求处理中
// 4: 请求已完成，且响应已就绪

// status  HTTP 状态码
// responseText 响应的数据(后台返回的数据), 是 json 字符串
// 目前前后台数据交互的数据类型其实基本上都是 json 类型，也就是说，前端向后台传递数据用 json，后台给前端返回数据用 json
// json 字符串如何转化成对象类型  JSON.parse(json字符串)
// 如何将对象转化成 json 字符串, JSON.stringify(对象)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const users = JSON.parse(xhr.responseText)
//     console.log(users)
//     users.forEach(ele => {
//       // 创建 li 里面写上用户的  username
//       const li = document.createElement('li') 
//       li.innerHTML = ele.username 
//       document.querySelector('ul.list').appendChild(li)
//     })
//   }
// }


// console.log(11111)

// 发送一个登录的请求， 需要向后台传递登录的数据
// post 方法    https://cnodejs.org/api/v1/accesstoken   传递参数  accesstoken  值是 String(用户的 accessToken)

// const xhr = new XMLHttpRequest()
// xhr.open('POST', 'https://cnodejs.org/api/v1/accesstoken', true)
// 传递数据一般使用对象，然后转化成 json 再传递  比如这个  post 请求传递的参数 应该写成   {accesstoken: 值}

// 使用 setRequestHeader 设置请求传递过去的内容的数据类型
// xhr.setRequestHeader('Content-type','application/json')
// xhr.send(JSON.stringify({ accesstoken: '7c14e817-2163-42c1-bb48-a4d09d76eece' }))
// 默认 原生的 ajax 想要使用 json 数据传递给后台，是不可以的，需要设置请求的请求头

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const res = JSON.parse(xhr.responseText)
//     console.log(res)
//   }
// }

// 带参数的 get 请求
// const xhr2 = new XMLHttpRequest()
// 当 get 请求需要传递参数的时候可以直接向参数写在地址上。当成地址的查询部分
// xhr2.open('GET','https://cnodejs.org/api/v1/topics?tab=ask&page=1&limit=20',true)
// xhr2.send()
// xhr2.onreadystatechange = function () {
//   if (xhr2.readyState === 4 && xhr2.status === 200) {
//     const res = JSON.parse(xhr2.responseText)
//     console.log(res)
//   }
// }

// jquery 的 ajax

// 1. $.ajax({请求的配置})

// $.ajax({
//   // 请求地址
//   url: 'https://cnodejs.org/api/v1/topics?tab=ask&page=1&limit=20',
//   // url: 'https://cnodejs.org/api/v1/topics',
//   // 请求类型 默认是 GET
//   type: 'GET',
//   // 向后台传递的数据 值写成对象类型，无需写成 json( jquery 自动帮忙转换了 )
//   // 这个 data 当 get 请求需要传递参数的时候偶尔也可以使用 data 传递
//   // data: {
//   //   tab: 'ask',
//   //   page: 1,
//   //   limit: 20
//   // },

//   // 请求成功的回调函数，请求成功之后会自动执行
//   // 这个函数有个默认参数，这个参数就是请求返回结果, 这个结果是 对象类型 (jquey 自动帮忙解析了 json 串)
//   success(res){
//     console.log(res)
//   },
//   // 请求失败的回调函数,请求失败之后会自动执行
//   // err 是错误信息
//   error(err){
//     console.log(err)
//   },
//   // 发送给后台的数据类型设置   一般不用设置，我们传递数据使用对象即可
//   // contentType:
// })

// $.ajax({
//   url: 'https://cnodejs.org/api/v1/accesstoken',
//   type:'POST',
//   data: {
//     accesstoken: '7c14e817-2163-42c1-bb48-a4d09d76eece'
//   },
//   success(res){
//     console.log(res)
//   }
// })
// $.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken: '7c14e817-2163-42c1-bb48-a4d09d76eece'}, function(res){
//   console.log(res)
// })

// $.post({
//   url: 'https://cnodejs.org/api/v1/accesstoken',
//   data: {
//     accesstoken: '7c14e817-2163-42c1-bb48-a4d09d76eece'
//   },
//   success(res){
//     console.log(res)
//   }
// })

// axios 
// then 是成功
// catch 是失败
// axios.get('https://cnodejs.org/api/v1/topics?tab=ask&page=1&limit=20').then((res)=> {
//   // res 其实是 axios 封装置后的返回值 也就是将后台返回的数据进行了 封装， res.data 才是真正后台返回的数据
//   console.log(res.data)
// }).catch((err)=>{
//   console.log(err)
// })
// axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: '7c14e817-2163-42c1-bb48-a4d09d76eece'}).then((res) => {
//   console.log(res.data)
// }).catch((err)=>{
//   console.log(err)
// })

// 原生的 fetch
// fenth 方法传递两个参数
// 第一个 url 请求地址
// 第二个 配置项 {}
// 获取请求回来的结果， 使用 then 方法传递一个函数，该函数默认接受一个参数，并且在函数内返回这个 参数.json(), 然后在写一个 then 方法 这个方法内的函数的参数就是后台返回的数据了
// fetch('https://cnodejs.org/api/v1/topics?tab=ask&page=1&limit=20', {
//   method: 'GET'
// }).then((response)=> {
//   return response.json()
// }).then((res)=> {
//   console.log(res)
// })
// http://localhost:5000/  
// fetch('https://cnodejs.org/api/v1/accesstoken', {
//   method: 'POST',
//   body: JSON.stringify({accesstoken: '7c14e817-2163-42c1-bb48-a4d09d76eece'}),
//   headers: {
//     'content-type': 'application/json'
//   }
// }).then((response)=> {
//   return response.json()
// }).then((res)=> {
//   console.log(res)
// })

// 请求的跨域问题
// cors 跨域资源共享
// 浏览器的同源策略  但是支持跨域请求  如果出现跨域请求 需要对服务器处理
// 同源url    协议  域名(主机)  端口号 
// 有些时候浏览器默认支持本地跨域 两个本地的url发生请求的时候 
// 还有后台数据库已经处理完了跨域，前端随意请求

// 浏览器中出现  Cross-origin  同源策略问题


// 1 ---> 2 ---> 
// a ---> 3 
// b ---> 4

// 回调地狱
// const xhr = new XMLHttpRequest()
// xhr.open('xxx1')
// xhr.send()
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(JSON.parse(xhr.responseText))

//     const xhr1 = new XMLHttpRequest()
//     xhr1.open('xxx1')
//     xhr1.send()
//     xhr1.onreadystatechange = function(){

//     }
//   }
// }

// $.ajax({
//   url: 'xxx',
//   success(res){
//     if(res){
//       $.ajax({
//         success(){

//         }
//       })
//     }
//   }
// })

// axios.get('xxx').then(res => {
//   return 
// }).then().then().then()


