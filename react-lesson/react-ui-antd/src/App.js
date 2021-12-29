
import './App.css';
import { Button, Divider, message } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import GridDemo from './components/GridDemo';
import MenuDemo from './components/MenuDemo';
import TreeDemo from './components/TreeDemo';
import TableDemo from './components/TabelDemo';
function App() {

  const tip = () => {
    // message.info('我就是一个简单的提示框', 0.5, () => {
    //   console.log('提示框关闭了')
    // })
    message.success({
      content: '成功了!!!',
      duration: 1,
      onClose() {
        console.log('弹窗关闭了')
      }
    })
  }

  return (
    <div className="App">
      <h2>hello antd</h2>
      <Button loading={true} ghost icon={<SearchOutlined />} size='large' type='primary'>我是一个按钮</Button>
      <Divider>分割线</Divider>
      <GridDemo />
      <Divider>分割线</Divider>
      <Button onClick={tip} ghost type='primary'>提示</Button>
      <Divider>分割线</Divider>
      <MenuDemo />
      <Divider>分割线</Divider>
      <TreeDemo />
      <Divider>分割线</Divider>
      <TableDemo />
    </div>
  );
}

export default App;
