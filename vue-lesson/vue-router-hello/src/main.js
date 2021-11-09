import Vue from 'vue'
import App from './App.vue'
// 如果导入的时候直接写文件夹路径不写文件名 默认导入的就是该文件夹下的 index.js
import router from './router'
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
