import { useSelector} from "react-redux"
import { useMemo } from "react"

export const useTotalCartQuantity = () => {
  const cart = useSelector(state => state.cart.cart)

  return useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  )
}