// 这个 js 文件 处理的是 axios 请求封装
// 当我们开发的时候，会发很多的请求，往往这写请求都有一些共同的部分
// 比如请求的基地址 
// 比如请求头的设置
// 比如管理系统项目请求，一般都需要提供身份认证
import axios from 'axios'
import Vue from 'vue';

// 创建一个新的 axios 请求实例
// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });

// export default  instance

// 直接修改 axios 的默认配置  defaults
// 基地址 baseURL
axios.defaults.baseURL = 'http://localhost:3008';

// 设置请求头填一个 token 字段
// axios.defaults.headers.common.token = "7y7y8u7y7y8u1312"

// 请求拦截器
// 当请求发出的时候请求拦截器被触发
axios.interceptors.request.use((config) => {
  // config 指的是请求的配置
  // console.log(config)
  // 请求拦截去需要 return 配置，请求才能继续发出
  // 所以在这里可以修改请求的  请求头(requestHeader)配置
  // 7y7y8u7y7y8u1312 这个是用户自己的身份认证
  config.headers.token = "7y7y8u7y7y8u1312"
  // 加了这个 token 后 后端接收请求的时候就会受到请求头附带 token 字段，那么就可以知道该用户是什么身份，应该返回什么数据
  // 当然这个配置也可以直接使用 axios.defaults 设置
  return config
})


// 请求的结果一般 axios 都会将后端的数据添加到自己制作的对象下的 data 内 ，也就是说后台的返回数据在 res.data 内
// 每次使用 res.data 获取 比较麻烦， 我们可以利用 axios 的响应拦截器，来控制请求返回的响应数据


// 响应拦截器
// 所有的请求返回数据的时候都会触发这个拦截器
axios.interceptors.response.use((response) => {
  // response 就是 axios 请求的结果
  // 我们可以在这里重新 return 替换请求的结果
  return response.data
})


// 直接将 配置好的 axios 制作成 Vue 的全局插件
Vue.prototype.$axios = axios

