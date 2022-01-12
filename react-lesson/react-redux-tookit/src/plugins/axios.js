import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:4523/mock/562559'

axios.interceptors.response.use(res => res.data)

export default axios 