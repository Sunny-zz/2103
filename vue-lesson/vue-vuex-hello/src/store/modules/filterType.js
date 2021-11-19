import { CHANGE_TYPE } from '../mutation_types'
const filterType = {
  // 默认模块内的 mutations  actions  getters 都是全局的
  // 当组件内触发某个 mutations  actions  函数的时候，所有模块下同名的也会一起触发
  // 但是有些时候不想所有重名的都触发，可以给模块命名
  namespaced: true,
  state: () => ({
    filterType: 'all'
  }),
  mutations: {
    [CHANGE_TYPE](state, newType){
      state.filterType = newType
    }
  },
  actions: {
    // changeType({commit}, newType){
    //   commit('changeType', newType)
    // }
  }

  // 在命名空间内如何访问全局内容
  // 在 getters 内 getter 函数可以接受四个参数   比如   x(state, getters,rootState, rootGetters){}
  // 在 actions 内 action 函数的 context 参数内 可以获取到全局的数据
}

export default filterType