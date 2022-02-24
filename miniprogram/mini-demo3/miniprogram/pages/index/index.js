// index.js
// const app = getApp()
// const { envList } = require('../../envList.js');

// 获取 demo 环境下的数据库
const db = wx.cloud.database({
  env: 'demo-4g5rrdy7472ba29e'
})
// 获取 todos 集合
const todos = db.collection('todos')

Page({
  data: {
    todos: [],
    text: ''
  },
  async onLoad() {
    // 获取 todos 集合的所有数据
    // todos.get().then(res => {
    //   // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    //   // console.log(res.data)
    //   this.setData({
    //     todos: res.data
    //   })
    // })
    // 调用云函数
    const res = await wx.cloud.callFunction({
      // 云函数名称
      name: 'getTodos',
    })
    this.setData({
      todos: res.result.todos
    })
  },

  input(e){
    this.setData({
      text: e.detail.value
    })
  },

  change(e){
    const {isCompleted, _id} = e.target.dataset.item
    todos.doc(_id).update({
      data: {
        isCompleted: !isCompleted
      },
      success:  () => {
        this.setData({
          todos: this.data.todos.map(item => {
            if(item._id === _id){
              item.isCompleted = !isCompleted
            }
            return item
          })
        })
      }
    })
  },

  add(){
    const {text, todos} = this.data
    db.collection('todos').add({
      data: {
        text,
        isCompleted: false
      }
    })
    .then(res => {
      // console.log(res)
      this.setData({
        todos: [...todos, {text, isCompleted: false, _id: res._id}],
        text: ''
      })
    })
  },

  update(e) {
    // doc(数据的_id)
    const nowText = e.detail.value
    const { _id, text } = e.target.dataset.item
    if (nowText !== text) {
      todos.doc(_id).update({
        // data 传入需要局部更新的数据
        data: {
          text: nowText
        },
        success:  () => {
          // console.log(res)
          this.setData({
            todos: this.data.todos.map(item => {
              if(item._id === _id){
                item.text = nowText
              }
              return item
            })
          })
        }
      })
    }
  },

  del(e){
    const _id = e.target.dataset.id
    todos.doc(_id).remove({
      success: () => {
        // console.log(res.data)
        this.setData({
          todos: this.data.todos.filter(item => item._id !== _id )
        })
      }
    })
  },

  login(){
    wx.getUserProfile({
      desc: '用于注册会员资料', 
      success: (res) => {
        console.log(res)
      }
    })
  },

  getPhoneNumber(e){
    console.log(e)
  }
});