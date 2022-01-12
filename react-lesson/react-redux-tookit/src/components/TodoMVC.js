// todo 最大组件

import TodoContent from "./TodoContent";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";

export default function TodoMVC() {
  return (
    <div>
      <h2>Todo MVC</h2>
      <TodoForm />
      <TodoContent/>
      <TodoFooter />
    </div>
  )
}
