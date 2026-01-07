
import { Link } from "react-router"
const ProductItem = ({ product }) => {
  return (
    <tr className="bg-light border border-hover hover:bg-hover">
      <td class="px-4 py-2">
        <img src={product?.image} alt="" className="block w-10 h-10" />
      </td>
      <td class="px-4 py-2">{product?.title}</td>
      <td class="px-4 py-2">{product?.category}</td>
      <td class="px-4 py-2">{product?.price.toFixed(2)} $</td>
      <td class="px-4 py-2 flex items-center gap-2 text-sm  ">
        <Link to="edit" className="text-accent ">Edit</Link>
        <Link className="text-accent " to="delete">Delete</Link>
      </td>
    </tr>
  )
}

export default ProductItem
