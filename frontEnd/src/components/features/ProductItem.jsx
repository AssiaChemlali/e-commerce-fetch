
import { Link } from "react-router"

const ProductItem = ({ product, deleteProduct }) => {

  const deleteProductHandler = (id) => {

    deleteProduct(id)
  }
  return (
    <tr className="bg-light border border-hover hover:bg-hover">
      <td className="table-col">
        <img src={product?.image} alt="" className="block w-15 h-15 border border-gray-200 p-2" />
      </td>
      <td className="table-col"> {product?.title}</td>
      <td className="table-col capitalize">{product?.category}</td>
      <td className="table-col">{product?.price.toFixed(2)} $</td>
      <td className="table-col flex items-center gap-2  justify-between  ">
        <Link
          to={`/products/${product.id}/edit`}
          className="text-green-500 mb-0">Edit
        </Link>

        <Link
          onClick={() => deleteProductHandler(product?.id)}
          className="text-red-500 mb-0">Delete
        </Link>
      </td>
    </tr>
  )
}

export default ProductItem
