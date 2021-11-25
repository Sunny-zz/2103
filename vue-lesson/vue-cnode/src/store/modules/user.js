import axios from '../../plugins/axios'
export default {
  state: () => ({
    user: null
  }),
  mutations: {
    getUser(state, user){
      state.user = user
    }
  },
  actions: {
    async getUser({commit}, loginname){
      const user = await axios.get(`/user/${loginname}`)
      // console.log(user)
      commit('getUser', user.data)
    }
  }
}