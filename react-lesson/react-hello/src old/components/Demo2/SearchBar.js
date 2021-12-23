
export default function SearchBar(props) {

  const {isStocked, searchText, changeSearchText, changeisInStocked} = props

  const changeText = e => {
    changeSearchText(e.target.value)
  }

  const changeStock = () => {
    changeisInStocked()
  }
  return (
    <div className='search-bar'>
      <input value={searchText} onChange={changeText} type="text" />
      <br />
      <input onChange={changeStock} checked={isStocked} type="checkbox" />
      <label htmlFor="">Only show  products in stock</label>
      <hr />
    </div>
  )
}
