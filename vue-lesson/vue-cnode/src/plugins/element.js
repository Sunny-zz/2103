import Vue from 'vue'
import { Avatar, Button, Skeleton, SkeletonItem, InfiniteScroll, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Skeleton)
Vue.use(SkeletonItem)
Vue.use(Avatar)
Vue.use(InfiniteScroll)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message
