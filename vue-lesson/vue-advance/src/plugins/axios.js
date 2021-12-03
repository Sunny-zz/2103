import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = '/api'

axios.interceptors.response.use((res ) => res.data)

Vue.prototype.$axios = axios

export default axios