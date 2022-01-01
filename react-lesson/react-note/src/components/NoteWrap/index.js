// NoteWrap 组件
import './note-wrap.css'
import { Typography, Divider, Row } from 'antd'
import { useEffect, useState } from 'react'
import { getNotes } from '../../api'
import NoteItem from '../NoteItem'
import { PlusCircleOutlined } from '@ant-design/icons'
import NoteModal from '../NoteModal'
const { Title } = Typography
export default function NoteWrap() {
  const [notes, setNotes] = useState([])
  const [noteModalVisible, setNoteModalVisible] = useState(false)
  // 进入页面获取 note 列表
  useEffect(() => {
    async function get() {
      const res = await getNotes()
      setNotes(res)
    }
    get()
  }, [])
  const openModal = () => {
    setNoteModalVisible(true)
  }
  const closeModal = () => {
    setNoteModalVisible(false)
  }
  const notesList = notes.length ? notes.map(note => <NoteItem onClick={openModal} {...note} key={note.id} />) : '暂无便签内容'

  return (
    <div className='note-wrap'>
      <header>
        <Title level={3}>便签</Title>
      </header>
      <Divider></Divider>
      <main>
        <Row gutter={[16, 16]}>
          {notesList}
        </Row>
      </main>
      <PlusCircleOutlined onClick={openModal} className='add-note' />
      <NoteModal noteModalVisible={noteModalVisible}  />
    </div>
  )
}
