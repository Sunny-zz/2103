// todos 切片

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../plugins/axios"
const initialState = {
  value: []
}

// 异步获取 todos 数据  的 thunk 函数
export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos',
  async () => {
    const todos = await axios.get('/todos')
    return todos
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        // console.log(action.payload.todos)
        state.value = action.payload.todos
      })
  }
})

export default todosSlice