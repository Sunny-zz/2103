// Home 页面
import { Button, message } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './home.css'

export default function Home() {
  const userInfo = JSON.parse(sessionStorage.getItem('info'))
  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.removeItem('info')
    sessionStorage.removeItem('token')
    message.success({
      content: '退出成功',
      duration: 1
    })
    navigate('/login')
  }
  return (
    <div className="home">
      <header>
        <div className="container">
          <Link to='/'>
            <img width={140} src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" />
          </Link>

          <div className='info'>
            <img width={40} src={userInfo.avatar_url} alt="" />
            <Button onClick={logout} type="primary" >退出</Button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
