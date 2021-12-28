
import useHookDemo from "../../customHooks/useHookDemo"
export default function HookDemo5() {
  const {count, setCount} = useHookDemo()
  return (
    <div>
      {count}
    </div>
  )
}
