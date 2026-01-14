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


export const getContries = async () => {
  try {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries")
    const data = await res.json()
    const countries = data.data.map(item => ({
      country: item.country,
      cities: item.cities
    }))


    return countries

  } catch (error) {
    console.log(error)
  }


}