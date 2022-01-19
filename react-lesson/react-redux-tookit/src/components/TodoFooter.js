
import { useDispatch, useSelector } from "react-redux"
import { activeTodosNum } from "../app/selectors/todosSelector"
import { changeFilter } from "../app/slices/filterSlice"
export default function TodoFooter() {

  const todos = useSelector(state => state.todos.value)
  const filter = useSelector(state => state.filter.value)
  const dispatch = useDispatch()
  const num = activeTodosNum(todos)
  
  return (
    <div style={{ marginLeft: '20px' }} className="todo-footer">
      <span>{num} items left</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => dispatch(changeFilter('all'))} style={{ color: filter === 'all' ? 'red' : 'black' }} >all</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => dispatch(changeFilter('active'))} style={{ color: filter === 'active' ? 'red' : 'black' }} >active</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => dispatch(changeFilter('completed'))} style={{ color: filter === 'completed' ? 'red' : 'black' }} >completed</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button>delete completed</button>
    </div>
  )
}
