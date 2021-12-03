import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
import {getMenuListAndAuths} from '../utils'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: [],
    login: true,
    auths: []
  },
  mutations: {
    // 修改 menu
    getMenu(state, menu){
      state.menu = menu
    },
    getAuths(state, auths){
      state.auths = auths
    }
  },
  actions: {
    // 获取 menu 调用对应 mutation
    async getMenu({commit}, token){
     const res = await axios.post('/authmenu', {token})
     const {menuList, auths} = getMenuListAndAuths(res)
     commit('getMenu', menuList)
     commit('getAuths', auths)
    }
  }
})


export default store