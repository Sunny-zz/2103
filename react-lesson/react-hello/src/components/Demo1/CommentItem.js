// 单个评论组件
import { Component } from 'react'
export default class CommentItem extends Component {
  render = () => {
    const {author, content} = this.props
    return (
      <div style={{display: 'flex'}}>
        <img style={{width: '50px'}} src={author.avatar_url} alt="" />
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    )
  }
}