import ListProducts from "../components/features/ListProducts"
import Heading from "../components/common/Heading"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { fetchWishlist } from "../store/wishlist/wishlistSlice"
import { fetchProducts } from "../store/products/productsSlice"

const Wishlist = () => {
  const { products } = useSelector(state => state.products)
  const { wishlist } = useSelector(state => state.wishlist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchWishlist())
  }, [dispatch])


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


  return (
    <div className="mt-10">
      <Heading title="Wishlist" />
      <ListProducts
        products={productsFullInfo}
      />
    </div>
  )
}

export default Wishlist
