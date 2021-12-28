import { useEffect, useRef, useState } from "react"
// 利用 useRef 获取 dom 节点   其实和原来的 createRef 没区别
// 另外利用 useRef 也可以创建组件内的全局变量

export default function HookDemo3() {
  const [num, setNum] = useState(0)

  // 利用 useRef 的不变性，将 num 存储在了 ref 内，获取的时候直接获取 ref 的值就是最后的 state 的值
  const numRef = useRef(num)
  numRef.current = num

  const handleClick = () => {
    setNum(num + 1)
  }
 
  useEffect(() => {
    setTimeout(() => {
      // 在合并没有获取到最新的 num 而是获取的最初的 num 
      // 因为在 useEffect 内创建了异步函数(setTimeout  setInterval  Promise 等),
      // 那么就会形成闭包，内部函数内的变量获取的一直是最外层最初的值
      console.log(numRef.current)
    }, 5000)
  }, [])

  return (
    <div>
      <p>{num}</p>
      <button onClick={handleClick}>修改 num</button>
    </div>
  )
}

