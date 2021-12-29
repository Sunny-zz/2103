import { useState } from 'react';
import { Typography, Tree, Button } from 'antd';

const { Title } = Typography;

export default function TreeDemo() {
  // treeData 不会被修改不需要定义成 state
  const treeData = [
    {
      name: '0-0',
      label: '0-0',
      list: [
        {
          name: '0-0-0',
          label: '0-0-0',
          list: [
            {
              name: '0-0-0-0',
              label: '0-0-0-0',
            },
            {
              name: '0-0-0-1',
              label: '0-0-0-1',
            },
            {
              name: '0-0-0-2',
              label: '0-0-0-2',
            },
          ],
        },
        {
          name: '0-0-1',
          label: '0-0-1',
          list: [
            {
              name: '0-0-1-0',
              label: '0-0-1-0',
            },
            {
              name: '0-0-1-1',
              label: '0-0-1-1',
            },
            {
              name: '0-0-1-2',
              label: '0-0-1-2',
            },
          ],
        },
        {
          name: '0-0-2',
          label: '0-0-2',
        },
      ],
    },
    {
      name: '0-1',
      label: '0-1',
      list: [
        {
          name: '0-1-0-0',
          label: '0-1-0-0',
        },
        {
          name: '0-1-0-1',
          label: '0-1-0-1',
        },
        {
          name: '0-1-0-2',
          label: '0-1-0-2',
        },
      ],
    },
    {
      name: '0-2',
      label: '0-2',
    },
  ];
  // expandedKeys （受控）展开指定的树节点根据节点的 key 当需要展开节点的时候就必须 使用 setExpandedKeys 修改 expandedKeys
  const [expandedKeys, setExpandedKeys] = useState(['0-0-0-0', '0-0-0-2', '0-0-1-0', '0-0-1-2', '0-2']);
  // checkedKeys（受控）选中复选框的树节点  点击复选框的时候就必须使用  setCheckedKeys 修改 checkedKeys
  const [checkedKeys, setCheckedKeys] = useState(['0-0-0-0', '0-0-0-2', '0-0-1-0', '0-0-1-2', '0-2']);
  // selectedKeys（受控）设置选中的树节点     控制背景高亮  当点击树节点的时候必须使用 setSelectedKeys 修改 selectedKeys
  const [selectedKeys, setSelectedKeys] = useState([]);
  // autoExpandParent 是否自动展开父节点
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  // 展开/收起节点时触发 的函数
  // 函数的第一个参数获取的是该节点下的所有可以展开的子节点
  const onExpand = (expandedKeysValue) => {
    // console.log('onExpand', expandedKeysValue); 
    // 如果已经将展开的节点当成受控的了(写成了 state)，那么当展开节点的时候如果不设置展开的节点的话，那么节点就不会展开
    // 所以需要使用 setExpandedKeys 修改 expandedKeys 才能正常展开
    setExpandedKeys(expandedKeysValue);
    // 当设置了父节点自动展开 autoExpandParent 为 true
    // 折叠的时候必须设置为 false 才会被折叠
    // 设置 autoExpandParent 为 true 主要是因为初始展示的时候自动展开父节点
    // 如果初始展示的时候无需自动展开父节点，那么就不需要设置 autoExpandParent 使用其默认值 false 即可
    autoExpandParent && setAutoExpandParent(false);
  };
  // 点击复选框触发  该函数的第一个参数获取的是 当前复选框的父级下的所有选中的子节点 key 数组，如果所有子节点都是被选中的，那么该数组内也会有父级的节点
  const onCheck = (checkedKeysValue) => {
    // console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  // 点击树节点触发 
  // 函数的第一个参数选中的节点 key 数组
  // 函数的第二个参数就是当前节点对象
  const onSelect = (selectedKeysValue) => {
    // console.log('onSelect', selectedKeysValue);
    setSelectedKeys(selectedKeysValue);
  };
  return (
    <div>
      <Title level={3}>树形控件的使用</Title>
      <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={treeData}
        // fieldNames	自定义节点 title、key、children 的字段
        fieldNames={{title:'name', key: 'label', children: 'list'}}
      />
      <Button onClick={() => console.log(checkedKeys)} type='primary'>提交</Button>
    </div>
  )
}







