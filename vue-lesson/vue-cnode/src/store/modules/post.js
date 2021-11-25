// 文章详情模块
import axios from '../../plugins/axios'
export default {
  state: () => ({
    // 对象的初始值一般写成 null 不写成 {}
    post: null
  }),
  mutations: {
    getPost(state, post){
      state.post = post
    }
  },
  actions: {
    async getPost({commit}, id){
      const post = await axios.get(`/topic/${id}`)
      // console.log(post)
      commit('getPost', post.data)
    }
  }
}