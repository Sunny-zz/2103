
import axios from 'axios'
export const getUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/users')
  dispatch({type: 'getUsers', payload: res.data})
}
// 删除要删除某个用户需要传递 id 作为参数 参数写在最外层函数
export const delUser = id => async dispatch => {
  await axios.delete(`http://localhost:3008/users/${id}`)
  dispatch({type: 'deleteUser', payload: id})
}
// 修改 user 
export const editUserAction = (id, user, callback) => async dispatch => {
  const res = await axios.patch(`http://localhost:3008/users/${id}`, user)
  callback()
  dispatch({type: 'editUser', payload: res.data})
}
// 新增 user
export const addUser = (user, callback) => async dispatch => {
  const res = await axios.post(`http://localhost:3008/users`, user)
  callback()
  dispatch({type: 'addUser', payload: res.data})
}
export const addCounter = () => ({
  type: 'add'
}) 