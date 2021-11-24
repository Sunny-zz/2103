import axios from "../../plugins/axios"

// vuex 文章列表模块
export default {
  state: () => ({
    list: []
  }),
  mutations: {
    getPosts(state, list) {
      state.list = list
    }
  },
  actions: {
    // 获取不同类别文章列表数据
    async getPosts({commit} , tab){
      const list = await axios.get(`/topics?tab=${tab}`)
      // console.log(list.data)
      commit('getPosts',list.data)
    }
  }
}