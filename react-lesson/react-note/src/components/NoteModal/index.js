import { Modal, Form, Input, Select } from 'antd'
import { useEffect } from 'react'
import { addNote, editNote } from '../../api'
import './note-modal.css'
import moment from 'moment'
import isEqual from 'lodash/isEqual'
const { Option } = Select
const { TextArea } = Input
export default function NoteModal({ noteModalVisible, closeModal, initialValues, setNotes, notes }) {
  const [form] = Form.useForm()
  useEffect(() => {
    // 因为 对话框的消失是样式消失，所以 initialValues 第一次的展示了，那么无论后面怎么修改都不会显示新的 initialValues
    // 所以我们利用表单的 resetFields 方法进行了表单的重置， 会重新显示新的 initialValues
    // console.log(1111)
    form.resetFields()
  }, [initialValues, noteModalVisible])

  const onOk = () => {
    // 1. 编辑的确定   2.新增的确定
    const isEditing = Boolean(initialValues)
    // 获取输入的内容
    const noteInfo = form.getFieldsValue(true)
    // 获取表单的校验结果 两种方式 
    // 1. validateFields 表单的校验结果返回的是 promise
    const res = form.validateFields()
    // 2. 使用表单的 submit 直接做表单提交，如果成功会自动触发表单的 onFinish
    // form.submit()
    // 校验成功之后 才能执行添加或者编辑的操作
    res.then(async () => {
      if (isEditing) {
        // 编辑
        // 向后台发更新请求更新后端数据，然后更新前端
        const id = initialValues.id
        // 当没有真正修改内容的时候，并不需要发请求更新
        // const isAllNotChange = noteInfo.title === initialValues.title && noteInfo.type === initialValues.type && noteInfo.description === initialValues.description
        // noteInfo 与 initialValues 其实属性都相同，因为表单的初始数据就是 initialValues， 而 noteInfo 是根据表单获取的表单输入的值，只不过我们的表单只改了其中的三项(type title description)
        const isAllNotChange = isEqual(initialValues, noteInfo)
        if (!isAllNotChange) {
          const newNote = await editNote(id, { ...noteInfo, date: moment().format() })
          // console.log(newNote)
          // setNotes(notes.map(note => {
          //   if (note.id === id) {
          //     note = newNote
          //   }
          //   return note
          // }))
          setNotes(notes.map(note => note.id === id ? newNote : note))
        }
      } else {
        // 新增
        // 向后台发新增请求更新后端数据，然后更新前端
        // console.log(noteInfo)
        const newNote = await addNote({ ...noteInfo, date: moment().format() })
        setNotes([...notes, newNote])
      }
      closeModal()
    })

  }

  // const onFinish = async () => {
  //   // 1. 编辑的确定   2.新增的确定
  //   const isEditing = Boolean(initialValues)
  //   // 获取输入的内容
  //   const noteInfo = form.getFieldsValue(true)
  //   if (isEditing) {
  //     // 编辑
  //     // 向后台发更新请求更新后端数据，然后更新前端
  //     const id = initialValues.id
  //     // 当没有真正修改内容的时候，并不需要发请求更新
  //     // const isAllNotChange = noteInfo.title === initialValues.title && noteInfo.type === initialValues.type && noteInfo.description === initialValues.description
  //     // noteInfo 与 initialValues 其实属性都相同，因为表单的初始数据就是 initialValues， 而 noteInfo 是根据表单获取的表单输入的值，只不过我们的表单只改了其中的三项(type title description)
  //     const isAllNotChange = isEqual(initialValues, noteInfo)
  //     if (!isAllNotChange) {
  //       const newNote = await editNote(id, { ...noteInfo, date: moment().format() })
  //       // console.log(newNote)
  //       // setNotes(notes.map(note => {
  //       //   if (note.id === id) {
  //       //     note = newNote
  //       //   }
  //       //   return note
  //       // }))
  //       setNotes(notes.map(note => note.id === id ? newNote : note))
  //     }
  //   } else {
  //     // 新增
  //     // 向后台发新增请求更新后端数据，然后更新前端
  //     // console.log(noteInfo)
  //     const newNote = await addNote({ ...noteInfo, date: moment().format() })
  //     setNotes([...notes, newNote])
  //   }
  //   closeModal()
  // }

  return (
    <div className='note-modal'>
      <Modal onOk={onOk} forceRender={true} maskClosable={false} onCancel={closeModal} title={initialValues ? '便签详情(可编辑)' : '新增便签'} visible={noteModalVisible}>
        <Form form={form} initialValues={initialValues} requiredMark={false} validateTrigger="onBlur">
          <Form.Item name="title" label='标题' rules={[{ required: true, message: '不能为空' }]}>
            <Input bordered={false} placeholder='哈哈哈哈哈' />
          </Form.Item>
          <Form.Item name="type" label='类别' wrapperCol={{ span: 6 }}>
            <Select bordered={false}>
              <Option value="work">工作</Option>
              <Option value="study">学习</Option>
              <Option value="life">生活</Option>
              <Option value="game">娱乐</Option>
            </Select>
          </Form.Item>
          <Form.Item name="description">
            <TextArea autoSize={{ minRows: 4 }} className='description' rows={4}></TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
