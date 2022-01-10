// 用户 reducer 
export default (state = [], action) => {
  const {type} = action
  switch (type) {
    case 'getUsers' : 
      return action.payload
    default:
      return state
  }
}