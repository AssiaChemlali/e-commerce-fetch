import { useEffect, useState, useMemo } from 'react'
import Heading from '../components/common/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/productsSlice'
import { removeFromCart, updateCartQuantity } from '../store/cart/cartSlice'
import Button from '../components/common/Button'
import { Link } from 'react-router'
import CartItemList from '../components/features/CartItemList'
import CartTotal from '../components/features/CartTotal'

const Cart = () => {

  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const productsFullInfo = useMemo(() => {
    return cart.flatMap((item) => {
      const product = products.find((p) => p.id === item.id
      )
      if (!product) return []
      return {
        id: item.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: item.quantity

      }
    }
    )
  }, [cart, products])


  const countQuantityHandler = (id, type, quantity) => {
    if (!cart) return

    if (type === "add") quantity++
    else quantity--

    if (quantity < 1) return

    dispatch(updateCartQuantity({ id, quantity }))
  }

  const deleteProductFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }


  return (
    <div className="mt-10">
      <Heading title="cart" />
      <div className="flex gap-5 flex-col lg:flex-row ">

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

       <CartTotal/>
      </div>
    </div>
  )
}

export default Cart
