// 合并其他模块  需要使用 redux 中的 combineReducers
import { combineReducers } from 'redux'
import users from "./users";
import counter from './counter';
// 合并之后的结果就可以使用 createStore 创建成 store 了
export default combineReducers({
  users,
  counter
})

