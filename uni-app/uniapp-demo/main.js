import App from './App'
import http from './plugins/http.js'
// #ifndef VUE3
import Vue from 'vue'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$http = http
App.mpType = 'app'
const app = new Vue({
    ...App,
		store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif