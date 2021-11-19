import Vue from 'vue'
import Vuex from 'vuex'
import filterType from './modules/filterType'
import todos from './modules/todos'
Vue.use(Vuex)

export default new Vuex.Store({
  // 当 state 内的 数据越来越多的时候， 对应的 action  mutation  getter 都会越来越多，那么会导致 store 臃肿
  // 当共享数据很多的时候，可以使用 vuex 的模块，来简化 store 的共享数据，其实就是将数据单独拆分出去了，然后最后在合并到 store 中
  state: {
    // todos: [],
    // filterType: 'all'

  },
  // mutation 函数只能包含同步操作，虽然写异步操作看上去没什么问题，但是底层追踪 state 变化的时候就追踪不到。
  mutations: {
    // getTodos(state, todos) {
    //   state.todos = todos
    // },
    // addTodo(state, newTodo) {
    //   state.todos.push(newTodo)
    // },
    // changeTodo(state, { id, isDone }) {
    //   state.todos.find(ele => ele.id === id).isDone = isDone
    // },
    // delTodo(state, id) {
    //   state.todos = state.todos.filter(ele => ele.id !== id)
    // },
    // changeTodoText(state, { id, text }){
    //   state.todos.find(ele => ele.id === id).text = text
    // }
  },
  // 当需要异步修改 state 时，可以设置 actions 
  // 将异步操作写在 action 函数内
  // 然后在 action 函数内调用 mutation 
  // 一般来说 action 函数和 mutation 函数是重名的
  // 并不是没有异步就不需要 action
  actions: {
    // async getTodos(context) {
    //   const res = await axios.get('/todos')
    //   context.commit('getTodos', res)
    // },
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

    // async addTodo({ commit }, newTodo) {
    //   const res = await axios.post('/todos', newTodo)
    //   // 这个添加的请求返回的是添加好的数据(带 id 的)
    //   commit('addTodo', res)
    //   console.log('添加成功')
    // },

    // async changeTodo({ commit }, { id, isDone }) {
    //   await axios.patch(`/todos/${id}`, { isDone: isDone })
    //   commit('changeTodo', { id, isDone })
    // },

    // async delTodo({ commit }, id) {
    //   await axios.delete(`/todos/${id}`)
    //   commit('delTodo', id)
    // },

    // async changeTodoText( {commit}, {id, text}){
    //   await axios.patch(`/todos/${id}`, { text })
    //   // 后台修改了数据，前端页面的展示(前端的 vuex 数据的修改)，不一定需要请求的返回值去修改。也不需要重新请求来修改。
    //   commit('changeTodoText', {id, text})
    // }
  },
  // 根 getters   内的 state 就是 根 state 包括所有模块的
  getters: {
    // activeTodosNum(state) {
    //   return state.todos.filter(ele => !ele.isDone).length
    // },
    showTodos(state) {
      const todos = state.todos.todos
      const filterType = state.filterType.filterType
      return todos.filter(ele => filterType === 'all' ? true : filterType === 'active' ? !ele.isDone : ele.isDone)
    }
  },

  // 合并模块
  // 就相当于制作一个 vuex 的  state
  // 制作的 state 展示   { todos :  todos模块下的 state 的返回值}  返回值是 {todos: []}
  modules: {
    todos: todos,
    filterType: filterType
  }

  // 虽然将 store 数据拆分成了两个模块，但是 模块内的 mutations  actions  getters 依然是全局的 ，和之前的用法一样
  // 其实就是 state 跟之前不太一样了
  // 除非使用了模块的命名
})



// const promise =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const a = 100
//     if(a > 50) {
//       resolve(a)
//     }else{
//       reject()
//     }
//   }, 1000);
// })

// promise.then( res => {
//   // 异步成功之后做的事
//   console.log(res)
// })