import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostList from '../views/PostList.vue'
import Post from '../views/Post.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

// 路由懒加载

const routes = [
  {
    path: '/login',
    component: Login
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
    path: '/post/:id',
    component: Post
  },
  {
    path: '/user/:username',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
