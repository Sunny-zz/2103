// counter 切片
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// 数据初始值
const initialState = {
  value: 10
}

// 创建切片
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      state.value++
    },
    sub: (state) => {
      state.value--
    },
    // change: (state, action) => {
    //   state.value = action.payload
    // }
  },
  // 用来处理 createAsyncThunk 创建的异步 thunk
  extraReducers: (builder) => {
    builder
    .addCase(fetchCounter.fulfilled, (state, action) => {
      state.value = action.payload
    })
    
  }
})
// 导出 action 创建函数
export const { add, sub, change } = counterSlice.actions
// 要处理异步的 action 可以直接创建
// 异步 action 内层函数接收 diapatch 以及 getState 作为参数
// dispatch 用来发 action  getState 用于获取 state 数据
// export const fetchCounter = () => (dispatch, getState) => {
//   console.log(getState())
//   setTimeout(() => {
//     dispatch(change(1000))
//   }, 1000)
// }
// 利用 createAsyncThunk 创建的异步 action
// createAsyncThunk 的返回的是一个 promise
// 当组件 dispatch(函数())  promise 执行
// 执行的时候 extraReducers 会监听 promise 的状态，去做对应的处理
// createAsyncThunk 第二个参数函数的返回值会被当作 action 的 payload
export const fetchCounter = createAsyncThunk('cunter/fetchCounter', async () =>  {
  const res = await new Promise((resolve) =>
    setTimeout(() => resolve(200), 500)
  );
  return res
})

export default counterSlice