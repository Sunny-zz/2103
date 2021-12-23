import ProductCategoryItem from "./ProductCategoryItem";
import ProductItem from "./ProductItem";

export default function ProductTable(props) {

  const { products } = props
  // 计算出商品的类别数组
  // const productCategories = products.reduce((res, item)=> {
  //   !res.includes(item.category) && res.push(item.category)
  //   return res 
  // } , [])
  const productCategories = [...new Set(products.map(item => item.category))]
  // console.log(productCategories)
  // 根据商品类别数组 生成 多个商品列表
  const producTable = productCategories.map(category => <div key={category}>
    <ProductCategoryItem title={category} />
    {
      // <ProductItem  {...item}   />   {...item} 是将 item 对象下的所有属性全部传递给组件
      products.filter(product => product.category === category).map(item => <ProductItem  {...item} key={item.name} />)
    }
  </div>)

  return (
    <div className="product-table">
      <div style={{ display: 'flex' }}>
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      {producTable}
    </div>
  )
}
