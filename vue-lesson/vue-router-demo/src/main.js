import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/style.less'
import './filters'
import './plugins/axios'
import './plugins/mavon'
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
