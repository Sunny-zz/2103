import { createSelector } from "@reduxjs/toolkit";

// 根据 filter 计算出展示的 todos
const selectTodos = state => state.todos.value
const selectFilter = state => state.filter.value
export const selectFilterTodos = createSelector(selectTodos, selectFilter, (todos, filter) => todos.filter(todo => filter === 'all' ? true : filter === 'active' ? !todo.isCompleted : todo.isCompleted))

// 根据 todos 计算出未完成的 todo 个数
export const activeTodosNum = createSelector(state => state, todos => todos.filter(todo => !todo.isCompleted).length)