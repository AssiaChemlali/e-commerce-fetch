import React from 'react'
import Heading from '../components/common/Heading'
import { useForm } from "react-hook-form"
import Input from '../components/forms/Input'
import { Link } from 'react-router'
import Button from '../components/common/Button'

import { fetchProducts } from '../store/products/productsSlice'
fetchProducts
import useCart from '../hooks/useCart'
const Checkout = () => {


 const { productsFullInfo } = useCart()
 
  const { register, formState: { errors }, handleSubmit } = useForm()


  const onSubmit = (data) => {

  }
  return (
    <div className="mt-10">
      <Heading title="Checkout" />

      <div className=" flex gap-5 flex-col lg:flex-row ">

        <div className=' w-full lg:w-2/3  bg-light p-5'>
          <h1 className='text-2xl mb-5 font-semibold'>Billing Details</h1>
          <form
            type="submit"
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col'>

            <Input
              type="text"
              label="First Name"
              name="firstName"
              errors={errors}
              register={register}
              required={true}
              maxLength={2}

            />
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              errors={errors}
              register={register}
              required={true}
              maxLength={2}

            />
            <Input
              type="number"
              label="phone"
              name="phone"
              errors={errors}
              register={register}
              required={true}
              maxLength={2}

            />

          </form>
        </div>


        <div className="w-full lg:w-1/3  bg-light ">
          <div className="bg-primary p-5">
            <h1 className='text-light font-semibold capitalize'>Your order</h1>
          </div>
          <div className='p-5'>
            <h2 className='font-semibold mb-2'>Product</h2>
            <ul className='mb-5 flex flex-col '>

              {productsFullInfo.map((product) => (
                <li className='flex items-center  mb-5 gap-5 '>

                  <span className='relative '>
                     <span className='bg-secondary text-light rounded-full  w-5 h-5 flex  items-center  justify-center absolute -top-3 -right-3  text-sm'> {product.quantity}</span>
                    <img src={product.image} alt="" className='w-20 h-20 bg-background p-3 object-cover' />
                  </span>

                  <span className="">
                    <h6 className='font-medium text-sm'>{product.title}</h6>
                    <p className='font-medium text-sm'>${product.price}</p>
                  </span>

                  <span className='text-accent font-semibold ml-auto'>${
                    product.price * product.quantity}
                  </span>

                </li>

              ))}

            </ul>

            <Button type="submit">
              <Link to="/orders"> Place Order</Link>
            </Button>

          </div>


        </div>




      </div>
    </div>
  )
}

export default Checkout
