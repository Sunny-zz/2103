import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// import './components/FunComponent'
import './plugins/minxin'
Vue.config.productionTip = false

// 当我们添加全局功能的时候，选择使用 Vue.use 去添加
// Vue.use 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。
 
new Vue({
  render: h => h(App),
}).$mount('#app')
