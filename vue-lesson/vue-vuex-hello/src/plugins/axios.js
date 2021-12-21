// 封装 axios
import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'http://localhost:3008/'

axios.interceptors.request.use(config => {
 
  config.headers.Authorization = 'token字符串'
})

axios.interceptors.response.use(res =>  res.data)

Vue.prototype.$axios = axios
export default axios