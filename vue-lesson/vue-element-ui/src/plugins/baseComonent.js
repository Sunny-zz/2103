// 我们要使用 Vue.use 方法实现 Box 组件的全局注册
// import BaseBox from '../base-components/BaseBox.vue'

// export default  {
//   install(Vue){
//     Vue.component('BaseBox',BaseBox)
//   }
// }

// 自动化实现 BaseXxxx.vue 组件的全局注册
// 全部加载
// import _ from 'lodash'
// 按需加载, 按需加载并不是所有的包都支持，需要参考文档
// import upperFirst from 'lodash/upperCase'
// import camelCase from 'lodash/camelCase'
import Vue from 'vue'

// require.context 方法 会得到满足条件的文件 使用这个 方法的返回值的 .keys 方法可以获取相对文件路径字符串数组
const requireComponent = require.context(
  // 其基础公共组件目录的相对路径，相对于该 js 本身 
  '../base-components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  // Base +  一位大写字母 + 一个或多个数字祖母下划线 + 以 .vue 结尾的
  /Base[A-Z]\w+\.vue$/
)
requireComponent.keys().forEach(url => {
  // 相当于导入当前 url 对应的组件  
  // 因为组件的导出可能存在两种方式  默认导出和命名导出
  // 获取组件的写法 componentConfig.default || componentConfig
  const componentConfig = requireComponent(url)
  //  ./BaseBox.vue  --->  BaseBox
  // url.split('/') --->  [. , BaseBox.vue ].pop() ---> BaseBox.vue --->   .replace(/\.\w+$/, '') ---> BaseBox
  // 全局组件注册
  // Vue.component('注册的标签名', 注册的组件)
  Vue.component(url.slice(2).replace('.vue', ''), componentConfig.default || componentConfig)
});

