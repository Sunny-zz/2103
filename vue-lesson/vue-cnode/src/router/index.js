import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostList from '../views/PostList.vue'
import Post from '../views/Post.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import CreatePost from '../views/CreatePost.vue'
import Err from '../views/Err.vue'
Vue.use(VueRouter)

// 路由懒加载

//  /xxx
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/err',
    name: 'err',
    component: Err
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: PostList
      },
      {
        path: ':tab',
        component: PostList
      }
    ]
  },
  {
    path: '/post/create',
    component: CreatePost
  },
  {
    path: '/post/:id',
    component: Post
  },
  {
    path: '/user/:username',
    component: User
  },
  {
    path: '*',
    component: Err
  }
  
]

// https://sunny-zz.github.io/cnode1/
// 如果不对 vue 进行配置的话上面这个服务器地址是找不到 index.html 的。因为默认的 vue 去找首页是 '/', 我们需要将 https://sunny-zz.github.io/cnode1/ 地址切换成 vue 的首页

// https://sunny-zz.github.io

// 如果路由是 history 模式，那么上面两个服务器地址，相对于 vue 项目来说, '/' 表示的都是 https://sunny-zz.github.io
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
