
import Product from './Product'
const ListProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
        />
      ))}
    </div>
  )
}

export default ListProducts
