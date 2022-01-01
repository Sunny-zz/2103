import { Typography, Col, Tag } from 'antd'
import './note-item.css'
import Moment from 'react-moment'
const { Title, Paragraph } = Typography
export default function NoteItem({ description, type, title, date, onClick }) {
  return (
    <Col onClick={onClick} className="gutter-row note-item" xs={24} sm={12} md={8} >
      <div className='note'>
        <Title level={4}>{title}</Title>
        <p>类别: <Tag color='cyan'>{type}</Tag></p>
        <Paragraph>
          {description}
        </Paragraph>
        {/* 需要使用 moment 格式化 */}
        <Moment className='time' element="span" format="YYYY年MM月DD日 HH:mm">{date}</Moment>
      </div>
    </Col>
  )
}
