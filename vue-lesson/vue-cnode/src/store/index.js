import Vue from 'vue'
import Vuex from 'vuex'
import postList from './modules/postList'
import post from './modules/post'
import user from './modules/user'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    postList,
    post,
    user,
    login
  }
})
