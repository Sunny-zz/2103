import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilterTodos } from '../app/selectors/todosSelector'
import { getAsyncTodos } from '../app/slices/todos'
import TodoItem from './TodoItem'
export default function TodoContent() {
  const todos = useSelector(state => state.todos.value)
  const store = useSelector(state => state)
  const showTodos = selectFilterTodos(store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])
  return (
    <div style={{ margin: '20px' }} className='todo-content'>
      {/* 获取 store 的 todos 数据展示出来 */}
      {
        todos.length ? showTodos.map(todo => <TodoItem key={todo.id} {...todo} />) : '暂无待办事项，请添加'
      }
    </div>
  )
}
