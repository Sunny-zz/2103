
export default function TodoItem({ isCompleted, todoText }) {
  return (
    <div>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todoText}</span>
      <button>删除</button>
    </div>
  )
}
