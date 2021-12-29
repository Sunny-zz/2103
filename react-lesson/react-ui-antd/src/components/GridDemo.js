import { Row, Col } from 'antd'
import { useState } from 'react'
import './grid-demo.css'
export default function GridDemo() {
  const [num,setNum] = useState(20)
  const colList = []
  // 1200px  xl 以上一行四个
  // 768px   md 以上一行三个 
  // 768px 以下 xs  sm 一行两个
  for (let i = 0; i < num; i++) {
    colList.push(
      <Col xs={12} sm={12} md={8}  xl={6} className='gutter-row' key={i}>
        <div className="col">col-{num}</div>
      </Col>
    )
  }
  return (
    <div className='grid-demo'>
      <Row gutter={[16, 16]} className='row' >
        {colList}
      </Row>
    </div>
  )
}
