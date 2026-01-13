import ListProducts from "../components/features/ListProducts"
import Heading from "../components/common/Heading"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { fetchWishlist } from "../store/wishlist/wishlistSlice"
import { fetchProducts } from "../store/products/productsSlice"
import Button from "../components/common/Button"
import { Link } from "react-router"

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
      {wishlist.length > 0
        ? <ListProducts
          products={productsFullInfo}
        />
        : <div className='py-10 text-center '>
          <h1 className='text-2xl mb-5 font-bold'>There are no products on the Wishlist!
          </h1>
          <Button type="submit">
            <Link to="/shop">Return to shop</Link>
          </Button>
        </div>}

    </div>
  )
}

export default Wishlist
