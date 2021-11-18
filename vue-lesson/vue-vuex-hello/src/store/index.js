import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  // mutation 函数只能包含同步操作，虽然写异步操作看上去没什么问题，但是底层追踪 state 变化的时候就追踪不到。
  mutations: {
    getTodos(state, todos) {
      state.todos = todos
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo)
    },
    changeTodo(state, { id, isDone }) {
      state.todos.find(ele => ele.id === id).isDone = isDone
    }
  },
  // 当需要异步修改 state 时，可以设置 actions 
  // 将异步操作写在 action 函数内
  // 然后在 action 函数内调用 mutation 
  // 一般来说 action 函数和 mutation 函数是重名的
  // 并不是没有异步就不需要 action
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
    }
  }
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