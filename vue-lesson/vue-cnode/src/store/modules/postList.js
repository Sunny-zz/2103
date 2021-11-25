import axios from "../../plugins/axios"

// vuex 文章列表模块
export default {
  state: () => ({
    list: []
  }),
  mutations: {
    getPosts(state, list) {
      state.list = list
    },
    loadMorePosts(state, list) {
      state.list = [...state.list, ...list]
    }
  },
  actions: {
    // 获取不同类别文章列表数据
    // 请求文章列表有两种情况 
    // 1. 初始请求
    // 2. 加载更多请求
    // 依据传参带不带 page 属性，不带那就是初始请求反之加载更多
    async getPosts({ commit }, query) {
      const { page, tab } = query
      const queryStr = page ? `?tab=${tab}&page=${page}&limit=20` : `?tab=${tab}`
      const list = await axios.get(`/topics${queryStr}`)
      // console.log(list.data)
      page ? commit('loadMorePosts', list.data) : commit('getPosts', list.data)
    }

  }
}