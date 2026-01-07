
import ProductInfo from '../components/features/ProductInfo'
import { useParams } from 'react-router-dom'

const EditProduct = () => {


  return (
    <div className='my-10'>
      <h2 className='font-bold text-xl mb-4 capitalize'>edit Product</h2>
      <ProductInfo  />
    </div>
  )
}

export default EditProduct

