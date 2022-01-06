import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.timeout = 3000

axios.interceptors.response.use(res => res.data)
axios.interceptors.request.use(config => {
  // config 就是请求头的设置
  return config 
})
const request = ({ method, url, data, params }) => axios({ method, url, data, params })

export default request
