import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postList: [],
    page: 1,
    dialogFormVisible: false
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
    changePage(state, page) {
      state.page = page
    },
    // 多余的 mutation  因为搜索和获取 postList 是同样的方式修改
    // searchPostList(state, postList) {
    //   state.postList = postList
    // },
    changeDialogFormVisible(state, bool) {
      state.dialogFormVisible = bool
    },
    editPost(state, newPost) {
      // 替换数组内的某一个对象数据的话，直接使用对象赋值的方式不可以
      // 可以使用所有属性替换
      const ind = state.postList.findIndex(ele => ele.id === newPost.id)
      state.postList.splice(ind, 1, newPost)
    }
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
    async searchPostList({ commit }, searchStr) {
      // title_like=1&important=1&country=USA
      const postList = await axios.get(`/postList?${searchStr}`)
      commit('getPostList', postList)
      commit('changePage', 1)
    },
    async editPost({ commit }, newPost) {
      await axios.patch(`/postList/${newPost.id}`, newPost)
      commit('editPost', newPost)
    }
  }
})
