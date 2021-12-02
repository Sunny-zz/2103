import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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

export { authRoutes }

export default router