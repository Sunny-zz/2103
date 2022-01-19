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
// 添加 todo
export const addAsyncTodo = createAsyncThunk(
  'todos/addAsyncTodo',
  async (newTodo) => {
    const todo = await axios.post('/todos', newTodo)
    return todo
  }
)

// 删除 todo
export const delAsyncTodo = createAsyncThunk(
  'todos/delAsyncTodo',
  async (id) => {
    await axios.delete(`/todos/${id}`)
    return id
  }
)

// 修改 todo   包括 状态(isCompleted) 和 内容(todoText)
export const changeAsyncTodo = createAsyncThunk(
  'todos/changeAsyncTodo',
  // 这个函数只能接收一个参数
  async ({id, editTodo}) => {
    const res = await axios.patch(`/todos/${id}`, editTodo)
    return res
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.value = action.payload
      })
      .addCase(addAsyncTodo.fulfilled, (state, action) => {
        // console.log('添加结束')
        state.value.push(action.payload)
      })
      .addCase(delAsyncTodo.fulfilled, (state, action) => {
        state.value = state.value.filter(todo => todo.id !== action.payload)
      })
      .addCase(changeAsyncTodo.fulfilled, (state, action) => {
        const newTodo = action.payload
        // 用新的 todo 替换原来的
        // 先找到位置，然后使用 splice 替换
        // let currentTodoIndex = state.value.findIndex(todo => todo.id === newTodo.id)
        // state.value.splice(currentTodoIndex, 1, newTodo)
        // 使用 map 替换
        state.value = state.value.map(todo => todo.id === newTodo.id ? newTodo : todo)
      })
  }
})

export default todosSlice