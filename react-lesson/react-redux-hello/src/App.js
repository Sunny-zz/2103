import { Button, Table, Modal, Input, Form, Spin } from 'antd'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react';
import { addCounter, delUser, getUsers, editUserAction, addUser } from './store/actions';
import isEqual from 'lodash/isEqual'
import users from './store/reducers/users';
export default function App() {
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: value => <p>{value.city + ',' + value.street}</p>
    },
    {
      title: 'Action',
      key: 'action',
      render: (value, recoder) => <>
        <Button onClick={() => handleEdit(recoder)} type='primary'>编辑</Button>
        <Button onClick={() => dispatch(delUser(recoder.id))} danger type="primary">删除</Button>
      </>,
    },
  ];

  const data = useSelector(state => state.users)
  const counter = useSelector(state => state.counter)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editUser, setEditUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  // console.log(data)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const handleEdit = user => {
    setIsModalVisible(true)
    setEditUser(user)
  }
  useEffect(() => {
    // 当 editUser 改变的时候并且弹窗是出现的时候重置弹窗数据展示
    if (isModalVisible) {
      form.resetFields()
    }
  }, [editUser, isModalVisible])
  const onFinish = (value) => {
    // console.log('表单的提交')
    // 当 editUser 不存在的时候就是新增 存在的时候就是更新
    if (editUser) {
      // 更新
      // 当表单提交的时候，并且校验成功之后才会执行 onFinish
      if (!isEqual(editUser, { ...value, id: editUser.id })) {
        setLoading(true)
        // 使用 dispatch 发 action
        dispatch(editUserAction(editUser.id, value, () => {
          setIsModalVisible(false)
          setLoading(false)
          setEditUser(null)
        }))
      } else {
        setIsModalVisible(false)
        setEditUser(null)
      }
    } else {
      // 新增
      setLoading(true)
      dispatch(addUser(value, () => {
        setIsModalVisible(false)
        setLoading(false)
      }))
    }
  }

  const handleAdd = () => {
    setIsModalVisible(true)
  }

  const onCancel = () => {
    setIsModalVisible(false)
    setEditUser(null)
  }
  const onSearch = (value) => {
    // console.log(value)
    setSearchText(value.trim())
  }
  const showUsers = useMemo(() => data.filter(user => user.username.includes(searchText)), [data, searchText])
  return (
    <div>
      <h2>hello  redux <span>{counter}</span></h2>
      <Button type='primary' onClick={() => dispatch(addCounter())} >按钮</Button>
      <Button type='primary' onClick={handleAdd}>添加新的 user</Button>
      <Input.Search style={{ width: '300px' }} enterButton onSearch={onSearch} />
      <Table rowKey='id' pagination={false} columns={columns} dataSource={showUsers} />
      <Modal
        title={editUser ? "修改用户数据" : '新增 user 数据'}
        visible={isModalVisible}
        onCancel={onCancel}
        footer={null}
      >
        <Spin spinning={loading}>
          <Form onFinish={onFinish} labelCol={{ span: 4 }} form={form} initialValues={editUser} >
            <Form.Item label="Username" name='username' >
              <Input />
            </Form.Item>
            <Form.Item label="city" name={['address', 'city']}>
              <Input />
            </Form.Item>
            <Form.Item label="street" name={['address', 'street']}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' type='primary'>确定</Button>
              <Button onClick={onCancel}>取消</Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </div>
  )
}
