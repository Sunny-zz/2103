import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { changeAsyncTodo, delAsyncTodo } from "../app/slices/todos"

export default function TodoItem({ isCompleted, todoText, id }) {

  const dispatch = useDispatch()
  const inputRef = useRef()
  const [editStatus, setEditStatus] = useState(false)
  const delTodo = () => {
    dispatch(delAsyncTodo(id))
  }

  const change = () => {
    dispatch(changeAsyncTodo({ id, editTodo: { isCompleted: !isCompleted } }))
  }

  const handalEdit = () => {
    setEditStatus(true)
  }

  useEffect(()=> {
    if(editStatus) {
      inputRef.current.focus()
    }
  }, [editStatus])

  const editTodo = async () => {
    const value = inputRef.current.value.trim()
    if (value !== todoText) {
      console.log(value)
      await dispatch(changeAsyncTodo({ id, editTodo: { todoText: value } }))
      setEditStatus(false)
    } else {
      setEditStatus(false)
    }
  }

  const handleKewDown = e => {
    if (e.keyCode === 13) {
      editTodo()
    }
  }

  return (
    <div>
      <input onKeyDown={handleKewDown} onBlur={editTodo} style={{ display: editStatus ? 'inline-block' : 'none' }} ref={inputRef} defaultValue={todoText} type="text" />
      <div style={{ display: editStatus ? 'none' : 'inline' }}>
        <span onClick={change} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todoText}</span>
        <button onClick={handalEdit} >编辑</button>
        <button onClick={delTodo} >删除</button>
      </div>

    </div>
  )
}
