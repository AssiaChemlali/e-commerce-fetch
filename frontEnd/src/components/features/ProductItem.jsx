
import { Link } from "react-router"

const ProductItem = ({ product, deleteProduct }) => {

  const deleteProductHandler = (id) => {
    console.log("deleteProduct in producItemt")
    deleteProduct(id)
  }
  return (
    <tr className="bg-light border border-hover hover:bg-hover">
      <td className="table-col">
        <img src={product?.image} alt="" className="block w-10 h-10" />
      </td>
      <td className="table-col">{product?.id} - {product?.title}</td>
      <td className="table-col">{product?.category}</td>
      <td className="table-col">{product?.price.toFixed(2)} $</td>
      <td className="table-col flex items-center gap-2  justify-between  ">
        <Link
          to={`/products/${product.id}/edit`}
          className="text-green-500 ">Edit
        </Link>

        <Link
          onClick={() => deleteProductHandler(product?.id)}
          className="text-red-500 ">Delete
        </Link>
      </td>
    </tr>
  )
}

export default ProductItem
