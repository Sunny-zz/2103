import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postList: [],
    page: 1
  },
  getters: {
    showPostList(state) {
      const { page, postList } = state
      const startNum = (page - 1) * 20
      return postList.slice(startNum, startNum + 20)
    },
    totalNum(state) {
      return state.postList.length
    }
  },
  mutations: {
    getPostList(state, postList) {
      state.postList = postList
    },
    delPost(state, id) {
      state.postList = state.postList.filter(ele => ele.id !== id)
    },
    changePostStatus(state, { id, status }) {
      state.postList.find(ele => ele.id === id).status = status
    },
    changePage(state, page){
      state.page = page
    },
    // 多余的 mutation  因为搜索和获取 postList 是同样的方式修改
    // searchPostList(state, postList) {
    //   state.postList = postList
    // },
  },
  actions: {
    async getPostList({ commit }) {
      const postList = await axios.get('/postList')
      commit('getPostList', postList)
      // commit('changePage', 1)
    },
    async delPost({ commit }, id) {
      const res = await axios.delete(`/postList/${id}`)
      console.log(res)
      commit('delPost', id)
    },
    async changePostStatus({ commit }, { id, status }) {
      await axios.patch(`/postList/${id}`, { status })
      commit('changePostStatus', { id, status })
    },
    async searchPostList({commit}, searchStr){
      // title_like=1&important=1&country=USA
      const postList = await axios.get(`/postList?${searchStr}`)
      commit('getPostList', postList)
      commit('changePage', 1)
    }
  }
})
