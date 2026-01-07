import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {

  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch("http://localhost:4000/products")
    const data = await res.json()
    return data

  } catch (error) {
    return rejectWithValue(error)
  }
})




const initialState = {
  products: [],
  loading: false,
  error: null
}
const productsSice = createSlice({
  name: "products",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false,
        state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

  }
})

export default productsSice.reducer