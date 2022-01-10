// action 创建函数存储文件
export const increment = () => {
  return {
    type: 'increment'
  }
}

export const subtraction = () => {
  return {
    type: 'subtraction'
  }
}

export const change = (newCounter) => {
  return {
    type: 'change',
    newCounter
  }
}
// 如果修改 counter 需要发异步请求的话 需要将 action 创建函数写成 thunk 函数 需要 redux-thunk 中间件支持
export const initialCounter = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'initial',
      newCounter: 1000
    })
  }, 1000)
}
