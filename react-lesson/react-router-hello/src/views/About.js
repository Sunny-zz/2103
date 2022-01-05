import { Outlet,Link } from "react-router-dom"; 
export default function About() {
  return (
    <div>
      <h3>我是 about 页面</h3>
      <ul>
        <li><Link to='/about/cart'>购物车</Link></li>
        <li><Link to='/about/store'>个人中心</Link></li>
      </ul>
      {/* 展示子路由 */}
      <Outlet /> 
    </div>
  )
}

