// NoteWrap 组件
import './note-wrap.css'
import { Typography, Row, Input, Divider } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { getNotes } from '../../api'
import NoteItem from '../NoteItem'
import { PlusCircleOutlined } from '@ant-design/icons'
import NoteModal from '../NoteModal'
import InfiniteScroll from 'react-infinite-scroll-component';
const { Title } = Typography
const { Search } = Input
export default function NoteWrap() {
  const [notes, setNotes] = useState([])
  const [noteModalVisible, setNoteModalVisible] = useState(false)
  const [editNote, setEditNote] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const searchInput = useRef(null)
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
    setEditNote(null)
    setNoteModalVisible(false)
  }
  const noteClick = (note) => {
    openModal()
    setEditNote(note)
  }
  const onSearch = async (value) => {
    setHasMore(true)
    setPage(1)
    const newNotes = await getNotes(1, value.trim())
    if (newNotes.length < 9) {
      setHasMore(false)
    }
    setNotes(newNotes)
  }
  const notesList = notes.map(note => <NoteItem onClick={() => noteClick(note)} {...note} key={note.id} />)

  const getMoreNotes = async () => {
    setPage(page + 1)
    const searchText = searchInput.current.state.value?.trim()
    const newNotes = await getNotes(page + 1, searchText)
    setNotes([...notes, ...newNotes])
    if (newNotes.length < 9) {
      setHasMore(false)
    }
  }
  return (
    <div className='note-wrap'>
      <header>
        <Title level={3}>便签</Title>
        <Search ref={searchInput} style={{ width: '50%' }} placeholder="请输入标题关键字查询" onSearch={onSearch} enterButton />
      </header>
      <Divider></Divider>
      <main>
        {
          notes.length ? <InfiniteScroll
            scrollThreshold='30px'
            style={{ overflow: 'hidden', overflowY: 'auto' }}
            dataLength={notes.length}
            next={getMoreNotes}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center', padding: '20px 0 ' }}>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>到底了</b>
              </p>
            }
          >
            <Row gutter={[16, 16]}>
              {notesList}
            </Row>
          </InfiniteScroll> : '暂无内容'
        }
      </main>

      <PlusCircleOutlined onClick={openModal} className='add-note' />
      <NoteModal notes={notes} setNotes={setNotes} initialValues={editNote} closeModal={closeModal} noteModalVisible={noteModalVisible} />
    </div>
  )
}
