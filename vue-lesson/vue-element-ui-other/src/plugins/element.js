import Vue from 'vue'
import { Button, Checkbox, CheckboxGroup, Col, DatePicker, Dialog, Divider, Drawer, Form, FormItem, Input,  Option,  Pagination, Radio, RadioGroup, Row, Select, Skeleton, SkeletonItem, Switch, TimePicker, MessageBox, Notification, Tree } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
Vue.use(Drawer)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Divider)
Vue.use(Skeleton)
Vue.use(SkeletonItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Tree)
Vue.use(Row)
// 有些 element ui 的组件，使用的时候并不是直接当做标签来使用，而是当做方法去调用。那么想要将这个方法制作成全局的方法，可以使用 Vue.prototype  

// 项目内的全局属性 $messageBox  组件内可以使用  this.$messageBox  获取
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$notification = Notification