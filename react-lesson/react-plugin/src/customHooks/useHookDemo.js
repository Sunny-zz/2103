// 一个自定义的 hook
// 这里面就是一个函数, 并不是组件
// 不需要返回节点，只需要返回组件内需要的内容

import { useEffect, useState } from "react"

const useHookDemo = () => {
  const [count,setCount] = useState(0)

  useEffect(()=> {
    setTimeout(() => {
      setCount(100)
    }, 500)
  }, [])

  return {count, setCount}
}

export default useHookDemo