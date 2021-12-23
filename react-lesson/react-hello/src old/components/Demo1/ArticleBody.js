// 文章主体内容
import { Component } from 'react'
import  './article-body.css'
export default class ArticleBody extends Component {
  render = () => {
    const {title, content, commentNum} = this.props
    return (
      <div className='article-body'>
        <h3>{title} <span >评论数: {commentNum} </span></h3>
        {/* 想要解析 html 字符串 需要使用 dangerouslySetInnerHTML 属性，该属性的值是一个对象，对象内的 __html 属性是 html 字符串的话会被解析到该元素内 */}
        <div dangerouslySetInnerHTML={{__html: content}} ></div>
      </div>
    )
  }
}  