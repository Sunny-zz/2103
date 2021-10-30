import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/style.css'
// import Box from './components/Box.vue'

// 将 Box 注册成全局组件
// Vue.component('Box', Box)

// import './plugins/baseComonent'

// import X from './plugins/baseComonent'
// Vue.use(对象或者函数)
// use 执行的时候默认会触发 对象内的 install 方法。或者 函数， 而且传递 Vue 给这个方法或者函数
// Vue.use(X)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
