// NoteWrap 组件
import './note-wrap.css'
import { Typography, Row, Input, Divider } from 'antd'
import { useEffect, useMemo, useState } from 'react'
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
  // const [searchText, setSearchText] = useState('')
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
  const onSearch = (value) => {
    // setSearchText(value.trim())
    console.log(value)
  }
  // 根据 notes 以及 searchText 计算出来需要展示  note 数组
  // const showNotes = useMemo(() => notes.filter(note => note.title.includes(searchText)), [notes, searchText])

  const notesList = notes.length ? notes.map(note => <NoteItem onClick={() => noteClick(note)} {...note} key={note.id} />) : '暂无便签内容'

  const getMoreNotes = async () => {
    // console.log(11111)
    setPage(page + 1)
    const newNotes = await getNotes(page + 1)
    console.log(newNotes)
    setNotes([...notes, ...newNotes])
    if (newNotes.length < 9) {
      setHasMore(false)
    }
  }

  return (
    <div className='note-wrap'>
      <header>
        <Title level={3}>便签</Title>
        <Search style={{ width: '50%' }} placeholder="请输入标题关键字查询" onSearch={onSearch} enterButton />
      </header>
      <Divider></Divider>
      <main>
        <InfiniteScroll
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
        </InfiniteScroll>


      </main>

      <PlusCircleOutlined onClick={openModal} className='add-note' />
      <NoteModal notes={notes} setNotes={setNotes} initialValues={editNote} closeModal={closeModal} noteModalVisible={noteModalVisible} />
    </div>
  )
}
