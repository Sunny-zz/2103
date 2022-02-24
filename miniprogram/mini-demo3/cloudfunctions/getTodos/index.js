// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'demo-4g5rrdy7472ba29e'
})

const db = cloud.database()

const todos = db.collection('todos')
// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  // console.log(context)
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }

  const res = await todos.get()
  return {
    todos: res.data
  }
}