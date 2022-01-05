import {lazy,Suspense} from 'react'
import About from './views/About'
import Cart from './views/Cart'
import Home from './views/Home'
// import Post from './views/Post'
import Store from './views/Store'
const Post = lazy(() => import('./views/Post'))
export default  [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <h3>哈哈哈哈</h3>
      },
      {
        path: 'post/:postId',
        // 当需要渲染 Post 的组件的时候先会渲染 fallback 的内容， 知道 Post 组件加载完毕
        element: <Suspense fallback={<></>}>
          <Post />
        </Suspense>
      }
    ]
  },
  {
    path: 'about',
    element: <About />,
    children: [
      {
        path: 'store',
        element: <Store />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
]
