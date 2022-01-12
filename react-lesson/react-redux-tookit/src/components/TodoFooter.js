
export default function TodoFooter() {
  return (
    <div style={{marginLeft: '20px'}} className="todo-footer">
      <span>0 items left</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button>all</button>  
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button>active</button>  
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button>completed</button>  
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button>delete completed</button>
    </div>
  )
}
