import './App.css';
import {  Link, NavLink, useNavigate, useRoutes } from 'react-router-dom'
import routes from './routes';
// import Home from './views/Home';
// import About from './views/About';
// import Store from './views/Store';
// import Cart from './views/Cart';
// import Post from './views/Post';
// 想要使用路由的所有功能，那么必须使用 BrowserRouter 组件包裹, 一般都直接将 App 使用 BrowserRouter 包裹
// Route 组件是单个路由组件, 必须使用 Routes 组件包裹
// Route 组件接收 path  element 作为 prop   path 是路由地址， element 是展示的组件
// Routes 下的 Route 组件只会根据地址展示一个，而且顺序是从上到下

function App() {
  const navigate = useNavigate()
  const router = useRoutes(routes)
  return (
    <div className="App">
      <h2>hello react-router</h2>
      <button onClick={() => navigate(-1)}>返回</button>
      <p>
        {/* <Link to='/'>Home</Link> */}
        {/* 通过 NavLink 可以获取当前 NavLink 连接是否被激活了, 从而可以根据该状态添加样式处理  style  className 以及 children 都可以写成函数用来获取 isActive  */}
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <span> | </span>
        <Link to='/about'>About</Link>
      </p>
      {/* 展示页面 */}
      {/* 在这添加上所有的页面路由逻辑 */}
      {/* <Routes>
        <Route path='/' element={<Home />}>
          <Route path='post/:postId' element={<Post />}></Route>
        </Route>
        <Route path='about' element={<About />}>
          <Route index element={<h4>about 默认的子路由</h4>}></Route>
          <Route path='store' element={<Store />}></Route>
          <Route path='cart' element={<Cart />}></Route>
        </Route>
      </Routes> */}
      {router}
    </div>
  );
}

export default App;
