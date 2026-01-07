import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/products/productsSlice"
import { Link } from "react-router"
import ListProducts from "../components/features/ListProducts"
import Loading from '../components/common/Loading'
import Button from "../components/common/Button"

const Products = () => {
  const { products, loading, error } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className='my-10'>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold ">List of Products</h1>
        <Button type="button">
          <Link to="add">Add product</Link>
        </Button>
      
      </div>
      <Loading loading={loading} error={error}>
        <ListProducts data={products} />
      </Loading>



    </div>
  )
}

export default Products
