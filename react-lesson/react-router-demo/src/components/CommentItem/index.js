import Moment from "react-moment";
import IconFont from "../../icons/other";
import './comment-item.css'

export default function CommentItem({ content, author, create_at, is_uped, index, ups }) {
  return (
    <div className="comment-item">
      <img width={40} src={author.avatar_url} alt="" />
      <div className="comment-content">
        <div>
          <span>{author.loginname} </span>
          <span>{index + 1}楼·<Moment fromNow>{create_at}</Moment></span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className="action">
        <IconFont type={is_uped ? "icon-dianzan_kuai" : "icon-31dianzan"} />
        <span>{ups.length? ups.length : ''}</span>
        <IconFont type="icon-yihuifu" />
      </div>
    </div>
  )
}
