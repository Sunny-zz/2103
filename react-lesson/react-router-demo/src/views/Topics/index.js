import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getTopics } from "../../api";
import TopicItem from "../../components/TopicItem";
import './topics.css'
export default function Topics() {
  const { pathname } = useLocation()
  const { tab } = useParams()
  const [topics, setTopics] = useState([])
  useEffect(() => {
    (async function () {
      const res = await getTopics(tab)
      setTopics(res.data)
    })()
  }, [tab])
  const contet = topics.length ? topics.map(topic => <TopicItem key={topic.id} {...topic} />) : '暂无文章'
  return (
    <div className="topics">
      <div className="topics-nav">
        <NavLink className={({ isActive }) => (isActive || pathname === '/') ? 'active' : ''} to='/all'>全部</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/good'>精华</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/share'>分享</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/ask'>问答</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/job'>招聘</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/dev'>客户端测试</NavLink>
      </div>
      <div className="list">
        {contet}
      </div>
    </div>
  )
}
