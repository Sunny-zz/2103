// 用户登录模块
import axios from '../../plugins/axios'
export default {
  state: () => ({
    info: null
  }),
  mutations: {
    getInfo(state, info) {
      state.info = info
    }
  },
  actions: {
    getInfo({ commit }, token) {
      // console.log('请求触发了')
      return new Promise((resolve, reject) => {
        axios.post('/accesstoken', { accesstoken: token }).then((res) => {
          commit('getInfo', res)
          localStorage.setItem('info', JSON.stringify(res))
          resolve()
        }).catch(() => {
          // console.log('出错了')
          reject()
        })
      })
    }
  }
}