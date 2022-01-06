// 路由数组 在组件内使用 useRoutes 就可以生成路由了

import RequireAuth from './components/RequireAuth'
import Home from './views/Home'
import Login from './views/Login'
import Topic from './views/Topic'
import Topics from './views/Topics'
// 路由匹配的时候同级优先匹配
export default [
  {
    path: '/',
    element: <RequireAuth><Home /></RequireAuth>,
    children: [
      // 文章详情页路由  地址是  localhost:3000/topic/25r261516
      {
        path: 'topic/:id',
        element: <Topic />
      },
      // 文章列表页路由  地址是  localhost:3000/ask
      {
        index: true,
        element: <Topics />
      },
      {
        path: ':tab',
        element: <Topics />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
]
