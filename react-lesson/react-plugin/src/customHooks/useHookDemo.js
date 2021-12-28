// 一个自定义的 hook
// 这里面就是一个函数, 并不是组件

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