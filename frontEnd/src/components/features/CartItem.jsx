
import { MdDelete } from "react-icons/md";
const CartItem = ({ product, countQuantityHandler, deleteProductFromCartHandler }) => {


  return (
    <tr key={product.id} className="bg-light border border-hover hover:bg-hover">
      <td className="table-col flex items-center gap-3">
        <img src={product?.image} alt="" className="block w-20 h-20 bg-background p-3 " />
        <p>{product.id}- {product?.title}</p>
      </td>


      <td className="table-col text-primary">{product?.price.toFixed(2)} $</td>

      <td className="table-col  ">
        <div className='capitalize flex gap-2'>
          <span 
          className='border w-5 h-5 rounded-full flex items-center justify-center cursor-pointer' 
          onClick={() => countQuantityHandler(product.id, "add", product.quantity)}>+</span>
          {product.quantity}
          <span 
          className='border w-5 h-5 rounded-full flex items-center justify-center cursor-pointer ' 
          onClick={() => countQuantityHandler(product.id, "remove", product.quantity)}> - </span>
        </div>


      </td>

      <td className="table-col capitalize">
        {(product?.price * product?.quantity).toFixed(2)} $
      </td>
      <td className="table-col capitalize">
        <MdDelete
          onClick={() => deleteProductFromCartHandler(product.id)}
          size={20}
          className='text-secondary cursor-pointer' />
      </td>


    </tr>
  )
}

export default CartItem
