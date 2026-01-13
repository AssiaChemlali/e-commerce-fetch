
import CartItem from './CartItem'

const CartItemList = ({
  productsFullInfo,
  countQuantityHandler,
  deleteProductFromCartHandler
}) => {



  return (
     <tbody>
       {productsFullInfo?.map((product) => (
             <CartItem 
             key={product.id}
             product={product}
             countQuantityHandler={countQuantityHandler}
             deleteProductFromCartHandler={deleteProductFromCartHandler} />
            ))}
    </tbody>
  )
}

export default CartItemList
