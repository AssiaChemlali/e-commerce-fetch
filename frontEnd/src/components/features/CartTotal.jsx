
import Button from '../common/Button'
import { Link } from 'react-router'
const CartTotal = () => {
  return (
    <div className="w-full lg:w-1/3 border border-hover shadow bg-light">
      <h1 className="bg-primary py-3 px-10 text-light font-semibold">Cart Totals</h1>


      {/* subtotal */}
      <div className='flex items-center py-5 px-10 justify-between'>
        <span className='capitalize font-semibold'>SubTotal</span>
        <span className='text-base text-primary font-semibold'>$360.00</span>
      </div>

      {/* shipping */}
      <div className='flex  items-end py-5 px-10 justify-between'>
        <div className="flex flex-col gap-3 ">
          <span className='capitalize font-bold '>
            Shipping
          </span>
          <label className="flex items-center gap-2 text-sm b">
            <input type="radio" name="shipping" value="free" />
            Free shipping
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="shipping" value="local" />
            Local pickup
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="shipping" value="flat" />
            Flat rate
          </label>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span>$0</span>
          <span>$10</span>
          <span>$20</span>
        </div>

      </div>

      {/* shipping adress  */}
      <div className='flex items-center py-5 px-10 justify-between'>
        <span className='capitalize text-sm'>shipping to Morocco</span>
        <Link to="" className='text-sm text-primary  underline'>Change adress</Link>
      </div>

      {/* Total */}
      <div className='flex items-center py-5 px-10 justify-between'>
        <span className='capitalize font-semibold'>Total</span>
        <span className='text-base text-primary font-bold'>$360.00</span>
      </div>

      <Button className="" type="submit">
        <Link>Process To checkout</Link>
      </Button>

    </div>
  )
}

export default CartTotal
