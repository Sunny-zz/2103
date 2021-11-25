import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostList from '../views/PostList.vue'
import Post from '../views/Post.vue'
Vue.use(VueRouter)

// 路由懒加载

const routes = [
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
