// 整个文章组件
import { Component } from 'react'
import ArticleBody from './ArticleBody'
import ArticleComment from './ArticleComment'
import './acticle.css'
import axios from '../../plugins/axios'
export default class Article extends Component {
  state = {
    article: null,
  }

  async componentDidMount() {
    const res = await axios.get('/topic/60aeed641de2d9fb90d5a373')
    // console.log(res)
    this.setState({
      article: res.data
    })
  }
  // 父组件内定义添加评论的方法 传递给子组件执行，这样子组件就可以修改父组件的 state 了
  addComment = (newComment) => {
    const { article } = this.state
    this.setState({
      article: {...article, replies: [...article.replies, newComment]}
    })
  }

  render = () => {
    const { article } = this.state
    const commentNum = article ? article.replies.length : 0
    return (
      <div className='article'>
        {
          article ? <>
            <ArticleBody commentNum={commentNum} title={article.title} content={article.content}/>
            <ArticleComment addComment={this.addComment} replies={article.replies}/>
          </> : <div>请稍等。。。</div>
        }
      </div>
    )
  }
}