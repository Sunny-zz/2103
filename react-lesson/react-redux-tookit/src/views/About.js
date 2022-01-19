import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>About 页</h2>
      <button onClick={() => navigate(-1)}>返回</button>
    </div>
  )
}
