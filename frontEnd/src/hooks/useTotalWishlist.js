import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchWishlist } from "../store/wishlist/wishlistSlice"


// Hook for total wishlist count
export const useTotalWishlist = () => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.auth.user?.id)
  const wishlist = useSelector(state => state.wishlist.wishlist)

  useEffect(() => {
    if (userId) {
      dispatch(fetchWishlist(userId))
    }
  }, [dispatch, userId])

  return wishlist?.length || 0
}