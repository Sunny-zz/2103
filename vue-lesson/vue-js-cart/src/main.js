import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



Vue.filter('numberToFixed', function (number, n) {
  if (!number) return '0.00'
  return  number.toFixed(n);
})

new Vue({
  render: h => h(App),
}).$mount('#app')
