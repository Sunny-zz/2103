import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
Vue.use(VueRouter)
// 首页         /           展示导航菜单
// 首页的子页面
// 购物车    /cart        展示一个h2 cart
// 商店      /shop        展示一个h2 shop
// 个人中心   /store      展示一个h2 store
// 购物车子页面 
// 购物车列表页  /cart/cartlist   展示一个h2 cartlist
// 购物车列表子页面页
// 彩票页      /cart/cartlist/lottery   展示一个h2 lottery
// 商品页      /cart/cartlist/product   展示一个h2 product
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]
// 权限路由数组  所有需要权限的页面
const authRoutes = [
  {
    path: 'cart',
    component: () => import('../views/Cart.vue'),
    name: 'cart',
    children: [
      {
        path: 'cartlist',
        component: () => import('../views/CartList.vue'),
        name: 'cartlist',
        children: [
          {
            path: 'lottery',
            component: () => import('../views/Lottery.vue'),
            name: 'lottery'
          },
          {
            path: 'product',
            component: () => import('../views/Product.vue'),
            name: 'product'
          }
        ]
      }
    ]
  },
  {
    path: 'shop',
    component: () => import('../views/Shop.vue'),
    name: 'shop'
  },
  {
    path: 'store',
    component: () => import('../views/Store.vue'),
    name: 'store'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(async (to, from, next) => {
  // console.log(router)
  // 判断用户是否登录
  const { state, dispatch } = store
  const { login, menu } = state
  if (login) {
    if (!menu.length) {
      // 获取权限动态更新路由 然后放行
      await dispatch('getMenu', 'normal')
      // 如果直接使用 menu 或者 auths 是取不到最新的结果的
      // 需要重新 store.state.menu 或 auths 

      //   ['cart', 'cartlist', 'lottery']
      // const currentAuthRoutes = authRoutes.filter((route) => store.state.auths.includes(route.name));



      const filter = (authRoutes) => {
        // 对一个数组进行筛选
        const res = authRoutes.filter((route) => {
          // 如果 route 有children应该再次筛选
          if (route.children) {
            const r = filter(route.children)
            // 因为 authRoutes 是树形数组路由，那么当第一次筛选的时候会将整个路由对象筛选出来，包括里面的子路由，所以我们在递归筛选内层的时候，需要修改对应的外层的 children, 内层筛选有结果就替换 children，没结果就删除 children
            if (r.length) {
              route.children = r
            } else {
              delete route.children
            }
          }
          return store.state.auths.includes(route.name)
        })
        return res
      }

      
      const currentAuthRoutes = filter(authRoutes)
      console.log(currentAuthRoutes)
      currentAuthRoutes.forEach(route => router.addRoute('home', route))

      // 不能直接放行， 需要拷贝新的目标放行，才能使用新增之后的路由做跳转
      next({ ...to })
    } else {
      next()
    }

  } else {
    console.log('去登陆页')
  }

})

export { authRoutes }

export default router