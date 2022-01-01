import { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
// 控制 className 的一个方法
import { Table } from 'antd';

// VirtualTable 组件
function VirtualTable(props) {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);

  // 获取 Grid 组件控制滚动条
  const gridRef = useRef();

  // 创建一个 state 
  // 这个 state 相当于是一个 对象  {scrollLeft: null}
  // 当对这个 state 的 scrollLeft 属性修改的时候 会修改  Grid 组件的 scrollTo，其实就是修改 这个 state 的 scrollLeft 会滚动 Grid 的滚动条
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });

  // 重置 Grid 组件
  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };

  // 组件的生命周期， 当 tabelWidth 发生改变的时候 重置 Grid
  useEffect(() => resetVirtualGrid, [tableWidth]);

  // 虚拟列表
  const renderVirtualList = (rawData, { ref, onScroll }) => {
    // console.log(rawData)
    ref.current = connectObject;
    // 保证一直能获取到最新的 connectObject
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={columns.length}
        columnWidth={(index) => {
          const { width } = columns[index];
          return width
        }}
        height={300}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames('virtual-table-cell', {
              'virtual-table-cell-last': columnIndex === columns.length - 1,
            })}
            style={style}
          >
            {rawData[rowIndex][columns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        console.log(width)
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={columns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
} // Usage

// 所有的列
const columns = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'B',
    dataIndex: 'key',
    width: 100,
  },
  {
    title: 'C',
    dataIndex: 'key',
    width: 100,
  },
  {
    title: 'D',
    dataIndex: 'key',
    width: 100,
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200,
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100,
  },
];
const data = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({
    key,
  }),
);

export default function TableDemo1() {
  return (
    <VirtualTable
      columns={columns}
      dataSource={data}
      // Grid 的大小
      scroll={{
        y: 300,
        x: '100vw',
      }}
    />
  )
}


// 除了生命周期之外想要监听数据变化，可以在创建 state 的时候使用 Object.defineProperty 创建一个对象，利用存取描述符描述
// import ResizeObserver from 'rc-resize-observer'; 这个ResizeObserver组件可以捕获取窗口的话
// Array.from({
//   length: 100000,
// },
// (_, key) => ({
//   key,
// }),)  创建对象数组