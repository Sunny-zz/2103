import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 不提示 生产模式提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


const arr = [1,2,3]
console.log(arr.includes(4))


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000)
  }, 2500)
})

promise.then(res => {
  console.log(res)
})