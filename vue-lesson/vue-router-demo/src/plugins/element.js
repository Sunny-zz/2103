import Vue from 'vue'
import { Breadcrumb, BreadcrumbItem, Button, Form, FormItem, Input, Message, Skeleton, SkeletonItem, Table, TableColumn, Tag } from 'element-ui'

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

Vue.prototype.$message = Message