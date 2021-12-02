import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import './plugins/element'
import './plugins/axios'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
