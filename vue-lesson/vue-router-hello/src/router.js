// 路由的使用
// 1. 安装   npm i vue-router   
// 2. 使用   
//      a. 使用 Vue.use(路由) 将路由添加成整个项目的全局功能   主要实现了将路由组件注册成了全局组件，给Vue构造函数原型 Vue.prototype 添加了一些路由相关属性
//      b. 定义路由组件 也就是将需要当作页面的组件导入
//      c. 定义路由   就是定义页面  有哪些页面，哪个组件表示哪个页面
//      d. 创建路由实例  将所定义好的 路由数组制作成路由实例
//      f. 将创建好的路由实例，挂载到 vue 的根实例上(就是 new vue 的时候)

// 创建好路由之后，使用路由其实就是跳转和展示对应的页面
// 分别用路由自带的组件来实现
// router-link 组件实现跳转  其实就是 a 
// router-view 组件实现展示

// 动态路由
// 当很多页样式相同，只有数据不同，比如文章详情页，文章详情，我们使用动态路由实现，也就是很多页展示一个组件。

// 编程式导航

// 命名路由

// 重定向和别名

// 路由组件传参
// 当我们的组件被制作成了路由组件的时候，那么给组件传递参数就不能像以前一样使用 prop 以及自定义事件和插槽了
// 在路由组件中也可以传递参数， 组件内也可以使用 props 接收


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

// 定义路由
// 路由的 path 匹配机制是 完全相等
// 路由的匹配机制是从上向下的
// 这个路由是整个项目内的所有路由
// 那么要写子路由的话需要给父路由添加一个 children 属性，属性值是数组
const routes = [
  // {
  //   path: '/about',
  //   redirect: '/xxx'
  // },
  {
    component: About,
    alias: '/about',
    path: '/xxx',
    // 命名路由
    // 作用是当你想要跳转到这个路由的时候，你一定需要使用地址跳转，可以直接使用 name 跳转
    name: 'xxx'
  },
  // 路由对象
  // component 属性，属性值是组件
  // path 属性，页面地址
  {
    component: Home,
    // 比如网站的网址  首页 https://juejin.cn   关于 https://juejin.cn/about        
    //   /   就表示根地址   根地址就是  协议+域名+端口号   没有路径
    path: '/',
    children: [
      // 默认子路由， 父路由出现的时候默认子路由就会出现
      {
        // 当父级有默认子路由的时候， 要给父级路由命名的话，不能直接写在父级路由对象内，需要写在默认的子路由内
        name: 'home',
        component: PostList,
        path: ''
      },
      {
        component: PostList,
        // 子页面的 path 写法是有限制
        // 比如 父路由地址是  https://juejin.cn  子页面地址 https://juejin.cn/frontend 那么子路由的 path 写成  'frontend'
        path: ':type',
        name: 'postList',
        // 这个 props 属性 设置成 true 相当于，将 动态路由参数当作 prop 传递给了 PostList 组件
        // props 属性设置成 对象的话，会将对象下的所有属性当作 prop 传递给组件，但是只能是静态的数据(动态路由参数是不可以的)
        // props 可以设置成函数，该函数默认接受 route(当前路由信息) 作为参数, 该函数的返回值需要写成对象，这个对象下的所有属性会被当作 prop 传递给组件
        props: route => ({
          type: route.params.type,
          a: 10
        })
      }
    ]
  },
  // 这个 PostList 组件就是文章列表页，多个页面地址都展示 PostList，那么路由对象的 path 就不是唯一的了，需要设置成动态路由，那么 path 就需要添加变量。 
  // 地址内  :X 就是变量
  // {
  //   component: PostList,
  //   // type 就是一个变量
  //   // 当 / 后面跟任意的值的时候 path 都会匹配
  //   path: '/:type'
  // }

  
]

// 创建路由实例
const router = new VueRouter({
  // routes: routes
  routes,
  // 路由模式 history   hash   
  // 路由模式就是当页面模拟多页的方式  hash 模式是使用锚点模拟的   history 模式是使用浏览器的历史记录实现的和真正的多页是一个效果 (但是  history 需要后台服务器支持才能使用，非首页刷新的话会 404)
  mode: 'history'
})

export default router

