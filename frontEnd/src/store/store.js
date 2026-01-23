import { configureStore } from "@reduxjs/toolkit"
import products from "./products/productsSlice"
import auth from "./auth/authSlice"
import cart from './cart/cartSlice'
import wishlist from './wishlist/wishlistSlice'
import { persistStore, persistReducer,FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage" // uses localStorage


// const persistCongig = {
//   key: "root",
//   storage,
//   whitelist: ["user", "isLogIn"],
// }

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isLogIn"],
}
const persistedAuthReducer = persistReducer(authConfig, auth)


const cartConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
}
const persistedCartReducer = persistReducer(cartConfig, cart)

const store = configureStore({
  reducer: {
    products,
    auth: persistedAuthReducer,
    cart:persistedCartReducer,
    wishlist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })

})
const persistor = persistStore(store)
export { persistor, store }