import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3008'
axios.defaults.timeout = 3000

// axios.interceptors.request.use(config => config)

axios.interceptors.response.use(res =>  res.data)

const request = ({url, method, params, data}) => {
  return axios({
    method,
    url,
    params,
    data
  })
}


export default request

