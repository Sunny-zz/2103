import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.timeout = 3000

axios.interceptors.response.use(res => res.data)

const request = ({ method, url, data, params }) => axios({ method, url, data, params })

export default request
