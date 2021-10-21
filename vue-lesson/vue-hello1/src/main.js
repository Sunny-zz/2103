import Vue from 'vue'

import App from './App.vue'

// 公共的 css 初始化直接在 main.js 中使用
// 当作模块直接导入, 就是让 css 生效并不是引入 css 文件中的某个值。 所以直接 import '路径'
import './assets/reset.css'

Vue.config.productionTip = false

// 创建一个  vue  实例  就是一个 大结构 
// render 配置: 将 App 渲染到 vue 实例的大结构中 
// $mount 的作用是将 大结构 渲染到 #app(index.html 内) 这个标签上
new Vue({
  render: h => h(App),
}).$mount('#app')
