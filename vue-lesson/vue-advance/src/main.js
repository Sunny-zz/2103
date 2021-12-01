import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import './plugins/element'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// [{ pid: -1, name: '购物车', id: 1, auth: 'cart' }, { pid: 1, name: '购物车列表', id: 4, auth: 'cart-list' }, { pid: 4, name: '彩票', id: 5, auth: 'lottery' }, { pid: 4, name: '商品', id: 6, auth: 'product' }, { pid: -1, name: '商店', id: 2, auth: 'shop' }, { pid: -1, name: '个人中心', id: 3, auth: 'store' }, ];