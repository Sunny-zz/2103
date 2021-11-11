import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostList from '../views/PostList.vue'
import EditPost from '../views/EditPost.vue'
import Profile from '../views/Profile.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: Index,
        name: 'home'
      },
      {
        path: 'postlist',
        component: PostList,
        name: 'postlist'
      },
      {
        path: 'editpost',
        component:EditPost,
        name: 'editpost'
      },
      {
        path: 'profile',
        component: Profile,
        name: 'profile'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由全局前置守卫
// 只有你登录了才能访问 除了 login 之外的页面
router.beforeEach((to, form, next) => {
  const targetUrl = to.path
  const userInfo = sessionStorage.getItem('userInfo')
  // console.log(targetUrl)
  // if (targetUrl === '/login') {
  //   next()
  // } else {
  //   // 非 login 页面需要查看是否登录了
  //   console.log(userInfo)
  //   if (userInfo) next()
  //   else next('/login')
  // }
  if(targetUrl === '/login' || userInfo) next()
  else next('/login')
})

export default router
