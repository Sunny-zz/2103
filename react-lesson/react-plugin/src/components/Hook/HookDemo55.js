import useHookDemo from "../../customHooks/useHookDemo"
export default function HookDemo55() {
  const {count, setCount} = useHookDemo()
  return (
    <div>
      <button onClick={()=> setCount(200)}>修改</button>
      {count}
    </div>
  )
}
