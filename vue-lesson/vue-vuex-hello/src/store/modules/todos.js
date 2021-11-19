// vuex 的 todos 模块
// 模块 就是一个对象 里面有 state  mutations  actions  getters 属性
import axios from '../../plugins/axios'
const todos = {
  // 模块内的 state 要成称函数并提供返回值
  state: () => ({
    todos: []
  }),
  mutations: {
    getTodos(state, todos) {
      state.todos = todos
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo)
    },
    changeTodo(state, { id, isDone }) {
      state.todos.find(ele => ele.id === id).isDone = isDone
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(ele => ele.id !== id)
    },
    changeTodoText(state, { id, text }) {
      state.todos.find(ele => ele.id === id).text = text
    }
  },
  
  actions: {
    async getTodos(context) {
      const res = await axios.get('/todos')
      context.commit('getTodos', res)
    },

    async addTodo({ commit }, newTodo) {
      const res = await axios.post('/todos', newTodo)
      // 这个添加的请求返回的是添加好的数据(带 id 的)
      commit('addTodo', res)
      console.log('添加成功')
    },

    async changeTodo({ commit }, { id, isDone }) {
      await axios.patch(`/todos/${id}`, { isDone: isDone })
      commit('changeTodo', { id, isDone })
    },

    async delTodo({ commit }, id) {
      await axios.delete(`/todos/${id}`)
      commit('delTodo', id)
    },
    // 模块内的 action 的第一个参数 context  里面有很多属性我们可能会用到
    async changeTodoText({ commit }, { id, text }) {
      await axios.patch(`/todos/${id}`, { text })
      // 后台修改了数据，前端页面的展示(前端的 vuex 数据的修改)，不一定需要请求的返回值去修改。也不需要重新请求来修改。
      commit('changeTodoText', { id, text })
    }
  },

  getters: {
    activeTodosNum(state) {
      return state.todos.filter(ele => !ele.isDone).length
    },
    // 因为划分模块了 所以下面这个计算属性，不单独写在 todos 模块
    // 因为这个计算属性既需要 todos 模块 又需要 filterType 模块
    // showTodos(state) {
    //   const { todos , filterType} = state
    //   return todos.filter(ele => filterType === 'all' ?  true : filterType === 'active' ? !ele.isDone : ele.isDone )
    // }
  },
}

export default todos