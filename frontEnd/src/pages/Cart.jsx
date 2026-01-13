
import Heading from '../components/common/Heading'
import CartItemList from '../components/features/CartItemList'
import CartTotal from '../components/features/CartTotal'
import Button from '../components/common/Button'
import { Link } from 'react-router'
import useCart from '../hooks/useCart'

const Cart = () => {
  const { productsFullInfo,
    deleteProductFromCartHandler,
    countQuantityHandler, cart, products } = useCart()


  return (
    <div className="mt-10">
      <Heading title="cart" />
      <div className="flex gap-5 flex-col lg:flex-row ">
        {cart.length > 0 && products.length > 0
          ? (
            <>
              <table className="w-full lg:w-2/3 border border-hover shadow">
                <thead className="bg-light">
                  <tr className="bg-light border border-hover ">
                    <th className="table-col">Product</th>
                    <th className="table-col">Price</th>
                    <th className="table-col">Quantity</th>
                    <th className="table-col">SubTotal</th>
                    <th className="table-col"></th>
                  </tr>
                </thead>

                <CartItemList
                  productsFullInfo={productsFullInfo}
                  countQuantityHandler={countQuantityHandler}
                  deleteProductFromCartHandler={deleteProductFromCartHandler}
                />

              </table>

              <CartTotal productsFullInfo={productsFullInfo} />
            </>
          )
          : <div className='py-10 text-center '>
            <h1 className='text-2xl mb-5 font-bold'>Your cart is currently empty!</h1>
            <Button type="submit">
              <Link to="/shop">Return to shop</Link>
            </Button>
          </div>
        }

      </div>
    </div>
  )
}

export default Cart
