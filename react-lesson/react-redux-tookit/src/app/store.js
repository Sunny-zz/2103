// configureStore 就相当于之前 redux 中的 createStore
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// configureStore 方法的使用
// 参数是一个对象
// 对象内的属性
// reducer 可以是一个函数也可以是一个对象(对象就相当于合并 reducer 类似之前的 combineReducers )

// configureStore 除了创建 store 之外，还默认内置提供了一些中间件功能，比如 devTool thunk
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});
