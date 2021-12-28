
import { useContext } from 'react'
import { Theme } from './HookDemo2'
export default function HookDemo22() {
  // useContext 其实就是简化了 Consumer 的写法
  const {themeColor,setThemeColor} = useContext(Theme)
  return (
    <div>
      <h4>我是子组件</h4>
      <p>{themeColor}</p>
      <button onClick={()=> setThemeColor('pink')}>修改父组件的 themeColor</button>
    </div>
  )
}
