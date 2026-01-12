import { configureStore } from "@reduxjs/toolkit"
import products from "./products/productsSlice"
import auth from "./auth/authSlice"
import cart from './cart/cartSlice'
import wishlist from './wishlist/wishlistSlice'
const store = configureStore({
  reducer: {
    products,
    auth,
    cart,
    wishlist
  }

})
export default store