
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { fetchWishlist } from "../store/wishlist/wishlistSlice"
import { fetchProducts } from "../store/products/productsSlice"


const useWishlist = () => {
   const { products } = useSelector(state => state.products)
  const  wishlist  = useSelector(state => state?.wishlist.wishlist)
  const dispatch = useDispatch()
const userId = useSelector(state => state.auth.user.userId)

  useEffect(() => {
    dispatch(fetchProducts())
    if (userId) {
    dispatch(fetchWishlist(userId))
  }
  }, [dispatch,userId])

  const productsFullInfo = useMemo(() => {
    return wishlist
      .map(item => products.find(p => p.id === item.id))
      .filter(Boolean)
      .map(product => ({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
      }))
  }, [wishlist, products])
  return {products,wishlist,productsFullInfo}
}

export default useWishlist
