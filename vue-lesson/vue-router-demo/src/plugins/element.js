import Vue from 'vue'
import { Breadcrumb, BreadcrumbItem, Button, Form, FormItem, Input, Message, Pagination, Skeleton, SkeletonItem, Table, TableColumn, Tag, Loading, Rate, Switch, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Skeleton)
Vue.use(SkeletonItem)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Loading)
Vue.use(Rate)
Vue.use(Switch)

// element ui 内的组件有三种
// 1. 正常直接写在页面上的组件 比如  button  table 等  
// 2. 使用方法调用后才会出现的 比如 message  等       Vue.prototype.$message = Message
// 3. 需要使用指令     Vue.use(Loading)    use 不仅可以导入组件，同样可以导入全局指令
Vue.prototype.$message = Message
Vue.prototype.$msgBox = MessageBox