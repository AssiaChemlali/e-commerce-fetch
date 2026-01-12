import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const logIn = createAsyncThunk("auth/logIn",
  async (user, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
      const res = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json;charset=UTF-8"
        }
      })
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }

)

export const register = createAsyncThunk("auth/register",
  async (user, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
      const res = await fetch(`http://localhost:4000/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      const data = await res.json()
      console.log(data)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }

)

const initialState = {
  user: { id: "1", isLogIn: true },
  loading: false,
  error: null,
  accessToken: null,


}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })

    //register
    builder.addCase(register.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })

  }

})
export default authSlice.reducer