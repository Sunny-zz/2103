// vuex 的 todos 模块
// 模块 就是一个对象 里面有 state  mutations  actions  getters 属性
import axios from '../../plugins/axios'
const todos = {
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
    // action 函数只能接受两个参数，如果想传递多个，将第二个参数写成对象

    // 当组件内想要在 action 异步执行之后 处理一些事情， 我们可以重写 action 函数，让 action 函数返回 promise
    // async addTodo({ commit }, payload) {
    //   const res = await axios.post('/todos', payload.newTodo)
    //   // 这个添加的请求返回的是添加好的数据(带 id 的)
    //   commit('addTodo', res)
    //   console.log('添加完成')
    //   payload.clearFun()
    // }
    // addTodo({ commit }, newTodo) {
    //   return new Promise((resolve) => {
    //     axios.post('/todos', newTodo).then(res => {
    //       commit('addTodo', res)
    //       resolve()
    //     })
    //   })
    // }

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
    // showTodos(state) {
    //   const { todos , filterType} = state
    //   return todos.filter(ele => filterType === 'all' ?  true : filterType === 'active' ? !ele.isDone : ele.isDone )
    // }
  },
}

export default todos