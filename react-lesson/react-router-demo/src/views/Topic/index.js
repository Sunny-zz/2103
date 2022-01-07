import { Skeleton, Typography, Tag, Input, Button } from "antd"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTopic } from "../../api"
import { translateTab } from "../../untils"
import Moment from "react-moment"
import './topic.css'
import CommentItem from "../../components/CommentItem"

export default function Topic() {
  const [topic, setTopic] = useState({})
  const token = sessionStorage.getItem('token')
  const { id } = useParams()
  useEffect(() => {
    (async function () {
      const res = await getTopic(id, token)
      setTimeout(() => setTopic(res.data), 1000)
    })()
  }, [])

  // topic 是 null 的时候不能解构赋值
  const { title, top, good, create_at, author, visit_count, tab, content, is_collect, reply_count, replies } = topic

  return <div className="topic">
    {
      topic.title ? <>
        <div className="topic-header">
          <Typography.Title level={3}>
            {(top || good) ? <Tag color='#80bd01' >
              {translateTab(top, good)}
            </Tag> : ''} {title}
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: '12px' }} >
            <span>·</span> 发布于 <Moment fromNow>{create_at}</Moment> <span>·</span> 作者{author.loginname} <span>·</span> {visit_count}次浏览 <span>·</span> {translateTab(false, false, tab)}
            <Tag style={{ width: '50px', height: '30px', textAlign: 'center', lineHeight: '26px' }} color={is_collect ? '#ccc' : '#80bd01'}>{is_collect ? '取消收藏' : '收藏'}</Tag>
          </Typography.Paragraph>
        </div>
        <div className="topic-main">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className="topic-footer">
          <div className="comment-list">
            <div className="comment-list-head">
              <span>{reply_count} 回复</span>
            </div>
            {
              replies.length ? replies.map((reply, index) => <CommentItem key={reply.id} {...{ ...reply, index }} />) : '暂无评论'
            }
          </div>
          <div className="comment-box">
            <Input.TextArea autoSize={{minRows: 6, maxRows: 6}} />
            <Button type="primary">回复</Button>
          </div>
        </div>
      </> : <Skeleton
        paragraph={{ rows: 10 }}
        active ></Skeleton>
    }

  </div>

}
