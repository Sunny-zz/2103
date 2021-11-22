// 封装 axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3008'
axios.defaults.timeout = 2000

// axios.interceptors.request(config => config)

axios.interceptors.response.use(res => res.data)

export default axios 