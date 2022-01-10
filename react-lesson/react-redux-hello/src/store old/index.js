// redux 状态管理
import { createStore, applyMiddleware } from 'redux'
// redux-thunk 是一个 redux 的中间件，其实就是一个 redux 插件，辅助 redux 的
// 可以使用 redux 的 applyMiddleware 给 store 添加上中间件功能
import thunk from 'redux-thunk'
// reducer 函数
// 需要定义两个参数
// 第一个参数  state  可用来初始化 store 数据
// 第二个参数  action 是一个对象存储了 type 属性。这个 type 是一个行为的名称。
// 这个函数必须设置返回值，返回的值是 store 的数据，默认要返回第一个参数
const rootReducer = (state = { counter: 0 }, action) => {
  const { type } = action
  // if(type === 'increment'){
  //   // 触发counter加一的行为
  //   return {
  //     counter: state.counter + 1
  //   }
  // }
  switch (type) {
    case 'initial':
      // 我们需要方法请求获取后端数据 得到最新的  counter
      // 但是 reducer 函数内禁止写异步操作
      // 那么 redux 提供了一个中间件 redux-thunk ，可以将异步操作写在 thunk 函数中
      // 其实 thunk 函数需要写在 action 创建函数内
      // action 创建函数是一个创建 action 的函数就是一个函数返回类似的对象 {type: 'increment', xx}
      // action 创建函数存在的意义就是当你多次使用 dispatch 发action 的时候，每次发的 ation 都是相同的
      // return {
      //   counter: newCounter
      // }
      return {
        counter: action.newCounter
      }
    case 'increment':
      // 尽可能的不要直接修改 state 再返回，而是返回一个新的 state 即可
      return {
        counter: state.counter + 1
      }
    case 'subtraction':
      return {
        counter: state.counter - 1
      }
    case 'change': {
      return {
        counter: action.newCounter
      }
    }
    default:
      return state
  }

}
// createStore 是初始化 store 的方法，传递 reducer 函数作为参数，createStore 执行的时候会自动执行 reducer 函数，并且将 reducer 函数的返回值制作成 store 数据
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store 
