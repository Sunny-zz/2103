import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3008'

axios.interceptors.response.use(res => res.data)

export default axios 