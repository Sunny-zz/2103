export default (state = 0, action) => {
  const { type } = action
  // console.log(type)
  switch (type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    default:
      return state
  }
}