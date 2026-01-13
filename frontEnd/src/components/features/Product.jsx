import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { likeToggle, fetchWishlist } from '../../store/wishlist/wishlistSlice';
import { FaHeart } from "react-icons/fa";
import { addToCart } from '../../store/cart/cartSlice';

import Button from "../common/Button"
const Product = ({ product }) => {

  const [isLiked, setIsLiked] = useState(false)
  const dispatch = useDispatch()
  const { wishlist } = useSelector(state => state.wishlist)

  const addToCartHandler = (id) => {
    dispatch(addToCart(id))
  }

  const likeToggleHandler = (id) => {
    setIsLiked(!isLiked)
    dispatch(likeToggle(id))


  }

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [dispatch, product.id])


  useEffect(() => {
    const islike = wishlist.some((item) => item.id === product.id)
    setIsLiked(islike)
  }, [wishlist, product.id])




  return (
    <div
      key={product.id}
      className="bg-light  shadow flex flex-col   relative rounded-md">
      <div className="bg-gray-300 w-full mx-auto flex flex-col  items-center justify-center py-5">

        <img src={product.image} alt="" className="object-contain w-50 h-50 " />

        <span className='bg-light w-8 h-8 rounded-full flex items-center justify-center absolute top-3 right-3 cursor-pointer' onClick={() => likeToggleHandler(product.id)}>
          {isLiked
            ? <FaHeart size={15} className='text-red-500' />
            : <CiHeart size={15} className='' />


          }


        </span>
      </div>

      <div className="p-5">
        <h3 className="text-sm  capitalize text-secondary mb-3">{product.category}</h3>
        <h1 className="my-2 font-bold text-lg text-primary">{product.id} - {product.title}</h1>

        <p className="mb-5">{product.price.toFixed(2)} $</p>
       
        <Button
          onClick={() => addToCartHandler(product.id)} 
          type="submit" >
          Add to cart
        </Button>
      </div>

    </div>
  )
}

export default Product
