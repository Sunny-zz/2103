import { Table, Tag, Space } from 'antd';

// 所有的列
const columns = [
  // 第一列
  {
    // 表头文字
    title: 'Name',
    // dataIndex 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 其实就是数据中展示的属性名
    dataIndex: 'name',
    // React 需要的 key
    key: 'name',
    // render 是渲染函数 决定单元格内展示内容, 如果不设置默认直接展示属性值
    // render 函数会接受三个参数  当前行的值，当前行数据，行索引
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function TableDemo (){
  // columns 是表格中的所有列 是一个数组 数组中的一项就是一列
  return <Table columns={columns} dataSource={data} pagination={false}/>
}