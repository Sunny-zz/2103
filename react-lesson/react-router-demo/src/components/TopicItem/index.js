import { Tag, Image } from 'antd'
import { Link, useParams } from 'react-router-dom'
import Moment from 'react-moment'
import 'moment/locale/zh-cn'
import './topic-item.css'
import { translateTab } from '../../untils'
import { useMemo } from 'react'
export default function TopicItem({ title, author, visit_count, reply_count, tab, top, good, last_reply_at, id }) {
  const params = useParams()
  const isHasTabTag = useMemo(() => {
    return (top || params.tab === 'all' || params.tab === 'good' || params.tab === undefined)
  }, [top])
  const isTopOrGood = useMemo(() => top || good, [top, good])
  return (
    <div className="topic-item">
      <Image
        preview={false}
        width={40}
        src={author.avatar_url}
        placeholder={
          <div style={{ width: '40px', height: '40px', backgroundColor: '#ccc' }}></div>
        }
      />
      <div className="count">
        <span className='reply_count'>{reply_count}</span>
        <span>/</span>
        <span>{visit_count}</span>
      </div>
      {isHasTabTag && <Tag style={{ color: isTopOrGood ? '#fff' : '#999' }} color={isTopOrGood ? '#80bd01' : '#e5e5e5'}>{translateTab(top, good, tab)}</Tag>}
      <Link to={`/topic/${id}`}>{title}</Link>
      <Moment local fromNow>{last_reply_at}</Moment>
    </div>
  )
}
