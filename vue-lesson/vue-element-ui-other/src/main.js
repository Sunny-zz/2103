import Vue from 'vue'
import App from './App.vue'
// import './theme/index.css'
import './plugins/element.js'
import './assets/style.less'
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')


// vue 有一个 插件功能，主要讲的是 给 vue 添加全局功能，
// 比如 element 的一些组件(button 等...),我们可以使用 Vue.component() 注册成全局组件
// 比如 使用 Vue.prototype.xx = xxxx  也相当于给 vue 添加了全局功能。 因为所有的 vue 组件 都会继承 Vue ，可以在组件内使用  this.xx 访问并使用。 这个一般设置在 new Vue 之前