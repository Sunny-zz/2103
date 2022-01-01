// react-window 案例
// 长列表的虚拟渲染
import { FixedSizeList as List } from 'react-window'
export default function ReactWindowDemo() {
  const data = Array.from(
    {
      length: 1000,
    },
    (_, key) => ({
      key
    }),
  );
  // console.log(data)
  const Row = ({ index ,style}) => (
    <div style={style}>row {data[index].key}</div>
  );
  return (
    <div>
      <List
        height={150}
        itemCount={data.length}
        itemSize={50}
        width={300}
        >
        {Row}
      </List >
    </div>
  )
}
