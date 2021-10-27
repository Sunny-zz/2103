<template>
  <div class="todos">
    <TodoForm
      @changeAllStatus="changeAllStatus"
      @add-todo="addTodo"
      v-bind="todoStatus"
    />
    <TodoList
      :lists="showLists"
      @delTodo="delTodo"
      @changeDone="changeDone"
      @editTodo="editTodo"
    />
    <TodoFooter
      v-bind="todoStatus"
      @delComletedTodo="delComletedTodo"
      :filterType.sync="filterType"
    />
  </div>
</template>

<script>
import axios from 'axios'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
export default {
  data() {
    return {
      lists: [],
      filterType: 'all'
    }
  },
  computed: {
    // activeNum() {
    //   return  this.lists.filter(ele => !ele.done).length
    // },
    // isHasDone(){
    //   return  this.lists.some(ele => ele.done)
    // },
    // isAllCompleted(){
    //   return  this.lists.every(ele => ele.done)
    // },
    todoStatus(){
      const {lists} = this
      const activeNum = lists.filter(ele => !ele.done).length
      const allNum = lists.length
      return {
        allNum,
        activeNum,
        doneNum: allNum - activeNum
      }
    },
    showLists(){
      // 有的时候我的展示数组和 lists 一样
      // 展示未完成 筛选
      // 展示已完成 筛选
      // 因为计算不可以传递参数，所以想办法把参数弄到组件全局，
      const {filterType, lists} = this
      return filterType === 'all' ? lists : lists.filter(ele => filterType === 'completed' ? ele.done : !ele.done)
    }
  },
  components: {
    TodoForm,
    TodoList,
    TodoFooter
  },
  created () {
    axios.get('http://localhost:3008/todos').then(res =>{
      // console.log(res.data)
      this.lists = res.data 
    })
  },
  methods: {
    addTodo(todoText, id) {
      // 根据输入的内容修改数组
      // 给数组添加新的一项
      // 选择 push 
      // 创建一个 新的 对象
      // 格林威治时间   new Date().getTime() ---> 75173172543123
      this.lists.push({
        // id: new Date().getTime().toString(),
        id,
        todoText,
        done: false
      })
    },
    delTodo(id){
      // console.log('删除')
      // console.log(id)
      // const index = this.lists.findIndex(ele => id === ele.id)
      // this.lists.splice(index, 1)

      this.lists = this.lists.filter(ele => ele.id !== id)
    },
    getTodoById(id){
      return this.lists.find(ele => id === ele.id) 
    },
    changeDone(id){
      // console.log('祖先组件修改的 todo')
      // const currentTodo = this.lists.find(ele => id === ele.id) 

      // 当在vue组件的函数中想要执行另外一个函数 使用 this.其他的函数
      this.getTodoById(id).done = !this.getTodoById(id).done
    },
    delComletedTodo(){
      const checkedTodoIds = this.lists.reduce((res, ele) => {
        if(ele.done) res.push(ele.id)
        return res
      }, [])
      // console.log(checkedTodoIds)
      // axios.all([请求1, 请求2,....])
      // 我们自己的 json-server 一次发多个请求可能会蹦
      // ['id1', 'id2'] ==map》  [请求1,请求2]
      axios.all(checkedTodoIds.map(id => axios.delete(`http://localhost:3008/todos/${id}`))).then(() => {
        this.lists = this.lists.filter(ele => !ele.done)
      }) 
    },
    changeAllStatus(status){
      this.lists.forEach(ele => ele.done = status)
    },

    editTodo(id, text){
      //  const currentTodo = this.lists.find(ele => id === ele.id) 
      this.getTodoById(id).todoText = text
    }
  },
}
</script>

<style>
.todos {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
}
</style>