
import { createContext, useState } from "react"
import HookDemo22 from "./HookDemo22"
// export const {Provider, Consumer} = createContext('red')
export const Theme = createContext('red')
export default function HookDemo2() {
  const [themeColor, setThemeColor] = useState('red')
  return (
    <div>
      <h3>我是父组件的 themeColor: {themeColor}</h3>
      <button onClick={() => setThemeColor('blue')}>修改 themeColor</button>
      <Theme.Provider value={{themeColor, setThemeColor}}>
        <HookDemo22 />
      </Theme.Provider>
    </div>
  )
}
