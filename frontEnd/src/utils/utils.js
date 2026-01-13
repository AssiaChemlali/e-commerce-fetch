import { useSelector } from "react-redux"


export const GetTotalCartQunatity = () => {
  const { cart } = useSelector(state => state?.cart)

  const totalQuantity = cart?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity
  }, 0)


  return totalQuantity


}

export const GetTotalWishlist = () => {
  const { wishlist } = useSelector(state => state?.wishlist)
  const totalQuantity = wishlist?.length
  return totalQuantity


}