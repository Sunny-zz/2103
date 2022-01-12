// Counter 组件
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, fetchCounter } from '../app/slices/counterSlice'

export default function Counter() {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCounter()).then(()=> {
      console.log('更新完毕了')
    })
  }, [])
  return (
    <div className="counter">
      <button >-</button>
      <span>{counter}</span>
      <button onClick={()=> dispatch(add())}>+</button>
    </div>
  )
}
