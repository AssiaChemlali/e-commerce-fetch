import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch(`http://localhost:4000/cart`)
    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})


const initialState = {
  cart: [],
  loading: false,
  error: null
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload
      const index = state.cart.findIndex(item => item.id === id)
      if (state.cart[index]) {
        state.cart[index].quantity++
      } else {
        state.cart.push({ id, quantity: 1 })
      }


    },
    updateCartQuantity:(state,action)=>{
      const id = action.payload.id
      const index = state.cart.findIndex(item => item.id === id)
      state.cart[index].quantity=action.payload.quantity

    },
    removeFromCart:(state,action)=>{
      state.cart=state.cart.filter(item=>item.id!==action.payload)
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchCart.pending,(state)=>{
      state.loading=true
      state.error=null
    }),
    builder.addCase(fetchCart.fulfilled,(state,action)=>{
      state.loading=false
      state.cart=action.payload
    }),
    builder.addCase(fetchCart.rejected,(state,action)=>{
      state.loading=false
      state.error=action.payload
    })

  }
})
export const { addToCart, updateCartQuantity,removeFromCart } = cartSlice.actions

export default cartSlice.reducer