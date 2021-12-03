import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import './plugins/element'
import './plugins/axios'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


let tree = [{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1'
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
    children: [{
      label: '三级 2-1-1'
    }]
  }, {
    label: '二级 2-2',
    children: [{
      label: '三级 2-2-1'
    }]
  }]
}, {
  label: '一级 3',
  children: [{
    label: '二级 3-1',
    children: [{
      label: '三级 3-1-1'
    }]
  }, {
    label: '二级 3-2',
    children: [{
      label: '三级 3-2-1'
    }]
  }]
}]

// 已知一个 id(label)   找到id(label) 的那个对象
// 比如 label 是 一级 3  得到 匹配的对象
// 树形数组扁平化



for (let i = 0; i < tree.length; i++) {
  if (tree[i].children) {
    tree = tree.concat(tree[i].children)
  }
}

console.log(tree.map(item => {
  delete item.children;
  return item
}))


// let arr = [0]
// let arr1 = [1]
// arr = arr.concat(arr1)
// console.log(arr)