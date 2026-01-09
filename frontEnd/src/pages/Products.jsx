import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePrduct, fetchProducts } from "../store/products/productsSlice"
import { Link } from "react-router"
import ListProducts from "../components/features/ListProducts"
import Loading from '../components/common/Loading'
import Button from "../components/common/Button"
import WithGurad from "../utils/WithGurad"
const Products = () => {
  const { products, loading, error } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const deleteProduct = useCallback((id) => {
    dispatch(deletePrduct(id))
  },[])
 
  return (
    <div className='my-10 w-full'>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold ">List of Products</h1>
        <Button type="button">
          <Link to="add/">Add product</Link>
        </Button>

      </div>
      <Loading loading={loading} error={error} type="table">
        <ListProducts
          data={products}
          deleteProduct={deleteProduct}
        />
      </Loading>



    </div>
  )
}

export default WithGurad(Products)
