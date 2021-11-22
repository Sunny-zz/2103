import Vue from 'vue'
import { Button, Input, Option, Rate, Select, Table, TableColumn, Tag, Message, Notification, Pagination, Loading, Dialog, Form, FormItem } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Rate)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)

Vue.use(Loading)

Vue.prototype.$message = Message
Vue.prototype.$notification = Notification

