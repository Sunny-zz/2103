import { Button,Table } from 'antd'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getUsers } from './store/actions';
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
      render: () => <>
        <Button type='primary'>编辑</Button>
        <Button danger type="primary">删除</Button>
      </>,
    },
  ];

  const data = useSelector(state => state.users)
  const dispatch = useDispatch()
  // console.log(data)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <div>
      <h2>hello  redux</h2>
      <Button type='primary'>按钮</Button>
      <Table rowKey='id' pagination={false} columns={columns} dataSource={data} />
    </div>
  )
}
