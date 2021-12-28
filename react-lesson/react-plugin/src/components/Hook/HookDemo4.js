import { useMemo, useState } from "react"

const goodsArr = [
  { id: 1, goodsName: 'iphone1', goodsPrice: 10000 },
  { id: 2, goodsName: 'iphone2', goodsPrice: 20000 },
  { id: 3, goodsName: 'iphone3', goodsPrice: 15000 },
  { id: 4, goodsName: 'iphone4', goodsPrice: 30000 }
]
export default function HookDemo4() {
  const [goods, setGoods] = useState(goodsArr)
  const [title, setTitle] = useState('我是一个标题')
  console.log('组件函数执行了')
  const list = goods.map(ele => <div key={ele.id}>{ele.goodsName}-{ele.goodsPrice}</div> )
  const getTotal = () => {
    console.log('total 计算开始')
    return goods.reduce((res, ele)=> res+=ele.goodsPrice, 0).toFixed(2)
  }
  const total = useMemo(getTotal,[goods])
  // 这种计算属性并不会只会在 goods 发生改变的时候才会做计算，也就是说计算属性没有缓存，每次都重新计算
  // 我们可以使用 useMemo 来实现计算属性的单独计算
  // useMemo 的第一个参数必须是一个函数而且有返回值，这个返回值也会是 useMemo 的返回值
  // useMemo 的第二个参数是一个数组，该数组内写的内容是依赖项，也就是第一个参数的计算是依赖哪些数据的
  return (
    <div>
      <p>{title} <button onClick={()=> setTitle('修改了之后的标题')} >我是一个按钮可以修改标题</button> </p>
      {list}
      <p>总价: {total}</p>
    </div>
  )
}
