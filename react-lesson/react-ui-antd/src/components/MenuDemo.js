import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
const { SubMenu } = Menu;
export default function MenuDemo() {

  const data = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];
  const [menus] = useState(data)

  const handleClick = e => {
    // 点击菜单的时候 e 参数里面 domEvent 才是我们之前认识的事件对象
    console.log('click ', e);
  };

  const getMenu = (menus) => {
    return menus.map(menu => (
      menu.children ? <SubMenu key={menu.key} title={menu.title}>
        {getMenu(menu.children)}
      </SubMenu> : <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
    ))
  }
  // 当需要优化的函数(getMenu)需要传递参数时，不能直接当做 useMemo 的第一个参数, 需要将该函数的调用(可以传参了)当成一个新函数的返回值，将新函数当成 useMemo 第一个参数
  const memoizedGetMenu = useMemo(() => getMenu(menus), [menus])

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {memoizedGetMenu}
    </Menu>
  );
}

