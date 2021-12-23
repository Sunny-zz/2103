import { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
export default class FilterableProductTable extends Component {
  state = {
    products: [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ],
    searchText: '',
    isInStocked: false
  }
  // 父组件定义修改 searchText 的方法
  changeSearchText = text => {
    this.setState({
      searchText: text
    })
  }
  // 父组件定义修改 isInStocked 的方法
  changeisInStocked = () => {
    this.setState({
      isInStocked: !this.state.isInStocked
    })
  }
  render = () => {
    const { products, searchText, isInStocked } = this.state
    // 根据筛选条件筛选出满足条件的列表数组
    const showProducts = products.filter(product =>  product.name.includes(searchText) && (isInStocked ? product.stocked : true) )

    return (
      <div className='filter-table' style={{ width: '300px', margin: '0 auto', border: '1px solid #ccc', padding: '10px' }}>
        <SearchBar
          searchText={searchText}
          isInStocked={isInStocked}
          changeSearchText={this.changeSearchText} changeisInStocked={this.changeisInStocked} />
        <ProductTable products={showProducts} />
      </div>
    )
  }
}