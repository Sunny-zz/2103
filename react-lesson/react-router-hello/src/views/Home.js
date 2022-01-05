import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h3>我是 home 页面</h3>
      <ul>
        <li><Link to='/post/1' state={10} >第一篇文章</Link></li>
        <li><Link to='/post/2'>第二篇文章</Link></li>
        <li><Link to='/post/3'>第三篇文章</Link></li>
        <li><Link to='/post/4'>第四篇文章</Link></li>
      </ul>
      {/* 文章详情的展示 */}
      <Outlet />
    </div>
  )
}
