import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch("http://localhost:4000/products")
    const data = await res.json()
    return data

  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const insertPrduct = createAsyncThunk("products/insertProduct", async (product, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch("http://localhost:4000/products",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json;charset=UTF-8"
        }
      })

    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const deletePrduct = createAsyncThunk("products/deleteProduct", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    await fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE"
    })


    return id
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const getProduct = createAsyncThunk("products/getProduct", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch(`http://localhost:4000/products/${id}`)
    const data = await res.json()
    return data

  } catch (error) {
    return rejectWithValue(error.message)
  }
})


export const editProduct = createAsyncThunk("products/editProduct", async (product, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch(`http://localhost:4000/products/${product.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json;charset=UTF-8"
        }
      })

    const data = await res.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})


const initialState = {
  products: [],
  loading: false,
  error: null,
  product:null
}
const productsSice = createSlice({
  name: "products",
  initialState,
  reducers: {
     productCleanUp: (state) => {
      state.products = []
    },
    cleanProduct:(state)=>{
      state.product={}
    }

  },

  extraReducers: (builder) => {

    // FETCH PRODUCTS
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



    // INSERT PRODUCT
    builder.addCase(insertPrduct.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(insertPrduct.fulfilled, (state, action) => {
      state.loading = false,
        state.products.push(action.payload)
    })
    builder.addCase(insertPrduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })


    // EDIT PRODUCT
      builder.addCase(editProduct.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.loading = false,
        state.product=action.payload
    })
    builder.addCase(editProduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })



    // DELETE PRODUCTS
    builder.addCase(deletePrduct.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(deletePrduct.fulfilled, (state, action) => {
      state.loading = false
      state.products = state.products.filter(
        p => p.id !== action.payload
      )
    })
    builder.addCase(deletePrduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })



    // GET PRODUCT
     builder.addCase(getProduct.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false,
        state.product = action.payload
    })
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

  }
})

export const {cleanProduct,productCleanUp}=productsSice.actions
export default productsSice.reducer