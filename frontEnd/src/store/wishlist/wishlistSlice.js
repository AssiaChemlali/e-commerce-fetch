import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const likeToggle = createAsyncThunk("wishlist/likeToggle", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {

    const res = await fetch(`http://localhost:4000/wishlist/${id}`)
    if (res.ok) {
      await fetch(`http://localhost:4000/wishlist/${id}`, {
        method: "DELETE"
      })

      return { type: "remove", id }



    } else {
      const response = await fetch(`http://localhost:4000/wishlist`, {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" }
      })
      const data = await response.json()
      return { data, type: "add" }

    }
  } catch (error) {
    return rejectWithValue(error.message)
  }

})

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (userId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await fetch(`http://localhost:4000/wishlist?userId=${userId}`)
    if (!res.ok) {
      const text = await res.text()
      return rejectWithValue(text)
    }
    const data = await res.json()
    return data

  } catch (error) {
    return rejectWithValue(error)
  }



})
const initialState = {
  wishlist: [],
  user: {},
  loading: false,
  error: null
}
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(likeToggle.pending, (state) => {
      state.error = null
      state.loading = true
    }),
      builder.addCase(likeToggle.fulfilled, (state, action) => {
        const payload = action.payload

        if (payload.type === "add") {
          state.wishlist.push(payload.data)
        } else if (payload.type === "remove") {
          state.wishlist = state.wishlist.filter(item => item.id !== payload.id)
        }

        state.loading = false
      }),
      builder.addCase(likeToggle.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })

    // fetch wishlist
    builder.addCase(fetchWishlist.pending, (state) => {
      state.error = null
      state.loading = true
    }),
      builder.addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload
        state.loading = false
      }),
      builder.addCase(fetchWishlist.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }

})

export default wishlistSlice.reducer