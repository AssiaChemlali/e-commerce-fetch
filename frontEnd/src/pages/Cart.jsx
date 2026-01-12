import React, { useEffect, useState } from 'react'
import Heading from '../components/common/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/productsSlice'

const Cart = () => {
  const [productsFullInfo, setProductsFullInfo] = useState([])
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const { products } = useSelector(state => state.products)
 const [countQuantity, setCountQuantity] = useState(0)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  useEffect(() => {
    const newArray = cart.flatMap((item) => {
      const product = products.find((p) => p.id === item.id
      )
      if (!product) return []
      return {
        id: item.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: item.quantity

      }
      

    })
    setProductsFullInfo(newArray)
  }, [cart, products])

  return (
    <div className="mt-10">
      <Heading title="cart" />
      <div className="grid grid-cols-1 ">

        <table className="w-full border border-hover shadow">
          <thead className="bg-light">
            <tr className="bg-light border border-hover ">
              <th className="table-col">Product</th>
              <th className=" table-col">Price</th>
              <th className=" table-col">Quantity</th>
              <th className=" table-col">SubTotal</th>
            </tr>
          </thead>
          <tbody>
            {productsFullInfo?.map((product) => (
              <tr key={product.id} className="bg-light border border-hover hover:bg-hover">

                <td className="table-col flex items-center gap-3">

                  <img src={product?.image} alt="" className="block w-20 h-20 bg-background p-3 " />
                  <p> {product?.title}</p>
                </td>


                <td className="table-col text-primary">{product?.price.toFixed(2)} $</td>

                <td className="table-col  ">
                  <div className='capitalize flex gap-2'>
                    <span className='border w-5 h-5 rounded-full flex items-center justify-center cursor-pointer' onClick={()=>setCountQuantity(countQuantity+1)}>+</span>
                    {product.quantity}
                    <span className='border w-5 h-5 rounded-full flex items-center justify-center cursor-pointer ' onClick={()=>setCountQuantity(countQuantity-1)}> - </span>
                  </div>


                </td>

                <td className="table-col capitalize">
                  {(product?.price * product?.quantity).toFixed(2)} $
                </td>


              </tr>
            ))}
          </tbody>
        </table>



      </div>
    </div>
  )
}

export default Cart
