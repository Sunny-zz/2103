

// 用户列表 reducer 
export default (state = [], action) => {
  const { type } = action
  // console.log(type)
  switch (type) {
    case 'getUsers':
      return action.payload
    case 'deleteUser':
      // 删除某一项 filter  
      return state.filter(user => user.id !== action.payload)
    case 'editUser':
      // 替换某一项  map
      return state.map(user => user.id === action.payload.id ? action.payload : user)
    case 'addUser': 
      // 新增一项 user
      return [...state, action.payload]
    default:
      return state
  }
}



