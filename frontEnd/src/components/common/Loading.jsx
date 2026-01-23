import CartSkeleton from "../skeletons/CartSkeleton"
import ProductSkeleton from "../skeletons/ProductSkeleton"
import { memo } from "react"


const skeletonTypes = {
  cart: CartSkeleton,
  product: ProductSkeleton,

}


const Loading = memo(({ children, loading, error, type }) => {

  const Component = skeletonTypes[type]


  return (
    <div className='flex'>
      {
        loading
          ? <Component />

          : error
            ? <p className='text-red-500'>{error}</p>
            : children
      }
    </div>
  )
})

export default Loading

