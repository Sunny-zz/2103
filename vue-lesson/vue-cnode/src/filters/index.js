// 过滤器
import Vue from 'vue'
Vue.filter('transformTab', function (value) {
  if (!value) return ''
  // 双向的转化 汉字 <---> 英文
  const isEn = value.match(/[a-zA-Z]/)
  if (isEn) {
    switch (value) {
      case 'all': return '全部';
      case 'good': return '精华';
      case 'share': return '分享';
      case 'ask': return '问答';
      case 'job': return '招聘';
      case 'dev': return '客户端测试';
    }
  } else {
    switch (value) {
      case '全部': return 'all';
      case '精华': return 'good';
      case '分享': return 'share';
      case '问答': return 'ask';
      case '招聘': return 'job';
      case '客户端测试': return 'dev';
    }
  }
})