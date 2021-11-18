// 状态管理   vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 1. 给整个项目安装 Vuex 功能   Vue.use
Vue.use(Vuex)

// 2. 创建 store    store 就是存储共享数据的容器
const store = new Vuex.Store({
  // 放共享的数据以及修改的方法等

  // state 就是存放共享数据的对象  count 就是一个共享的数据
  state: {
    count: 100,
    products: [
      { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
      { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
      { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
    ],
    cart: [
      
    ]
  },
  // mutations 对象，存储的是修改 state 的方法
  // 内部方法的第一个参数都是 state, 就是上面的 state
  // 要修改数据的话，直接对 state 内的数据进行修改即可
  mutations: {
    // 如果 commit 触发 mutation 的时候 传递的是对象那么传递的对象，就会作为 mutation 函数的第二个参数
    // addCount(state, {payload}){
    //   console.log(payload)
    //   state.count += payload
    // }

    // 如果 commit 触发 mutation 函数 传递不是对象，那么第二个参数接收的是 触发的时候传递的第二个参数

    // 注意 mutation 函数最多只能两个参数
    addCount(state, num) {
      state.count += num
    },
    // 添加商品到购物车
    addToCart(state, id) {
      // 当添加商品到购物车的时候
      // 分两种情况
      // 1. 第一次添加该商品
      // 2. 已有之后再添加
      const productInCart = state.cart.find(ele => ele.productId === id)
      if (productInCart) {
        // console.log('重复购买')
        productInCart.quantity ++
      } else {
        state.cart.push({
          productId: id,
          quantity: 1
        })
      }
    }
  },
  // vuex 中的计算属性  对 store 数据进行计算的
  // getters
  // getter 函数默认接收 state 作为参数
  getters: {
    cartList(state) {
      const { cart, products } = state
      return cart.length ? cart.map(ele => ({
        product: products.find(item => item.id === ele.productId),
        quantity: ele.quantity
      })) : []
    },
    total(state, getters) {
      // 在这个计算属性内需要使用其他的计算属性
      // 那么 getter 函数的第二个参数就是其他的 getters
      return getters.cartList.length ? getters.cartList.reduce((res, ele) => res + ele.quantity * ele.product.price, 0) : 0
    },
    // 提供一个根据 id 获取购物车中对应的商品数量
    // 这个计算属性就需要接收参数，那么计算属性就要写成一个函数返回另一个函数
    getProductQuantityById(state){
      // 内部返回的函数接收参数
      // 内部函数的返回值就是计算属性
      return (id) => {
        const currentProduct = state.cart.find(ele => ele.productId === id)
        return currentProduct ? currentProduct.quantity : 0
      }
    }
  }
})

export default store
// 3. 将创建好的 store 添加到  vue 项目中  详见 main.js

// 4. 在 组件中 使用 store 数据   
// $store.state.count 
// 一般在组件中获取 store 数据的时候 都选择使用计算属性获取


// 5. 如何修改 store 数据, 
// 在 store 内先定义好修改数据的方法，然后组件内调用修改
// 在 store 内的 mutations 创建修改的方法