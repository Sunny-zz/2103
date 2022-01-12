import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAsyncTodos } from '../app/slices/todos'
import TodoItem from './TodoItem'
export default function TodoContent() {
  const todos = useSelector(state => state.todos.value)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])
  console.log(todos)
  return (
    <div style={{margin: '20px'}} className='todo-content'>
      {/* 获取 store 的 todos 数据展示出来 */}
      {
        todos.length ? todos.map(todo => <TodoItem key={todo.id} {...todo} />  ) : '暂无待办事项，请添加'
      }
    </div>
  )
}
