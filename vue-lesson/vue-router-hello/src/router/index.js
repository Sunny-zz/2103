import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 路由独享前置守卫  和全局前置守卫一样
    // beforeEnter: (to, from, next) => {
    //   next()
    // },
    // 路由元信息
    meta: {auth: true},
    children: [
      {
        path: 'list',
        component: () => import('../views/List.vue'),
        name: 'list',
        meta: {auth: true}
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // 路由懒加载 
    // About 被访问的时候才导入
    // component: () => import('../views/About.vue')
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 全局前置守卫
// 写在 创建路由实例后，或者 挂载 vue 根实例前
// 任何的跳转都会触发全局前置守卫
// 全局前置守卫默认传递一个函数作为参数，函数可以接受三个参数
// 1. to
// 2. from
// 3. next 是一个方法，该方法必须在函数内执行，用于通行
router.beforeEach((to, from, next) => {
  // console.log('全局前置守卫触发了')
  // console.log(to)
  // console.log(from)
  // 刷新去 about   from-空   to-about
  // const a = to.path === '/about' ? 'about' : 'home'
  // if (a === 'about' && to.path !== '/') {
  //   next('/')
  // } else {
  //   next()
  // }

  // 当一些路由跳转的时候需要校验权限，这些权限一般可以放在路由的 meta 字段
  // 那么就需要我们在路由跳转的时候获取当前地址匹配到的所有路由记录，然后找到里面的所有路由元信息
  // 当前地址匹配到的所有路由记录，可以使用 $route.matched 获取

  // console.log(to.matched)

  // to.matched.forEach(ele => {
  //   console.log(ele.meta)
  //   if(ele.meta.auth){
  //     console.log('需要权限')
  //   }
  // })
  next()
})
// 全局解析守卫 类似全局前置守卫   稍微比全局前置守卫往后一点(已经开始解析路由组件了)， 一般不选择该守卫
// router.beforeResolve

// 全局后置钩子  并不是守卫，而是跳转之后默认执行的函数  已经成功跳转了
// router.afterEach((to, from) => {
//   // ...
// })

export default router
