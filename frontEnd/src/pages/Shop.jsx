import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/products/productsSlice"

import ListProducts from "../components/features/ListProducts"
import Heading from "../components/common/Heading"
import Loading from "../components/common/Loading"
const Shop = () => {

  const { products, error, loading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <div className="mt-10">
      <Heading title="shop" />
      <Loading loading={loading} error={error} type="product">
        <ListProducts
          products={products}

        />
      </Loading>

    </div>
  )
}

export default Shop
