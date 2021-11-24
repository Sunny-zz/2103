// 封装 axios
import axios from 'axios'

// 请求基地址
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// 请求超时时间
axios.defaults.timeout = 3000
// 请求的响应拦截器
axios.interceptors.response.use((res) => res.data)

// 取消请求

export default axios 