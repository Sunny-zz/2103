import { message } from "antd"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

const NavigateTip = () => {
  console.log(11111)
  useEffect(() => {
    message.error({
      content: '没有登录，不能访问，请登录',
      duration: 1
    })
  }, [])
  return <Navigate to='/login' replace />
}

export default function RequireAuth({ children }) {
  const info = sessionStorage.getItem('info')
  return info ? children : <NavigateTip />
}
