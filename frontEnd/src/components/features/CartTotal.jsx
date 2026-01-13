import { useState,useMemo} from 'react'
import Button from '../common/Button'
import { Link } from 'react-router'

const CartTotal = ({ productsFullInfo }) => {

const [shippingPrice, setShippingPrice] = useState(0)

  const subTotal = useMemo(() => {
      return productsFullInfo.reduce((acc, item) => 
     acc + (item.price * item.quantity)
    , 0)
  },[productsFullInfo])


  const total=(subTotal + shippingPrice).toFixed(2)

  return (
    <div className="w-full lg:w-1/3 border border-hover shadow bg-light">
      <h1 className="bg-primary py-3 px-10 text-light font-semibold">Cart Totals</h1>

      <div className="px-10 py-5 flex  flex-col gap-5">
        {/* subtotal */}
        <div className='flex items-center  justify-between'>
          <span className='capitalize font-semibold'>SubTotal</span>
          <span className='text-base text-primary font-semibold'>$ {subTotal.toFixed(2)}</span>
        </div>

        {/* shipping */}
        <div className='flex  items-end  justify-between'>
          <div className="flex flex-col gap-3 ">
            <span className='capitalize font-bold '>
              Shipping
            </span>
            <label className="flex items-center gap-2 text-sm b">
              <input 
              type="radio" 
              name="shipping" 
              value="free" 
              checked={shippingPrice===0 }
              onChange={()=>setShippingPrice(0)} 
               />
              Free shipping
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input 
              type="radio" 
              name="shipping" 
              value="local"
              checked={shippingPrice===5 }
              onChange={()=>setShippingPrice(5)}  
               />
              Local pickup
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input 
              type="radio" 
              name="shipping" 
              value="flat" 
              checked={shippingPrice===10 } 
              onChange={()=>setShippingPrice(10)}
              />
              Flat rate
            </label>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span>$0</span>
            <span>$5</span>
            <span>$10</span>
          </div>
        </div>

        {/* shipping adress  */}
        <div className='flex items-center  justify-between'>
          <span className='capitalize text-sm'>shipping to Morocco</span>
          <Link to="" className='text-sm text-primary  underline'>Change adress</Link>
        </div>

        {/* Total */}
        <div className='flex items-center  justify-between'>
          <span className='capitalize font-semibold'>Total</span>
          <span className='text-base text-primary font-bold'>${total}</span>
        </div>

        <Button className="" type="submit">
          <Link to="/checkout" className='py-2'>Process To checkout</Link>
        </Button>
      </div>
    </div>
  )
}

export default CartTotal
