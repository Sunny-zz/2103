export default function ProductItem(props) {
  const {name, price, stocked} = props
  return (
    <div>
      <span style={{color: stocked ? '#000' : 'red'}}>{name}</span>
      <span>{price}</span>
    </div>
  )
}
