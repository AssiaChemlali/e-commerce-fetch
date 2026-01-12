import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/products/productsSlice"

import ListProducts from "../components/features/ListProducts"
import Heading from "../components/common/Heading"

const Shop = () => {

  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  




  return (
    <div className="mt-10">
      <Heading title="shop"/>
      <ListProducts
        products={products}
        
      />
    </div>
  )
}

export default Shop
