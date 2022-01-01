import { Modal, Form, Input, Select } from 'antd'
import './note-modal.css'
const { Option } = Select
const {TextArea} = Input
export default function NoteModal({noteModalVisible}) {
  return (
    <div className='note-modal'>
      <Modal  title='便签' visible={noteModalVisible}>
        <Form>
          <Form.Item label='标题'>
            <Input bordered={false} placeholder='哈哈哈哈哈' />
          </Form.Item>
          <Form.Item label='类别' wrapperCol={{span: 6}}>
            <Select bordered={false}>
              <Option value="work">工作</Option>
              <Option value="study">学习</Option>
              <Option value="life">生活</Option>
              <Option value="game">娱乐</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <TextArea autoSize={{minRows: 4}} className='description' rows={4}></TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
