//  vue 的全局过滤器
import Vue from 'vue'
Vue.filter('translate', function (value) {
  // console.log(value)
  const newValue = value.toLocaleLowerCase()
  switch(newValue){
    case '': return '首页';
    case 'profile': return '个人中心';
    case 'editpost': return '编辑文章';
    case 'postlist': return '文章列表';
  }
})