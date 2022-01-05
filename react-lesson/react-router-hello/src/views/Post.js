import { useParams, useNavigate, useLocation, useMatch } from 'react-router-dom'
export default function Post() {
  // 在路由组件中想要获取路由的相关信息的话
  // 可以使用路由的 hook 获取
  // useLocation(当前地址 地址对象内有一个 state 属性， 当使用 link 或者 navigate 跳转的时候可以传递 state)  
  // useParams（动态路由参数）   
  // useNavigate(跳转)

  const {postId} = useParams();
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <button onClick={() => navigate('/', {replace: true}) }>首页</button>
      <h4>我是{postId}文章详情组件</h4>
    </div>
  )
}
