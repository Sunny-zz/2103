// 导出的路由数组
import About from "./views/About"
import Home from "./views/Home"
export default [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
]