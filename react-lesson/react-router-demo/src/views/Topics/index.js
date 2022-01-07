import { Pagination } from "antd";
import { useEffect, useState, useMemo } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getTopics } from "../../api";
import TopicItem from "../../components/TopicItem";
import './topics.css'
export default function Topics() {
  const { pathname } = useLocation()
  const { tab } = useParams()
  const [topics, setTopics] = useState([])
  const paginationInfo = [
    {
      tab: 'all',
      total: 640
    },
    {
      tab: 'good',
      total: 720
    },
    {
      tab: 'share',
      total: 360
    },
    {
      tab: 'ask',
      total: 280
    },
    {
      tab: 'job',
      total: 200
    },
    {
      tab: 'dev',
      total: 1160
    }
  ]
  // 用来判断组件时候是首次加载
  const [init, setInit] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(() => {
    (async function () {
      if (init) {
        const page = sessionStorage.getItem('page')
        setPage(page ? page * 1 : 1)
        const res = await getTopics(tab, page)
        setTopics(res.data)
        setInit(false)
      } else {
        setPage(1)
        sessionStorage.removeItem('page')
        const res = await getTopics(tab)
        setTopics(res.data)
      }
    })()
  }, [tab])
  const changePage = async (page) => {
    // console.log(page)
    setPage(page)
    const res = await getTopics(tab, page)
    setTopics(res.data)
    sessionStorage.setItem('page', page)
  }
  const contet = topics.length ? topics.map(topic => <TopicItem key={topic.id} {...topic} />) : '暂无文章'
  const totalNum = useMemo(() => paginationInfo.find(ele => tab ? (ele.tab === tab) : (ele.tab === 'all')).total, [tab])
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
      {/* 分页器 */}
      <Pagination current={page} onChange={changePage} showQuickJumper showSizeChanger={false} pageSize={40} total={totalNum} />
    </div>
  )
}
