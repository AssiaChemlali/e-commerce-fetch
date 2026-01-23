import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/productsSlice'
import { removeFromCart, updateCartQuantity } from '../store/cart/cartSlice'



const useCart = () => {

  const dispatch = useDispatch()
  const { cart, error, loading } = useSelector(state => state.cart)
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
    //  return ()=>{
    //       dispatch(productCleanUp())
    //     }
  }, [dispatch])

  const productsFullInfo = useMemo(() => {
    return cart
      .map(item => {
        const product = products.find(p => p.id === item.id)
        if (!product) return null
        return {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: item.quantity
        }
      }).filter(Boolean)
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
  return {
    productsFullInfo,
    deleteProductFromCartHandler,
    countQuantityHandler,
    cart,
    products,
    error, loading

  }
}

export default useCart
