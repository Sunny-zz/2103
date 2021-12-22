// 文章的评论
import { Component } from 'react'
import './article-comment.css'
import CommentItem from './CommentItem'
export default class ArticleComment extends Component {
  state = {
    commentText: ''
  }

  setComment = (e) => {
    this.setState({
      commentText: e.target.value
    })
  }
  addComment = () => {
    const { commentText } = this.state
    // 我们的数据都是 Article 组件提供的，所以修改的话也需要直接修改 Article 组件的 article  state
    // article state 内的评论数组的格式如下 
    // [ { author: { avatar_url: '评论的用户头像'}, content: '评论的内容' , id: 'id'} ]
    // console.log('提交评论' + commentText)
    // 执行父组件传递的方法更新评论
    this.props.addComment({id: new Date().getTime(), content: commentText, author: {avatar_url: 'https://avatars.githubusercontent.com/u/30174970?v=4&s=120'}})
  }
  render = () => {
    const { replies } = this.props
    const { commentText } = this.state
    const commentList = replies.map(reply => <CommentItem author={reply.author} content={reply.content} key={reply.id} />)
    return (
      <div className='article-comment'>
        <div>
          <h4>评论</h4>
          <textarea value={commentText} onChange={this.setComment} ></textarea>
          <button onClick={this.addComment}>提交</button>
        </div>
        {
          // 为了避免 jsx 内的 js 操作太多，可以考虑将列表的制作写在 return 之外
          // replies.map(reply => <CommentItem author={reply.author} content={reply.content} key={reply.id} /> )
          replies.length ? commentList : <div>暂无评论</div>
        }
      </div>
    )
  }
}