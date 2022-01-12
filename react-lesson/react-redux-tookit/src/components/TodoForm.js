// import { useState } from "react"

import { useRef } from "react"

export default function TodoForm() {
  // const [todoText, setTodoText] = useState('')
  // const handleChange = e => {
  //   setTodoText(e.target.value)
  // }
  const myInput = useRef()
  const add = () => {
    console.log(myInput.current.value)
  }
  return (
    <div style={{marginLeft: '20px'}} className="todo-form">
      <input ref={myInput} type="text" />
      <button onClick={add}>添加</button>
    </div>
  )
}
