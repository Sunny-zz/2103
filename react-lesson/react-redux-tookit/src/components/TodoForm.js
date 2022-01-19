// import { useState } from "react"

import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addAsyncTodo } from "../app/slices/todos"

export default function TodoForm() {
  // const [todoText, setTodoText] = useState('')
  // const handleChange = e => {
  //   setTodoText(e.target.value)
  // }
  const dispatch = useDispatch()
  const myInput = useRef()
  const add = async () => {
    const value = myInput.current.value.trim()
    if(value) {
      await dispatch(addAsyncTodo({todoText: value, isCompleted: false}))
      console.log('清空')
      myInput.current.value = ''
    }
  }
  const handleKeyDown = e => {
    if(e.keyCode === 13){
      add()
    }
  }
  return (
    <div style={{marginLeft: '20px'}} className="todo-form">
      <input onKeyDown={handleKeyDown} ref={myInput} type="text" />
      <button onClick={add}>添加</button>
    </div>
  )
}
