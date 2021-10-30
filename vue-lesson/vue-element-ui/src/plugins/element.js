import Vue from 'vue'
// import Element from 'element-ui'
// 命名导入
import { Button,Avatar,Divider, Drawer } from 'element-ui'
// element ui 的样式文件
// import 'element-ui/lib/theme-chalk/index.css'

// 将所有 Element ui 组件进行了全局注册，所以 Element ui 的任何组件都可以在该项目中直接使用，无需在进行注册

// 我们希望使用 element 的按需加载
// 使用什么组件全局注册什么组件样式也一样
// 其实在安装 vue add elemet 的时候让你选择了加载方式，我们选的是全部加载
// Vue.use(Element)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Divider)
Vue.use(Drawer)
